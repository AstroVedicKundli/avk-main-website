import type { SlotOption } from "@/lib/consultNow/types";

const SLOT_LABELS = [
  { from: "09:00", to: "09:45" },
  { from: "10:00", to: "10:45" },
  { from: "11:00", to: "11:45" },
  { from: "12:00", to: "12:45" },
  { from: "14:00", to: "14:45" },
  { from: "15:00", to: "15:45" },
  { from: "16:00", to: "16:45" },
  { from: "18:00", to: "18:45" },
  { from: "19:00", to: "19:45" },
];

function getIsoForDateAndTime(dateYmd: string, time: string): string {
  return new Date(`${dateYmd}T${time}:00+05:30`).toISOString();
}

export function getStaticSlotsForDate(dateYmd: string): SlotOption[] {
  const date = new Date(`${dateYmd}T00:00:00+05:30`);

  if (Number.isNaN(date.valueOf())) {
    return [];
  }

  const day = date.getDay();
  if (day === 0) {
    return [];
  }

  return SLOT_LABELS.map((slot) => ({
    id: `${dateYmd}-${slot.from}`,
    label: `${slot.from} - ${slot.to}`,
    startIso: getIsoForDateAndTime(dateYmd, slot.from),
    endIso: getIsoForDateAndTime(dateYmd, slot.to),
    available: true,
  }));
}
