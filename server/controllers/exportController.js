const Contact = require("../models/Contact");
const Volunteer = require("../models/Volunteer");
const Donation = require("../models/Donation");

// ==========================
// Export Contacts
// ==========================

const exportContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();

    const data = contacts.map((c) => ({
      FullName: c.fullName,
      Email: c.email,
      Phone: c.phone,
      Subject: c.subject,
      Message: c.message,
      Status: c.status,
      CreatedAt: c.createdAt,
    }));

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to export contacts",
      error: error.message,
    });
  }
};

// ==========================
// Export Volunteers
// ==========================

const exportVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 }).lean();

    const data = volunteers.map((v) => ({
      FullName: v.fullName,
      Email: v.email,
      Phone: v.phone,
      City: v.city,
      Profession: v.profession,
      Interests: v.interests,
      Status: v.status,
      CreatedAt: v.createdAt,
    }));

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to export volunteers",
      error: error.message,
    });
  }
};

// ==========================
// Export Donations
// ==========================

const exportDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 }).lean();

    const data = donations.map((d) => ({
      DonorName: d.donorName,
      Email: d.email,
      Phone: d.phone,
      Amount: d.amount,
      Purpose: d.purpose,
      PaymentMethod: d.paymentMethod,
      Status: d.status,
      CreatedAt: d.createdAt,
    }));

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to export donations",
      error: error.message,
    });
  }
};

module.exports = {
  exportContacts,
  exportVolunteers,
  exportDonations,
};
