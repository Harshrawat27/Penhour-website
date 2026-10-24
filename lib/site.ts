/**
 * Site-wide copy, pricing and links. Change the product name, price and links here.
 * Values in [BRACKETS] are placeholders to fill before launch.
 */
export const site = {
  name: "PenHour",
  /** The live site, used for canonical links, the sitemap and share previews. */
  url: "https://penhour.com",
  tagline: "Write on paper, keep it on your Mac.",
  /** The search result title and description (about 60 and 155 characters at most). */
  metaTitle: "PenHour: Handwritten Journal App for Mac",
  metaDescription:
    "Write by hand in a focused, timed session with your keyboard locked, then scan your pages into a private journal you can search. Stays on your Mac.",
  description:
    "A quiet Mac app for people who think better with a pen. Press Start, write by hand, then scan your pages into a private, searchable notebook that never leaves your Mac.",
  /** Where "Get / Buy PenHour" buttons go. Checkout itself starts from the pricing section (app/api/checkout). */
  buyUrl: "#pricing",
  /** Direct link to the .dmg (or Mac App Store page). */
  downloadUrl: "[DOWNLOAD URL]",
  /**
   * Newsletter signup endpoint. The form POSTs JSON { email } here.
   * Leave empty until you connect a provider (Buttondown, ConvertKit, Resend…).
   */
  newsletterEndpoint: "",
  contactEmail: "[CONTACT EMAIL]",
  /** Who the legal pages are from, and where. */
  legalName: "[YOUR NAME OR COMPANY]",
  jurisdiction: "[COUNTRY / STATE]",
  legalLastUpdated: "18 October 2026",
  macosVersion: "[VERSION]",
  copyrightYear: 2026,
  pricing: {
    currency: "USD",
    /** Lifetime license for the first Mac. */
    firstMac: 10,
    /** Discount on every Mac after the first (0.4 = 40% off). */
    extraMacDiscount: 0.4,
    /** Highest number on the slider. */
    maxMacs: 5,
  },
} as const;

/** Total lifetime price for a number of Macs. */
export function priceFor(macs: number) {
  const { firstMac, extraMacDiscount } = site.pricing;
  const extraMac = firstMac * (1 - extraMacDiscount);
  const total = firstMac + Math.max(0, macs - 1) * extraMac;
  const full = firstMac * macs;
  return { total, extraMac, savings: full - total, full };
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: site.pricing.currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
