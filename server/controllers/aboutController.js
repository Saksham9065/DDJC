const About = require("../models/About");

const getAbout = async (req, res) => {
  try {
    const about = await About.findOne({
      page: req.params.page || "about",
    });

    res.status(200).json({
      success: true,
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAbout = async (req, res) => {
  try {
    let about = await About.findOne({
      page: req.params.page || "about",
    });

    if (!about) {
      about = await About.create({
        page: req.params.page || "about",
        ...req.body,
      });
    } else {
      about = await About.findByIdAndUpdate(
        about._id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      success: true,
      message: "About updated successfully.",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAbout,
  updateAbout,
};
