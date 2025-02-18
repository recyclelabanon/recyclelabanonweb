import multer from 'multer';
import { validationResult } from 'express-validator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Career from '../Models/Career.js'; // Ensure you have the correct path to your Career model

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the 'uploads' directory exists
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

export const createCareerApplication = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, position, coverLetter } = req.body;
    const resumePath = req.file ? req.file.path : null;

    // Validate required fields
    if (!resumePath) {
      return res.status(400).json({ message: 'Resume file is required' });
    }

    // Create a new career application
    const career = new Career({
      fullName,
      email,
      position,
      resumePath,
      coverLetter,
    });

    // Save the application to the database
    await career.save();

    // Send success response
    res.status(201).json({ message: 'Career application submitted successfully', career });
  } catch (error) {
    console.error('Error submitting career application:', error);
    res.status(500).json({ message: 'Error submitting career application', error: error.message });
  }
};