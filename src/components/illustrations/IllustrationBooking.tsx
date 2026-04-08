/** Booking — calendar + gentle tooth mark */
export function IllustrationBooking({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <rect x="32" y="40" width="176" height="140" rx="16" fill="#ffffff" stroke="#e8e6e1" strokeWidth="1.5" />
      <path d="M32 72h176" stroke="#0d9488" strokeWidth="2" opacity="0.25" />
      <path d="M72 32v32M168 32v32" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
      <rect x="56" y="92" width="28" height="24" rx="4" fill="#e0f2fe" stroke="#0d9488" strokeWidth="1" />
      <rect x="96" y="92" width="28" height="24" rx="4" fill="#ffffff" stroke="#e8e6e1" strokeWidth="1" />
      <rect x="136" y="92" width="28" height="24" rx="4" fill="#ffffff" stroke="#e8e6e1" strokeWidth="1" />
      <rect x="56" y="124" width="28" height="24" rx="4" fill="#ffffff" stroke="#e8e6e1" strokeWidth="1" />
      <rect x="96" y="124" width="28" height="24" rx="4" fill="#c9a227" fillOpacity="0.2" stroke="#c9a227" strokeWidth="1" />
      <path
        d="M176 148c6-10 18-10 24 0"
        stroke="#0d9488"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
