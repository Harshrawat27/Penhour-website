"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { AppleIcon, CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";
import { buttonPrimary } from "./ui";

const navLinks = [
  { href: "/#how", label: "How it works" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#ios", label: "iOS app", soon: true },
];

/** "Coming soon", shortened to "Soon" where the desktop bar is tight. */
function SoonTag({ short = false }: { short?: boolean }) {
  return (
    <span className="rounded-full bg-plum-soft px-2 py-0.5 text-[10px] leading-3 font-semibold tracking-[0.06em] whitespace-nowrap text-plum uppercase">
      {short ? (
        <>
          <span className="lg:hidden">Soon</span>
          <span className="max-lg:hidden">Coming soon</span>
        </>
      ) : (
        "Coming soon"
      )}
    </span>
  );
}

/** The glass pill navigation used on every page. On phones the links fold into a menu button. */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  // Escape closes the menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav aria-label="Main" className="relative z-20 mx-auto max-w-[1080px]">
      <div className="glass flex items-center justify-between gap-2 rounded-full py-2 pr-1.5 pl-4 sm:gap-4 sm:pr-2 sm:pl-[18px]">
        <Link href="/" className="text-ink" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <div className="hidden gap-5 md:flex lg:gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap text-ink hover:text-accent"
            >
              {l.label}
              {l.soon && <SoonTag short />}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <a href={site.downloadUrl} className={`${buttonPrimary} max-sm:h-10 max-sm:px-4`}>
            <AppleIcon className="-mt-0.5" />
            Download
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-raised/70 md:hidden"
          >
            {open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="glass absolute inset-x-0 top-full mt-2 flex flex-col rounded-3xl bg-paper-raised/95 p-2 shadow-chip md:hidden"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-paper-raised/70 hover:text-accent"
            >
              {l.label}
              {l.soon && <SoonTag />}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
