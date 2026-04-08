import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { brand } from "@/lib/mock-data";
import { marketingNavItems } from "@/lib/marketing-nav";
import { LanguageSwitcher, MarketingHomeLink } from "./LanguageSwitcher";
import { LineButton } from "./LineButton";
import { MarketingMobileMenu } from "./MarketingMobileMenu";

export async function SiteHeader() {
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");
  const navItems = marketingNavItems.map((item) => ({
    href: item.href,
    label: tNav(item.messageKey),
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-1.5 px-4 py-3 sm:gap-4 sm:px-6">
        <MarketingHomeLink className="group flex min-w-0 flex-col leading-tight transition-colors duration-200">
          <span className="text-sm font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-teal">
            {brand.nameTh}
          </span>
          <span className="text-xs text-ink-muted transition-colors duration-200 group-hover:text-ink">
            {brand.nameEn}
          </span>
        </MarketingHomeLink>
        <nav className="hidden items-center gap-1 md:flex" aria-label={tNav("ariaMain")}>
          {marketingNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="marketing-nav-link rounded-full px-3 py-1.5 text-sm text-ink-muted hover:bg-sky-soft/50 hover:text-ink"
            >
              {tNav(item.messageKey)}
            </Link>
          ))}
          <div className="ml-1 flex items-center pl-1 md:border-l md:border-line/80 md:pl-3">
            <LanguageSwitcher />
          </div>
        </nav>
        <div className="flex min-w-0 shrink-0 items-center gap-1 sm:gap-2">
          <LineButton className="hidden sm:inline-flex" label={tCommon("lineChat")} />
          <Link
            href="/booking"
            className="marketing-pressable inline-flex h-10 min-w-0 max-w-[8rem] items-center justify-center truncate rounded-full bg-teal px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-teal-hover sm:h-auto sm:max-w-none sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="sm:hidden">{tCommon("bookShort")}</span>
            <span className="hidden sm:inline">{tCommon("bookOnline")}</span>
          </Link>

          <MarketingMobileMenu items={navItems} />
        </div>
      </div>
      <p className="border-t border-line/60 bg-sky-soft/30 px-4 py-1 text-center text-[11px] text-ink-muted sm:text-xs">
        {tCommon("demoBanner")}
      </p>
    </header>
  );
}
