const express = require('express');

const { createDonation } = require('../../controllers/Forms/donationController.js');
const { validateDonation } = require('../../Validators/donationValidator.js'); // Import validation middleware
const stripe = require('../../config/stripe.js'); // Import your Stripe configuration

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

module.exports = router;
