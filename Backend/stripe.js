import express from "express";
import stripe from "./config/stripe.js";  // ✅ Use ES Module default import

const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount, currency } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Stripe Error:", error.message);
        res.status(500).json({ error: error.message });
    }
});

export default router;  // ✅ Use ES Module export
