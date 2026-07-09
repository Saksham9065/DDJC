const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getHero,
  updateHero,
} = require("../controllers/heroController");

const router = express.Router();

router.get("/", getHero);

router.put("/", protect, updateHero);

module.exports = router;
