import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "คุกกี้",
};

export default function CookiesPage() {
  return (
    <MarketingShell>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-semibold text-ink">นโยบายคุกกี้ (ร่างสาธิต)</h1>
        <p className="mt-4 text-sm text-ink-muted">
          อธิบายประเภทคุกกี้ที่อาจใช้ในเว็บไซต์จริง รวมถึงเครื่องมือวิเคราะห์ — ฉบับนี้เป็นตัวอย่างเท่านั้น
        </p>
        <h2 className="mt-8 text-lg font-semibold text-ink">คุกกี้ที่จำเป็น</h2>
        <p className="mt-2 text-sm text-ink-muted">เพื่อการทำงานพื้นฐานของเว็บไซต์และความปลอดภัย</p>
        <h2 className="mt-8 text-lg font-semibold text-ink">คุกกี้เพื่อการวิเคราะห์</h2>
        <p className="mt-2 text-sm text-ink-muted">เช่น GA4 — ต้องได้รับความยินยอมตามแนวทาง PDPA เมื่อใช้จริง</p>
      </article>
    </MarketingShell>
  );
}
