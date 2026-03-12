import { NextResponse } from "next/server";

import { getConsultationAmountInr } from "@/lib/consultNow/pricing";
import type { Nationality } from "@/lib/consultNow/types";
import {
  createRazorpayOrder,
  getRazorpayPublicKey,
} from "@/lib/integrations/razorpay";

type CreateOrderRequest = {
  nationality?: Nationality;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateOrderRequest;

    if (!body.nationality || !["indian", "overseas"].includes(body.nationality)) {
      return NextResponse.json({ error: "Invalid nationality." }, { status: 400 });
    }

    const amountInr = getConsultationAmountInr(body.nationality);
    const receipt = `consult-${Date.now()}`;
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
