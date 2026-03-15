import type { BookingContactDetails, Nationality } from "@/lib/consultNow/types";

export const CONSULTATION_BASE_PRICE_BY_NATIONALITY: Record<Nationality, number> = {
  indian: 2500,
  overseas: 3500,
};

export const CONSULTATION_GST_RATE = 0.18;

export function getConsultationAmountInr(nationality: Nationality): number {
  const baseAmount = CONSULTATION_BASE_PRICE_BY_NATIONALITY[nationality];
  const gstAmount = Math.round(baseAmount * CONSULTATION_GST_RATE);
  return baseAmount + gstAmount;
}

export function getConsultationPricingBreakup(nationality: Nationality): {
  baseAmountInr: number;
  gstAmountInr: number;
  totalAmountInr: number;
} {
  const baseAmountInr = CONSULTATION_BASE_PRICE_BY_NATIONALITY[nationality];
  const gstAmountInr = Math.round(baseAmountInr * CONSULTATION_GST_RATE);
  return {
    baseAmountInr,
    gstAmountInr,
    totalAmountInr: baseAmountInr + gstAmountInr,
  };
}

export function validateStepOneDetails(input: Partial<BookingContactDetails>): {
  isValid: boolean;
  errors: Partial<Record<keyof BookingContactDetails, string>>;
} {
  const errors: Partial<Record<keyof BookingContactDetails, string>> = {};

  if (!input.fullName?.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!input.phoneNumber?.trim()) {
    errors.phoneNumber = "Phone number is required.";
  }

  if (!input.whatsappNumber?.trim()) {
    errors.whatsappNumber = "WhatsApp number is required.";
  }

  if (!input.consultationMode) {
    errors.consultationMode = "Please choose online or in-person consultation.";
  }

  if (!input.nationality) {
    errors.nationality = "Please choose nationality.";
  }

  if (
    input.consultationMode === "online" &&
    (!input.email?.trim() || !input.email.includes("@"))
  ) {
    errors.email = "Valid email is required for online consultation.";
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}
