"use client";

import { useId, useState, type CSSProperties } from "react";
import { formatPrice, priceFor, site } from "@/lib/site";
import { ArrowRightIcon, LockIcon, SearchIcon, TimerIcon, CheckIcon } from "./icons";
import { buttonPrimary } from "./ui";

function LaptopIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      aria-hidden="true"
      className={`transition-colors duration-200 ${active ? "text-accent" : "text-rule-strong/40"}`}
    >
      <rect x="4" y="1" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 17.5h26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const included = [
  { title: "Locked writing sessions", body: "Keyboard and notifications off until the timer ends.", Icon: TimerIcon },
  { title: "Scan with any phone", body: "Scan with your iPhone, or drop in photos from any phone.", Icon: CheckIcon },
  { title: "Search your handwriting", body: "Read on device. Never uploaded.", Icon: SearchIcon },
  { title: "Touch ID lock and export", body: "Keep the notebook private; take pages anywhere.", Icon: LockIcon },
];

export function PricingCalculator() {
  const { maxMacs, firstMac, extraMacDiscount } = site.pricing;
  const [macs, setMacs] = useState(1);
  const sliderId = useId();
  const { total, extraMac, savings, full } = priceFor(macs);
  const fill = ((macs - 1) / (maxMacs - 1)) * 100;
  const discountPct = Math.round(extraMacDiscount * 100);
  const macLabel = (n: number) => `${n} ${n === 1 ? "Mac" : "Macs"}`;

  return (
    <div className="mx-auto grid max-w-[960px] overflow-hidden rounded-[28px] border border-rule bg-paper-raised shadow-[0_1px_2px_rgba(30,27,22,0.04),0_32px_64px_-32px_rgba(30,50,90,0.28)] md:grid-cols-[1.25fr_1fr]">
      {/* Configure + price */}
      <div className="flex flex-col p-8 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs leading-4 font-semibold tracking-[0.08em] text-ink-muted uppercase">
            Lifetime license
          </span>
          <span className="rounded-full border border-rule px-2.5 py-0.5 text-xs font-medium text-ink-muted">
            One-time payment
          </span>
        </div>

        <div className="mt-6 flex items-end gap-3" aria-live="polite" aria-atomic="true">
          <span className="font-serif text-[80px] leading-[0.9] font-normal tracking-[-0.03em] tabular-nums">
            {formatPrice(total)}
          </span>
          <span className="mb-2 flex flex-col text-sm leading-5">
            {savings > 0 ? (
              <>
                <s className="text-ink-muted tabular-nums decoration-ink-muted/60">{formatPrice(full)}</s>
                <span className="font-medium text-success">Save {formatPrice(savings)}</span>
              </>
            ) : (
              <span className="text-ink-muted">
                {site.pricing.currency}
                <br />
                for 1 Mac
              </span>
            )}
          </span>
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <label htmlFor={sliderId} className="text-sm font-semibold">
              Number of Macs
            </label>
            <span className="text-sm font-medium tabular-nums text-ink-muted">{macLabel(macs)}</span>
          </div>

          <input
            id={sliderId}
            type="range"
            min={1}
            max={maxMacs}
            step={1}
            value={macs}
            onChange={(e) => setMacs(Number(e.target.value))}
            aria-valuetext={`${macLabel(macs)}, ${formatPrice(total)} total`}
            className="price-range"
            style={{ "--fill": `${fill}%` } as CSSProperties}
          />

          {/* Stops line up with the thumb: each label is exactly the thumb's width. */}
          <div className="mt-3 flex justify-between">
            {Array.from({ length: maxMacs }, (_, i) => {
              const n = i + 1;
              return (
                <button
                  key={n}
                  type="button"
                  tabIndex={-1}
                  onClick={() => setMacs(n)}
                  aria-label={`Choose ${macLabel(n)}`}
                  className="flex w-[22px] flex-col items-center gap-1.5 overflow-visible"
                >
                  <LaptopIcon active={n <= macs} />
                  <span
                    className={`text-xs tabular-nums transition-colors ${n === macs ? "font-semibold text-ink" : "text-ink-muted"}`}
                  >
                    {n}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-sm leading-[22px] text-ink-muted">
          {formatPrice(firstMac)} for your first Mac. Each additional Mac is {discountPct}% off, at{" "}
          <span className="text-ink tabular-nums">{formatPrice(extraMac)}</span>.
        </p>

        <form action="/api/checkout" method="post" className="mt-6 flex flex-col">
          <input type="hidden" name="macs" value={macs} />
          <button type="submit" className={buttonPrimary}>
            Buy for {macLabel(macs)}
            <ArrowRightIcon />
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-ink-muted">Pay once. No subscription, no account.</p>
      </div>

      {/* What's included */}
      <div className="border-t border-rule bg-paper p-8 sm:p-10 md:border-t-0 md:border-l">
        <h3 className="text-sm font-semibold">Everything in {site.name}</h3>
        <ul className="mt-6 flex flex-col">
          {included.map(({ title, body, Icon }) => (
            <li key={title} className="flex gap-3.5 border-t border-rule py-4 first:border-t-0 first:pt-0">
              <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon width={16} height={16} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[15px] font-medium">{title}</span>
                <span className="text-sm leading-5 text-ink-muted">{body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
