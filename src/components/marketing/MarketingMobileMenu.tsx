"use client";

import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export function MarketingMobileMenu({
  items,
}: {
  items: readonly { href: string; label: string }[];
}) {
  const t = useTranslations("Common");
  const [open, setOpen] = useState(false);
  const mounted = useIsClient();

  useEffect(() => {
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const overlay =
    mounted && open ? (
      <div
        id="marketing-mobile-nav"
        className="fixed inset-0 z-[200] flex min-h-dvh w-full flex-col bg-surface md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label={t("mobileNavAria")}
      >
        <div className="flex min-w-0 shrink-0 items-center gap-2 border-b border-line px-4 pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-3 sm:gap-3">
          <span className="shrink-0 text-sm font-semibold text-ink">{t("menuTitle")}</span>
          <LanguageSwitcher variant="menu" className="ml-auto shrink-0" onNavigate={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-line text-ink hover:bg-sky-soft/50"
            aria-label={t("closeMenu")}
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
          <ul className="mx-auto flex max-w-md flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3.5 text-base font-medium text-ink transition hover:bg-sky-soft/60 active:bg-sky-soft/80"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/booking"
                className="block rounded-xl bg-teal px-3 py-3.5 text-center text-base font-semibold text-white transition hover:bg-teal-hover"
                onClick={() => setOpen(false)}
              >
                {t("bookOnline")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    ) : null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="marketing-mobile-nav"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface/90 text-ink shadow-sm transition hover:border-teal/40 hover:bg-sky-soft/50"
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
      </button>
      {overlay ? createPortal(overlay, document.body) : null}
    </div>
  );
}
