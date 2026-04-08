import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { HomeView } from "@/components/marketing/home/HomeView";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default async function HomePage() {
  return (
    <MarketingShell>
      <HomeView />
    </MarketingShell>
  );
}
