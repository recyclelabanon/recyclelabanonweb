import express from "express";
const router = express.Router();
import { partnerForm, getAllPartner, deletePartnerForm } from "../controllers/partnerController.js";
import { validatePartnerForm } from "../Validators/partnerValidator.js"; // Import validation middleware

router.post("/", validatePartnerForm, partnerForm); // Add validation middleware
router.get("/", getAllPartner);
router.delete("/:id", deletePartnerForm);

export default router;