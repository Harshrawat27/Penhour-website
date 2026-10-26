const principles = [
  { title: "Paper first", body: "Your handwriting is the content. The app gets out of the way." },
  { title: "A locked room", body: "Keyboard off, alerts off, social apps off, until the timer ends." },
  { title: "Searchable pages", body: "Find any word you ever wrote, on this Mac." },
  { title: "Yours alone", body: "No account, no cloud, no streaks to keep." },
];

export function Principles() {
  return (
    <section className="mx-auto grid max-w-[1080px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-b border-rule px-6 pt-[72px] pb-6">
      {principles.map((p) => (
        <div key={p.title} className="border-l border-rule px-6 pb-8">
          <h3 className="font-serif text-[28px] leading-[34px] font-normal">{p.title}</h3>
          <p className="mt-1.5 text-sm leading-[22px] text-ink-muted">{p.body}</p>
        </div>
      ))}
    </section>
  );
}
