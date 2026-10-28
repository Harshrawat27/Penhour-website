import { site } from "@/lib/site";
import { PricingCalculator } from "./pricing-calculator";
import { Eyebrow, SectionTitle } from "./ui";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1080px] scroll-mt-6 px-6 pt-[120px] pb-10">
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <Eyebrow>Pricing</Eyebrow>
        <SectionTitle>Pay once. Write for years.</SectionTitle>
        <p className="max-w-[520px] text-[17px] leading-7 text-ink-muted">
          One lifetime license. Add more Macs at 40% off each.
        </p>
      </div>

      <PricingCalculator />

      <p className="mt-5 text-center text-[13px] leading-[18px] text-ink-muted">
        Requires macOS {site.macosVersion} or later. iPhone optional; photos from any phone work too.
      </p>

      <aside id="coming-soon" className="mx-auto mt-10 scroll-mt-24 flex max-w-[620px] flex-col items-center gap-3 rounded-2xl border border-rule bg-plum-soft px-6 py-5 text-center sm:flex-row sm:gap-4 sm:text-left">
        <span className="shrink-0 rounded-full bg-paper-raised px-3 py-1 text-xs leading-4 font-semibold tracking-[0.06em] text-plum uppercase">
          Coming soon
        </span>
        <p className="text-[15px] leading-[22px] text-ink">
          PenHour for iPhone, and a community of people who write by hand.{" "}
          <span className="text-ink-muted">The price goes up when they launch.</span>
        </p>
      </aside>
    </section>
  );
}
