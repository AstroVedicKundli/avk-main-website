import crypto from "node:crypto";

import { NextResponse } from "next/server";

import type { KundliLanguage, KundliPlan } from "@/lib/integrations/aisensy";
import { sendAisensyKundliConfirmation } from "@/lib/integrations/aisensy";
import { DETAILED_KUNDLI_AMOUNT_INR } from "@/lib/kundli/pricing";
import { verifyRazorpaySignature } from "@/lib/integrations/razorpay";

type KundliConfirmRequest = {
  plan: KundliPlan;
  language: KundliLanguage;
  fullName: string;
  phone: string;
  email?: string;
  dob: string;
  timeOfBirth: string;
  city: string;
  state: string;
  country: string;
  /** Required for detailed (paid) plan */
  payment?: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  };
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as KundliConfirmRequest;

    // ── Basic validation ──────────────────────────────────────────────────────
    if (!body.plan || !["basic", "detailed"].includes(body.plan)) {
      return NextResponse.json({ error: "Invalid plan." }, { status: 400 });
    }
    if (!body.language || !["hindi", "english"].includes(body.language)) {
      return NextResponse.json({ error: "Invalid language." }, { status: 400 });
    }
    if (!body.fullName?.trim()) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }
    if (!body.phone?.trim()) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    if (!body.dob || !body.timeOfBirth || !body.city?.trim() || !body.state?.trim() || !body.country?.trim()) {
      return NextResponse.json({ error: "All birth details are required." }, { status: 400 });
    }

    // ── Payment verification (detailed only) ──────────────────────────────────
    if (body.plan === "detailed") {
      if (
        !body.payment?.razorpay_order_id ||
        !body.payment?.razorpay_payment_id ||
        !body.payment?.razorpay_signature
      ) {
        return NextResponse.json(
          { error: "Payment details are required for detailed kundli." },
          { status: 400 }
        );
      }

      const verified = verifyRazorpaySignature({
        orderId: body.payment.razorpay_order_id,
        paymentId: body.payment.razorpay_payment_id,
        signature: body.payment.razorpay_signature,
      });

      if (!verified) {
        return NextResponse.json(
          { error: "Payment verification failed. Please contact support." },
          { status: 400 }
        );
      }
    }

    // ── WhatsApp confirmation ─────────────────────────────────────────────────
    const isWhatsappEnabled = process.env.ENABLE_AISENSY_WHATSAPP === "true";

    const whatsappResult = isWhatsappEnabled
      ? await sendAisensyKundliConfirmation({
          fullName: body.fullName.trim(),
          whatsappNumber: body.phone.trim(),
          plan: body.plan,
          language: body.language,
          amountPaid: body.plan === "detailed" ? DETAILED_KUNDLI_AMOUNT_INR : undefined,
        })
      : { sent: false, reason: "AiSensy WhatsApp integration is disabled." };

    const requestId = `KN-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

    return NextResponse.json({
      requestId,
      plan: body.plan,
      language: body.language,
      whatsapp: whatsappResult,
      ...(body.plan === "detailed" && {
        payment: {
          razorpayOrderId: body.payment!.razorpay_order_id,
          razorpayPaymentId: body.payment!.razorpay_payment_id,
          amountInr: DETAILED_KUNDLI_AMOUNT_INR,
          status: "paid",
        },
      }),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to confirm kundli request.",
      },
      { status: 500 }
    );
  }
}
