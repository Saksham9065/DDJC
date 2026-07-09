const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    purpose: {
      type: String,
      default: "General Donation",
    },

    paymentMethod: {
      type: String,
      enum: ["Cash", "UPI", "Card", "Net Banking"],
      default: "UPI",
    },

    status: {
      type: String,
      enum: ["Pending", "Success", "Failed"],
      default: "Pending",
    },

    transactionId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Donation",
  donationSchema
);