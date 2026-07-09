const express = require("express");

const router = express.Router();

const {
  exportContacts,
  exportVolunteers,
  exportDonations,
} = require("../controllers/exportController");

// ==========================
// Export Routes
// ==========================

router.get("/contacts", exportContacts);
router.get("/volunteers", exportVolunteers);
router.get("/donations", exportDonations);

module.exports = router;
