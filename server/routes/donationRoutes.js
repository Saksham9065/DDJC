const express = require("express");

const {
  createDonation,
  getDonations,
  deleteDonation,
} = require("../controllers/donationController");

const router = express.Router();

router.post("/", createDonation);

router.get("/", getDonations);

router.delete("/:id", deleteDonation);

module.exports = router;