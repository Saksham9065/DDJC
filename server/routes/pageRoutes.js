const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getPage,
  updatePage,
} = require("../controllers/pageController");

const router = express.Router();

router.get("/:page", getPage);

router.put("/:page", protect, updatePage);

module.exports = router;
