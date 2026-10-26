import { FolderIcon, LockIcon, NoAccountIcon, TextIcon } from "./icons";

const points = [
  { title: "No account", body: "A license key, and that's it. No email, no profile.", Icon: NoAccountIcon },
  { title: "A normal folder", body: "Pages are plain image files you can back up, move or open anywhere.", Icon: FolderIcon },
  { title: "On-device reading", body: "Handwriting is turned into searchable text on your Mac. Never uploaded.", Icon: TextIcon },
  { title: "Touch ID lock", body: "Optional. Your notebook opens only for your fingerprint.", Icon: LockIcon },
];

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-6 px-3">
      <div className="relative overflow-hidden rounded-[28px] bg-accent text-on-accent">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_47px,rgb(255_253_248/0.07)_47px,rgb(255_253_248/0.07)_48px)]"
        />
        {/* The notebook margin: part of the content column, so it always sits just left of the text. */}
        <div className="relative mx-auto flex max-w-[1080px] flex-wrap items-start gap-16 py-20 pr-6 pl-12 md:py-28 md:pl-20">
          <div aria-hidden="true" className="absolute inset-y-0 left-6 w-[1.5px] bg-[#e08a5f] opacity-55 md:left-10" />
          <div className="flex flex-[1_1_380px] flex-col gap-5">
            <div className="flex items-center gap-2 text-xs leading-4 font-semibold tracking-[0.06em] text-[#c9d4e8] uppercase">
              <LockIcon width={14} height={14} />
              Private by nature
            </div>
            <h2 className="font-serif text-[clamp(38px,5vw,64px)] leading-[1.04] font-normal tracking-[-0.02em] text-balance">
              Nothing ever leaves your Mac.
            </h2>
            <p className="max-w-[440px] text-[17px] leading-7 text-on-accent-muted">
              A journal should feel like a locked drawer, not a social app. So there&apos;s nothing to sign up for and
              nowhere for your pages to go.
            </p>
          </div>
          <ul className="grid flex-[1_1_420px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-7 gap-y-8">
            {points.map(({ title, body, Icon }) => (
              <li key={title} className="flex flex-col gap-2">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-on-accent/12">
                  <Icon width={18} height={18} strokeWidth={1.6} />
                </span>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-sm leading-[22px] text-on-accent-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
