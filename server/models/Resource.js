const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: [
        "Report",
        "Guide",
        "Research",
        "Document",
      ],
      default: "Report",
    },

    file: {
      type: String,
      default: "",
    },

    author: {
      type: String,
      default: "DDJC",
    },

    downloads: {
      type: Number,
      default: 0,
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

module.exports = mongoose.model(
  "Resource",
  resourceSchema
);