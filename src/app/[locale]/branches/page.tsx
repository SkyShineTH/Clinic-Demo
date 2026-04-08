import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { BranchMapEmbed } from "@/components/marketing/BranchMapEmbed";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { StockFigure } from "@/components/media/StockFigure";
import { Link } from "@/i18n/navigation";
import { branches } from "@/lib/mock-data";
import type { Branch } from "@/lib/types";
import { branchPhotos } from "@/lib/stock-photos";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("branchesTitle") };
}

function branchDisplayName(b: Branch, locale: string) {
  return locale === "en" ? b.nameEn : b.nameTh;
}

export default async function BranchesPage() {
  const locale = await getLocale();
  const t = await getTranslations("BranchesPage");
  const tCommon = await getTranslations("Common");

  return (
    <MarketingShell>
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold text-ink">{t("title")}</h1>
        <p className="mt-2 text-ink-muted">{t("intro")}</p>
        <p className="mt-2 text-xs text-ink-faint">{t("stockNote")}</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {branches.map((b) => {
            const displayName = branchDisplayName(b, locale);
            const area = t(`locations.${b.id}.area`);
            const hours = t(`locations.${b.id}.hours`);
            return (
              <div key={b.id} className="overflow-hidden rounded-2xl border border-line bg-surface">
                <StockFigure
                  meta={branchPhotos[b.id]!}
                  aspectClassName="aspect-[16/9]"
                  frameClassName="rounded-t-2xl rounded-b-none border-0 bg-line"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  showCredit={false}
                />
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-ink">{displayName}</h2>
                  {locale === "th" ? (
                    <p className="text-sm text-ink-muted">{b.nameEn}</p>
                  ) : (
                    <p className="text-sm text-ink-muted">{b.nameTh}</p>
                  )}
                  <p className="mt-2 text-sm text-ink-muted">{area}</p>
                  <p className="mt-4 text-sm">{hours}</p>
                  <p className="mt-2 text-sm text-teal">{b.phone}</p>
                  <p className="mt-2 text-[10px] text-ink-faint">
                    <a
                      href={branchPhotos[b.id]!.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-teal"
                    >
                      {t("creditUnsplash")}
                    </a>
                  </p>
                  <BranchMapEmbed
                    branch={b}
                    iframeTitle={t("mapIframeTitle", { name: displayName })}
                    mapNote={t("mapNote", { area })}
                    openMapLabel={t("openInOsm")}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Link
          href="/booking"
          className="mt-10 inline-block rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white"
        >
          {tCommon("bookOnline")}
        </Link>
      </div>
    </MarketingShell>
  );
}
