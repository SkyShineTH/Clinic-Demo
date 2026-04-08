/** Digital smile design — arc + teeth silhouette */
export function IllustrationDsd({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <path
        d="M24 96 Q100 40 176 96"
        stroke="#0d9488"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M44 92h16v20H44V92zm24-4h16v24H68V88zm24 2h16v22H92V90zm24-6h16v28h-16V84zm24 4h16v24h-16V88z"
        fill="#e0f2fe"
        stroke="#0d9488"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="52" cy="52" r="3" fill="#c9a227" opacity="0.7" />
      <circle cx="100" cy="36" r="2.5" fill="#c9a227" opacity="0.5" />
      <circle cx="148" cy="52" r="3" fill="#c9a227" opacity="0.7" />
      <path d="M100 120v20" stroke="#0d9488" strokeWidth="1.25" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
