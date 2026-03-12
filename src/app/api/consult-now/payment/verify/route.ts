import { NextResponse } from "next/server";

import { verifyRazorpaySignature } from "@/lib/integrations/razorpay";

type VerifyRequest = {
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  razorpay_signature?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as VerifyRequest;
    const orderId = body.razorpay_order_id;
    const paymentId = body.razorpay_payment_id;
    const signature = body.razorpay_signature;

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { verified: false, error: "Missing payment verification fields." },
        { status: 400 }
      );
    }

    const verified = verifyRazorpaySignature({
      orderId,
      paymentId,
      signature,
    });

    if (!verified) {
      return NextResponse.json(
        { verified: false, error: "Invalid payment signature." },
        { status: 400 }
      );
    }

    return NextResponse.json({ verified: true });
  } catch (error) {
    return NextResponse.json(
      {
        verified: false,
        error:
          error instanceof Error ? error.message : "Payment verification failed.",
      },
      { status: 500 }
    );
  }
}
