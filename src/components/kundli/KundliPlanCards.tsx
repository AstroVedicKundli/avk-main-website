"use client";

import Script from "next/script";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import type { PaymentVerificationPayload } from "@/lib/consultNow/types";
import { DETAILED_KUNDLI_AMOUNT_INR } from "@/lib/kundli/pricing";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

export type KundliPlan = "basic" | "detailed";

type KundliPlanCardsProps = {
  basicFeatures: string[];
  detailedFeatures: string[];
};

type Step1Values = {
  fullName: string;
  email: string;
  phone: string;
};

type Step2Values = {
  dob: string;
  timeOfBirth: string;
  city: string;
  state: string;
  country: string;
};

type KundliLanguage = "hindi" | "english";

const emptyStep1: Step1Values = {
  fullName: "",
  email: "",
  phone: "",
};

const emptyStep2: Step2Values = {
  dob: "",
  timeOfBirth: "",
  city: "",
  state: "",
  country: "",
};

function planLabel(plan: KundliPlan): string {
  return plan === "basic" ? "Basic Kundli · Free" : "Detailed Kundli · ₹99";
}

export default function KundliPlanCards({
  basicFeatures,
  detailedFeatures,
}: KundliPlanCardsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const paymentSucceededRef = useRef(false);
  const suppressResetOnCloseRef = useRef(false);
  const titleId = useId();
  const descId = useId();

  const [plan, setPlan] = useState<KundliPlan>("basic");
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [step1, setStep1] = useState<Step1Values>(emptyStep1);
  const [step2, setStep2] = useState<Step2Values>(emptyStep2);
  const [kundliLanguage, setKundliLanguage] = useState<KundliLanguage | "">("");
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");

  const isRazorpayEnabled = process.env.NEXT_PUBLIC_ENABLE_RAZORPAY !== "false";

  const resetForm = useCallback(() => {
    setStep(1);
    setStep1(emptyStep1);
    setStep2(emptyStep2);
    setKundliLanguage("");
    setErrors({});
    setPaymentMessage("");
    setPaymentLoading(false);
    paymentSucceededRef.current = false;
  }, []);


  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleDialogClose = useCallback(() => {
    if (suppressResetOnCloseRef.current) {
      suppressResetOnCloseRef.current = false;
      return;
    }
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    const onClose = () => handleDialogClose();
    node.addEventListener("close", onClose);
    return () => node.removeEventListener("close", onClose);
  }, [handleDialogClose]);

  const openForPlan = (nextPlan: KundliPlan) => {
    resetForm();
    setPlan(nextPlan);
    dialogRef.current?.showModal();
  };

  const validateStep1 = (): boolean => {
    const next: Partial<Record<string, string>> = {};
    const name = step1.fullName.trim();
    if (name.length < 2) next.fullName = "Please enter your full name.";
    const email = step1.email.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address, or leave this field blank.";
    }
    const phoneDigits = step1.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      next.phone = "Enter a valid phone number (at least 10 digits).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validateStep2 = (): boolean => {
    const next: Partial<Record<string, string>> = {};
    if (!step2.dob) next.dob = "Date of birth is required.";
    if (!step2.timeOfBirth) next.timeOfBirth = "Time of birth is required.";
    if (!step2.city.trim()) next.city = "City is required.";
    if (!step2.state.trim()) next.state = "State is required.";
    if (!step2.country.trim()) next.country = "Country is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const validateStep3 = (): boolean => {
    if (!kundliLanguage) {
      setErrors({ language: "Please choose Hindi or English for your kundli." });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleStep2Continue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    setErrors({});
    setStep(3);
  };

  const buildConfirmPayload = (extra?: Record<string, unknown>) => ({
    plan,
    language: kundliLanguage,
    fullName: step1.fullName.trim(),
    phone: step1.phone.trim(),
    email: step1.email.trim() || undefined,
    dob: step2.dob,
    timeOfBirth: step2.timeOfBirth,
    city: step2.city.trim(),
    state: step2.state.trim(),
    country: step2.country.trim(),
    ...extra,
  });

  const completeBasicRequest = async () => {
    if (!validateStep3()) return;
    setPaymentMessage("");
    setPaymentLoading(true);
    try {
      await fetch("/api/kundli/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildConfirmPayload()),
      });
    } catch {
      // Non-blocking — WhatsApp failure should not block the success screen
    } finally {
      setPaymentLoading(false);
    }
    setStep(4);
  };

  const handlePayNowDetailed = async () => {
    if (!validateStep3()) return;
    setPaymentMessage("");
    paymentSucceededRef.current = false;

    if (!isRazorpayEnabled) {
      setPaymentLoading(true);
      try {
        setStep(4);
        setPaymentMessage("");
      } finally {
        setPaymentLoading(false);
      }
      return;
    }

    if (!window.Razorpay) {
      setPaymentMessage("Payment gateway is loading. Please try again in a moment.");
      return;
    }

    setPaymentLoading(true);

    let orderData: {
      order?: { id: string; amount: number; currency: string };
      razorpayKeyId?: string;
      error?: string;
    } = {};

    try {
      const orderResponse = await fetch("/api/kundli/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      orderData = (await orderResponse.json()) as typeof orderData;

      if (!orderResponse.ok || !orderData.order || !orderData.razorpayKeyId) {
        throw new Error(orderData.error || "Unable to create payment order.");
      }
    } catch (error) {
      setPaymentMessage(
        error instanceof Error ? error.message : "Payment failed. Please try again."
      );
      setPaymentLoading(false);
      return;
    }

    // Close our dialog BEFORE opening Razorpay so it doesn't sit behind the
    // browser's top-layer stacking context that <dialog> creates.
    // We reopen it once Razorpay is done (success or dismiss).
    suppressResetOnCloseRef.current = true;
    dialogRef.current?.close();

    const options: Record<string, unknown> = {
      key: orderData.razorpayKeyId,
      amount: orderData.order!.amount,
      currency: orderData.order!.currency,
      name: "Astro Vedic Kundli",
      description: `Detailed Kundli · ₹${DETAILED_KUNDLI_AMOUNT_INR}`,
      order_id: orderData.order!.id,
      prefill: {
        name: step1.fullName.trim(),
        email: step1.email.trim() || undefined,
        contact: step1.phone.trim(),
      },
      theme: { color: "#B91C2E" },
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
          // Reopen dialog and show error
          setPaymentMessage(verifyData.error || "Payment verification failed.");
          dialogRef.current?.showModal();
          return;
        }

        // Payment verified — call confirm to trigger WhatsApp notification
        try {
          await fetch("/api/kundli/confirm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
              buildConfirmPayload({
                payment: {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                },
              })
            ),
          });
        } catch {
          // Non-blocking — WhatsApp failure should not block the success screen
        }

        paymentSucceededRef.current = true;
        setPaymentMessage("");
        setStep(4);
        // Reopen dialog to show success screen
        dialogRef.current?.showModal();
      },
      modal: {
        ondismiss: () => {
          if (paymentSucceededRef.current) return;
          // Reopen dialog so user can retry or go back
          setPaymentMessage("Payment was cancelled. You can try again.");
          dialogRef.current?.showModal();
        },
      },
    };

    setPaymentLoading(false);
    new window.Razorpay(options).open();
  };

  const inputClass =
    "w-full rounded-xl border border-[#333355]/15 bg-white px-4 py-3 text-sm text-[#333355] shadow-sm placeholder:text-[#333355]/35 transition-colors focus:border-[#B91C2E] focus:outline-none focus:ring-2 focus:ring-[#B91C2E]/20";

  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#333355]/75";

  return (
    <>
      {isRazorpayEnabled && (
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
          onLoad={() => {/* script ready — checked via window.Razorpay */}}
        />
      )}

      <div className="grid gap-8 md:grid-cols-2 md:gap-10 items-stretch">
        <article className="relative flex flex-col rounded-3xl border border-[#333355]/10 bg-[#fefbf6] p-8 sm:p-10 shadow-lg shadow-[#333355]/5">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#333355]">Basic Kundli</h2>
              <p className="mt-1 text-sm text-[#333355]/70">
                Perfect to explore your chart at a glance.
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-[#333355]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#333355]">
              Free
            </span>
          </div>

          <p className="text-3xl sm:text-4xl font-bold text-[#333355] mb-1">₹0</p>
          <p className="text-sm text-[#333355]/60 mb-8">Forever free · No card required</p>

          <ul className="space-y-3 mb-10 flex-1">
            {basicFeatures.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-[#333355]/90">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B91C2E]/15 text-[#B91C2E]"
                  aria-hidden
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => openForPlan("basic")}
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#333355] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#333355] transition-all hover:bg-[#333355] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333355]"
          >
            Get basic kundli
          </button>
        </article>

        <article className="relative flex flex-col rounded-3xl border-2 border-[#B91C2E]/35 bg-white p-8 sm:p-10 shadow-xl shadow-[#B91C2E]/10 ring-1 ring-[#B91C2E]/20">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-8 sm:translate-x-0">
            <span className="inline-block rounded-full bg-[#B91C2E] px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
              Most chosen
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 mb-6 pt-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#333355]">Detailed Kundli</h2>
              <p className="mt-1 text-sm text-[#333355]/70">
                Deeper chart reading for serious seekers.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-1">
            <p className="text-3xl sm:text-4xl font-bold text-[#333355]">₹99</p>
            <span className="text-sm font-medium text-[#333355]/50">one-time</span>
          </div>
          <p className="text-sm text-[#333355]/60 mb-8">One detailed report · Great value</p>

          <ul className="space-y-3 mb-10 flex-1">
            {detailedFeatures.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-[#333355]/90">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B91C2E]/15 text-[#B91C2E]"
                  aria-hidden
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => openForPlan("detailed")}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#B91C2E] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#7f1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C2E]"
          >
            Get detailed kundli — ₹99
          </button>
        </article>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="fixed left-1/2 top-1/2 z-[100] w-[calc(100%-1.5rem)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[#333355]/10 bg-[#fefbf6] p-0 text-[#333355] shadow-2xl shadow-[#333355]/20 backdrop:bg-transparent open:flex open:flex-col [&::backdrop]:bg-[#1a1a2e]/55 [&::backdrop]:backdrop-blur-[6px]"
      >
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B91C2E]/[0.07]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-[#333355]/[0.04]"
            aria-hidden
          />

          <div className="relative flex max-h-[min(90dvh,720px)] flex-col">
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#333355]/10 px-6 pb-4 pt-6 sm:px-8">
              <div>
                <p
                  id={descId}
                  className="mb-1 inline-flex items-center rounded-full bg-[#B91C2E]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B91C2E]"
                >
                  {planLabel(plan)}
                </p>
                <h2 id={titleId} className="text-xl font-bold text-[#333355] sm:text-2xl">
                  {step === 4 ? "You're all set" : "Request your kundli"}
                </h2>
                {step < 4 && (
                  <p className="mt-1 text-sm text-[#333355]/65">
                    {step === 1
                      ? "Tell us how to reach you."
                      : step === 2
                        ? "Birth details help us cast your chart accurately."
                        : plan === "detailed"
                          ? "Choose language, then complete payment securely."
                          : "Choose the language for your kundli report."}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={closeDialog}
                className="rounded-full p-2 text-[#333355]/50 transition-colors hover:bg-[#333355]/10 hover:text-[#333355]"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {step < 4 && (
              <div className="shrink-0 px-6 pt-5 sm:px-8">
                <div className="flex gap-1.5 sm:gap-2" role="status" aria-live="polite">
                  <div
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      step >= 1 ? "bg-[#B91C2E]" : "bg-[#333355]/15"
                    }`}
                  />
                  <div
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      step >= 2 ? "bg-[#B91C2E]" : "bg-[#333355]/15"
                    }`}
                  />
                  <div
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      step >= 3 ? "bg-[#B91C2E]" : "bg-[#333355]/15"
                    }`}
                  />
                </div>
                <p className="mt-2 text-center text-xs font-medium text-[#333355]/50">
                  Step {step} of 3
                </p>
              </div>
            )}

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8 sm:py-7">
              {step === 1 && (
                <form
                  className="space-y-5"
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
                >
                  <div>
                    <label htmlFor="k-fullName" className={labelClass}>
                      Full name
                    </label>
                    <input
                      id="k-fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={step1.fullName}
                      onChange={(e) => setStep1((s) => ({ ...s, fullName: e.target.value }))}
                      className={inputClass}
                      placeholder="As per official records"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs font-medium text-[#B91C2E]">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="k-email" className={labelClass}>
                      Email{" "}
                      <span className="font-normal normal-case tracking-normal text-[#333355]/45">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="k-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={step1.email}
                      onChange={(e) => setStep1((s) => ({ ...s, email: e.target.value }))}
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-[#B91C2E]">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="k-phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="k-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={step1.phone}
                      onChange={(e) => setStep1((s) => ({ ...s, phone: e.target.value }))}
                      className={inputClass}
                      placeholder="+91 or your country code"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-[#B91C2E]">{errors.phone}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-[#B91C2E] py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#7f1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C2E]"
                  >
                    Continue
                  </button>
                </form>
              )}

              {step === 2 && (
                <form className="space-y-5" noValidate onSubmit={handleStep2Continue}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label htmlFor="k-dob" className={labelClass}>
                        Date of birth
                      </label>
                      <input
                        id="k-dob"
                        name="dob"
                        type="date"
                        value={step2.dob}
                        onChange={(e) => setStep2((s) => ({ ...s, dob: e.target.value }))}
                        className={inputClass}
                      />
                      {errors.dob && (
                        <p className="mt-1.5 text-xs font-medium text-[#B91C2E]">{errors.dob}</p>
                      )}
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="k-time" className={labelClass}>
                        Time of birth
                      </label>
                      <input
                        id="k-time"
                        name="timeOfBirth"
                        type="time"
                        value={step2.timeOfBirth}
                        onChange={(e) => setStep2((s) => ({ ...s, timeOfBirth: e.target.value }))}
                        className={inputClass}
                      />
                      {errors.timeOfBirth && (
                        <p className="mt-1.5 text-xs font-medium text-[#B91C2E]">{errors.timeOfBirth}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="k-city" className={labelClass}>
                      Place of birth (city)
                    </label>
                    <input
                      id="k-city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      value={step2.city}
                      onChange={(e) => setStep2((s) => ({ ...s, city: e.target.value }))}
                      className={inputClass}
                      placeholder="City or town"
                    />
                    {errors.city && (
                      <p className="mt-1.5 text-xs font-medium text-[#B91C2E]">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="k-state" className={labelClass}>
                      State
                    </label>
                    <input
                      id="k-state"
                      name="state"
                      type="text"
                      autoComplete="address-level1"
                      value={step2.state}
                      onChange={(e) => setStep2((s) => ({ ...s, state: e.target.value }))}
                      className={inputClass}
                      placeholder="State or region"
                    />
                    {errors.state && (
                      <p className="mt-1.5 text-xs font-medium text-[#B91C2E]">{errors.state}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="k-country" className={labelClass}>
                      Country
                    </label>
                    <input
                      id="k-country"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      value={step2.country}
                      onChange={(e) => setStep2((s) => ({ ...s, country: e.target.value }))}
                      className={inputClass}
                      placeholder="Country"
                    />
                    {errors.country && (
                      <p className="mt-1.5 text-xs font-medium text-[#B91C2E]">{errors.country}</p>
                    )}
                  </div>

                  <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setErrors({});
                        setStep(1);
                      }}
                      className="rounded-full border-2 border-[#333355]/20 bg-transparent px-6 py-3 text-sm font-semibold text-[#333355] transition-colors hover:border-[#333355]/40 hover:bg-[#333355]/5"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="rounded-full bg-[#B91C2E] px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#7f1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C2E] sm:min-w-[160px]"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form
                  className="space-y-6"
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (plan === "basic") {
                      void completeBasicRequest();
                    }
                  }}
                >
                  {plan === "detailed" && (
                    <div className="rounded-2xl border border-[#B91C2E]/25 bg-[#B91C2E]/[0.06] px-4 py-3 sm:px-5 sm:py-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#B91C2E]">
                        Amount due
                      </p>
                      <p className="mt-1 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#333355]">
                          ₹{DETAILED_KUNDLI_AMOUNT_INR}
                        </span>
                        <span className="text-sm text-[#333355]/55">one-time · Detailed kundli</span>
                      </p>
                      {!isRazorpayEnabled && (
                        <p className="mt-2 text-xs font-medium text-[#333355]/65">
                          Test mode: payment is skipped; you can still complete your request.
                        </p>
                      )}
                    </div>
                  )}

                  <fieldset className="min-w-0 border-0 p-0">
                    <legend className={`${labelClass} mb-4`}>
                      Preferred language
                    </legend>
                    <p className="mb-4 text-sm text-[#333355]/65">
                      Should we prepare your kundli in Hindi or English?
                    </p>
                    <div
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                      role="group"
                      aria-label="Kundli language"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setKundliLanguage("english");
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.language;
                            return next;
                          });
                        }}
                        className={`flex flex-col items-start rounded-2xl border-2 px-5 py-4 text-left transition-all ${
                          kundliLanguage === "english"
                            ? "border-[#B91C2E] bg-[#B91C2E]/[0.06] shadow-md ring-1 ring-[#B91C2E]/20"
                            : "border-[#333355]/12 bg-white hover:border-[#333355]/25"
                        }`}
                      >
                        <span className="text-base font-bold text-[#333355]">English</span>
                        <span className="mt-1 text-xs text-[#333355]/60">
                          Chart &amp; report text in English
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setKundliLanguage("hindi");
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.language;
                            return next;
                          });
                        }}
                        className={`flex flex-col items-start rounded-2xl border-2 px-5 py-4 text-left transition-all ${
                          kundliLanguage === "hindi"
                            ? "border-[#B91C2E] bg-[#B91C2E]/[0.06] shadow-md ring-1 ring-[#B91C2E]/20"
                            : "border-[#333355]/12 bg-white hover:border-[#333355]/25"
                        }`}
                      >
                        <span className="text-base font-bold text-[#333355]">हिंदी (Hindi)</span>
                        <span className="mt-1 text-xs text-[#333355]/60">
                          चार्ट और विवरण हिंदी में
                        </span>
                      </button>
                    </div>
                    {errors.language && (
                      <p className="mt-3 text-xs font-medium text-[#B91C2E]" role="alert">
                        {errors.language}
                      </p>
                    )}
                  </fieldset>

                  {paymentMessage ? (
                    <p
                      className="rounded-xl border border-[#B91C2E]/20 bg-[#B91C2E]/5 px-4 py-3 text-center text-sm font-medium text-[#B91C2E]"
                      role="status"
                    >
                      {paymentMessage}
                    </p>
                  ) : null}

                  <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setErrors({});
                        setPaymentMessage("");
                        setStep(2);
                      }}
                      className="rounded-full border-2 border-[#333355]/20 bg-transparent px-6 py-3 text-sm font-semibold text-[#333355] transition-colors hover:border-[#333355]/40 hover:bg-[#333355]/5"
                    >
                      Back
                    </button>
                    {plan === "basic" ? (
                      <button
                        type="submit"
                        className="rounded-full bg-[#B91C2E] px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#7f1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C2E] sm:min-w-[160px]"
                      >
                        Submit request
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={paymentLoading}
                        onClick={() => void handlePayNowDetailed()}
                        className="rounded-full bg-[#B91C2E] px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#7f1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C2E] enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[160px]"
                      >
                        {paymentLoading ? "Please wait…" : "Pay now"}
                      </button>
                    )}
                  </div>
                </form>
              )}

              {step === 4 && (
                <div className="flex flex-col items-center py-4 text-center">
                  <div
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#B91C2E]/12 text-[#B91C2E]"
                    aria-hidden
                  >
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#333355] sm:text-xl">Thank you, {step1.fullName.trim().split(/\s+/)[0]}!</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#333355]/70">
                    We&apos;ve received your {plan === "basic" ? "basic" : "detailed"} kundli request.
                    {plan === "detailed" ? (
                      <>
                        {" "}
                        <span className="font-semibold text-[#333355]">Your payment was received.</span>
                      </>
                    ) : null}{" "}
                    Your report will be prepared in{" "}
                    <span className="font-semibold text-[#333355]">
                      {kundliLanguage === "hindi" ? "Hindi" : "English"}
                    </span>
                    . We will send your kundli to your WhatsApp number{" "}
                    <span className="font-semibold text-[#333355]">{step1.phone.trim()}</span> within{" "}
                    <span className="font-semibold text-[#333355]">24–48 hours</span>.
                    {step1.email.trim() ? (
                      <>
                        {" "}
                        We may also share updates at{" "}
                        <span className="font-semibold text-[#333355]">{step1.email.trim()}</span>.
                      </>
                    ) : null}
                  </p>
                  <button
                    type="button"
                    onClick={closeDialog}
                    className="mt-8 rounded-full bg-[#333355] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a45]"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
