import { NextResponse } from "next/server";

import { getStaticSlotsForDate } from "@/lib/consultNow/slots";
import { getCalendarBusyIntervals } from "@/lib/integrations/googleCalendar";

function isOverlapping(
  startA: string,
  endA: string,
  startB: string,
  endB: string
): boolean {
  const aStart = new Date(startA).getTime();
  const aEnd = new Date(endA).getTime();
  const bStart = new Date(startB).getTime();
  const bEnd = new Date(endB).getTime();

  if ([aStart, aEnd, bStart, bEnd].some((time) => Number.isNaN(time))) {
    return false;
  }

  return aStart < bEnd && bStart < aEnd;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json(
      { error: "date query param is required (YYYY-MM-DD)." },
      { status: 400 }
    );
  }

  const staticSlots = getStaticSlotsForDate(date);
  if (staticSlots.length === 0) {
    return NextResponse.json({ date, slots: [] });
  }

  const rangeStartIso = new Date(`${date}T00:00:00+05:30`).toISOString();
  const rangeEndIso = new Date(`${date}T23:59:59+05:30`).toISOString();
  const busyIntervals = await getCalendarBusyIntervals({
    rangeStartIso,
    rangeEndIso,
  });

  const slots = staticSlots.map((slot) => ({
    ...slot,
    available: !busyIntervals.some((busyInterval) =>
      isOverlapping(
        slot.startIso,
        slot.endIso,
        busyInterval.startIso,
        busyInterval.endIso
      )
    ),
  }));

  return NextResponse.json({ date, slots });
}
