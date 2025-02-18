import mongoose from "mongoose";



const volunteerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  availability: {
    type: String,
    enum: ['weekdays', 'weekends', 'both'],
    required: true
  },
  areaOfInterest: {
    type: String,
    required: true
  },
  motivation: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Volunteer', volunteerSchema);