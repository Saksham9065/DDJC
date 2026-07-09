const express = require("express");

const {
  createDonation,
  getDonations,
  deleteDonation,
  createOrder,
  verifyPayment,
} = require("../controllers/donationController");

const router = express.Router();

router.get("/", getDonations);

router.post("/", createDonation);

router.delete("/:id", deleteDonation);

router.post("/create-order", createOrder);

router.post("/verify-payment", verifyPayment);

module.exports = router;
