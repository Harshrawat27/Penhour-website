import { dodo, productForMacs } from "@/lib/dodo";

/**
 * The pricing form posts { macs } here. We create a Dodo checkout session for the
 * matching license and send the buyer to Dodo's hosted checkout.
 */
export async function POST(request: Request) {
  const form = await request.formData();
  const macs = Number(form.get("macs"));
  const productId = productForMacs(macs);
  if (!productId) return new Response("Unknown license size", { status: 400 });

  const origin = new URL(request.url).origin;
  try {
    const session = await dodo.checkoutSessions.create({
      product_cart: [{ product_id: productId, quantity: 1 }],
      return_url: `${origin}/thanks`,
      metadata: { macs: String(macs) },
    });
    if (!session.checkout_url) throw new Error("Checkout session has no URL");
    return Response.redirect(session.checkout_url, 303);
  } catch (error) {
    console.error("Dodo checkout failed", error);
    return Response.redirect(`${origin}/?checkout=error#pricing`, 303);
  }
}
