const Contact = require("../models/Contact");
const Volunteer = require("../models/Volunteer");
const Admin = require("../models/Admin");
const Media = require("../models/Media");
const Resource = require("../models/Resource");
const Donation = require("../models/Donation");

// ==========================
// Admin Dashboard
// ==========================

const getDashboard = async (req, res) => {
  try {
    // Dashboard Statistics
    const totalContacts = await Contact.countDocuments();
    const totalVolunteers = await Volunteer.countDocuments();
    const totalAdmins = await Admin.countDocuments();
    const totalMedia = await Media.countDocuments();
    const totalResources = await Resource.countDocuments();
    const totalDonations = await Donation.countDocuments();

    // Recent Data
    const latestContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const latestVolunteers = await Volunteer.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const latestMedia = await Media.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const latestResources = await Resource.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const latestDonations = await Donation.find()
      .sort({ createdAt: -1 })
      .limit(5);

    // Total Donation Amount
    const donationAmount = await Donation.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);

    const totalDonationAmount =
      donationAmount.length > 0
        ? donationAmount[0].totalAmount
        : 0;

    res.status(200).json({
      success: true,

      statistics: {
        totalContacts,
        totalVolunteers,
        totalAdmins,
        totalMedia,
        totalResources,
        totalDonations,
        totalDonationAmount,
      },

      latestContacts,
      latestVolunteers,
      latestMedia,
      latestResources,
      latestDonations,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getDashboard,
};