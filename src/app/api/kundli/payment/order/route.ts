import { NextResponse } from "next/server";

import { DETAILED_KUNDLI_AMOUNT_INR } from "@/lib/kundli/pricing";
import {
  createRazorpayOrder,
  getRazorpayPublicKey,
} from "@/lib/integrations/razorpay";

export async function POST() {
  try {
    const amountInr = DETAILED_KUNDLI_AMOUNT_INR;
    const receipt = `kundli-detailed-${Date.now()}`;
    const order = await createRazorpayOrder({ amountInr, receipt });

    return NextResponse.json({
      order,
      amountInr,
      razorpayKeyId: getRazorpayPublicKey(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to create payment order.",
      },
      { status: 500 }
    );
  }
}
