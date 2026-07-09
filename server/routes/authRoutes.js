const express = require("express");

const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/authController");

const { body } = require("express-validator");

const router = express.Router();

// ==========================
// Authentication Routes
// ==========================

// Register Admin
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  registerAdmin
);

// Login Admin
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginAdmin
);

module.exports = router;