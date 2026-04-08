/** Stylized implant section — educational abstract */
export function IllustrationImplant({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <path
        d="M60 20c-16 0-28 12-28 28v48c0 8 6 14 14 14h28c8 0 14-6 14-14V48c0-16-12-28-28-28z"
        fill="#ffffff"
        stroke="#e8e6e1"
        strokeWidth="1.25"
      />
      <path d="M60 36v64" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M48 52h24M48 64h24M48 76h20"
        stroke="#0d9488"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path d="M52 100h16l-4 12H56l-4-12z" fill="#c9a227" opacity="0.35" stroke="#c9a227" strokeWidth="1" />
    </svg>
  );
}
