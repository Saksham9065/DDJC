const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

// ==========================
// Create Contact Message
// ==========================

const createContact = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      subject,
      message,
    } = req.body;

    // Validation
    if (!fullName || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Save Contact
    const contact = await Contact.create({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    // Send Confirmation Email
    await sendEmail(
      email,
      "Thank You for Contacting DDJC",
      `
        <div style="font-family: Arial, sans-serif; line-height:1.7; color:#333;">
          <h2 style="color:#8B0000;">Thank You, ${fullName}!</h2>

          <p>We have successfully received your message.</p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <p>
            Our team will review your message and get back to you as soon as possible.
          </p>

          <hr>

          <h3>Your Details</h3>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <br>

          <p>
            Thank you for reaching out to the
            <strong>Dalit Dignity & Justice Center (DDJC)</strong>.
          </p>

          <br>

          <p>
            Regards,<br>
            <strong>DDJC Team</strong>
          </p>
        </div>
      `
    );

    res.status(201).json({
      success: true,
      message: "Message submitted successfully.",
      data: contact,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Get All Contact Messages
// ==========================

const getAllContacts = async (req, res) => {
  try {

    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Get Contact By ID
// ==========================

const getContactById = async (req, res) => {
  try {

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Update Contact Status
// ==========================

const updateContactStatus = async (req, res) => {
  try {

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact status updated successfully.",
      data: contact,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Delete Contact
// ==========================

const deleteContact = async (req, res) => {
  try {

    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Contact Statistics
// ==========================

const getContactStats = async (req, res) => {
  try {

    const total = await Contact.countDocuments();

    const pending = await Contact.countDocuments({
      status: "New",
    });

    const resolved = await Contact.countDocuments({
      status: "Resolved",
    });

    res.status(200).json({
      success: true,
      statistics: {
        total,
        pending,
        resolved,
      },
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Export Controllers
// ==========================

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats,
};