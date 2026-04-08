import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Camera,
  Cpu,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ReviewCarousel } from "@/components/marketing/ReviewCarousel";
import { SmileArcDivider } from "@/components/marketing/SmileArcDivider";
import { LineButton } from "@/components/marketing/LineButton";
import { branches } from "@/lib/mock-data";
import { heroPhoto } from "@/lib/hero-photo";
import { StockFigure } from "@/components/media/StockFigure";
import {
  branchPhotos,
  galleryPhotos,
  homeServicePhotos,
  reviewSlides,
  teamGroupPhoto,
  techPhotos,
} from "@/lib/stock-photos";

export async function HomeView() {
  const locale = await getLocale();
  const t = await getTranslations("Home");
  const tCommon = await getTranslations("Common");
  const heroAlt = locale === "en" && heroPhoto.altEn ? heroPhoto.altEn : heroPhoto.altTh;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-soft/80 via-canvas to-canvas">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid lg:grid-cols-12 lg:gap-10 lg:pt-20">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium text-teal">{t("hero.eyebrow")}</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
              {t("hero.title")}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">{t("hero.body")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-hover"
              >
                {tCommon("bookOnline")}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <LineButton label={tCommon("lineChat")} />
            </div>
            <ul className="mt-10 flex flex-wrap gap-6 text-sm text-ink-muted">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 shrink-0 text-teal" aria-hidden />
                {t("hero.bulletSterilization")}
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="size-4 shrink-0 text-teal" aria-hidden />
                {t("hero.bulletDigital")}
              </li>
            </ul>
          </div>
          <div className="relative mt-12 lg:col-span-6 lg:mt-0">
            <figure className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
              <div className="relative aspect-[4/3] w-full bg-line">
                <Image
                  src={heroPhoto.src}
                  alt={heroAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="break-words border-t border-line bg-sky-soft/40 px-4 py-3 text-xs leading-relaxed text-ink-muted sm:px-5">
                <span className="font-medium text-ink">{t("hero.photoCredit")}</span>
                {" · "}
                <a
                  href={heroPhoto.photoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal"
                >
                  {heroPhoto.title}
                </a>
                {" · "}
                {t("hero.photoBy")}{" "}
                <a
                  href={heroPhoto.photographerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal"
                >
                  {heroPhoto.photographer}
                </a>{" "}
                {t("hero.onUnsplash")}{" "}
                <a
                  href={heroPhoto.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal"
                >
                  Unsplash
                </a>
                <span className="mt-1 block text-ink-faint">{t("hero.photoDisclaimer")}</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <SmileArcDivider />
      </section>

      <HomeServices />
      <HomeTech />
      <HomeTeam />
      <HomeGallery />
      <HomeReviews />
      <HomeBranches />
      <HomeFaqTeaser />
      <HomeTrustStrip />
    </>
  );
}

async function HomeServices() {
  const t = await getTranslations("Home");
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" id="services">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-ink">{t("services.title")}</h2>
        <p className="mt-2 text-ink-muted">{t("services.subtitle")}</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition hover:border-teal/30 lg:col-span-7">
          <Link href="/services#implants" className="block">
            <StockFigure
              meta={homeServicePhotos.implants}
              aspectClassName="aspect-[16/10]"
              frameClassName="rounded-none border-0 bg-line"
              sizes="(max-width: 1024px) 100vw, 60vw"
              showCredit={false}
            />
            <div className="flex min-w-0 flex-col gap-4 p-6 pt-5 sm:p-8 sm:pt-6 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gold">{t("services.focus")}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink group-hover:text-teal">{t("services.implantsTitle")}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">{t("services.implantsBody")}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3 self-start sm:self-auto md:self-start">
                <Stethoscope className="hidden size-9 text-teal/70 md:block" aria-hidden />
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-8 pb-6 text-sm font-semibold text-teal">
              {t("services.seeDetails")} <ArrowRight className="size-4" />
            </span>
          </Link>
          <p className="border-t border-line px-8 py-3 text-[10px] text-ink-faint">
            <a
              href={homeServicePhotos.implants.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal"
            >
              {t("services.creditUnsplash")}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-line bg-sky-soft/40 transition hover:bg-sky-soft/70">
            <Link href="/services#veneers" className="flex flex-1 flex-col">
              <StockFigure
                meta={homeServicePhotos.veneers}
                aspectClassName="aspect-[16/9]"
                frameClassName="rounded-none border-0 bg-line"
                sizes="(max-width: 1024px) 100vw, 40vw"
                showCredit={false}
              />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-semibold text-ink">{t("services.veneersTitle")}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{t("services.veneersBody")}</p>
                </div>
                <Sparkles className="mt-4 size-6 text-gold" aria-hidden />
              </div>
            </Link>
            <p className="border-t border-line px-6 py-3 text-[10px] text-ink-faint">
              <a
                href={homeServicePhotos.veneers.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-teal"
              >
                Unsplash
              </a>
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-dashed border-line bg-surface transition hover:border-teal/40">
            <Link href="/services#ortho" className="block">
              <StockFigure
                meta={homeServicePhotos.ortho}
                aspectClassName="aspect-[16/9]"
                frameClassName="rounded-none border-0 bg-line"
                sizes="(max-width: 1024px) 100vw, 40vw"
                showCredit={false}
              />
              <div className="p-6 pt-4">
                  <h3 className="font-semibold text-ink">{t("services.orthoTitle")}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{t("services.orthoBody")}</p>
              </div>
            </Link>
            <p className="border-t border-dashed border-line px-6 py-3 text-[10px] text-ink-faint">
              <a
                href={homeServicePhotos.ortho.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-teal"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

async function HomeTech() {
  const t = await getTranslations("Home");
  const items = [
    { icon: Camera, titleKey: "scanTitle" as const, bodyKey: "scanBody" as const, photo: techPhotos[0]! },
    { icon: Cpu, titleKey: "cadTitle" as const, bodyKey: "cadBody" as const, photo: techPhotos[1]! },
    { icon: Sparkles, titleKey: "dsdTitle" as const, bodyKey: "dsdBody" as const, photo: techPhotos[2]! },
  ];
  return (
    <section className="border-y border-line bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-ink">{t("tech.title")}</h2>
        <p className="mt-2 max-w-2xl text-ink-muted">{t("tech.subtitle")}</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.titleKey} className="rounded-2xl border border-line bg-canvas p-6">
              <StockFigure
                meta={item.photo}
                aspectClassName="aspect-[16/10]"
                sizes="(max-width: 640px) 100vw, 33vw"
                showCredit={false}
              />
              <item.icon className="mt-4 size-8 text-teal" aria-hidden />
              <h3 className="mt-4 font-semibold text-ink">{t(`tech.${item.titleKey}`)}</h3>
              <p className="mt-2 text-sm text-ink-muted">{t(`tech.${item.bodyKey}`)}</p>
              <p className="mt-2 text-[10px] text-ink-faint">
                <a
                  href={item.photo.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-teal"
                >
                  Unsplash
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/technology" className="text-sm font-semibold text-teal hover:underline">
            {t("tech.readMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}

async function HomeTeam() {
  const t = await getTranslations("Home");
  const doctors = [
    { nameKey: "d1name" as const, roleKey: "d1role" as const },
    { nameKey: "d2name" as const, roleKey: "d2role" as const },
    { nameKey: "d3name" as const, roleKey: "d3role" as const },
  ];
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ink">{t("team.title")}</h2>
            <p className="mt-2 text-ink-muted">{t("team.subtitle")}</p>
          </div>
          <Link href="/team" className="text-sm font-semibold text-teal hover:underline">
            {t("team.seeAll")}
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-teal/35 focus-within:border-teal/35">
          <Link
            href="/team"
            className="group block text-inherit no-underline outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            aria-label={t("team.cardAria")}
          >
            <StockFigure
              meta={teamGroupPhoto}
              aspectClassName="aspect-[16/9] lg:aspect-[2/1]"
              frameClassName="rounded-none border-0 bg-line"
              sizes="(max-width: 1024px) 100vw, 1152px"
              showCredit={false}
            />
            <div className="grid gap-px bg-line sm:grid-cols-3">
              {doctors.map((d) => (
                <div key={d.nameKey} className="bg-surface p-5 transition-colors group-hover:bg-sky-soft/25">
                  <p className="font-semibold text-ink group-hover:text-teal">{t(`team.${d.nameKey}`)}</p>
                  <p className="mt-1 text-sm text-ink-muted">{t(`team.${d.roleKey}`)}</p>
                </div>
              ))}
            </div>
          </Link>
          <p className="border-t border-line px-5 py-3 text-[10px] text-ink-faint">
            <a
              href={teamGroupPhoto.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal"
            >
              {t("team.creditLine")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

async function HomeGallery() {
  const t = await getTranslations("Home");
  return (
    <section className="bg-sky-soft/30 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-ink">{t("gallery.title")}</h2>
        <p className="mt-2 max-w-3xl text-sm text-ink-muted">{t("gallery.body")}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryPhotos.slice(0, 4).map((meta, i) => (
            <div key={meta.src + i} className="overflow-hidden rounded-xl border border-line bg-surface">
              <StockFigure
                meta={meta}
                aspectClassName="aspect-square"
                frameClassName="rounded-none border-0 bg-line"
                sizes="(max-width: 640px) 50vw, 25vw"
                showCredit={false}
              />
              <p className="border-t border-line py-2 text-center text-[10px] text-ink-faint">
                <a href={meta.pageUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  Unsplash
                </a>
              </p>
            </div>
          ))}
        </div>
        <Link href="/gallery" className="mt-6 inline-block text-sm font-semibold text-teal hover:underline">
          {t("gallery.cta")}
        </Link>
      </div>
    </section>
  );
}

async function HomeReviews() {
  const t = await getTranslations("Home");
  return (
    <section className="mx-auto w-full min-w-0 max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold text-ink">{t("reviews.title")}</h2>
      <p className="mt-2 max-w-2xl text-sm text-ink-muted">{t("reviews.subtitle")}</p>
      <div className="mt-8 min-w-0">
        <ReviewCarousel slides={reviewSlides} />
      </div>
    </section>
  );
}

async function HomeBranches() {
  const t = await getTranslations("Home");
  return (
    <section className="border-t border-line bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-ink">{t("branches.title")}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {branches.map((b) => (
            <div key={b.id} className="overflow-hidden rounded-2xl border border-line bg-surface">
              <StockFigure
                meta={branchPhotos[b.id]!}
                aspectClassName="aspect-[4/3]"
                frameClassName="rounded-none border-0 bg-line"
                sizes="(max-width: 640px) 100vw, 33vw"
                showCredit={false}
              />
              <div className="p-6">
                <p className="font-semibold text-ink">{b.nameTh}</p>
                <p className="text-sm text-ink-muted">{b.area}</p>
                <p className="mt-3 text-sm text-ink-muted">{b.hours}</p>
                <p className="mt-2 text-sm text-teal">{b.phone}</p>
                <p className="mt-2 text-[10px] text-ink-faint">
                  <a
                    href={branchPhotos[b.id]!.pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-teal"
                  >
                    Unsplash
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/branches" className="text-sm font-semibold text-teal hover:underline">
            {t("branches.mapCta")}
          </Link>
          <Link href="/booking" className="text-sm font-semibold text-teal hover:underline">
            {t("branches.bookCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

async function HomeFaqTeaser() {
  const t = await getTranslations("Home");
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold text-ink">{t("faqTeaser.title")}</h2>
      <dl className="mt-8 space-y-4">
        <div className="rounded-xl border border-line bg-surface p-5">
          <dt className="font-semibold text-ink">{t("faqTeaser.q1")}</dt>
          <dd className="mt-2 text-sm text-ink-muted">{t("faqTeaser.a1")}</dd>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5">
          <dt className="font-semibold text-ink">{t("faqTeaser.q2")}</dt>
          <dd className="mt-2 text-sm text-ink-muted">{t("faqTeaser.a2")}</dd>
        </div>
      </dl>
      <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-teal hover:underline">
        {t("faqTeaser.seeAll")}
      </Link>
    </section>
  );
}

async function HomeTrustStrip() {
  const locale = await getLocale();
  const t = await getTranslations("Home");
  const tags = ["t1", "t2", "t3", "t4"] as const;
  return (
    <section className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {techPhotos.map((meta, i) => (
            <div
              key={meta.src + i}
              className="relative size-14 overflow-hidden rounded-xl border border-line opacity-90 sm:size-16"
            >
              <Image
                src={meta.src}
                alt={locale === "en" && meta.altEn ? meta.altEn : meta.altTh}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 opacity-70 sm:gap-x-8 sm:gap-y-3">
          {tags.map((k) => (
            <span key={k} className="text-center text-xs font-medium uppercase tracking-wide text-ink-muted">
              {t(`trustStrip.${k}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
