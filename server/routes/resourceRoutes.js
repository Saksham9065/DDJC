const express = require("express");

const upload = require("../middleware/uploadMiddleware");

const {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} = require("../controllers/resourceController");

const router = express.Router();

// ==========================
// Resource Routes
// ==========================

// Create Resource
router.post(
  "/",
  upload.single("file"),
  createResource
);

// Get All Resources
router.get("/", getAllResources);

// Get Single Resource
router.get("/:id", getResourceById);

// Update Resource
router.put(
  "/:id",
  upload.single("file"),
  updateResource
);

// Delete Resource
router.delete("/:id", deleteResource);

module.exports = router;