const express = require("express");

const {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
  updateContactStatus,
  getContactStats,
} = require("../controllers/contactController");

const { body } = require("express-validator");

const router = express.Router();

// ==========================
// Contact Routes
// ==========================

// Create Contact Message
router.post(
  "/",
  [
    body("fullName").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").notEmpty().withMessage("Phone is required"),
    body("subject").notEmpty().withMessage("Subject is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  createContact
);

// Get Contact Statistics
router.get("/stats", getContactStats);

// Get All Messages
router.get("/", getAllContacts);

// Get Single Message
router.get("/:id", getContactById);

// Update Contact Status
router.put("/:id/status", updateContactStatus);

// Delete Message
router.delete("/:id", deleteContact);

module.exports = router;