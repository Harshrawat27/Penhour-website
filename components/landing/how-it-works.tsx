import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { ArrowRightIcon } from "./icons";
import { Eyebrow, SectionTitle } from "./ui";

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
  art: ReactNode;
}) {
  return (
    <article className="flex flex-col rounded-3xl border border-rule bg-paper-raised p-3">
      <div aria-hidden="true" className="h-[260px] overflow-hidden rounded-2xl">
        {art}
      </div>
      <div className="px-4 pt-6 pb-4">
        <div className={`text-[13px] font-semibold ${numberClass}`}>{number}</div>
        <h3 className="mt-1 mb-2 font-serif text-[28px] leading-[34px] font-normal">{title}</h3>
        <p className="text-[15px] leading-6 text-ink-muted">{body}</p>
      </div>
    </article>
  );
}

const StartArt = (
  <div className="flex h-full flex-col items-center justify-center gap-4 bg-linear-to-b from-[#c9d6ee] to-accent-soft">
    <div className="font-serif text-7xl leading-[72px] font-light tabular-nums">30:00</div>
    <div className="flex gap-1.5 text-[13px] font-medium">
      <span className="rounded-full bg-paper-raised px-3 py-1 ring-1 ring-accent ring-inset">Reflect</span>
      <span className="rounded-full bg-paper-raised/60 px-3 py-1">Rain</span>
    </div>
    <span className="rounded-full bg-accent px-[22px] py-2.5 text-sm font-semibold text-on-accent">Start writing</span>
  </div>
);

const WriteArt = (
  <div className="flex h-full items-center justify-center bg-linear-to-b from-[#f1d5c6] to-[#f7e7dd]">
    <div className="ruled relative mt-[60px] h-[230px] w-[210px] -rotate-3 rounded-xl pt-[22px] pr-4 pl-9 font-hand text-[21px] leading-7 text-handwriting shadow-page">
      <div className="absolute inset-y-0 left-6 w-[1.5px] bg-ember opacity-70" />
      <div>What happened</div>
      <div>today, and what did</div>
      <div>it mean to me?</div>
      <div>The hike. Getting</div>
    </div>
  </div>
);

const ScanArt = (
  <div className="flex h-full items-center justify-center gap-5 bg-linear-to-b from-[#cfe0d3] to-[#e3ede5]">
    <div className="h-[200px] w-[104px] rounded-[22px] bg-ink p-1.5">
      <div className="flex size-full items-center justify-center rounded-[17px] bg-paper-sunken">
        <div className="ruled-sm h-[86px] w-16 rounded ring-2 ring-success" />
      </div>
    </div>
    <ArrowRightIcon width={28} height={28} className="text-success" />
    <div className="flex flex-col gap-2">
      <div className="ruled-sm h-20 w-[62px] rounded shadow-page" />
      <div className="ruled-sm h-20 w-[62px] rounded shadow-page" />
    </div>
  </div>
);

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
          body={`Pick what kind of session you want, a sound and a length. ${site.name} silences notifications and locks the keyboard.`}
          art={StartArt}
        />
        <StepCard
          number="02"
          numberClass="text-ember"
          title="Write by hand"
          body="The screen shows a calm timer and one line of guidance. Nothing else. Your pen and notebook do the rest."
          art={WriteArt}
        />
        <StepCard
          number="03"
          numberClass="text-success"
          title="Scan it home"
          body="When time is up, scan your pages with your iPhone. They land in your notebook on the Mac, in order, ready to read again."
          art={ScanArt}
        />
      </div>
    </section>
  );
}
