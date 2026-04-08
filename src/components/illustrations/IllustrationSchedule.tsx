/** Schedule grid abstract */
export function IllustrationSchedule({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <rect x="16" y="16" width="248" height="168" rx="12" fill="#ffffff" stroke="#e8e6e1" strokeWidth="1.25" />
      <path d="M56 16v168M112 16v168M168 16v168M224 16v168" stroke="#e8e6e1" strokeWidth="1" />
      <path d="M16 56h248M16 96h248M16 136h248" stroke="#e8e6e1" strokeWidth="1" />
      <rect x="64" y="64" width="40" height="24" rx="4" fill="#e0f2fe" stroke="#0d9488" strokeWidth="1" />
      <rect x="120" y="104" width="40" height="24" rx="4" fill="#e0f2fe" stroke="#0d9488" strokeWidth="1" opacity="0.6" />
      <path d="M180 72h32M180 80h24" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
