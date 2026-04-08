/** Abstract 3D scan / cone — digital dentistry */
export function IllustrationScan3D({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <ellipse cx="100" cy="128" rx="72" ry="14" stroke="#0d9488" strokeWidth="1.25" opacity="0.35" />
      <path
        d="M100 24 L160 120 L40 120 Z"
        fill="#e0f2fe"
        stroke="#0d9488"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M100 40 L148 112 L52 112 Z"
        fill="#ffffff"
        stroke="#0d9488"
        strokeWidth="1"
        opacity="0.9"
      />
      <path
        d="M88 72c8-4 16-4 24 0"
        stroke="#c9a227"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="100" cy="78" r="10" stroke="#0d9488" strokeWidth="1.25" fill="none" opacity="0.5" />
    </svg>
  );
}
