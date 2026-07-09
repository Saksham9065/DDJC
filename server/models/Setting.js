const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
  {
    ngoName: {
      type: String,
      default: "Dalit Dastak Justice Centre",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    twitter: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    footerText: {
      type: String,
      default: "© DDJC. All Rights Reserved.",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Setting",
  settingSchema
);
