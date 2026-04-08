"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export function PrivacyPolicyModalTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open ? <PrivacyPolicyModal onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function PrivacyPolicyModal({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 border-0 bg-ink/45 backdrop-blur-[2px]"
        aria-label="ปิดหน้าต่างนโยบายความเป็นส่วนตัว"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(85vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-xl sm:max-w-xl"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line px-5 py-4">
          <p className="text-sm font-semibold text-ink">นโยบายความเป็นส่วนตัว</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-xl border border-line text-ink-muted transition hover:border-teal/40 hover:text-teal"
            aria-label="ปิด"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <PrivacyPolicyContent
            titleId={titleId}
            titleTag="h2"
            titleClassName="text-xl font-semibold text-ink"
          />
          <p className="mt-8 border-t border-line pt-4 text-xs text-ink-faint">
            เปิดหน้าเต็มได้ที่{" "}
            <Link href="/privacy" className="text-teal underline hover:text-teal-hover">
              /privacy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
