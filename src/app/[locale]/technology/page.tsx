import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { StockFigure } from "@/components/media/StockFigure";
import { techPhotos } from "@/lib/stock-photos";

type Props = { params: Promise<{ locale: string }> };

const blockOrder = ["scan", "cad", "dsd"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("technologyTitle") };
}

export default async function TechnologyPage() {
  const t = await getTranslations("TechnologyPage");

  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold text-ink">{t("title")}</h1>
        <p className="mt-4 max-w-2xl text-ink-muted">{t("intro")}</p>
        <p className="mt-2 text-xs text-ink-faint">{t("disclaimer")}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blockOrder.map((key, i) => (
              <div key={key} className="rounded-2xl border border-line bg-surface p-6">
                <StockFigure
                  meta={techPhotos[i]!}
                  aspectClassName="aspect-[16/10]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  showCredit={false}
                />
                <h2 className="mt-4 text-lg font-semibold text-ink">{t(`${key}.title`)}</h2>
                <p className="mt-2 text-sm text-ink-muted">{t(`${key}.body`)}</p>
                <p className="mt-3 text-[10px] text-ink-faint">
                  <a
                    href={techPhotos[i]!.pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-teal"
                  >
                    {t("creditUnsplash")}
                  </a>
                </p>
              </div>
            ))}
        </div>
      </div>
    </MarketingShell>
  );
}
