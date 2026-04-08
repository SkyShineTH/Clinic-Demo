import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MarketingShell } from "@/components/marketing/MarketingShell";

type Props = { params: Promise<{ locale: string }> };

const faqIndices = [1, 2, 3, 4] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("faqTitle") };
}

export default async function FaqPage() {
  const t = await getTranslations("FaqPage");

  return (
    <MarketingShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold text-ink">{t("title")}</h1>
        <p className="mt-2 text-sm text-ink-muted">{t("subtitle")}</p>
        <dl className="mt-10 space-y-4">
          {faqIndices.map((n) => (
            <div key={n} className="rounded-xl border border-line bg-surface p-5 sm:p-6">
              <dt className="font-semibold text-ink">{t(`q${n}`)}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-muted">{t(`a${n}`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </MarketingShell>
  );
}
