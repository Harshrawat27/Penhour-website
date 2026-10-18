/**
 * Site-wide copy, pricing and links. Change the product name, price and links here.
 * Values in [BRACKETS] are placeholders to fill before launch.
 */
export const site = {
  name: "PenHour",
  tagline: "Write on paper, keep it on your Mac.",
  description:
    "A quiet Mac app for people who think better with a pen. Press Start, write by hand, then scan your pages into a private, searchable notebook that never leaves your Mac.",
  /** Where "Get PenHour" buttons go. Point this at checkout once it exists. */
  buyUrl: "#pricing",
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
