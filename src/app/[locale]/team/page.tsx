import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { StockFigure } from "@/components/media/StockFigure";
import { teamGroupPhoto } from "@/lib/stock-photos";

type Props = { params: Promise<{ locale: string }> };

const memberKeys = ["d1", "d2", "d3"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("teamTitle") };
}

export default async function TeamPage() {
  const t = await getTranslations("TeamPage");

  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold text-ink">{t("title")}</h1>
        <p className="mt-2 text-ink-muted">{t("subtitle")}</p>
        <p className="mt-2 text-xs text-ink-faint">{t("disclaimer")}</p>
        <div className="mt-10">
          <StockFigure
            meta={teamGroupPhoto}
            aspectClassName="aspect-[16/9] sm:aspect-[21/9]"
            frameClassName="rounded-2xl border border-line bg-line"
            sizes="(max-width: 1024px) 100vw, 1152px"
            showCredit
          />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memberKeys.map((key) => (
            <article key={key} className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="font-semibold text-ink">{t(`${key}.name`)}</h2>
              <p className="mt-1 text-sm text-teal">{t(`${key}.focus`)}</p>
              <p className="mt-3 text-sm text-ink-muted">{t(`${key}.edu`)}</p>
              <p className="mt-2 text-xs text-ink-faint">
                {t("langLabel")}: {t(`${key}.lang`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </MarketingShell>
  );
}
