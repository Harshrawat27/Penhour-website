import { site } from "@/lib/site";
import { ArrowRightIcon } from "./icons";
import { Logo } from "./logo";
import { buttonPrimary } from "./ui";

const footerLinks = [
  { href: "#privacy", label: "Privacy" },
  { href: "#faq", label: "Support" },
  { href: "#terms", label: "Terms" },
  { href: "#contact", label: "Contact" },
];

export function Closing() {
  return (
    <div className="px-3 pb-3">
      <div className="sky overflow-hidden rounded-[28px] px-6 pt-[120px] pb-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-serif text-[clamp(42px,6vw,80px)] leading-[1.04] font-normal tracking-[-0.02em]">
            Your desk is ready.
          </h2>
          <p className="max-w-[460px] text-lg leading-7 text-ink-soft">Put the keyboard away. Pick up your pen.</p>
          <a href={site.downloadUrl} className={buttonPrimary}>
            Download for Mac
            <ArrowRightIcon />
          </a>
        </div>

        <footer className="glass mx-auto mt-[120px] flex max-w-[1080px] flex-wrap items-center justify-between gap-4 rounded-[20px] px-6 py-[18px] text-left text-sm">
          <Logo size={24} className="text-lg" />
          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {footerLinks.map((l) => (
              <a key={l.label} href={l.href} className="font-medium text-ink hover:text-accent">
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-[#3b352c]">
            © {site.copyrightYear} {site.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
