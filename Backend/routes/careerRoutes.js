import express from 'express';
import multer from 'multer';
import { createCareerApplication } from '../controllers/careerController.js';
import { validateCareerApplication } from '../Validators/careerValidator.js'; // Import validator

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes'); // Save files in the 'uploads/resumes' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  },
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    // Accept only PDF, DOC, and DOCX files
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
});

// Route for submitting career applications
router.post(
  '/',
  upload.single('resume'), // Handle file upload
  validateCareerApplication, // Apply validation rules
  createCareerApplication // Process the application
);

export default router;