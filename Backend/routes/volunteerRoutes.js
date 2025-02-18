import express from "express";
const router = express.Router();
import { volunteerForm, getAllVolunteer, deleteVolunteerForm } from "../controllers/volunteerController.js";
import { validateVolunteerForm } from "../Validators/volunteerValidator.js"; // Import validation middleware

router.post("/", validateVolunteerForm, volunteerForm); // Add validation middleware
router.get("/", getAllVolunteer);
router.delete("/:id", deleteVolunteerForm);

export default router;