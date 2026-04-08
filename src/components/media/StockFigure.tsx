import Image from "next/image";
import { getLocale } from "next-intl/server";
import type { StockPhotoMeta } from "@/lib/stock-photos";

export async function StockFigure({
  meta,
  className = "",
  imageClassName = "",
  aspectClassName = "aspect-[4/3]",
  frameClassName = "rounded-xl border border-line bg-line",
  sizes,
  priority,
  showCredit = true,
  creditClassName = "mt-1.5 text-[10px] leading-snug text-ink-faint",
}: {
  meta: StockPhotoMeta;
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
  /** Classes for the image frame (border/radius). Use border-0 rounded-none for flush card headers */
  frameClassName?: string;
  sizes: string;
  priority?: boolean;
  showCredit?: boolean;
  creditClassName?: string;
}) {
  const locale = await getLocale();
  const alt = locale === "en" && meta.altEn ? meta.altEn : meta.altTh;

  return (
    <figure className={`min-w-0 max-w-full ${className}`.trim()}>
      <div className={`relative w-full max-w-full overflow-hidden ${frameClassName} ${aspectClassName}`}>
        <Image
          src={meta.src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
          priority={priority}
        />
      </div>
      {showCredit && (
        <figcaption className={`break-words ${creditClassName}`.trim()}>
          <a
            href={meta.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-2 hover:text-teal"
          >
            Unsplash
          </a>
          {meta.photographer ? ` · ${meta.photographer}` : null}
        </figcaption>
      )}
    </figure>
  );
}
