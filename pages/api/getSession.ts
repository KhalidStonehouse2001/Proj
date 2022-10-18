import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionID = req.query.session_id as string;

  const session = await stripe.checkout.sessions.listLineItems(sessionID);

  res.status(200).json({ session });
}
