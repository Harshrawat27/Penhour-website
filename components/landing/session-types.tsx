const types = [
  { name: "Free write", guide: "Write whatever comes. Don't stop to fix it.", tone: "bg-accent-soft" },
  { name: "Reflect", guide: "What happened today, and what did it mean to you?", tone: "bg-ember-soft" },
  {
    name: "Solve a problem",
    guide: "Write the problem in one line. Then ask why, five times.",
    tone: "bg-plum-soft",
    methods: "Five whys · First principles · Pros and cons · Worst case",
  },
  { name: "Gratitude", guide: "Three small things from today you're glad about, and why.", tone: "bg-success-soft" },
  { name: "Morning pages", guide: "Three pages, longhand, before the day gets loud.", tone: "bg-sun-soft" },
];

export function SessionTypes() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 pt-5 pb-[100px]">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-[560px] font-serif text-[clamp(32px,3.8vw,44px)] leading-[1.1] font-normal tracking-[-0.01em] text-balance">
          Sit down with a reason, or with none at all.
        </h2>
        <p className="max-w-[380px] text-[15px] leading-6 text-ink-muted">
          Each session type shows one gentle line on screen while you write. That&apos;s all the guidance you get.
        </p>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {types.map((t) => (
          <li key={t.name} className={`rounded-[20px] p-6 ${t.tone}`}>
            <h3 className="text-[15px] font-semibold">{t.name}</h3>
            <p className="mt-3 font-serif text-lg leading-[26px] italic">“{t.guide}”</p>
            {t.methods && <p className="mt-3.5 text-xs leading-4 font-medium text-plum">{t.methods}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
