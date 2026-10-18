import type { ReactNode } from "react";
import { CheckIcon } from "./icons";

export function Eyebrow({ children, tone = "accent" }: { children: ReactNode; tone?: "accent" | "sun" }) {
  const tones = {
    accent: "bg-accent-soft text-accent",
    sun: "bg-sun-soft text-sun",
  };
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs leading-4 font-semibold tracking-[0.06em] uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-serif text-[clamp(36px,4.6vw,56px)] leading-[1.07] font-normal tracking-[-0.015em] text-balance ${className}`}
    >
      {children}
    </h2>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5 text-[15px] leading-[22px]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <CheckIcon className="mt-[3px] shrink-0 text-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * One button system for the whole site. Every button shares the same height,
 * radius, padding and type; only the fill changes.
 */
const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold whitespace-nowrap transition-colors";

export const buttonPrimary = `${buttonBase} bg-accent text-on-accent shadow-[inset_0_1px_0_rgb(255_253_248/0.25)] hover:bg-accent-hover`;

export const buttonGlass = `glass ${buttonBase} text-ink hover:text-accent`;

export const buttonOutline = `${buttonBase} border border-rule-strong text-ink hover:bg-paper-sunken`;
