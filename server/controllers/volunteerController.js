const Volunteer = require("../models/Volunteer");
const sendEmail = require("../utils/sendEmail");

// ==========================
// Create Volunteer
// ==========================

const createVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create(req.body);

    // Send Confirmation Email
    await sendEmail(
      volunteer.email,
      "Volunteer Registration Received - DDJC",
      `
        <h2>Thank You, ${volunteer.fullName}</h2>

        <p>Your volunteer registration has been received successfully.</p>

        <p>Our team will review your application and contact you shortly.</p>

        <hr>

        <h3>Your Details</h3>

        <p><strong>Name:</strong> ${volunteer.fullName}</p>
        <p><strong>Email:</strong> ${volunteer.email}</p>
        <p><strong>Phone:</strong> ${volunteer.phone}</p>

        <br>

        <p>Thank you for supporting the mission of the Dalit Dignity & Justice Center.</p>

        <br>

        <p><strong>DDJC Team</strong></p>
      `
    );

    res.status(201).json({
      success: true,
      message: "Volunteer registration submitted successfully.",
      data: volunteer,
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
// Get All Volunteers
// ==========================

const getAllVolunteers = async (req, res) => {
  try {

    const volunteers = await Volunteer.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: volunteers.length,
      data: volunteers,
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
// Get Volunteer By ID
// ==========================

const getVolunteerById = async (req, res) => {
  try {

    const volunteer = await Volunteer.findById(req.params.id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: volunteer,
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
// Update Volunteer
// ==========================

const updateVolunteer = async (req, res) => {
  try {

    const volunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Volunteer updated successfully.",
      data: volunteer,
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
// Delete Volunteer
// ==========================

const deleteVolunteer = async (req, res) => {
  try {

    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Volunteer deleted successfully.",
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
  createVolunteer,
  getAllVolunteers,
  getVolunteerById,
  updateVolunteer,
  deleteVolunteer,
};