const express = require("express");

const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/authController");

const router = express.Router();

// ==========================
// Authentication Routes
// ==========================

// Register Admin
router.post("/register", registerAdmin);

// Login Admin
router.post("/login", loginAdmin);

module.exports = router;