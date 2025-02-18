import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  donationType: {
    type: String,
    enum: ['one-time', 'monthly'],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 1,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  message: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Donation', donationSchema);