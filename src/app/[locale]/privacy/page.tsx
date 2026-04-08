import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PrivacyPolicyContent } from "@/components/marketing/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว",
};

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PrivacyPolicyContent />
      </article>
    </MarketingShell>
  );
}
