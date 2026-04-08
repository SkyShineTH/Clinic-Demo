/** Calm clinic interior — abstract shapes, no identifiable people */
export function IllustrationHeroClinic({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ภาพประกอบบรรยากาศคลินิกแบบเส้นและสีพื้น"
    >
      <defs>
        <linearGradient id="heroWin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="heroFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fafaf8" />
          <stop offset="100%" stopColor="#e8e6e1" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" rx="24" fill="url(#heroFloor)" />
      <path
        d="M32 280 Q240 240 448 280 L448 360 L32 360 Z"
        fill="#e8e6e1"
        opacity="0.45"
      />
      <rect x="56" y="48" width="200" height="160" rx="16" fill="url(#heroWin)" stroke="#0d9488" strokeWidth="1.5" opacity="0.9" />
      <path d="M72 88h168M72 120h120M72 152h150" stroke="#0d9488" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
      <rect x="300" y="72" width="124" height="200" rx="20" fill="#ffffff" stroke="#e8e6e1" strokeWidth="1.5" />
      <path
        d="M328 108c0-8 6-14 14-14h36c8 0 14 6 14 14v72c0 8-6 14-14 14h-36c-8 0-14-6-14-14v-72z"
        fill="#e0f2fe"
        stroke="#0d9488"
        strokeWidth="1.25"
      />
      <ellipse cx="362" cy="200" rx="28" ry="10" fill="#0d9488" opacity="0.12" />
      <path
        d="M320 248h88c6 0 10 4 10 10v32H310v-32c0-6 4-10 10-10z"
        fill="#ffffff"
        stroke="#c9a227"
        strokeWidth="1.25"
        opacity="0.85"
      />
      <circle cx="120" cy="268" r="6" fill="#0d9488" opacity="0.35" />
      <path
        d="M108 292c12-20 36-20 48 0"
        stroke="#0d9488"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="400" cy="300" r="3" fill="#c9a227" opacity="0.6" />
    </svg>
  );
}
