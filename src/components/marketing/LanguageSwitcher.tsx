"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";

export function MarketingHomeLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href="/" className={className}>
      {children}
    </Link>
  );
}

type LanguageSwitcherProps = {
  className?: string;
  /** Wider touch targets for mobile sheet */
  variant?: "header" | "menu";
  /** e.g. close mobile nav sheet when a locale link is chosen */
  onNavigate?: () => void;
};

export function LanguageSwitcher({
  className = "",
  variant = "header",
  onNavigate,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Common");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const isMenu = variant === "menu";

  const segmentClass =
    "flex min-h-8 min-w-0 flex-1 items-center justify-center rounded-full font-semibold tabular-nums transition-colors";

  return (
    <div
      role="group"
      aria-label={t("langSwitcherGroupAria")}
      className={`inline-flex max-w-full rounded-full border border-line bg-surface/95 p-0.5 shadow-sm ${
        isMenu ? "min-h-10 w-[5.25rem] shrink-0 sm:w-[5.75rem]" : "min-h-9 w-[4.75rem] shrink-0 sm:min-h-0 sm:w-[5.25rem]"
      } ${className}`.trim()}
    >
      <Link
        href={pathname}
        locale="th"
        hrefLang="th"
        lang="th"
        onClick={onNavigate}
        className={`${segmentClass} px-1 text-[11px] sm:px-2 sm:text-sm ${
          locale === "th"
            ? "bg-teal text-white shadow-sm"
            : "text-ink-muted hover:bg-sky-soft/60 hover:text-ink"
        }`}
      >
        TH
        {locale === "th" ? <span className="sr-only">{t("srUsingTh")}</span> : null}
      </Link>
      <Link
        href={pathname}
        locale="en"
        hrefLang="en"
        lang="en"
        onClick={onNavigate}
        className={`${segmentClass} px-1 text-[11px] sm:px-2 sm:text-sm ${
          locale === "en"
            ? "bg-teal text-white shadow-sm"
            : "text-ink-muted hover:bg-sky-soft/60 hover:text-ink"
        }`}
      >
        EN
        {locale === "en" ? <span className="sr-only">{t("srUsingEn")}</span> : null}
      </Link>
    </div>
  );
}
