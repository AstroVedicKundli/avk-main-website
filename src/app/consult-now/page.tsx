"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

import {
  getConsultationAmountInr,
  validateStepOneDetails,
} from "@/lib/consultNow/pricing";
import type {
  BookingContactDetails,
  PaymentVerificationPayload,
  SlotOption,
} from "@/lib/consultNow/types";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

type ConfirmationPayload = {
  bookingId: string;
  amountInr: number;
  selectedDate: string;
  selectedSlot: { label: string };
  calendar?: { meetLink?: string; created?: boolean; reason?: string };
  whatsapp?: { sent?: boolean; reason?: string };
};

const stepLabels = ["Details", "Slot", "Payment"];

const defaultDetails: BookingContactDetails = {
  fullName: "",
  phoneNumber: "",
  email: "",
  whatsappNumber: "",
  consultationMode: "online",
  nationality: "indian",
};

function getTodayYmd(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function ConsultationPage() {
  const isRazorpayEnabled = process.env.NEXT_PUBLIC_ENABLE_RAZORPAY !== "false";
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState<BookingContactDetails>(defaultDetails);
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof BookingContactDetails, string>>
  >({});
  const [selectedDate, setSelectedDate] = useState(getTodayYmd());
  const [slots, setSlots] = useState<SlotOption[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedSlotId, setSelectedSlotId] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationPayload | null>(
    null
  );

  const amountInr = useMemo(
    () => getConsultationAmountInr(details.nationality),
    [details.nationality]
  );

  const selectedSlot = useMemo(
    () => slots.find((slot) => slot.id === selectedSlotId),
    [slots, selectedSlotId]
  );

  useEffect(() => {
    if (!sameAsPhone) {
      return;
    }
    setDetails((prev) => ({ ...prev, whatsappNumber: prev.phoneNumber }));
  }, [sameAsPhone, details.phoneNumber]);

  useEffect(() => {
    if (step !== 2) {
      return;
    }

    let ignore = false;
    const fetchSlots = async () => {
      setSlotsLoading(true);
      try {
        const response = await fetch(`/api/consult-now/slots?date=${selectedDate}`);
        const data = (await response.json()) as { slots?: SlotOption[] };
        if (!ignore) {
          const nextSlots = data.slots || [];
          setSlots(nextSlots);
          setSelectedSlotId((prevSelectedSlotId) =>
            nextSlots.some((slot) => slot.id === prevSelectedSlotId)
              ? prevSelectedSlotId
              : ""
          );
        }
      } catch {
        if (!ignore) {
          setSlots([]);
          setSelectedSlotId("");
        }
      } finally {
        if (!ignore) {
          setSlotsLoading(false);
        }
      }
    };

    void fetchSlots();
    return () => {
      ignore = true;
    };
  }, [selectedDate, step]);

  const onDetailsNext = () => {
    const validation = validateStepOneDetails(details);
    setFieldErrors(validation.errors);
    if (!validation.isValid) {
      return;
    }
    setStep(2);
  };

  const onSlotNext = () => {
    if (!selectedSlot) {
      setPaymentMessage("Please select an available slot to continue.");
      return;
    }
    setPaymentMessage("");
    setStep(3);
  };

  const onPayNow = async () => {
    if (!selectedSlot) {
      setPaymentMessage("Please select a slot before payment.");
      return;
    }
    if (!isRazorpayEnabled) {
      setPaymentLoading(true);
      setPaymentMessage("");

      try {
        const confirmResponse = await fetch("/api/consult-now/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            details,
            selectedDate,
            selectedSlot,
            payment: {
              razorpayOrderId: "TEST_ORDER_BYPASS",
              razorpayPaymentId: "TEST_PAYMENT_BYPASS",
            },
          }),
        });

        const confirmData = (await confirmResponse.json()) as ConfirmationPayload & {
          error?: string;
        };
        if (!confirmResponse.ok) {
          throw new Error(confirmData.error || "Booking confirmation failed.");
        }

        setConfirmation(confirmData);
        setPaymentMessage(
          "Test mode enabled: payment skipped and booking is confirmed."
        );
      } catch (error) {
        setPaymentMessage(
          error instanceof Error
            ? error.message
            : "Test-mode booking confirmation failed."
        );
      } finally {
        setPaymentLoading(false);
      }
      return;
    }

    if (!scriptReady || !window.Razorpay) {
      setPaymentMessage("Payment gateway is loading. Please try again.");
      return;
    }

    setPaymentLoading(true);
    setPaymentMessage("");

    try {
      const orderResponse = await fetch("/api/consult-now/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nationality: details.nationality }),
      });

      const orderData = (await orderResponse.json()) as {
        order?: { id: string; amount: number; currency: string };
        razorpayKeyId?: string;
        error?: string;
      };

      if (!orderResponse.ok || !orderData.order || !orderData.razorpayKeyId) {
        throw new Error(orderData.error || "Unable to create payment order.");
      }

      const options: Record<string, unknown> = {
        key: orderData.razorpayKeyId,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Astro Vedic Kundli",
        description: "One-on-one consultation with Astrologer Manish Aggarwal",
        order_id: orderData.order.id,
        prefill: {
          name: details.fullName,
          email: details.email,
          contact: details.phoneNumber,
        },
        theme: { color: "#7C1A1E" },
        handler: async (response: PaymentVerificationPayload) => {
          const verifyResponse = await fetch("/api/consult-now/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = (await verifyResponse.json()) as {
            verified?: boolean;
            error?: string;
          };
          if (!verifyResponse.ok || !verifyData.verified) {
            throw new Error(verifyData.error || "Payment verification failed.");
          }

          const confirmResponse = await fetch("/api/consult-now/confirm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              details,
              selectedDate,
              selectedSlot,
              payment: {
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
              },
            }),
          });

          const confirmData = (await confirmResponse.json()) as ConfirmationPayload & {
            error?: string;
          };
          if (!confirmResponse.ok) {
            throw new Error(
              confirmData.error || "Booking confirmation failed after payment."
            );
          }

          setConfirmation(confirmData);
          setPaymentMessage("Payment successful and booking is confirmed.");
        },
        modal: {
          ondismiss: () => setPaymentMessage("Payment was cancelled."),
        },
      };

      new window.Razorpay(options).open();
    } catch (error) {
      setPaymentMessage(
        error instanceof Error ? error.message : "Payment failed, please retry."
      );
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF3E4]">
      {isRazorpayEnabled && (
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          onLoad={() => setScriptReady(true)}
        />
      )}

      <div className="h-24" />
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#7C1A1E]/20 bg-[#FFF9EF] p-6 shadow-lg sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7C1A1E]/80">
            Consult Now
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#7C1A1E] sm:text-4xl">
            Book a 1:1 Consultation with Astrologer Manish Aggarwal
          </h1>
          <p className="mt-3 text-sm text-[#3D2A2B]/80 sm:text-base">
            Fill your details, select a slot, complete payment, and receive WhatsApp
            confirmation for your consultation.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl bg-[#F8ECDD] p-2">
            {stepLabels.map((label, index) => {
              const currentStep = index + 1;
              const isActive = step === currentStep;
              const isComplete = step > currentStep;

              return (
                <div
                  key={label}
                  className={`rounded-xl px-3 py-2 text-center text-xs font-semibold sm:text-sm ${
                    isActive
                      ? "bg-[#7C1A1E] text-white"
                      : isComplete
                        ? "bg-[#D9BFA6] text-[#4D2D2F]"
                        : "bg-transparent text-[#7C1A1E]/70"
                  }`}
                >
                  {currentStep}. {label}
                </div>
              );
            })}
          </div>

          {step === 1 && (
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm font-semibold text-[#572629]">
                  Full name *
                </span>
                <input
                  value={details.fullName}
                  onChange={(event) =>
                    setDetails((prev) => ({ ...prev, fullName: event.target.value }))
                  }
                  className="rounded-xl border border-[#7C1A1E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#7C1A1E] focus:ring-2 focus:ring-[#7C1A1E]/10"
                  placeholder="Enter full name"
                />
                {fieldErrors.fullName && (
                  <span className="text-xs text-[#A0122A]">{fieldErrors.fullName}</span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#572629]">
                  Phone number *
                </span>
                <input
                  value={details.phoneNumber}
                  onChange={(event) =>
                    setDetails((prev) => ({ ...prev, phoneNumber: event.target.value }))
                  }
                  className="rounded-xl border border-[#7C1A1E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#7C1A1E] focus:ring-2 focus:ring-[#7C1A1E]/10"
                  placeholder="Enter phone number"
                />
                {fieldErrors.phoneNumber && (
                  <span className="text-xs text-[#A0122A]">{fieldErrors.phoneNumber}</span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#572629]">
                  WhatsApp number *
                </span>
                <input
                  value={details.whatsappNumber}
                  onChange={(event) =>
                    setDetails((prev) => ({
                      ...prev,
                      whatsappNumber: event.target.value,
                    }))
                  }
                  disabled={sameAsPhone}
                  className="rounded-xl border border-[#7C1A1E]/20 bg-white px-4 py-3 text-sm outline-none disabled:bg-[#F5E9DA] focus:border-[#7C1A1E] focus:ring-2 focus:ring-[#7C1A1E]/10"
                  placeholder="Enter WhatsApp number"
                />
                <label className="mt-1 inline-flex items-center gap-2 text-xs text-[#572629]">
                  <input
                    type="checkbox"
                    checked={sameAsPhone}
                    onChange={(event) => setSameAsPhone(event.target.checked)}
                  />
                  Same as phone number
                </label>
                {fieldErrors.whatsappNumber && (
                  <span className="text-xs text-[#A0122A]">
                    {fieldErrors.whatsappNumber}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#572629]">
                  Consultation mode *
                </span>
                <select
                  value={details.consultationMode}
                  onChange={(event) =>
                    setDetails((prev) => ({
                      ...prev,
                      consultationMode: event.target.value as BookingContactDetails["consultationMode"],
                    }))
                  }
                  className="rounded-xl border border-[#7C1A1E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#7C1A1E] focus:ring-2 focus:ring-[#7C1A1E]/10"
                >
                  <option value="online">Online</option>
                  <option value="inPerson">In-person</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#572629]">Nationality *</span>
                <select
                  value={details.nationality}
                  onChange={(event) =>
                    setDetails((prev) => ({
                      ...prev,
                      nationality: event.target.value as BookingContactDetails["nationality"],
                    }))
                  }
                  className="rounded-xl border border-[#7C1A1E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#7C1A1E] focus:ring-2 focus:ring-[#7C1A1E]/10"
                >
                  <option value="indian">Indian</option>
                  <option value="overseas">Overseas</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#572629]">
                  Email {details.consultationMode === "online" ? "*" : "(optional)"}
                </span>
                <input
                  value={details.email}
                  onChange={(event) =>
                    setDetails((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="rounded-xl border border-[#7C1A1E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#7C1A1E] focus:ring-2 focus:ring-[#7C1A1E]/10"
                  placeholder="Enter email address"
                />
                {fieldErrors.email && (
                  <span className="text-xs text-[#A0122A]">{fieldErrors.email}</span>
                )}
              </label>

              <div className="rounded-2xl border border-[#7C1A1E]/20 bg-[#F8ECDD] p-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-wide text-[#7C1A1E]/70">
                  Consultation Price
                </p>
                <p className="mt-1 text-2xl font-bold text-[#7C1A1E]">Rs. {amountInr}</p>
              </div>

              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={onDetailsNext}
                  className="rounded-full bg-[#7C1A1E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#651316]"
                >
                  Continue to Slot Booking
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-[280px_1fr]">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#572629]">
                    Select consultation date
                  </span>
                  <input
                    type="date"
                    min={getTodayYmd()}
                    value={selectedDate}
                    onChange={(event) => setSelectedDate(event.target.value)}
                    className="rounded-xl border border-[#7C1A1E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#7C1A1E] focus:ring-2 focus:ring-[#7C1A1E]/10"
                  />
                </label>

                <div className="rounded-2xl border border-[#7C1A1E]/20 bg-white p-4">
                  <p className="text-sm font-semibold text-[#572629]">Available slots</p>
                  {slotsLoading ? (
                    <p className="mt-3 text-sm text-[#572629]/70">Loading slots...</p>
                  ) : slots.length === 0 ? (
                    <p className="mt-3 text-sm text-[#572629]/70">
                      No slots available for this date. Please choose another day.
                    </p>
                  ) : (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {slots.map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          disabled={!slot.available}
                          onClick={() => setSelectedSlotId(slot.id)}
                          className={`rounded-full border px-4 py-2 text-xs font-semibold sm:text-sm transition ${
                            !slot.available
                              ? "cursor-not-allowed border-[#A0122A]/30 bg-[#F9E1E5] text-[#A0122A]/80 line-through opacity-90"
                              : selectedSlotId === slot.id
                                ? "border-[#7C1A1E] bg-[#7C1A1E] text-white"
                                : "border-[#7C1A1E]/30 bg-[#FFF9EF] text-[#572629] hover:border-[#7C1A1E]/70 hover:bg-[#F8ECDD]"
                          }`}
                          title={slot.available ? "Available" : "Booked"}
                        >
                          {slot.label} {slot.available ? "" : " (Booked)"}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7C1A1E]/30 bg-[#FFF9EF] px-3 py-1 text-[#572629]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#7C1A1E]" />
                  Available slot
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#A0122A]/30 bg-[#F9E1E5] px-3 py-1 text-[#A0122A]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#A0122A]" />
                  Booked slot (not selectable)
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-full border border-[#7C1A1E]/30 px-5 py-2.5 text-sm font-semibold text-[#7C1A1E]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={onSlotNext}
                  className="rounded-full bg-[#7C1A1E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#651316]"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-[#7C1A1E]/20 bg-white p-5">
                <h2 className="text-lg font-bold text-[#7C1A1E]">Booking summary</h2>
                <div className="mt-3 grid gap-2 text-sm text-[#572629] sm:grid-cols-2">
                  <p>
                    <span className="font-semibold">Name:</span> {details.fullName}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> {details.phoneNumber}
                  </p>
                  <p>
                    <span className="font-semibold">Mode:</span>{" "}
                    {details.consultationMode === "online" ? "Online" : "In-person"}
                  </p>
                  <p>
                    <span className="font-semibold">Nationality:</span>{" "}
                    {details.nationality === "indian" ? "Indian" : "Overseas"}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span> {selectedDate}
                  </p>
                  <p>
                    <span className="font-semibold">Slot:</span>{" "}
                    {selectedSlot?.label || "Not selected"}
                  </p>
                </div>
                <div className="mt-4 rounded-xl bg-[#F8ECDD] p-4">
                  <p className="text-xs uppercase tracking-wide text-[#7C1A1E]/70">
                    Payable amount
                  </p>
                  <p className="text-2xl font-bold text-[#7C1A1E]">Rs. {amountInr}</p>
                </div>
                {!isRazorpayEnabled && (
                  <p className="mt-3 text-xs font-semibold text-[#7C1A1E]/80">
                    Razorpay is currently disabled (test mode). Clicking confirm will
                    skip payment and run calendar booking flow.
                  </p>
                )}
              </div>

              {confirmation ? (
                <div className="rounded-2xl border border-green-300 bg-green-50 p-5 text-sm text-green-900">
                  <p className="text-base font-bold">Booking confirmed</p>
                  <p className="mt-1">
                    Booking ID: <span className="font-semibold">{confirmation.bookingId}</span>
                  </p>
                  {confirmation.calendar?.meetLink && (
                    <p className="mt-1 break-all">
                      Google Meet:{" "}
                      <a
                        href={confirmation.calendar.meetLink}
                        className="font-semibold underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {confirmation.calendar.meetLink}
                      </a>
                    </p>
                  )}
                  <p className="mt-1">
                    WhatsApp status:{" "}
                    {confirmation.whatsapp?.sent
                      ? "Message sent"
                      : confirmation.whatsapp?.reason || "Not sent"}
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-full border border-[#7C1A1E]/30 px-5 py-2.5 text-sm font-semibold text-[#7C1A1E]"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={onPayNow}
                    disabled={paymentLoading}
                    className="rounded-full bg-[#7C1A1E] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#651316] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {paymentLoading
                      ? isRazorpayEnabled
                        ? "Preparing payment..."
                        : "Confirming booking..."
                      : isRazorpayEnabled
                        ? "Pay & Confirm Booking"
                        : "Confirm Booking (Test Mode)"}
                  </button>
                </div>
              )}

              {paymentMessage && (
                <p
                  className={`text-sm ${
                    paymentMessage.toLowerCase().includes("successful")
                      ? "text-green-700"
                      : "text-[#A0122A]"
                  }`}
                >
                  {paymentMessage}
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
