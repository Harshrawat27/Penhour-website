"use client";

import { useId, useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { ArrowRightIcon, CheckIcon } from "./icons";

type Status = "idle" | "sending" | "done" | "error";

export function Newsletter() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!site.newsletterEndpoint) {
      // No provider connected yet (see lib/site.ts).
      setStatus("error");
      setMessage("Signups open soon.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(site.newsletterEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      setMessage("You're on the list. One short note when there's something worth saying.");
    } catch {
      setStatus("error");
      setMessage("That didn't go through. Try again in a moment.");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="flex items-start gap-2 text-sm leading-[22px] text-success">
        <CheckIcon className="mt-[3px] shrink-0" />
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        Letters from the desk
      </label>
      <p className="text-sm leading-[22px] text-ink-muted">
        Occasional notes on writing by hand, and what&apos;s new in {site.name}. No spam.
      </p>
      <div className="mt-2 flex h-12 items-center rounded-full border border-rule-strong bg-paper-raised p-1 pl-5 focus-within:border-accent focus-within:ring-3 focus-within:ring-accent-soft">
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#8c8170]"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent text-on-accent transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          <ArrowRightIcon />
        </button>
      </div>
      <p role="status" aria-live="polite" className="min-h-5 text-[13px] text-ink-muted">
        {status === "error" ? message : ""}
      </p>
    </form>
  );
}
