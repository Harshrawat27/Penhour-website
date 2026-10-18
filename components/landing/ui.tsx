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

export const buttonPrimary =
  "inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-accent px-[26px] text-[15px] font-semibold text-on-accent shadow-[inset_0_1px_0_rgb(255_253_248/0.25)] transition-colors hover:bg-accent-hover";

export const buttonGlass =
  "glass inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold text-ink transition-colors hover:text-accent";

export const buttonOutline =
  "inline-flex h-12 items-center justify-center rounded-full border border-rule-strong px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-paper-sunken";
