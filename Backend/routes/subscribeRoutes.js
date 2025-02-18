import express from "express";
const router = express.Router();
import { subscribeForm, getSubscribeEmails, deleteSubscribeEmail } from"../controllers/SubscribeController.js";

// Route to handle form submissions
router.post("/", subscribeForm);

// Route to fetch all emails
router.get("/", getSubscribeEmails);

// Route to delete an email by ID
router.delete("/:id", deleteSubscribeEmail);


export default router;
