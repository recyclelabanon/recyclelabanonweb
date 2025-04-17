const express = require('express');

const { contactForm, getAllContacts, deleteContactForm } = require("../../controllers/Forms/contactController.js");


const router = express.Router();
router.post("/", contactForm);
router.get("/", getAllContacts);
router.delete("/:id", deleteContactForm);

module.exports = router;
