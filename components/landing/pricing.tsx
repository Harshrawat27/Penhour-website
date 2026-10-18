import { site } from "@/lib/site";
import { buttonOutline, buttonPrimary, CheckList, Eyebrow, SectionTitle } from "./ui";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1080px] scroll-mt-6 px-6 pt-[120px] pb-10">
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <Eyebrow>Pricing</Eyebrow>
        <SectionTitle>Try it for free. Keep it if it helps.</SectionTitle>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex max-w-[420px] flex-[1_1_320px] flex-col gap-5 rounded-3xl border border-rule bg-paper-raised p-9">
          <h3 className="text-[15px] font-semibold">Free trial</h3>
          <div className="font-serif text-[56px] leading-[60px]">Free</div>
          <p className="text-[15px] leading-6 text-ink-muted">
            Every feature for {site.trialLength}. No account, no card. Your pages stay yours if you stop.
          </p>
          <a href={site.downloadUrl} className={`${buttonOutline} mt-auto`}>
            Download for Mac
          </a>
        </div>

        <div className="sky-soft max-w-[420px] flex-[1_1_320px] rounded-3xl p-[3px]">
          <div className="flex h-full flex-col gap-5 rounded-[22px] bg-paper-raised/85 p-[33px]">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[15px] font-semibold">{site.name} license</h3>
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-on-accent">
                For your Mac
              </span>
            </div>
            <div className="font-serif text-[56px] leading-[60px]">{site.price}</div>
            <CheckList
              items={[
                "Locked writing sessions with sounds",
                "iPhone and QR scanning",
                "Searchable handwriting, on device",
                "Touch ID lock and export",
              ]}
            />
            <a href={site.buyUrl} className={`${buttonPrimary} mt-auto`}>
              Buy a license
            </a>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-[13px] leading-[18px] text-ink-muted">
        Requires macOS {site.macosVersion} or later. iPhone optional; any phone camera works for scanning.
      </p>
    </section>
  );
}
