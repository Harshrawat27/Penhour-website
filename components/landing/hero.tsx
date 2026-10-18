import type { ComponentType } from "react";
import { formatPrice, site } from "@/lib/site";
import { type IconProps, ArrowRightIcon, CheckIcon, LockIcon, MoonIcon, PencilIcon, SearchIcon, TimerIcon } from "./icons";
import { Logo } from "./logo";
import { buttonGlass, buttonPrimary } from "./ui";

const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

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
      className={`ruled absolute top-[70px] left-1/2 h-[340px] w-[260px] rounded-2xl px-[26px] pt-[34px] font-hand text-[22px] leading-7 text-handwriting shadow-float ${className}`}
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
        <nav
          aria-label="Main"
          className="glass mx-auto flex max-w-[1080px] items-center justify-between gap-4 rounded-full py-2 pr-2 pl-[18px]"
        >
          <a href="#top" className="text-ink">
            <Logo />
          </a>
          <div className="hidden gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-ink hover:text-accent">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={site.buyUrl}
            className="inline-flex h-10 items-center rounded-full bg-accent px-[18px] text-sm font-semibold whitespace-nowrap text-on-accent hover:bg-accent-hover"
          >
            Get<span className="hidden sm:inline">&nbsp;{site.name}</span>
          </a>
        </nav>

        <div id="top" className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-2 pt-[88px] text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full py-1.5 pr-3.5 pl-2 text-sm leading-5 font-medium">
            <span className="inline-flex size-[22px] items-center justify-center rounded-full bg-accent text-on-accent">
              <PencilIcon width={12} height={12} strokeWidth={2.2} />
            </span>
            For people who think better with a pen
          </div>
          <h1 className="font-serif text-[clamp(46px,7.4vw,96px)] leading-[1.02] font-normal tracking-[-0.025em]">
            Write on <em className="text-accent italic">paper.</em>
            <br />
            Keep it on your Mac.
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
        <div aria-hidden="true" className="relative mx-auto mt-14 h-[430px] max-w-[1120px] sm:h-[470px]">
          <SidePage
            className="drift ml-[-330px] -rotate-9"
            lines={["Grateful for —", "chai before anyone", "was awake", "the old bookshop", "Ma's voice note"]}
          />
          <SidePage
            className="drift ml-[70px] rotate-8 [animation-delay:-3.5s]"
            lines={["Why does it slip?", "1. one more feature", "2. scared it's not", "   good enough", "3. ..."]}
          />
          <div className="ruled drift absolute top-2.5 left-1/2 ml-[-150px] h-[400px] w-[300px] overflow-hidden rounded-2xl pt-[38px] pr-7 pl-11 font-hand text-2xl leading-7 text-handwriting shadow-float-lg [animation-delay:-1.5s]">
            <div className="absolute inset-y-0 left-[30px] w-[1.5px] bg-ember opacity-60" />
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
