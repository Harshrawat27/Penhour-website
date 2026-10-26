"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";
import { CheckList, Eyebrow } from "./ui";

/**
 * The iPhone side of a session: PenHour Guard bounces social apps back to the Home Screen.
 * The clip is rendered from the launch film (penhour-film: `npm run phone-loop`), with the
 * Telegram chats blurred in the pixels themselves.
 */
function GuardClip() {
  const ref = useRef<HTMLVideoElement>(null);

  // Play only while on screen, and not at all for reduced motion (the poster shows the alert).
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-rule bg-plum-soft shadow-page">
      <video
        ref={ref}
        className="block aspect-[4/5] w-full"
        poster="/video/phone-loop-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="An iPhone during a PenHour session: Telegram is opened and immediately sent back to the Home Screen, with the alert “Finish your writing first. Your PenHour session is still running.”"
      >
        <source src="/video/phone-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export function PhoneGuard() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-[100px]">
      <div className="flex flex-wrap-reverse items-center gap-16">
        <div className="mx-auto w-full max-w-[460px] flex-[1_1_340px]">
          <GuardClip />
        </div>
        <div className="flex flex-[1_1_380px] flex-col gap-5">
          <div>
            <Eyebrow tone="plum">On your iPhone, too</Eyebrow>
          </div>
          <h2 className="font-serif text-[clamp(36px,4.4vw,52px)] leading-[1.08] font-normal tracking-[-0.015em] text-balance">
            No pings. No <em className="text-plum italic">scrolling.</em>
          </h2>
          <p className="text-[17px] leading-7 text-ink-muted">
            Reach for Instagram, YouTube or X mid-session and {site.name} Guard sends you straight back to your Home
            Screen, with a reminder to finish your writing first. When the session ends, your apps open as usual.
          </p>
          <CheckList
            items={[
              "You choose which apps to guard",
              "Your iPhone goes quiet too, with Do Not Disturb",
              "Set up once in Apple's Shortcuts app. No extra iPhone app",
            ]}
          />
          <p className="text-[13px] leading-5 text-ink-muted">
            Optional. Works through Focus shared across your Apple devices.
          </p>
        </div>
      </div>
    </section>
  );
}
