"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { site } from "@/lib/site";
import { ArrowRightIcon, CheckIcon, LockIcon, MoonIcon } from "./icons";
import { Eyebrow, SectionTitle } from "./ui";

/**
 * A card whose illustration plays when it's "active":
 * on hover with a mouse, or when scrolled into view on touch screens.
 * The motion itself lives in globals.css under "How it works".
 */
function StepCard({
  number,
  numberClass,
  title,
  body,
  art,
}: {
  number: string;
  numberClass: string;
  title: string;
  body: string;
  art: (active: boolean) => ReactNode;
}) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Touch screens have no hover: while the card is mostly on screen, replay its scene on a loop
  // (play for a few seconds, reset for a beat, play again).
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches || !ref.current) return;
    const loop = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const play = () => {
      setActive(true);
      if (!loop) return;
      timer = setTimeout(() => {
        setActive(false);
        timer = setTimeout(play, 700);
      }, 6000);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting) play();
        else setActive(false);
      },
      { threshold: 0.6 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <article
      ref={ref}
      data-active={active}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="step-card flex flex-col rounded-3xl border border-rule bg-paper-raised p-3"
    >
      <div aria-hidden="true" className="relative h-[260px] overflow-hidden rounded-2xl">
        {art(active)}
      </div>
      <div className="px-4 pt-6 pb-4">
        <div className={`text-[13px] font-semibold ${numberClass}`}>{number}</div>
        <h3 className="mt-1 mb-2 font-serif text-[28px] leading-[34px] font-normal">{title}</h3>
        <p className="text-[15px] leading-6 text-ink-muted">{body}</p>
      </div>
    </article>
  );
}

/* ---------- 01 · Press Start ---------- */

const SESSION = 30 * 60;

function useCountdown(active: boolean) {
  // Seconds elapsed since the cursor "clicked" Start. Only shown while active.
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (!active || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      setElapsed(1);
      interval = setInterval(() => setElapsed((s) => s + 1), 1000);
    }, 1000);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
      setElapsed(0);
    };
  }, [active]);
  const left = active ? Math.max(0, SESSION - elapsed) : SESSION;
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function Toast({ children, className, delay }: { children: ReactNode; className: string; delay: string }) {
  return (
    <div
      style={{ transitionDelay: delay } as CSSProperties}
      className={`pop glass absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full py-1.5 pr-3 pl-1.5 text-xs font-medium whitespace-nowrap shadow-chip ${className}`}
    >
      {children}
    </div>
  );
}

function StartArt({ active }: { active: boolean }) {
  const time = useCountdown(active);
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-linear-to-b from-[#c9d6ee] to-accent-soft">
      <Toast className="top-4" delay="0.95s">
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-plum-soft text-plum">
          <MoonIcon width={12} height={12} />
        </span>
        Notifications silenced
      </Toast>

      <div className="font-serif text-7xl leading-[72px] font-light tabular-nums">{time}</div>
      <div className="flex gap-1.5 text-[13px] font-medium">
        <span className="rounded-full bg-paper-raised px-3 py-1 ring-1 ring-accent ring-inset">Reflect</span>
      </div>

      <div className="relative flex h-10 w-[200px] items-center justify-center">
        <span className="start-btn rounded-full bg-accent px-[22px] py-2.5 text-sm font-semibold text-on-accent">
          Start writing
        </span>
        <div className="start-progress absolute inset-x-4 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-paper-raised/70">
          <div className="start-progress-fill h-full rounded-full bg-ember" />
        </div>
        {/* Cursor: tip sits on the button's centre. */}
        <svg className="start-cursor absolute top-1/2 left-1/2" width="22" height="26" viewBox="0 0 22 26">
          <path
            d="M2 2l16.5 11.2-7.2 1.4 4.3 8.2-3 1.6-4.3-8.3L2.9 21.5z"
            fill="#1e1b16"
            stroke="#fffdf8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Toast className="bottom-4" delay="1.15s">
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-accent-soft text-accent">
          <LockIcon width={12} height={12} />
        </span>
        Keyboard locked
      </Toast>
    </div>
  );
}

/* ---------- 02 · Write by hand ---------- */

function WriteArt() {
  return (
    <div className="flex h-full items-center justify-center bg-linear-to-b from-[#f1d5c6] to-[#f7e7dd]">
      <div className="write-page ruled relative mt-[60px] h-[230px] w-[230px] -rotate-3 rounded-xl pt-[22px] pr-4 pl-9 font-hand text-[21px] leading-7 text-handwriting shadow-page">
        <div className="absolute inset-y-0 left-6 w-[1.5px] bg-ember opacity-70" />
        <div className="hand-line hand-line-1 w-max">What happened today,</div>
        <div className="hand-line hand-line-2 w-max">and what did it mean</div>
        <div className="hand-line hand-line-3 w-max">to me?</div>

        {/* Fountain pen; its nib is at this element's top-left corner. */}
        <div className="pen absolute top-0 left-0">
          <svg width="74" height="74" viewBox="0 0 74 74" className="absolute top-0 left-0 -translate-y-full">
            <path d="M3 71l7-16 9 9z" fill="#2f4a7a" />
            <path d="M10 55L50 15l9 9-40 40z" fill="#1e1b16" />
            <path d="M50 15l8-8a4 4 0 0 1 6 0l3 3a4 4 0 0 1 0 6l-8 8z" fill="#2f4a7a" />
            <path d="M16 58l34-34" stroke="#fffdf8" strokeOpacity="0.25" strokeWidth="1.5" />
            <path d="M3 71l3.5-8" stroke="#fffdf8" strokeOpacity="0.6" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------- 03 · Scan it home ---------- */

function ScanArt() {
  return (
    <div className="flex h-full items-center justify-center gap-5 bg-linear-to-b from-[#cfe0d3] to-[#e3ede5]">
      <div className="relative h-[200px] w-[104px] rounded-[22px] bg-ink p-1.5">
        <div className="relative flex size-full items-center justify-center overflow-hidden rounded-[17px] bg-paper-sunken">
          <div className="ruled-sm h-[86px] w-16 rounded ring-2 ring-success" />
          <div className="scan-line absolute inset-x-2 h-[2px] rounded-full bg-success shadow-[0_0_12px_2px_rgba(63,107,74,0.45)]" />
          <div className="scan-flash absolute inset-0 bg-paper-raised" />
        </div>
      </div>

      <ArrowRightIcon width={28} height={28} className="scan-arrow text-success" />

      <div className="relative flex flex-col gap-2">
        <div className="relative h-20 w-[62px] rounded border-[1.5px] border-dashed border-success/40">
          <div className="scan-page scan-page-1 ruled-sm absolute -inset-[1.5px] rounded shadow-page" />
        </div>
        <div className="relative h-20 w-[62px] rounded border-[1.5px] border-dashed border-success/40">
          <div className="scan-page scan-page-2 ruled-sm absolute -inset-[1.5px] rounded shadow-page" />
        </div>
        <div
          style={{ transitionDelay: "2.4s" }}
          className="pop absolute -top-9 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-success px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-on-accent"
        >
          <CheckIcon width={11} height={11} />2 pages saved
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1180px] scroll-mt-6 px-6 pt-[120px] pb-10">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <Eyebrow>How it works</Eyebrow>
        <SectionTitle className="max-w-[720px]">Three steps. One of them is just writing.</SectionTitle>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        <StepCard
          number="01"
          numberClass="text-accent"
          title="Press Start"
          body={`Pick what kind of session you want and how long. ${site.name} silences notifications and locks the keyboard.`}
          art={(active) => <StartArt active={active} />}
        />
        <StepCard
          number="02"
          numberClass="text-ember"
          title="Write by hand"
          body="The screen shows a calm timer and one line of guidance. Nothing else. Your pen and notebook do the rest."
          art={() => <WriteArt />}
        />
        <StepCard
          number="03"
          numberClass="text-success"
          title="Scan it home"
          body="When time is up, scan your pages with your iPhone. They land in your notebook on the Mac, in order, ready to read again."
          art={() => <ScanArt />}
        />
      </div>
    </section>
  );
}
