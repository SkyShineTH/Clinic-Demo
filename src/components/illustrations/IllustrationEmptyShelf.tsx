/** Low-stock / empty shelf — staff UI */
export function IllustrationEmptyShelf({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <rect x="24" y="28" width="152" height="8" rx="2" fill="#e8e6e1" />
      <rect x="24" y="72" width="152" height="8" rx="2" fill="#e8e6e1" />
      <rect x="40" y="40" width="36" height="28" rx="4" fill="#e0f2fe" stroke="#0d9488" strokeWidth="1" opacity="0.5" />
      <rect x="82" y="40" width="36" height="28" rx="4" fill="#fafaf8" stroke="#e8e6e1" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="124" y="40" width="36" height="28" rx="4" fill="#fafaf8" stroke="#e8e6e1" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="100" cy="118" r="14" fill="#fef3c7" stroke="#c9a227" strokeWidth="1" opacity="0.9" />
      <path d="M100 110v10M100 124v2" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
