import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { formatPrice, priceFor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  alternates: { canonical: "/terms" },
  description: `The terms for buying and using ${site.name}.`,
};

const email = <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>;
const { firstMac, extraMacDiscount } = site.pricing;
const extra = formatPrice(priceFor(2).extraMac);

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "The agreement",
    body: (
      <p>
        These terms are between you and {site.legalName} (“we”, “us”). By buying, downloading or using{" "}
        {site.name} you agree to them. If you don&apos;t agree, please don&apos;t use the app.
      </p>
    ),
  },
  {
    id: "license",
    title: "Your license",
    body: (
      <>
        <p>When you buy {site.name}, you get a personal, lifetime license to use the app on the number of Macs you paid for.</p>
        <ul>
          <li>
            <strong>Pricing.</strong> Your first Mac is {formatPrice(firstMac)}. Each additional Mac is{" "}
            {Math.round(extraMacDiscount * 100)}% off, at {extra}. You pay once; there&apos;s no subscription.
          </li>
          <li>
            <strong>Moving Macs.</strong> You can deactivate a Mac in Settings › License and activate another one in
            its place.
          </li>
          <li>
            <strong>Lifetime.</strong> Your license doesn&apos;t expire.{" "}
            It includes every update to the version you buy, plus the next {site.includedMajorUpdates} major
            versions. For example, if you buy version 1, you get every release up to and including version{" "}
            {1 + site.includedMajorUpdates}.
          </li>
        </ul>
        <p>
          The license is for you. Please don&apos;t share, resell or publish your license key. You may not copy,
          modify, reverse engineer or redistribute the app, except where the law allows it regardless of these terms.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments and refunds",
    body: (
      <>
        <p>
          Purchases are processed by Dodo Payments, our seller of record. Prices are in {site.pricing.currency} and
          don&apos;t include tax: Dodo adds sales tax or VAT at checkout where your country requires it.
        </p>
        <p>
          Changed your mind? Email {email} within {site.refundDays} days of your purchase, from the address you
          bought with, and we&apos;ll refund you in full. Once a purchase is refunded, its license key stops working
          on every Mac.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "Your journal",
    body: (
      <>
        <p>
          You own everything you write and scan. Your journal is stored only on your Mac, and we never receive it (see
          the <a href="/privacy">privacy policy</a>).
        </p>
        <p>
          Because your journal lives only on your Mac, <strong>you&apos;re responsible for backing it up</strong>. We
          can&apos;t recover pages that are deleted or lost with a Mac. {site.name} can remind you to back up, and
          your journal folder works with Time Machine and any other backup tool.
        </p>
      </>
    ),
  },
  {
    id: "sessions",
    title: "Locked sessions",
    body: (
      <>
        <p>
          During a session {site.name} locks your keyboard and silences notifications so you can write without
          interruptions. You can always leave early by holding the emergency exit keys shown on screen.
        </p>
        <p>
          Please don&apos;t start a session when you may need your Mac urgently. We aren&apos;t responsible for
          messages, calls or alerts you miss while a session is running.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    title: "No warranty",
    body: (
      <p>
        We work hard to make {site.name} reliable, but it&apos;s provided “as is”. Handwriting recognition in
        particular can miss or misread words. To the extent the law allows, we don&apos;t promise the app will be
        error-free or work without interruption, and we give no warranties beyond those your local law requires.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limits of liability",
    body: (
      <p>
        To the extent the law allows, we&apos;re not liable for indirect or consequential losses, or for lost data,
        and our total liability to you is limited to the amount you paid for {site.name}. Nothing in these terms
        limits rights you have as a consumer that can&apos;t be limited by contract.
      </p>
    ),
  },
  {
    id: "ending",
    title: "Ending the license",
    body: (
      <p>
        You can stop using {site.name} at any time. If you break these terms, for example by sharing or reselling
        your key, we may deactivate that license. Your journal stays on your Mac either way.
      </p>
    ),
  },
  {
    id: "law",
    title: "Your rights as a consumer",
    body: (
      <p>
        Nothing in these terms takes away the rights you have as a consumer under the law where you live.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms as {site.name} changes. We&apos;ll update the date at the top, and if a change
        matters for license holders we&apos;ll tell you by email. Changes never take away a license you&apos;ve
        already paid for.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Questions about these terms? Email {email}.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of use"
      title="The fair print."
      intro={`What you get when you buy ${site.name}, and what we ask in return. Written to be read, not skimmed past.`}
      summary={[
        `Pay once: ${formatPrice(firstMac)} for your first Mac, ${extra} for each extra Mac. No subscription.`,
        "Your license doesn't expire, and you can move it between Macs.",
        "You own your journal. It stays on your Mac, so please keep a backup.",
        "Please don't share or resell your license key.",
      ]}
      sections={sections}
    />
  );
}
