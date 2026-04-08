import type { Branch } from "@/lib/types";

function osmEmbedUrl(lat: number, lng: number) {
  const d = 0.012;
  const bbox = `${lng - d},${lat - d},${lng + d},${lat + d}`;
  const params = new URLSearchParams({
    bbox,
    layer: "mapnik",
    marker: `${lat},${lng}`,
  });
  return `https://www.openstreetmap.org/export/embed.html?${params.toString()}`;
}

function osmOpenUrl(lat: number, lng: number) {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`;
}

export function BranchMapEmbed({
  branch,
  iframeTitle,
  mapNote,
  openMapLabel,
}: {
  branch: Branch;
  iframeTitle: string;
  mapNote: string;
  openMapLabel: string;
}) {
  const { lat, lng } = branch.map;

  return (
    <div className="mt-4 space-y-2">
      <div className="relative h-56 w-full overflow-hidden rounded-xl border border-line bg-canvas sm:h-64">
        <iframe
          title={iframeTitle}
          src={osmEmbedUrl(lat, lng)}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-ink-faint">
        <span>{mapNote}</span>
        <a
          href={osmOpenUrl(lat, lng)}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-medium text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal"
        >
          {openMapLabel}
        </a>
      </div>
    </div>
  );
}
