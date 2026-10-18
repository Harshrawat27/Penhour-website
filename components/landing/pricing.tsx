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
        Requires macOS {site.macosVersion} or later. iPhone optional; any phone camera works for scanning.
      </p>
    </section>
  );
}
