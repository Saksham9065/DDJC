const express = require("express");

const {
  createVolunteer,
  getAllVolunteers,
  getVolunteerById,
  updateVolunteer,
  deleteVolunteer,
} = require("../controllers/volunteerController");

const router = express.Router();

router.post("/", createVolunteer);

router.get("/", getAllVolunteers);

router.get("/:id", getVolunteerById);

router.put("/:id", updateVolunteer);

router.delete("/:id", deleteVolunteer);

module.exports = router;