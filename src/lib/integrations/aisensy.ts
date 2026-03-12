type SendWhatsappMessageInput = {
  fullName: string;
  whatsappNumber: string;
  consultationMode: "online" | "inPerson";
  dateLabel: string;
  slotLabel: string;
  amountInr: number;
  meetLink?: string;
};

type SendWhatsappResult = {
  sent: boolean;
  reason?: string;
};

export async function sendAisensyBookingConfirmation(
  input: SendWhatsappMessageInput
): Promise<SendWhatsappResult> {
  const apiKey = process.env.AISENSY_API_KEY;
  const campaignName = process.env.AISENSY_CAMPAIGN_NAME;
  const apiUrl =
    process.env.AISENSY_API_URL ||
    "https://backend.aisensy.com/campaign/t1/api/v2";

  if (!apiKey || !campaignName) {
    return { sent: false, reason: "AiSensy credentials are not configured." };
  }

  const cleanPhone = input.whatsappNumber.replace(/[^\d]/g, "");

  const payload = {
    apiKey,
    campaignName,
    destination: cleanPhone,
    userName: input.fullName,
    templateParams: [
      input.dateLabel,
      input.slotLabel,
      input.consultationMode === "online" ? "Online" : "In-person",
      `${input.amountInr}`,
      input.meetLink || "N/A",
    ],
  };

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
