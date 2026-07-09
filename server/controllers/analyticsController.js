const Contact = require("../models/Contact");
const Volunteer = require("../models/Volunteer");
const Donation = require("../models/Donation");
const Media = require("../models/Media");
const Resource = require("../models/Resource");

const getAnalytics = async (req, res) => {
  try {
    const [
      totalContacts,
      totalVolunteers,
      totalDonations,
      totalMedia,
      totalResources,
    ] = await Promise.all([
      Contact.countDocuments(),
      Volunteer.countDocuments(),
      Donation.countDocuments(),
      Media.countDocuments(),
      Resource.countDocuments(),
    ]);

    const donationAmount = await Donation.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.status(200).json({
      success: true,

      statistics: {
        totalContacts,
        totalVolunteers,
        totalDonations,
        totalMedia,
        totalResources,
        donationAmount:
          donationAmount[0]?.total || 0,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getAnalytics,
};