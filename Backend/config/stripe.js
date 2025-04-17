const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const checkStripeConnection = async () => {
  try {
    const balance = await stripe.balance.retrieve();
    console.log("Stripe Connected Successfully!", balance);
  } catch (error) {
    console.error("Stripe Connection Failed:", error.message);
  }
};

module.exports = {
  stripe,
  checkStripeConnection,
};
