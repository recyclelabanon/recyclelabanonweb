import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const checkStripeConnection = async () => {
  try {
    const balance = await stripe.balance.retrieve();
    console.log("Stripe Connected Successfully!", balance);
  } catch (error) {
    console.error("Stripe Connection Failed:", error.message);
  }
};

export default stripe;