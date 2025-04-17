const express = require('express');

const router = express.Router();
const { partnerForm, getAllPartner, deletePartnerForm } = require("../../controllers/Forms/partnerController.js");
const { validatePartnerForm } = require("../../Validators/partnerValidator.js"); // Import validation middleware

router.post("/", validatePartnerForm, partnerForm); // Add validation middleware
router.get("/", getAllPartner);
router.delete("/:id", deletePartnerForm);

module.exports = router;
