import type { Appointment } from "./types";
import { demoAppointmentSeeds } from "./mock-data";

function startOfLocalDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

export function toYmdLocal(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Resolve relative demo seeds to concrete `slotDate` (local calendar). */
export function hydrateDemoAppointments(reference = new Date()): Appointment[] {
  const base = startOfLocalDay(reference);
  return demoAppointmentSeeds.map(({ relativeDay, ...rest }) => ({
    ...rest,
    slotDate: toYmdLocal(addDays(base, relativeDay)),
  }));
}

export function parseRequestSlotDate(slotStart: string): string {
  const d = new Date(slotStart);
  if (Number.isNaN(d.getTime())) return "";
  return toYmdLocal(d);
}

/** Inclusive list of YYYY-MM-DD from start through end (local calendar). */
export function eachYmdInRange(start: Date, end: Date): string[] {
  const out: string[] = [];
  let d = startOfLocalDay(start);
  const last = startOfLocalDay(end);
  while (d <= last) {
    out.push(toYmdLocal(d));
    d = addDays(d, 1);
  }
  return out;
}
