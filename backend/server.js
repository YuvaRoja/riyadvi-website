
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Contact = require("./models/Contact");
const BusinessHealthCheckup = require("./models/BusinessHealthCheckup");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Riyadvi backend is running successfully!" });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "Backend API is working",
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend is responding correctly",
  });
});

app.post("/api/post-test", (req, res) => {
  console.log("POST TEST RECEIVED");
  console.log(req.body);

  res.json({
    success: true,
    message: "POST request received",
  });
});

// Save contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully!",
      data: newContact,
    });
  } catch (error) {
    console.error("Contact API error:", error.message);
    res.status(500).json({
      success: false,
      message: "Unable to submit contact form.",
    });
  }
});

const BusinessHealthCheckupSubmission =
  mongoose.models.BusinessHealthCheckupSubmission ||
  mongoose.model(
    "BusinessHealthCheckupSubmission",
    new mongoose.Schema(
      {
        formData: mongoose.Schema.Types.Mixed,
      },
      { timestamps: true }
    )
  );
app.post("/api/business-health-checkup", (req, res) => {
  console.log("Business Health Checkup request received");
  console.log("Received data:", req.body);

  return res.status(200).json({
    status: "success",
    message: "Business Health Checkup API is working",
  });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Backend server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });