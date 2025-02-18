import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  resumePath: {
    type: String,
    required: true,
    trim: true,
  },
  coverLetter: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'interviewed', 'accepted', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Career', careerSchema);