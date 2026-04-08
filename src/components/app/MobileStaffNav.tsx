"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/app/reception", label: "หน้าร้าน" },
  { href: "/app/schedule", label: "ตาราง" },
  { href: "/app/pipeline", label: "ลีด" },
  { href: "/app/admin", label: "ตั้งค่า" },
];

export function MobileStaffNav() {
  const pathname = usePathname();
  return (
    <nav
      className="flex gap-2 overflow-x-auto border-b border-staff-line bg-staff-surface px-3 py-3 lg:hidden"
      aria-label="เมนูพนักงาน"
    >
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition ${
              active
                ? "bg-staff-accent text-white shadow-sm"
                : "bg-slate-100 text-staff-muted hover:bg-slate-200"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
      <Link
        href="/"
        className="shrink-0 self-center rounded-full px-3 py-2 text-xs font-medium text-staff-accent"
      >
        เว็บ
      </Link>
    </nav>
  );
}
