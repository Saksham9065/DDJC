const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
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

    content: {
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

module.exports = mongoose.model("Page", pageSchema);
