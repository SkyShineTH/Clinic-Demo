import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { StockFigure } from "@/components/media/StockFigure";
import { galleryPhotos } from "@/lib/stock-photos";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("galleryTitle") };
}

export default async function GalleryPage() {
  const t = await getTranslations("GalleryPage");

  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-semibold text-ink">{t("title")}</h1>
        </div>
        <div className="mt-6 rounded-xl border border-gold/30 bg-sky-soft/40 p-4 text-sm text-ink-muted">
          {t("disclaimer")}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {galleryPhotos.map((meta, i) => (
            <div key={meta.src + i} className="overflow-hidden rounded-xl border border-line bg-surface">
              <StockFigure
                meta={meta}
                aspectClassName="aspect-square"
                frameClassName="rounded-t-xl rounded-b-none border-0 bg-line"
                sizes="(max-width: 640px) 50vw, 300px"
                showCredit={false}
              />
              <div className="border-t border-line px-3 py-2 text-center">
                <span className="text-xs font-medium text-gold">
                  {t("casePrefix")}
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-0.5 text-[10px] text-ink-faint">
                  <a href={meta.pageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-teal">
                    Unsplash
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MarketingShell>
  );
}
