const express = require("express");

const {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
  updateContactStatus,
  getContactStats,
} = require("../controllers/contactController");

const router = express.Router();

// ==========================
// Contact Routes
// ==========================

// Create Contact Message
router.post("/", createContact);

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