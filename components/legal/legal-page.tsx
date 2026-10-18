import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { SiteFooter } from "@/components/landing/closing";
import { SiteNav } from "@/components/landing/site-nav";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Highlights text you still need to fill in, so it can't slip through. */
export function Fill({ children }: { children: ReactNode }) {
  return <mark className="rounded bg-sun-soft px-1 text-sun">{children}</mark>;
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  summary,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  summary: string[];
  sections: LegalSection[];
}) {
  return (
    <>
      <div className="px-3 pt-3">
        <header className="sky-soft rounded-[28px] px-5 pt-5 pb-20">
          <SiteNav />
          <div className="mx-auto max-w-[760px] px-1 pt-20 text-center">
            <p className="text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase">{eyebrow}</p>
            <h1 className="mt-4 font-serif text-[clamp(40px,6vw,72px)] leading-[1.04] font-normal tracking-[-0.02em]">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-7 text-ink-soft">{intro}</p>
            <p className="mt-6 text-[13px] text-ink-soft">Last updated {site.legalLastUpdated}</p>
          </div>
        </header>
      </div>

      <main className="mx-auto grid max-w-[1080px] gap-12 px-6 pt-16 pb-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-8">
            <p className="text-xs font-semibold tracking-[0.06em] text-ink-muted uppercase">On this page</p>
            <ol className="mt-4 flex flex-col gap-2 border-l border-rule">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l border-transparent py-0.5 pl-4 text-sm text-ink-muted transition-colors hover:border-accent hover:text-ink"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="legal max-w-[680px]">
          <section aria-labelledby="short-version" className="legal-summary rounded-2xl border border-rule bg-paper-raised p-6 sm:p-8">
            <h2 id="short-version" className="!text-[22px]">
              The short version
            </h2>
            <ul>
              {summary.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-8">
              <h2 id={`${s.id}-title`}>
                <span className="mr-3 font-sans text-sm font-semibold text-ink-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </h2>
              {s.body}
            </section>
          ))}
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
