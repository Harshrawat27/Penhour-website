import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview shown when penhour.com is shared: the logo, the tagline and a ruled page. */
export default async function OpengraphImage() {
  const [regular, italic] = await Promise.all([
    readFile(join(process.cwd(), "assets/newsreader-display.ttf")),
    readFile(join(process.cwd(), "assets/newsreader-display-italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px 72px 228px",
          background: "#f7f3ec",
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 55px, #e2d9c9 55px, #e2d9c9 56px)",
          fontFamily: "Newsreader",
          color: "#1e1b16",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 180, top: 0, bottom: 0, width: 3, background: "#b5532a", opacity: 0.55 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 28 28">
            <rect x="1" y="1" width="26" height="26" rx="7" fill="#FFFDF8" stroke="#E2D9C9" />
            <path d="M9 4v20" stroke="#B5532A" strokeWidth="1.5" />
            <path d="M5 10h18M5 15h18M5 20h18" stroke="#D3DDEE" strokeWidth="1.2" />
            <path d="M12 13.2c1.6-1.8 3.4 1 5-.6s2.6-1.2 3.6-.4" stroke="#2F4A7A" strokeWidth="1.7" fill="none" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: 48 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: "-0.02em" }}>Write on paper,</div>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: "-0.02em", fontStyle: "italic", color: "#2f4a7a" }}>
            keep it on your Mac.
          </div>
          <div style={{ marginTop: 36, fontSize: 32, color: "#635a4c" }}>
            A handwritten journal for Mac · private and searchable
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: regular, style: "normal", weight: 400 },
        { name: "Newsreader", data: italic, style: "italic", weight: 400 },
      ],
    },
  );
}
