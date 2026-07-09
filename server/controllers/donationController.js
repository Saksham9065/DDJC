const crypto = require("crypto");
const razorpay = require("../config/razorpay");
const Donation = require("../models/Donation");
const logActivity = require("../utils/logActivity");

// ==========================
// Create Donation
// ==========================

const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);

    await logActivity("Create", "Donation", `${donation.donorName} donated ₹${donation.amount}.`);

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

    await logActivity("Delete", "Donation", "Donation deleted.");

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

// ==========================
// Create Razorpay Order
// ==========================

const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Verify Payment
// ==========================

const verifyPayment = async (req, res) => {
  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      donorName,
      email,
      phone,
      amount,
      purpose,
    } = req.body;

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(
        razorpay_order_id + "|" + razorpay_payment_id
      )
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed.",
      });
    }

    const donation = await Donation.create({
      donorName,
      email,
      phone,
      amount,
      purpose,
      paymentMethod: "Razorpay",
      status: "Success",
      transactionId: razorpay_payment_id,
    });

    res.status(200).json({
      success: true,
      message: "Donation successful.",
      data: donation,
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
  createOrder,
  verifyPayment,
};
