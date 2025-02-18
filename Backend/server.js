import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import { checkStripeConnection } from "./config/stripe.js"; // Import Stripe checker
import contactRoute from "./routes/contactRoutes.js";
import donationRoute from './routes/donationRoutes.js';
import volunteerRoute from "./routes/volunteerRoutes.js";
import partnerRoute from "./routes/partnerRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";
import stripeRoute from "./stripe.js";
import bcrypt from "bcrypt";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: "recyclelabanon.netlify.app",
    methods: "GET, POST, PUT, DELETE",
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various versions of Android) choke on 204
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoute);
app.use("/api/donation", donationRoute);
app.use('/api/career', careerRoutes);
app.use("/api/volunteer", volunteerRoute);
app.use("/api/partner", partnerRoute);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/stripe", stripeRoute);

if (!process.env.SET_PASSWORD) {
  throw new Error("SET_PASSWORD is not defined in the environment variables.");
}
const hashedPassword = bcrypt.hashSync(process.env.SET_PASSWORD, 10);

app.post("/api/verify-password", (req, res) => {
  const { password } = req.body;

  if (bcrypt.compareSync(password, hashedPassword)) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Data received");
})

// Test Stripe Connection
checkStripeConnection();

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});