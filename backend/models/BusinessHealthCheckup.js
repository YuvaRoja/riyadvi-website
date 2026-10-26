
const mongoose = require("mongoose");

const businessHealthCheckupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      default: "",
    },
    challenge: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "BusinessHealthCheckup",
  businessHealthCheckupSchema
);
