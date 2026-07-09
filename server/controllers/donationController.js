const Donation = require("../models/Donation");

// ==========================
// Create Donation
// ==========================

const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);

    res.status(201).json({
      success: true,
      message: "Donation created successfully.",
      data: donation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get All Donations
// ==========================

const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: donations.length,
      data: donations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Donation
// ==========================

const deleteDonation = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndDelete(
      req.params.id
    );

    if (!donation) {
      return res.status(404).json({
        success: false,
        message: "Donation not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Donation deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createDonation,
  getDonations,
  deleteDonation,
};