import express from "express";
import { contactForm, getAllContacts, deleteContactForm } from "../controllers/contactController.js";

const router = express.Router();
router.post("/", contactForm);
router.get("/", getAllContacts);
router.delete("/:id", deleteContactForm);

export default router;