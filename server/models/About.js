const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      default: "",
    },

    subtitle: {
      type: String,
      default: "",
    },

    mission: {
      type: String,
      default: "",
    },

    vision: {
      type: String,
      default: "",
    },

    objectives: {
      type: String,
      default: "",
    },

    history: {
      type: String,
      default: "",
    },

    founderMessage: {
      type: String,
      default: "",
    },

    chairpersonMessage: {
      type: String,
      default: "",
    },

    bannerImage: {
      type: String,
      default: "",
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("About", aboutSchema);
