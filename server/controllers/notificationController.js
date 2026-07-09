const Contact = require("../models/Contact");
const Volunteer = require("../models/Volunteer");
const Donation = require("../models/Donation");
const Media = require("../models/Media");

const getNotifications = async (req, res) => {
  try {
    const notifications = [];

    // Latest Contacts
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5);

    contacts.forEach((item) => {
      notifications.push({
        type: "contact",
        title: "New Contact Message",
        message: `${item.fullName} sent a contact message.`,
        createdAt: item.createdAt,
      });
    });

    // Latest Volunteers
    const volunteers = await Volunteer.find()
      .sort({ createdAt: -1 })
      .limit(5);

    volunteers.forEach((item) => {
      notifications.push({
        type: "volunteer",
        title: "New Volunteer",
        message: `${item.fullName} registered as volunteer.`,
        createdAt: item.createdAt,
      });
    });

    // Latest Donations
    const donations = await Donation.find()
      .sort({ createdAt: -1 })
      .limit(5);

    donations.forEach((item) => {
      notifications.push({
        type: "donation",
        title: "Donation Received",
        message: `${item.donorName} donated ₹${item.amount}.`,
        createdAt: item.createdAt,
      });
    });

    // Latest Media
    const media = await Media.find()
      .sort({ createdAt: -1 })
      .limit(5);

    media.forEach((item) => {
      notifications.push({
        type: "media",
        title: "Media Uploaded",
        message: `${item.title} added to media gallery.`,
        createdAt: item.createdAt,
      });
    });

    notifications.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
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
  getNotifications,
};