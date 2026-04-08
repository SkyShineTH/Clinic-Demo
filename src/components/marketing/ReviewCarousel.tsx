"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import type { ReviewSlide } from "@/lib/stock-photos";

export function ReviewCarousel({ slides }: { slides: ReviewSlide[] }) {
  const t = useTranslations("Review");
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const len = slides.length;
  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + len) % len);
    },
    [len],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(timer);
  }, [go, reduceMotion]);

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-3xl">
      <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-line bg-surface">
        <div
          className="flex w-full touch-pan-y"
          style={{
            transform: `translate3d(-${index * 100}%, 0, 0)`,
            transition: reduceMotion ? undefined : "transform 320ms ease-out",
          }}
        >
          {slides.map((slide, slideIndex) => (
            <blockquote
              key={slideIndex}
              className="min-w-0 w-full shrink-0 basis-full px-4 py-8 sm:px-12 sm:py-12"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                {slide.avatar ? (
                  <div className="relative mx-auto size-16 shrink-0 overflow-hidden rounded-full border border-line sm:mx-0 sm:size-14">
                    <Image
                      src={slide.avatar.src}
                      alt={slide.avatar.altTh}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="mx-auto flex size-16 shrink-0 items-center justify-center rounded-full border border-dashed border-line bg-sky-soft/40 text-xs text-ink-faint sm:mx-0 sm:size-14"
                    aria-hidden
                  >
                    —
                  </div>
                )}
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <p className="break-words text-sm leading-relaxed text-ink-muted sm:text-base sm:leading-relaxed lg:text-lg">
                    &ldquo;{slide.quote}&rdquo;
                  </p>
                  <footer className="mt-5 text-sm font-medium text-ink">— {slide.author}</footer>
                  {slide.avatar ? (
                    <p className="mt-2 text-[10px] text-ink-faint">
                      <a
                        href={slide.avatar.pageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-teal"
                      >
                        {t("profileCredit")}
                      </a>
                    </p>
                  ) : null}
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-teal/40 hover:text-teal"
          aria-label={t("prev")}
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div className="flex gap-1.5" role="tablist" aria-label={t("pick")}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={t("slide", { n: i + 1 })}
              onClick={() => setIndex(i)}
              className={`size-2 rounded-full transition ${i === index ? "bg-teal" : "bg-line hover:bg-ink-faint"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-teal/40 hover:text-teal"
          aria-label={t("next")}
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-ink-faint">{t("disclaimer")}</p>
    </div>
  );
}
