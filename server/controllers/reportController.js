const Report = require("../models/Report");

// ==========================
// Create Report
// ==========================

const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);

    res.status(201).json({
      success: true,
      message: "Case reported successfully.",
      data: report,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Get All Reports
// ==========================

const getAllReports = async (req, res) => {
  try {

    const reports = await Report.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reports.length,
      data: reports,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Get Report By ID
// ==========================

const getReportById = async (req, res) => {
  try {

    const report = await Report.findById(
      req.params.id
    );

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: report,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Update Report Status
// ==========================

const updateReport = async (req, res) => {
  try {

    const report = await Report.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Report updated successfully.",
      data: report,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Delete Report
// ==========================

const deleteReport = async (req, res) => {
  try {

    const report = await Report.findByIdAndDelete(
      req.params.id
    );

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Report deleted successfully.",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
};