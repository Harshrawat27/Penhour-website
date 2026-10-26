import type { Metadata } from "next";
import { Fill, LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy" },
  description: `How ${site.name} handles your data. Your journal stays on your Mac.`,
};

const email = <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>;

const sections: LegalSection[] = [
  {
    id: "who",
    title: "Who we are",
    body: (
      <>
        <p>
          {site.name} is made by <Fill>{site.legalName}</Fill> (“we”, “us”). This policy covers the {site.name} Mac
          app and this website.
        </p>
        <p>Questions about privacy go to {email}. A real person reads every message.</p>
      </>
    ),
  },
  {
    id: "journal",
    title: "Your journal stays on your Mac",
    body: (
      <>
        <p>Everything you create with {site.name} is stored only on your Mac, in the journal folder you choose:</p>
        <ul>
          <li>Scanned page images</li>
          <li>Text read from your handwriting</li>
          <li>Entry dates, session types, sounds and lengths</li>
          <li>Your settings</li>
        </ul>
        <p>
          We never receive, see or store any of it. There is no {site.name} cloud, no sync server and no account. If
          you back up your Mac or put the journal folder in a synced folder (like iCloud Drive or Dropbox), that copy
          is governed by those services, not by us.
        </p>
      </>
    ),
  },
  {
    id: "scanning",
    title: "Scanning your pages",
    body: (
      <>
        <p>
          When you scan with your iPhone, the pages go straight from your phone to your Mac using Apple&apos;s own
          Continuity Camera. Photos you drag in or choose from Finder are copied into your journal folder. Either way
          they never pass through our servers.
        </p>
      </>
    ),
  },
  {
    id: "handwriting",
    title: "Reading your handwriting",
    body: (
      <>
        <p>
          Turning your handwriting into searchable text happens on your Mac. Your pages are never uploaded for
          recognition. You can switch this off at any time in Settings › Privacy.
        </p>
        <p>
          After setup, {site.name} downloads its handwriting reader (a file of about 830 MB) once from Hugging Face,
          where we host it. Like any download, that request shows your IP address to Hugging Face, but it carries
          nothing from your journal. Turning the reader off in Settings › Privacy also deletes it.
        </p>
      </>
    ),
  },
  {
    id: "license",
    title: "License activation",
    body: (
      <>
        <p>
          When you activate {site.name}, the app sends your license key and your Mac&apos;s name (as set in System
          Settings › General › Sharing, for example “Asha&apos;s MacBook Air”) to Dodo Payments, our payment and
          license provider. That confirms the key is valid and counts how many Macs use it, and the name helps you
          tell your Macs apart if you ever free one. Nothing from your journal is ever sent.
        </p>
        <p>
          After activation the app works offline. About once a week, when you&apos;re online, it sends the license key
          to Dodo Payments again to check it&apos;s still valid (for example, that it wasn&apos;t refunded). If the
          check can&apos;t connect, nothing happens and the app keeps working.
        </p>
      </>
    ),
  },
  {
    id: "purchases",
    title: "Buying a license",
    body: (
      <>
        <p>
          Payments are handled by Dodo Payments, who act as the seller of record. They collect your payment details; we never see
          your card number. We receive:
        </p>
        <ul>
          <li>Your name and email address</li>
          <li>Your country (for tax)</li>
          <li>What you bought, when, and your license key</li>
        </ul>
        <p>
          We use this to send your license, help you if you lose it, handle refunds and meet tax and accounting
          rules. We keep purchase records for as long as the law requires.
        </p>
      </>
    ),
  },
  {
    id: "newsletter",
    title: "The newsletter",
    body: (
      <p>
        If you sign up for Letters from the desk, we store your email address with <Fill>[EMAIL PROVIDER]</Fill> and
        use it only to send the newsletter. Every email has an unsubscribe link, and unsubscribing deletes you from
        the list.
      </p>
    ),
  },
  {
    id: "website",
    title: "This website",
    body: (
      <p>
        <Fill>
          [Pick one: “This website doesn&apos;t use cookies or analytics.” or “We use [privacy-friendly analytics
          tool] to count visits. It doesn&apos;t use cookies or collect personal data.”]
        </Fill>
      </p>
    ),
  },
  {
    id: "no-tracking",
    title: "What we don't do",
    body: (
      <ul>
        <li>No analytics, tracking or advertising SDKs in the app.</li>
        <li>No selling or renting of your information, ever.</li>
        <li>No reading, training on or mining of your journal. We can&apos;t; it never reaches us.</li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Wherever you live, you can ask us to see, correct or delete the purchase and newsletter information we
          hold about you. Email {email} and we&apos;ll reply within 30 days. If you&apos;re in the EU, UK or
          California, you also have the rights your local law gives you, including the right to complain to your
          data protection authority.
        </p>
        <p>Your journal isn&apos;t something we can delete or export for you, because we never have it. It&apos;s yours, in your folder.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>{site.name} isn&apos;t directed at children under 13, and we don&apos;t knowingly collect their information.</p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        If we change how we handle data, we&apos;ll update this page and the date at the top. If a change is
        significant, we&apos;ll also tell license holders by email before it takes effect.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy policy"
      title="Your pages are yours."
      intro={`${site.name} is built so your journal never leaves your Mac. Here's exactly what that means, and the little we do collect.`}
      summary={[
        "Your pages, handwriting text and entries stay on your Mac. We never receive them.",
        "No account, no cloud sync, no analytics or ads in the app.",
        "We only hold what's needed to sell you a license, and your email if you join the newsletter.",
        "Email us any time to see or delete that information.",
      ]}
      sections={sections}
    />
  );
}
