import type { ComponentType } from "react";
import { formatPrice, site } from "@/lib/site";
import { type IconProps, ArrowRightIcon, CheckIcon, LockIcon, MoonIcon, PencilIcon, SearchIcon, TimerIcon } from "./icons";
import { SiteNav } from "./site-nav";
import { buttonGlass, buttonPrimary } from "./ui";


type Chip = {
  label: string;
  Icon: ComponentType<IconProps>;
  tone: string;
  position: string;
  delay: string;
};

const chips: Chip[] = [
  { label: "Keyboard locked", Icon: LockIcon, tone: "bg-accent-soft text-accent", position: "left-[4%] top-[120px]", delay: "0s" },
  { label: "30 minutes, no screen", Icon: TimerIcon, tone: "bg-ember-soft text-ember", position: "left-0 top-[260px]", delay: "-2s" },
  { label: "Notifications silenced", Icon: MoonIcon, tone: "bg-plum-soft text-plum", position: "right-[2%] top-[100px]", delay: "-4s" },
  { label: "3 pages saved", Icon: CheckIcon, tone: "bg-success-soft text-success", position: "right-0 top-[250px]", delay: "-1s" },
  { label: "Search your handwriting", Icon: SearchIcon, tone: "bg-sun-soft text-sun", position: "right-[9%] top-[380px]", delay: "-3s" },
];

function SidePage({ lines, className }: { lines: string[]; className: string }) {
  return (
    <div
      className={`ruled absolute left-1/2 rounded-2xl font-hand text-handwriting shadow-float ${className}`}
    >
      {lines.map((line, i) => (
        <div key={i} className={i === 0 ? "text-ink-muted" : undefined}>
          {line}
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <div className="px-3 pt-3">
      <header className="sky relative overflow-hidden rounded-t-[28px] px-5 pt-5">
        <SiteNav />

        <div id="top" className="mx-auto flex max-w-[1040px] flex-col items-center gap-6 px-2 pt-[88px] text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full py-1.5 pr-3.5 pl-2 text-sm leading-5 font-medium">
            <span className="inline-flex size-[22px] items-center justify-center rounded-full bg-accent text-on-accent">
              <PencilIcon width={12} height={12} strokeWidth={2.2} />
            </span>
            For people who think better with a pen
          </div>
          <h1 className="font-serif text-[clamp(46px,7.4vw,96px)] leading-[1.02] font-normal tracking-[-0.025em]">
            Think better on <em className="text-accent italic">paper.</em>
            <br />
            Leave the noise behind.
          </h1>
          <p className="max-w-[580px] text-lg leading-7 text-ink-soft">
            Press Start and your Mac steps back. Write by hand for thirty quiet minutes, then scan your pages into a
            private notebook you can search.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a href={site.buyUrl} className={buttonPrimary}>
              Get {site.name} for {formatPrice(site.pricing.firstMac)}
              <ArrowRightIcon />
            </a>
            <a href="#how" className={buttonGlass}>
              See how it works
            </a>
          </div>
          <p className="text-[13px] leading-[18px] font-medium text-[#3b352c]">
            One-time price · No account · Nothing leaves your Mac
          </p>
        </div>

        {/* Floating notebook pages */}
        {/* Phones show two pages (the entry and one behind it); wider screens show all three. */}
        <div aria-hidden="true" className="relative mx-auto mt-10 h-[400px] max-w-[1120px] sm:mt-14 sm:h-[470px]">
          <SidePage
            className="drift top-[70px] ml-[-330px] hidden h-[340px] w-[260px] -rotate-9 px-[26px] pt-[34px] text-[22px] leading-7 sm:block"
            lines={["Grateful for —", "chai before anyone", "was awake", "the old bookshop", "Ma's voice note"]}
          />
          <SidePage
            className="drift top-0 ml-[-36px] h-[250px] w-[200px] rotate-6 px-5 pt-6 text-[18px] leading-6 [animation-delay:-3.5s] sm:top-[70px] sm:ml-[70px] sm:rotate-8 sm:h-[340px] sm:w-[260px] sm:px-[26px] sm:pt-[34px] sm:text-[22px] sm:leading-7"
            lines={["Why does it slip?", "1. one more feature", "2. scared it's not", "   good enough", "3. ..."]}
          />
          <div className="ruled drift absolute top-[86px] left-1/2 ml-[-165px] h-[290px] w-[228px] -rotate-3 overflow-hidden rounded-2xl pt-7 pr-4 pl-9 font-hand text-[19px] leading-6 text-handwriting shadow-float-lg [animation-delay:-1.5s] sm:top-2.5 sm:ml-[-150px] sm:h-[400px] sm:w-[300px] sm:rotate-0 sm:pt-[38px] sm:pr-7 sm:pl-11 sm:text-2xl sm:leading-7">
            <div className="absolute inset-y-0 left-6 w-[1.5px] bg-ember opacity-60 sm:left-[30px]" />
            <div className="text-ink-muted">Sat, 17 Oct</div>
            <div>Slept badly, but the</div>
            <div>walk helped. Writing</div>
            <div>by hand feels slower.</div>
            <div>Good slower.</div>
            <div>&nbsp;</div>
            <div>What would a quiet</div>
            <div>month look like?</div>
          </div>

          {chips.map(({ label, Icon, tone, position, delay }) => (
            <div
              key={label}
              style={{ animationDelay: delay }}
              className={`glass drift absolute hidden items-center gap-2.5 rounded-full py-2 pr-4 pl-2 text-sm font-medium shadow-chip lg:flex ${position}`}
            >
              <span className={`inline-flex size-8 items-center justify-center rounded-full ${tone}`}>
                <Icon width={16} height={16} />
              </span>
              {label}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}
