/** Signature motif: subtle smile-line curve between sections */
export function SmileArcDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none relative h-6 w-full overflow-hidden text-teal/25 ${className}`}
      aria-hidden
    >
      <svg
        className="absolute left-1/2 top-0 h-8 w-[min(100%,48rem)] -translate-x-1/2"
        viewBox="0 0 800 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8 Q400 48 800 8"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
