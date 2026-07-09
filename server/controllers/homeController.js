const Contact = require("../models/Contact");
const Volunteer = require("../models/Volunteer");
const Media = require("../models/Media");
const Resource = require("../models/Resource");
const Donation = require("../models/Donation");

const getHomeData = async (req, res) => {
  try {
    const latestMedia = await Media.find()
      .sort({ createdAt: -1 })
      .limit(6);

    const latestResources = await Resource.find()
      .sort({ createdAt: -1 })
      .limit(4);

    const statistics = {
      volunteers: await Volunteer.countDocuments(),
      contacts: await Contact.countDocuments(),
      donations: await Donation.countDocuments(),
      media: await Media.countDocuments(),
    };

    res.status(200).json({
      success: true,
      latestMedia,
      latestResources,
      statistics,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getHomeData,
};
