const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getAbout,
  updateAbout,
} = require("../controllers/aboutController");

const router = express.Router();

router.get("/:page?", getAbout);

router.put("/:page?", protect, updateAbout);

module.exports = router;
