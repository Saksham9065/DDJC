const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
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

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    profession: {
      type: String,
      required: true,
      trim: true,
    },

    interests: {
      type: String,
      required: true,
      trim: true,
    },

    experience: {
      type: String,
      default: "",
      trim: true,
    },

    availability: {
      type: String,
      enum: [
        "Weekdays",
        "Weekends",
        "Both",
      ],
      default: "Weekends",
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Rejected",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Volunteer",
  volunteerSchema
);