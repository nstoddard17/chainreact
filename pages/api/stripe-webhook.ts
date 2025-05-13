
import { buffer } from 'micro';
import Stripe from 'stripe';

export const config = { api: { bodyParser: false } };
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature']!;
  const buf = await buffer(req);
  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    // Fulfill order logic
  }

  res.status(200).json({ received: true });
}
