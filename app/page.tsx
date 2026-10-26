import { Closing } from "@/components/landing/closing";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { NotebookSection } from "@/components/landing/notebook";
import { PhoneGuard } from "@/components/landing/phone-guard";
import { Pricing } from "@/components/landing/pricing";
import { Principles } from "@/components/landing/principles";
import { Privacy } from "@/components/landing/privacy";
import { SessionTypes } from "@/components/landing/session-types";
import { site } from "@/lib/site";

/** Tells search engines what PenHour is and what it costs (schema.org SoftwareApplication). */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  description: site.metaDescription,
  url: site.url,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "macOS",
  offers: { "@type": "Offer", price: site.pricing.firstMac.toFixed(2), priceCurrency: site.pricing.currency },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />
      <main>
        <Principles />
        <HowItWorks />
        <PhoneGuard />
        <NotebookSection />
        <SessionTypes />
        <Privacy />
        <Pricing />
        <Faq />
      </main>
      <Closing />
    </>
  );
}
