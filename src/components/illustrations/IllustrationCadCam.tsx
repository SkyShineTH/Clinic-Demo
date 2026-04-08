/** CAD/CAM — tooth outline + precision grid */
export function IllustrationCadCam({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <rect x="24" y="24" width="152" height="112" rx="12" fill="#fafaf8" stroke="#e8e6e1" strokeWidth="1.25" />
      <rect x="32" y="32" width="136" height="6" rx="2" fill="#e0f2fe" opacity="0.65" />
      <rect x="32" y="42" width="100" height="5" rx="2" fill="#bfdbfe" opacity="0.45" />
      <rect x="32" y="50" width="120" height="5" rx="2" fill="#e0f2fe" opacity="0.45" />
      <path
        d="M100 48c12 0 22 10 22 22v16c0 8-6 14-14 14H92c-8 0-14-6-14-14V70c0-12 10-22 22-22z"
        fill="#ffffff"
        stroke="#0d9488"
        strokeWidth="1.5"
      />
      <path d="M88 72h24M100 64v24" stroke="#0d9488" strokeWidth="1" opacity="0.35" strokeLinecap="round" />
      <rect x="140" y="100" width="36" height="24" rx="4" fill="#c9a227" opacity="0.2" stroke="#c9a227" strokeWidth="1" />
      <path d="M148 108h20M148 114h14" stroke="#c9a227" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
    </svg>
  );
}
