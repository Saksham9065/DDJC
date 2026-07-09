const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    incidentType: {
      type: String,
      required: true,
      trim: true,
    },

    incidentDate: {
      type: Date,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    evidence: {
      type: String,
      default: "",
    },

    consent: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Under Review",
        "Resolved",
        "Rejected",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);