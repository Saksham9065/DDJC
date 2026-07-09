const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getDashboard,
} = require("../controllers/adminController");

const router = express.Router();

// ==========================================
// Admin Routes (Protected)
// ==========================================

// Dashboard
router.get("/dashboard", protect, getDashboard);

// Future Routes
// router.get("/contacts", protect, getAllContacts);
// router.get("/volunteers", protect, getAllVolunteers);
// router.get("/media", protect, getAllMedia);
// router.get("/resources", protect, getAllResources);
// router.get("/donations", protect, getAllDonations);

module.exports = router;