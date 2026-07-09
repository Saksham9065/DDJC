const express = require("express");

const {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
} = require("../controllers/reportController");

const router = express.Router();

// Create Report
router.post("/", createReport);

// Get All Reports
router.get("/", getAllReports);

// Get Report By ID
router.get("/:id", getReportById);

// Update Report
router.put("/:id", updateReport);

// Delete Report
router.delete("/:id", deleteReport);

module.exports = router;