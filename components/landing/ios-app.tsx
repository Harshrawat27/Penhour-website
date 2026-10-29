import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { ArrowRightIcon, MoonIcon, PencilIcon, TimerIcon } from "./icons";
import { Eyebrow } from "./ui";

const rules: { when: string; title: string; body: string; icon: ReactNode }[] = [
  {
    when: "7:00 am",
    title: "Write before you scroll",
    body: "Social apps stay locked until your morning writing is done.",
    icon: <PencilIcon size={18} />,
  },
  {
    when: "Writing session",
    title: "Only what you need",
    body: "Pick the apps that pull you away. They stay shut until the timer ends.",
    icon: <TimerIcon size={18} />,
  },
  {
    when: "10:00 pm",
    title: "No feeds before bed",
    body: "Social media rests for the last hour of your day. Wind down on paper.",
    icon: <MoonIcon size={18} />,
  },
];

/** What the rules look like on the phone. */
const notifications = [
  { when: "now", title: "Instagram can wait", body: "Opens after your morning writing. 12 minutes to go.", icon: <PencilIcon size={18} /> },
  { when: "Yesterday", title: "Wind-down at 10", body: "Feeds rest for the last hour of your day.", icon: <MoonIcon size={18} /> },
  { when: "Yesterday", title: "Session done · 30 min", body: "3 pages written. Your apps are back.", icon: <TimerIcon size={18} /> },
];

/** A lock screen showing the rules at work. Decorative; the rules are listed in the copy. */
function LockScreen() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto aspect-[715/1476] w-full max-w-[320px] rounded-[48px] bg-[#121110] p-3 shadow-[0_0_0_2px_#3a3630,0_40px_80px_rgba(30,50,90,0.28),0_12px_24px_rgba(30,50,90,0.16)]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[38px] bg-[linear-gradient(180deg,#2f4a7a_0%,#6d89bc_55%,#c4d2ea_100%)] px-4 pt-4 pb-2">
        <div className="mx-auto h-[26px] w-[96px] rounded-full bg-[#121110]" />
        <p className="mt-5 text-center text-[13px] font-medium text-white/80">Thursday 29 October</p>
        <p className="text-center font-serif text-[64px] leading-[1.05] font-normal text-white">7:02</p>
        <div className="mt-auto flex flex-col gap-2.5">
          {notifications.map((r) => (
            <div key={r.title} className="flex items-start gap-3 rounded-[20px] bg-white/80 p-3 backdrop-blur-md">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-accent-soft text-accent">
                {r.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[13px] leading-[18px] font-semibold text-ink">{r.title}</p>
                  <p className="shrink-0 text-[11px] leading-4 text-ink-muted">{r.when}</p>
                </div>
                <p className="mt-0.5 text-[12px] leading-4 text-ink-soft">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Flashlight and camera, then the home indicator, as on a real lock screen. */}
        <div className="mt-5 flex justify-between px-4">
          <span className="size-11 rounded-full bg-black/25 backdrop-blur-md" />
          <span className="size-11 rounded-full bg-black/25 backdrop-blur-md" />
        </div>
        <div className="mx-auto mt-3 h-[5px] w-[120px] rounded-full bg-black/60" />
      </div>
    </div>
  );
}

/** PenHour for iPhone, announced ahead of launch. */
export function IosApp() {
  return (
    <section id="ios" className="mx-auto max-w-[1180px] scroll-mt-6 px-6 py-[100px]">
      <div className="flex flex-wrap items-center gap-16">
        <div className="flex flex-[1_1_380px] flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Eyebrow tone="plum">{site.name} for iPhone</Eyebrow>
            <span className="rounded-full border border-plum/30 px-3 py-1 text-xs leading-4 font-semibold tracking-[0.06em] text-plum uppercase">
              Coming soon
            </span>
          </div>
          <h2 className="font-serif text-[clamp(36px,4.4vw,52px)] leading-[1.08] font-normal tracking-[-0.015em] text-balance">
            Write first. <em className="text-accent italic">Scroll later.</em>
          </h2>
          <p className="text-[17px] leading-7 text-ink-muted">
            Everything on your phone is built to win your attention, and it&apos;s hard to resist alone. So let&apos;s
            fight it together, and give that time back to writing.
          </p>
          <ul className="flex flex-col gap-4">
            {rules.map((r) => (
              <li key={r.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  {r.icon}
                </span>
                <div>
                  <p className="text-[15px] leading-[22px] font-semibold">{r.title}</p>
                  <p className="text-[15px] leading-[22px] text-ink-muted">{r.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-2 text-[13px] leading-[18px] font-medium text-accent hover:bg-[#cfd9ec]"
          >
            iOS app coming soon · Lock in today&apos;s price
            <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="mx-auto w-full max-w-[400px] flex-[1_1_320px]">
          <LockScreen />
        </div>
      </div>
    </section>
  );
}
