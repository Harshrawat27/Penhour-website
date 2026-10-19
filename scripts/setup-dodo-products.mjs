/**
 * Creates the PenHour lifetime-license products in Dodo Payments: one product per
 * Mac count (1–5), each issuing a license key that activates on that many Macs.
 *
 * Safe to re-run: products that already exist (matched by name) are reused.
 * Run with the key for the mode you want (test now, live at launch):
 *
 *   node --env-file=.env.local scripts/setup-dodo-products.mjs
 *
 * Paste the printed DODO_PRODUCT_* lines into .env.local (and Vercel's env settings).
 */
import DodoPayments from "dodopayments";

const FIRST_MAC_CENTS = 1000; // keep in sync with site.pricing in lib/site.ts
const EXTRA_MAC_DISCOUNT = 0.4;
const MAX_MACS = 5;

const client = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY,
  environment: process.env.DODO_PAYMENTS_ENVIRONMENT ?? "test_mode",
});

const existing = new Map();
for await (const product of client.products.list()) existing.set(product.name, product);

const lines = [];
for (let macs = 1; macs <= MAX_MACS; macs++) {
  const name = `PenHour Lifetime License (${macs} ${macs === 1 ? "Mac" : "Macs"})`;
  let product = existing.get(name);

  if (!product) {
    const entitlement = await client.entitlements.create({
      name: `PenHour license key (${macs} ${macs === 1 ? "Mac" : "Macs"})`,
      integration_type: "license_key",
      integration_config: {
        activations_limit: macs,
        activation_message: `Open PenHour and enter this key to activate. It works on up to ${macs} ${macs === 1 ? "Mac" : "Macs"}.`,
      },
    });
    const price = Math.round(FIRST_MAC_CENTS + (macs - 1) * FIRST_MAC_CENTS * (1 - EXTRA_MAC_DISCOUNT));
    product = await client.products.create({
      name,
      description: `Lifetime PenHour license for ${macs} ${macs === 1 ? "Mac" : "Macs"}. Pay once.`,
      tax_category: "digital_products",
      price: { type: "one_time_price", currency: "USD", price, discount: 0, purchasing_power_parity: false },
      entitlements: [{ entitlement_id: entitlement.id }],
      metadata: { penhour_macs: String(macs) },
    });
    console.error(`created  ${name}  $${(price / 100).toFixed(2)}`);
  } else {
    console.error(`exists   ${name}`);
  }

  lines.push(`DODO_PRODUCT_MACS_${macs}=${product.product_id}`);
}

console.log(lines.join("\n"));
