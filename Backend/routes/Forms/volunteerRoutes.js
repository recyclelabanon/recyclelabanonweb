const express = require('express');

const router = express.Router();
const { volunteerForm, getAllVolunteer, deleteVolunteerForm } = require("../../controllers/Forms/volunteerController.js");
const { validateVolunteerForm } = require("../../Validators/volunteerValidator.js"); // Import validation middleware

router.post("/", validateVolunteerForm, volunteerForm); // Add validation middleware
router.get("/", getAllVolunteer);
router.delete("/:id", deleteVolunteerForm);

module.exports = router;
