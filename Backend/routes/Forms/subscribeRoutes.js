const express = require('express');

const router = express.Router();
const { subscribeForm, getSubscribeEmails, deleteSubscribeEmail } = require("../../controllers/Forms/SubscribeController.js");

// Route to handle form submissions
router.post("/", subscribeForm);

// Route to fetch all emails
router.get("/", getSubscribeEmails);

// Route to delete an email by ID
router.delete("/:id", deleteSubscribeEmail);


module.exports = router;

