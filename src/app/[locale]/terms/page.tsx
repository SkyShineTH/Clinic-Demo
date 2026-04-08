import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้บริการ",
};

export default function TermsPage() {
  return (
    <MarketingShell>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-semibold text-ink">ข้อกำหนดการใช้บริการ (ร่างสาธิต)</h1>
        <p className="mt-4 text-sm text-ink-muted">
          ร่างโครงสำหรับสาธิต — ต้องตรวจโดยที่ปรึกษากฎหมายก่อนใช้จริง
        </p>
        <h2 className="mt-8 text-lg font-semibold text-ink">1. การใช้เว็บไซต์</h2>
        <p className="mt-2 text-sm text-ink-muted">ผู้ใช้ตกลงใช้งานตามวัตถุประสงค์ที่กำหนด</p>
        <h2 className="mt-8 text-lg font-semibold text-ink">2. การจองนัด</h2>
        <p className="mt-2 text-sm text-ink-muted">
          การจองเป็นการนัดหมายเบื้องต้น คลินิกสงวนสิทธิ์ยืนยันหรือปรับเวลา
        </p>
        <h2 className="mt-8 text-lg font-semibold text-ink">3. ข้อจำกัดความรับผิด</h2>
        <p className="mt-2 text-sm text-ink-muted">กำหนดตามที่ที่ปรึกษากฎหมายแนะนำ</p>
      </article>
    </MarketingShell>
  );
}
