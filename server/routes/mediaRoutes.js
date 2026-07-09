const express = require("express");

const upload = require("../middleware/uploadMiddleware");

const {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
} = require("../controllers/mediaController");

const router = express.Router();

// =====================================
// Media Routes
// =====================================

// Create Media (Upload Image)
router.post(
  "/",
  upload.single("image"),
  createMedia
);

// Get All Media
router.get("/", getAllMedia);

// Get Single Media
router.get("/:id", getMediaById);

// Update Media (Optional New Image)
router.put(
  "/:id",
  upload.single("image"),
  updateMedia
);

// Delete Media
router.delete("/:id", deleteMedia);

module.exports = router;