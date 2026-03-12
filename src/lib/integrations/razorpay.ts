import crypto from "node:crypto";

type RazorpayOrderResponse = {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
};

function getRazorpayCredentials() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error("Razorpay credentials are missing.");
  }

  return { keyId, keySecret };
}

export function getRazorpayPublicKey(): string {
  return process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
}

export async function createRazorpayOrder(params: {
  amountInr: number;
  receipt: string;
}): Promise<RazorpayOrderResponse> {
  const { keyId, keySecret } = getRazorpayCredentials();

  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: params.amountInr * 100,
      currency: "INR",
      receipt: params.receipt,
      payment_capture: 1,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to create Razorpay order: ${body}`);
  }

  return (await response.json()) as RazorpayOrderResponse;
}

export function verifyRazorpaySignature(input: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  const { keySecret } = getRazorpayCredentials();

  const generated = crypto
    .createHmac("sha256", keySecret)
    .update(`${input.orderId}|${input.paymentId}`)
    .digest("hex");

  return generated === input.signature;
}
