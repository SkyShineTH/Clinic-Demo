"use client";

import { Search } from "lucide-react";

export function StaffSearchField({
  value,
  onChange,
  placeholder = "ค้นหา… รองรับหลายคำ และ \"วลีในเครื่องหมายคำพูด\"",
  resultCount,
  totalCount,
  id = "staff-search",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  resultCount: number;
  totalCount: number;
  id?: string;
}) {
  return (
    <div className="rounded-2xl border border-staff-line bg-staff-surface p-4 shadow-sm">
      <label htmlFor={id} className="sr-only">
        ค้นหาในรายการ
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-staff-muted"
          aria-hidden
        />
        <input
          id={id}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-xl border border-staff-line bg-canvas py-2.5 pl-10 pr-3 text-sm text-staff-ink placeholder:text-staff-faint focus:border-staff-accent focus:outline-none focus:ring-2 focus:ring-staff-accent/20"
        />
      </div>
      <p className="mt-2 text-xs text-staff-muted">
        พบ <span className="font-semibold text-staff-ink">{resultCount}</span> จาก {totalCount} รายการ
        <span className="mt-1 block text-[11px] text-staff-faint">
          ค้นหาแบบยืดหยุ่น: ไม่สนตัวสะกดวรรณยุกต์ไทยบางตัว · ทุกคำในช่องต้องตรง
        </span>
      </p>
    </div>
  );
}
