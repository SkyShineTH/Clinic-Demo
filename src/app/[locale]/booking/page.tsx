import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { DoctorAvailabilityCalendar } from "@/components/booking/DoctorAvailabilityCalendar";
import { StockFigure } from "@/components/media/StockFigure";
import { servicePhotos } from "@/lib/stock-photos";

export const metadata: Metadata = {
  title: "จองคิวออนไลน์",
  description: "จองนัดทันตกรรม — โหมดสาธิต",
};

export default function BookingPage() {
  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-semibold text-ink">จองคิวออนไลน์</h1>
        <p className="mt-2 text-sm text-ink-muted">
          ขั้นตอนจำลองสำหรับสาธิต — ข้อมูลไม่ใช่คนไข้จริง
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {(["veneers", "dsd", "general"] as const).map((id) => (
            <StockFigure
              key={id}
              meta={servicePhotos[id]}
              aspectClassName="aspect-[16/10]"
              sizes="(max-width: 640px) 100vw, 33vw"
              showCredit={false}
            />
          ))}
        </div>
        <p className="mt-2 text-[10px] text-ink-faint">
          ภาพสต็อกประกอบ ·{" "}
          <a
            href="https://unsplash.com/license"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-teal"
          >
            Unsplash
          </a>
        </p>
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
          <div className="lg:col-span-5">
            <DoctorAvailabilityCalendar />
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <BookingWizard />
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
