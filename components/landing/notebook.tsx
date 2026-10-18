import { site } from "@/lib/site";
import { SearchIcon } from "./icons";
import { CheckList, Eyebrow } from "./ui";

const results = [
  { lines: ["Maybe nothing fills it. The", "__mountains__ didn't need me", "to be productive."], date: "15 October", meta: "Reflect · page 3" },
  { lines: ["— the __mountains__ in Spiti,", "properly this time"], date: "28 September", meta: "Reflect · page 2" },
];

function HandLine({ text }: { text: string }) {
  const parts = text.split(/__(.+?)__/);
  return (
    <div>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="hit">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </div>
  );
}

export function NotebookSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-[100px]">
      <div className="flex flex-wrap items-center gap-16">
        <div className="flex flex-[1_1_360px] flex-col gap-5">
          <div>
            <Eyebrow tone="sun">Your notebook</Eyebrow>
          </div>
          <h2 className="font-serif text-[clamp(36px,4.4vw,52px)] leading-[1.08] font-normal tracking-[-0.015em] text-balance">
            Every page you wrote, a search away.
          </h2>
          <p className="text-[17px] leading-7 text-ink-muted">
            {site.name} reads your handwriting on your Mac, so you can find the day you first wrote about the move,
            or every time a name came up. The word lights up right on the page, like a highlighter.
          </p>
          <CheckList
            items={[
              "Entries grouped by month, with a calendar of the days you wrote",
              "View any entry as clean, readable text",
              "Export pages as images or PDF whenever you like",
            ]}
          />
        </div>

        <div aria-hidden="true" className="sky-soft min-w-0 flex-[1_1_460px] rounded-[28px] px-8 py-10">
          <div className="overflow-hidden rounded-2xl bg-paper shadow-[0_24px_56px_rgba(30,50,90,0.18)]">
            <div className="flex items-center gap-2 border-b border-rule px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#d9cfbd]" />
              <span className="size-2.5 rounded-full bg-[#d9cfbd]" />
              <span className="size-2.5 rounded-full bg-[#d9cfbd]" />
              <div className="ml-3 flex h-[30px] flex-1 items-center gap-2 rounded-md border border-accent bg-paper-raised px-3 text-[13px]">
                <SearchIcon width={13} height={13} className="text-ink-muted" />
                mountains
              </div>
            </div>
            <div className="flex flex-col gap-3.5 p-5">
              {results.map((r) => (
                <div key={r.date} className="flex items-center gap-4">
                  <div className="ruled min-w-0 flex-1 overflow-hidden rounded-lg px-[18px] pt-3.5 pb-2 font-hand text-[22px] leading-7 text-handwriting shadow-page">
                    {r.lines.map((l) => (
                      <HandLine key={l} text={l} />
                    ))}
                  </div>
                  <div className="w-[120px] shrink-0">
                    <div className="font-serif text-[17px] leading-[22px]">{r.date}</div>
                    <div className="mt-1 text-xs leading-4 text-ink-muted">{r.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
