import DodoPayments from "dodopayments";
import { site } from "@/lib/site";

/** Server-only Dodo Payments client. Never import this from a client component. */
export const dodo = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY,
  environment: process.env.DODO_PAYMENTS_ENVIRONMENT === "live_mode" ? "live_mode" : "test_mode",
});

/** Dodo product for a Mac count, from DODO_PRODUCT_MACS_<n> (see scripts/setup-dodo-products.mjs). */
export function productForMacs(macs: number) {
  if (!Number.isInteger(macs) || macs < 1 || macs > site.pricing.maxMacs) return null;
  return process.env[`DODO_PRODUCT_MACS_${macs}`] || null;
}
