import type { ConsultationMode } from "@/lib/consultNow/types";

type SendWhatsappResult = {
  sent: boolean;
  reason?: string;
};

// ─── Consult-Now ─────────────────────────────────────────────────────────────

type SendConsultWhatsappInput = {
  fullName: string;
  whatsappNumber: string;
  consultationMode: ConsultationMode;
  dateLabel: string;
  slotLabel: string;
  amountInr: number;
  meetLink?: string;
};

// ─── Kundli ───────────────────────────────────────────────────────────────────

export type KundliPlan = "basic" | "detailed";
export type KundliLanguage = "hindi" | "english";

type SendKundliWhatsappInput = {
  fullName: string;
  whatsappNumber: string;
  plan: KundliPlan;
  language: KundliLanguage;
  /** Only present for paid (detailed) plan */
  amountPaid?: number;
};

// ─── Shared helper ────────────────────────────────────────────────────────────

async function callAisensyApi(payload: Record<string, unknown>): Promise<SendWhatsappResult> {
  const apiUrl =
    process.env.AISENSY_API_URL ||
    "https://backend.aisensy.com/campaign/t1/api/v2";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        sent: false,
        reason: `AiSensy API request failed with status ${response.status}.`,
      };
    }

    return { sent: true };
  } catch (error) {
    return {
      sent: false,
      reason: error instanceof Error ? error.message : "Unknown AiSensy error.",
    };
  }
}

export async function sendAisensyBookingConfirmation(
  input: SendConsultWhatsappInput
): Promise<SendWhatsappResult> {
  const apiKey = process.env.AISENSY_API_KEY;
  const campaignName = process.env.AISENSY_CAMPAIGN_NAME;

  if (!apiKey || !campaignName) {
    return { sent: false, reason: "AiSensy credentials are not configured." };
  }

  const cleanPhone = input.whatsappNumber.replace(/[^\d]/g, "");

  return callAisensyApi({
    apiKey,
    campaignName,
    destination: cleanPhone,
    userName: input.fullName,
    templateParams: [
      input.dateLabel,
      input.slotLabel,
      input.consultationMode === "online"
        ? "Online"
        : input.consultationMode === "telephonic"
          ? "Telephonic"
          : "In-person",
      `${input.amountInr}`,
      input.meetLink || "N/A",
    ],
  });
}

export async function sendAisensyKundliConfirmation(
  input: SendKundliWhatsappInput
): Promise<SendWhatsappResult> {
  const apiKey = process.env.AISENSY_API_KEY;

  if (!apiKey) {
    return { sent: false, reason: "AiSensy API key is not configured." };
  }

  // Pick the campaign based on the requested language.
  const campaignName =
    input.language === "hindi"
      ? process.env.AISENSY_KUNDLI_CAMPAIGN_NAME_HI
      : process.env.AISENSY_KUNDLI_CAMPAIGN_NAME_EN;

  if (!campaignName) {
    return {
      sent: false,
      reason: `AiSensy kundli campaign name for "${input.language}" is not configured.`,
    };
  }

  const cleanPhone = input.whatsappNumber.replace(/[^\d]/g, "");

  const planLabel = input.plan === "basic" ? "Basic" : "Detailed";
  const languageLabel = input.language === "hindi" ? "हिंदी (Hindi)" : "English";
  const paymentLabel =
    input.plan === "detailed" && input.amountPaid
      ? `₹${input.amountPaid} paid successfully`
      : "Free";

  return callAisensyApi({
    apiKey,
    campaignName,
    destination: cleanPhone,
    userName: input.fullName,
    templateParams: [
      input.fullName,   // {{1}} name
      planLabel,        // {{2}} Basic / Detailed
      languageLabel,    // {{3}} language
      paymentLabel,     // {{4}} Free / ₹99 paid successfully
    ],
  });
}
