import { site } from "@/lib/site";

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="7" fill="#FFFDF8" stroke="#E2D9C9" />
      <path d="M9 4v20" stroke="#B5532A" strokeWidth="1.5" />
      <path d="M5 10h18M5 15h18M5 20h18" stroke="#D3DDEE" strokeWidth="1.2" />
      <path
        d="M12 13.2c1.6-1.8 3.4 1 5-.6s2.6-1.2 3.6-.4"
        stroke="#2F4A7A"
        strokeWidth="1.7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 whitespace-nowrap font-serif text-xl font-medium ${className}`}>
      <LogoMark size={size} />
      {site.name}
    </span>
  );
}
