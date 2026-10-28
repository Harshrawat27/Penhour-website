"use client";

import { useId, useState } from "react";
import { PlusIcon } from "./icons";

const faqs = [
  {
    q: "What if I need to leave a session early?",
    a: "Hold the emergency exit keys for a few seconds. They're always shown at the bottom of the session screen, and you can change them in Settings.",
  },
  {
    q: "Do I need a special notebook or pen?",
    a: "No. Any paper and any pen work. Darker ink and lined pages scan a little more clearly.",
  },
  {
    q: "Where are my pages stored?",
    a: "In a folder you choose, on your Mac. Documents by default. Nothing is sent to a server.",
  },
  {
    q: "How well does it read messy handwriting?",
    a: "Well enough to search most words. It can miss some, so the scanned page is always kept as the original.",
  },
  {
    q: "Can it stop me opening apps on my iPhone?",
    a: "Yes, if you'd like. Add PenHour Guard once in the Shortcuts app and pick the apps to guard. During a session, opening one sends you back to the Home Screen with a reminder. The rest of the time they open as usual. It needs Focus shared across your Apple devices.",
  },
  {
    q: "Is there an iPhone app?",
    a: "Not yet. PenHour for iPhone is on its way, along with a community of people who write by hand. The price goes up when they launch.",
  },
  {
    q: "Which Macs does it work on?",
    a: "Any Mac running macOS 14 Sonoma or later, Apple silicon or Intel. The better handwriting reader needs Apple silicon (M1 or newer); on Intel Macs, PenHour uses the built-in reader.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. Email contact@penhour.com within 7 days of buying, from the address you bought with, and we'll refund you in full.",
  },
  {
    q: "Can I use it without an iPhone?",
    a: "Yes. Take photos of your pages with any phone or camera, then drag them into PenHour or choose them from Finder.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="mx-auto max-w-[760px] scroll-mt-6 px-6 pt-[100px] pb-[120px]">
      <h2 className="mb-8 text-center font-serif text-[clamp(32px,3.8vw,44px)] leading-[1.1] font-normal">
        Questions, answered plainly
      </h2>
      <div className="border-t border-rule">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          const panelId = `${baseId}-panel-${i}`;
          const buttonId = `${baseId}-button-${i}`;
          return (
            <div key={f.q} className="border-b border-rule">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-[22px] text-left text-[17px] font-semibold transition-colors hover:text-accent"
                >
                  {f.q}
                  <span
                    className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`}
                  >
                    <PlusIcon width={12} height={12} />
                  </span>
                </button>
              </h3>
              {/* Height animates by moving the grid row from 0fr to 1fr. */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                inert={!isOpen}
                className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-1 pb-[22px] text-[15px] leading-6 text-ink-muted">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
