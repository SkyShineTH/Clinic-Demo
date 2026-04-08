import Link from "next/link";
import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { StockFigure } from "@/components/media/StockFigure";
import { services } from "@/lib/mock-data";
import { servicePhotos } from "@/lib/stock-photos";

export const metadata: Metadata = {
  title: "บริการ",
};

const blurbs: Record<string, string> = {
  implants:
    "วางแผนก่อนรักษา ตรวจด้วยภาพดิจิทัล และเลือกทางเลือกที่เหมาะกับสภาวะช่องปาก",
  veneers: "ออกแบบรูปร่างและสีฟันร่วมกับคุณ เน้นธรรมชาติและการบดเคี้ยวที่ยั่งยืน",
  makeover: "มองภาพรวมรอยยิ้ม ฟังก์ชัน และสัดส่วนใบหน้าแบบเป็นขั้นตอน",
  ortho: "จัดฟันสำหรับเด็กและผู้ใหญ่ วางแผนตามเป้าหมายของคุณ",
  dsd: "ดิจิทัลสไมล์ดีไซน์ — เห็นทิศทางก่อนตัดสินใจ",
  general: "ตรวจสุขภาพช่องปาก อุดฟัน ถอนฟัน และดูแลระยะยาว",
};

export default function ServicesPage() {
  return (
    <MarketingShell>
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold text-ink">บริการทั้งหมด</h1>
        <p className="mt-2 max-w-2xl text-ink-muted">
          รายละเอียดเป็นตัวอย่างสำหรับสาธิต — เนื้อหาจริงต้องตรวจสอบโดยคลินิก
        </p>
        <p className="mt-2 text-xs text-ink-faint">
          แต่ละหัวข้อมีภาพประกอบสต็อก (Unsplash) — ไม่ใช่คนไข้หรือคลินิกจริงของเดโม่
        </p>
        <ul className="mt-12 space-y-12">
          {services.map((s, i) => {
            const photo = servicePhotos[s.id];
            return (
              <li
                key={s.id}
                id={s.id}
                className={`scroll-mt-24 flex min-w-0 flex-col gap-6 lg:gap-10 ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-stretch`}
              >
                <StockFigure
                  meta={photo}
                  className="w-full min-w-0 shrink-0 lg:max-w-md"
                  aspectClassName="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  showCredit
                />
                <div className="flex min-w-0 flex-1 flex-col rounded-2xl border border-line bg-surface p-5 sm:p-8">
                  <div className="mb-2 flex items-baseline gap-2 text-sm text-ink-muted">
                    <span className="font-medium text-gold">0{i + 1}</span>
                    <span>/</span>
                    <span>{services.length}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-ink">{s.nameTh}</h2>
                  <p className="mt-1 text-sm text-ink-faint">{s.nameEn}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {blurbs[s.id] ?? "รายละเอียดบริการ"}
                  </p>
                  <p className="mt-4 text-xs text-ink-faint">
                    ระยะเวลาโดยประมาณ {s.durationMin} นาที (จำลอง)
                  </p>
                  <Link
                    href="/booking"
                    className="mt-6 inline-block text-sm font-semibold text-teal hover:underline"
                  >
                    จองปรึกษา
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </MarketingShell>
  );
}
