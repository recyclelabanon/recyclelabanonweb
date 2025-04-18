require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

// Import routes
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const newsRoutes = require('./routes/newsRoutes');
const teamsRoutes = require('./routes/teamsRoutes'); 
const contactRoutes = require('./routes/Forms/contactRoutes');
const careerRoutes = require('./routes/Forms/careerRoutes'); // Import the new form routes
const volunteerRoutes = require('./routes/Forms/volunteerRoutes');
const donationRoutes = require('./routes/Forms/donationRoutes');
const subscribeRoutes = require('./routes/Forms/subscribeRoutes');
const partnerRoutes = require('./routes/Forms/partnerRoutes');


const errorHandler = require('./middleware/errorHandler');

// Initialize Express app
const app = express();

// Configure security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5174',
  credentials: true
}));

// Configure body parsers
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('Database connection error:', err.message);
  process.exit(1);
});

// Configure routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/media', mediaRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/news', newsRoutes);
app.use('/api/v1/teams', teamsRoutes);
app.use('/api/v1/contact', contactRoutes); // Mount the new form routes
app.use('/api/v1/career', careerRoutes); // Mount the new form routes
app.use('/api/v1/volunteer', volunteerRoutes); // Mount the new form routes
app.use('/api/v1/donation', donationRoutes); // Mount the new form routes
app.use('/api/v1/subscribe', subscribeRoutes); // Mount the new form routes
app.use('/api/v1/partner', partnerRoutes); // Mount the new form routes

// Handle 404 errors
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

// Global error handler
app.use(errorHandler);

// Server configuration
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => process.exit(1));
});

// Handle SIGTERM signal
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => console.log('💥 Process terminated'));
});