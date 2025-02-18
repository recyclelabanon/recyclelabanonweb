import express from 'express';
import { createDonation } from '../controllers/donationController.js';
import { validateDonation } from '../Validators/donationValidator.js';
import stripe from '../config/stripe.js';

const router = express.Router();



// Route for creating a donation
router.post(
  '/',
  validateDonation,
  createDonation
);

// Route for creating a payment intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    // Validate required fields
    if (!amount || !currency) {
      return res.status(400).json({ message: 'Amount and currency are required' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Stripe Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;