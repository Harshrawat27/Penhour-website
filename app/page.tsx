import { Closing } from "@/components/landing/closing";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { NotebookSection } from "@/components/landing/notebook";
import { Pricing } from "@/components/landing/pricing";
import { Principles } from "@/components/landing/principles";
import { Privacy } from "@/components/landing/privacy";
import { SessionTypes } from "@/components/landing/session-types";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Principles />
        <HowItWorks />
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
