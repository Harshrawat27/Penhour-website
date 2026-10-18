import { PlusIcon } from "./icons";

const faqs = [
  {
    q: "What if I need to leave a session early?",
    a: "Hold the emergency exit keys for a few seconds. They're always shown at the bottom of the session screen, and you can change them in Settings.",
  },
  {
    q: "Do I need a special notebook or pen?",
    a: "No. Any paper and any pen work. Darker ink and lined pages scan a little more clearly.",
  },
  {
    q: "Where are my pages stored?",
    a: "In a folder you choose, on your Mac. Documents by default. Nothing is sent to a server.",
  },
  {
    q: "How well does it read messy handwriting?",
    a: "Well enough to search most words. It can miss some, so the scanned page is always kept as the original.",
  },
  {
    q: "Can I use it without an iPhone?",
    a: "Yes. Scan the QR code shown on your Mac with any phone's camera, and send pages over your Wi-Fi.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="faq mx-auto max-w-[760px] scroll-mt-6 px-6 pt-[100px] pb-[120px]">
      <h2 className="mb-8 text-center font-serif text-[clamp(32px,3.8vw,44px)] leading-[1.1] font-normal">
        Questions, answered plainly
      </h2>
      <div className="border-t border-rule">
        {faqs.map((f, i) => (
          <details key={f.q} className="border-b border-rule" open={i === 0}>
            <summary className="flex items-center justify-between gap-4 px-1 py-[22px] text-[17px] font-semibold">
              {f.q}
              <span className="plus inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <PlusIcon width={12} height={12} />
              </span>
            </summary>
            <p className="px-1 pb-[22px] text-[15px] leading-6 text-ink-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
