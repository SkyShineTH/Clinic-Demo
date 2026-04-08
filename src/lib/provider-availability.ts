import { providers } from "./mock-data";

/**
 * Demo schedule: which calendar weekdays (0=อาทิตย์ … 6=เสาร์) each doctor works at each branch.
 * ข้อมูลจำลอง — ให้สอดคล้องกับปฏิทินและช่วงเวลาจองในวิซาร์ด
 */
export const providerBranchWeekdays: Record<string, Record<string, number[]>> = {
  dr1: {
    siam: [1, 2, 3, 4, 5],
    thonglor: [1, 2, 3, 4, 5],
    ari: [1, 2, 3, 4, 5, 6],
  },
  dr2: {
    siam: [2, 4, 6],
    thonglor: [1, 3, 5],
    ari: [1, 2, 3, 4, 5],
  },
  dr3: {
    siam: [1, 3, 5],
    thonglor: [2, 4, 6],
    ari: [1, 4, 5, 6],
  },
};

const DEFAULT_CLINIC_DAYS = [1, 2, 3, 4, 5, 6];

export function isProviderAvailableOnDate(
  providerId: string,
  branchId: string,
  date: Date,
): boolean {
  const wd = date.getDay();
  if (providerId === "any") {
    return providers
      .filter((p) => p.id !== "any")
      .some((p) => isProviderAvailableOnDate(p.id, branchId, date));
  }
  const perBranch = providerBranchWeekdays[providerId]?.[branchId];
  if (perBranch?.length) return perBranch.includes(wd);
  return DEFAULT_CLINIC_DAYS.includes(wd);
}

/** Slot times offered on each available day (demo). */
export const SLOT_TIMES = ["10:00", "11:30", "14:00", "15:30"] as const;

export function buildSlotPresets(branchId: string, providerId: string): { label: string; iso: string }[] {
  const out: { label: string; iso: string }[] = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  for (let d = 1; d <= 45 && out.length < 20; d++) {
    const day = new Date(base);
    day.setDate(day.getDate() + d);
    if (!isProviderAvailableOnDate(providerId, branchId, day)) continue;
    for (const t of SLOT_TIMES) {
      const [hh, mm] = t.split(":").map(Number);
      const dt = new Date(day);
      dt.setHours(hh!, mm!, 0, 0);
      out.push({
        label: `${dt.toLocaleDateString("th-TH", { weekday: "short", day: "numeric", month: "short" })} ${t}`,
        iso: dt.toISOString(),
      });
    }
  }
  return out.slice(0, 16);
}
