import nodemailer from "nodemailer";

import type { KundliLanguage, KundliPlan } from "@/lib/integrations/aisensy";
import { DETAILED_KUNDLI_AMOUNT_INR } from "@/lib/kundli/pricing";

type SendKundliEmailInput = {
  toEmail: string;
  fullName: string;
  plan: KundliPlan;
  language: KundliLanguage;
  dob: string;
  timeOfBirth: string;
  city: string;
  state: string;
  country: string;
  /** Only present for paid (detailed) plan */
  amountPaid?: number;
};

type SendEmailResult = {
  sent: boolean;
  reason?: string;
};

function createTransporter() {
  const user = process.env.GMAIL_SMTP_USER;
  const pass = process.env.GMAIL_SMTP_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

function formatDob(dob: string): string {
  const date = new Date(`${dob}T12:00:00`);
  if (Number.isNaN(date.valueOf())) return dob;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildEmailHtml(input: SendKundliEmailInput): string {
  const firstName = input.fullName.trim().split(/\s+/)[0];
  const planLabel = input.plan === "basic" ? "Basic Kundli" : "Detailed Kundli";
  const languageLabel = input.language === "hindi" ? "हिंदी (Hindi)" : "English";
  const paymentLine =
    input.plan === "detailed"
      ? `<tr>
          <td style="padding:8px 0;color:#666;font-size:14px;">Payment</td>
          <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1a1a1a;">
            ₹${input.amountPaid ?? DETAILED_KUNDLI_AMOUNT_INR} — Paid ✅
          </td>
        </tr>`
      : `<tr>
          <td style="padding:8px 0;color:#666;font-size:14px;">Payment</td>
          <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1a1a1a;">Free</td>
        </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kundli Request Confirmed</title>
</head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#B91C2E;padding:32px 40px;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.75);">
                Astro Vedic Kundli
              </p>
              <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;line-height:1.3;">
                Kundli Request Confirmed ✅
              </h1>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:32px 40px 0;">
              <p style="margin:0;font-size:16px;color:#333355;line-height:1.6;">
                Namaste <strong>${firstName}</strong> 🙏
              </p>
              <p style="margin:12px 0 0;font-size:15px;color:#555;line-height:1.7;">
                We have received your <strong>${planLabel}</strong> request. Your kundli will be
                prepared in <strong>${languageLabel}</strong> and sent to your
                <strong>WhatsApp number</strong> within <strong>24–48 hours</strong>.
              </p>
            </td>
          </tr>

          <!-- Details card -->
          <tr>
            <td style="padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0"
                style="background:#fdf6ec;border-radius:12px;padding:20px 24px;border:1px solid #f0e0c8;">
                <tr>
                  <td colspan="2" style="padding-bottom:12px;">
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#B91C2E;">
                      Your Details
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;width:40%;">Name</td>
                  <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1a1a1a;">${input.fullName.trim()}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;">Plan</td>
                  <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1a1a1a;">${planLabel}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;">Language</td>
                  <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1a1a1a;">${languageLabel}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;">Date of Birth</td>
                  <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1a1a1a;">${formatDob(input.dob)}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;">Time of Birth</td>
                  <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1a1a1a;">${input.timeOfBirth}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#666;font-size:14px;">Place of Birth</td>
                  <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1a1a1a;">${input.city}, ${input.state}, ${input.country}</td>
                </tr>
                ${paymentLine}
              </table>
            </td>
          </tr>

          <!-- WhatsApp note -->
          <tr>
            <td style="padding:0 40px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0"
                style="background:#f0fdf4;border-radius:10px;padding:16px 20px;border:1px solid #bbf7d0;">
                <tr>
                  <td>
                    <p style="margin:0;font-size:14px;color:#166534;line-height:1.6;">
                      📱 <strong>Your kundli will be delivered on WhatsApp</strong> within 24–48 hours.
                      Please ensure your WhatsApp is active on the number you provided.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #f0e0c8;margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;color:#999;">
                Questions? Reply to this email or reach us on WhatsApp.
              </p>
              <p style="margin:0;font-size:12px;color:#bbb;">
                © Astro Vedic Kundli · astrovedickundli.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendKundliConfirmationEmail(
  input: SendKundliEmailInput
): Promise<SendEmailResult> {
  const transporter = createTransporter();

  if (!transporter) {
    return { sent: false, reason: "Gmail SMTP credentials are not configured." };
  }

  const senderName = process.env.GMAIL_SENDER_NAME || "Astro Vedic Kundli";
  const fromAddress = process.env.GMAIL_SMTP_USER!;
  const planLabel = input.plan === "basic" ? "Basic Kundli" : "Detailed Kundli";

  try {
    await transporter.sendMail({
      from: `"${senderName}" <${fromAddress}>`,
      to: input.toEmail,
      subject: `Kundli Request Confirmed — ${planLabel} | Astro Vedic Kundli`,
      html: buildEmailHtml(input),
    });

    return { sent: true };
  } catch (error) {
    return {
      sent: false,
      reason: error instanceof Error ? error.message : "Unknown email error.",
    };
  }
}
