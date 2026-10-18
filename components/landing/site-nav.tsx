import Link from "next/link";
import { site } from "@/lib/site";
import { AppleIcon } from "./icons";
import { Logo } from "./logo";
import { buttonPrimary } from "./ui";

const navLinks = [
  { href: "/#how", label: "How it works" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

/** The glass pill navigation used on every page. */
export function SiteNav() {
  return (
    <nav
      aria-label="Main"
      className="glass mx-auto flex max-w-[1080px] items-center justify-between gap-4 rounded-full py-2 pr-2 pl-[18px]"
    >
      <Link href="/" className="text-ink" aria-label={`${site.name} home`}>
        <Logo />
      </Link>
      <div className="hidden gap-8 md:flex">
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} className="text-sm font-medium text-ink hover:text-accent">
            {l.label}
          </Link>
        ))}
      </div>
      <a href={site.downloadUrl} className={buttonPrimary}>
        <AppleIcon className="-mt-0.5" />
        Download
      </a>
    </nav>
  );
}
