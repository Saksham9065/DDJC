const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getSettings,
  updateSettings,
} = require("../controllers/settingController");

const router = express.Router();

router.get("/", protect, getSettings);

router.put("/", protect, updateSettings);

module.exports = router;
