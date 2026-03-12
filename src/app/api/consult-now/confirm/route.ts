import crypto from "node:crypto";

import { NextResponse } from "next/server";

import { getConsultationAmountInr, validateStepOneDetails } from "@/lib/consultNow/pricing";
import type { BookingContactDetails, Nationality } from "@/lib/consultNow/types";
import { sendAisensyBookingConfirmation } from "@/lib/integrations/aisensy";
import {
  createCalendarEventForConsultation,
  isCalendarSlotAvailable,
} from "@/lib/integrations/googleCalendar";

type ConfirmRequest = {
  details?: Partial<BookingContactDetails>;
  selectedDate?: string;
  selectedSlot?: {
    label?: string;
    startIso?: string;
    endIso?: string;
  };
  payment?: {
    razorpayOrderId?: string;
    razorpayPaymentId?: string;
  };
};

function formatDateLabel(dateYmd: string): string {
  const date = new Date(`${dateYmd}T00:00:00+05:30`);
  if (Number.isNaN(date.valueOf())) {
    return dateYmd;
  }

  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConfirmRequest;
    const details = body.details || {};

    const detailValidation = validateStepOneDetails(details);
    if (!detailValidation.isValid) {
      return NextResponse.json(
        { error: "Invalid booking details.", errors: detailValidation.errors },
        { status: 400 }
      );
    }

    if (
      !body.selectedDate ||
      !body.selectedSlot?.label ||
      !body.selectedSlot.startIso ||
      !body.selectedSlot.endIso
    ) {
      return NextResponse.json(
        { error: "Slot date and slot timing are required." },
        { status: 400 }
      );
    }

    if (!body.payment?.razorpayOrderId || !body.payment?.razorpayPaymentId) {
      return NextResponse.json(
        { error: "Verified payment details are required." },
        { status: 400 }
      );
    }

    const nationality = details.nationality as Nationality;
    const amountInr = getConsultationAmountInr(nationality);
    const isSlotAvailable = await isCalendarSlotAvailable({
      startIso: body.selectedSlot.startIso,
      endIso: body.selectedSlot.endIso,
    });

    if (!isSlotAvailable) {
      return NextResponse.json(
        {
          error:
            "Selected slot is no longer available. Please choose another slot.",
        },
        { status: 409 }
      );
    }

    const calendarResult = await createCalendarEventForConsultation({
      fullName: details.fullName as string,
      phoneNumber: details.phoneNumber as string,
      email: details.email,
      consultationMode: details.consultationMode as BookingContactDetails["consultationMode"],
      startIso: body.selectedSlot.startIso,
      endIso: body.selectedSlot.endIso,
    });

    const isWhatsappEnabled = process.env.ENABLE_AISENSY_WHATSAPP === "true";
    const whatsappResult = isWhatsappEnabled
      ? await sendAisensyBookingConfirmation({
          fullName: details.fullName as string,
          whatsappNumber: details.whatsappNumber as string,
          consultationMode: details.consultationMode as BookingContactDetails["consultationMode"],
          dateLabel: formatDateLabel(body.selectedDate),
          slotLabel: body.selectedSlot.label,
          amountInr,
          meetLink: calendarResult.meetLink,
        })
      : {
          sent: false,
          reason: "AiSensy WhatsApp integration is disabled.",
        };

    const bookingId = `CN-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

    return NextResponse.json({
      bookingId,
      amountInr,
      consultationMode: details.consultationMode,
      selectedDate: body.selectedDate,
      selectedSlot: body.selectedSlot,
      payment: {
        razorpayOrderId: body.payment.razorpayOrderId,
        razorpayPaymentId: body.payment.razorpayPaymentId,
        status: "paid",
      },
      calendar: calendarResult,
      whatsapp: whatsappResult,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to confirm consultation.",
      },
      { status: 500 }
    );
  }
}
