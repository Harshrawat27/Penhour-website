import { site } from "@/lib/site";
import { AppleIcon } from "./icons";
import { Logo } from "./logo";
import { buttonGlass, buttonPrimary } from "./ui";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#how", label: "How it works" },
      { href: "/#pricing", label: "Pricing" },
      { href: site.downloadUrl, label: "Download" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/#faq", label: "FAQ" },
      { href: `mailto:${site.contactEmail}`, label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of use" },
    ],
  },
];

export function Closing() {
  return (
    <>
      <div className="px-3">
        <section className="sky overflow-hidden rounded-[28px] px-6 pt-[120px] pb-[120px] text-center">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-serif text-[clamp(42px,6vw,80px)] leading-[1.04] font-normal tracking-[-0.02em]">
              Your desk is ready.
            </h2>
            <p className="max-w-[460px] text-lg leading-7 text-ink-soft">Put the keyboard away. Pick up your pen.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={site.downloadUrl} className={buttonPrimary}>
                <AppleIcon className="-mt-0.5" />
                Download for Mac
              </a>
              <a href={site.buyUrl} className={buttonGlass}>
                Buy {site.name}
              </a>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1080px] px-6 pt-20 pb-10">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="flex max-w-[400px] flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Logo size={26} />
            <p className="text-sm leading-[22px] text-ink-muted">{site.tagline}</p>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-3 gap-6">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold tracking-[0.06em] text-ink-muted uppercase">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6 text-[13px] text-ink-muted">
        <p>
          © {site.copyrightYear} {site.name}. Made for the Mac.
        </p>
        <p>Your pages never leave your Mac.</p>
      </div>
    </footer>
  );
}
