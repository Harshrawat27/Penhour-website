import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SiteFooter } from "@/components/landing/closing";
import { SiteNav } from "@/components/landing/site-nav";
import { buttonOutline } from "@/components/landing/ui";
import { dodo } from "@/lib/dodo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Thanks for buying ${site.name}` },
  robots: { index: false },
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function ThanksPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <div className="px-3 pt-3">
        <header className="sky-soft rounded-[28px] px-5 pt-5 pb-20">
          <SiteNav />
          <div className="mx-auto max-w-[640px] px-1 pt-20 text-center">
            <Suspense fallback={<p className="text-ink-soft">Checking your payment…</p>}>
              <Result searchParams={searchParams} />
            </Suspense>
          </div>
        </header>
      </div>
      <SiteFooter />
    </>
  );
}

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

/**
 * Dodo sends the buyer back with ?payment_id, status, email and license_key. The URL is
 * only a hint, so we confirm the payment with Dodo before showing the key.
 */
async function Result({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const paymentId = one(params.payment_id);
  const licenseKeys = one(params.license_key)?.split(",").filter(Boolean) ?? [];
  const email = one(params.email);

  let status = one(params.status);
  if (paymentId) {
    try {
      status = (await dodo.payments.retrieve(paymentId)).status ?? status;
    } catch {
      status = undefined;
    }
  }

  if (status === "succeeded") {
    return (
      <>
        <p className="text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase">Payment received</p>
        <h1 className="mt-4 font-serif text-[clamp(40px,6vw,64px)] leading-[1.04] font-normal tracking-[-0.02em]">
          Thanks for buying {site.name}.
        </h1>
        {licenseKeys.length > 0 ? (
          <div className="mt-10 rounded-2xl border border-rule bg-paper-raised p-6 text-left">
            <p className="text-sm font-semibold">Your license key</p>
            {licenseKeys.map((key) => (
              <code key={key} className="mt-3 block rounded-lg bg-paper-sunken px-4 py-3 font-mono text-[15px] break-all select-all">
                {key}
              </code>
            ))}
            <p className="mt-4 text-sm leading-6 text-ink-muted">
              Open {site.name} and enter this key to activate it.
            </p>
          </div>
        ) : null}
        <p className="mx-auto mt-6 max-w-[480px] text-[15px] leading-6 text-ink-soft">
          {email ? (
            <>
              We also emailed your key and receipt to <span className="text-ink">{email}</span>.
            </>
          ) : (
            "We also emailed your key and receipt."
          )}
        </p>
      </>
    );
  }

  const pending = status === "processing" || status?.startsWith("requires_");
  return (
    <>
      <h1 className="font-serif text-[clamp(36px,5vw,56px)] leading-[1.06] font-normal tracking-[-0.02em]">
        {pending ? "Your payment is processing." : "Your payment didn't go through."}
      </h1>
      <p className="mx-auto mt-5 max-w-[480px] text-[17px] leading-7 text-ink-soft">
        {pending
          ? "Your license key will arrive by email as soon as it completes."
          : "You haven't been charged. You can try again from the pricing section."}
      </p>
      {!pending ? (
        <Link href="/#pricing" className={`${buttonOutline} mt-8`}>
          Back to pricing
        </Link>
      ) : null}
    </>
  );
}
