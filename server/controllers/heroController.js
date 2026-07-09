const Hero = require("../models/Hero");

const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();

    res.status(200).json({
      success: true,
      data: hero,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateHero = async (req, res) => {
  try {
    let hero = await Hero.findOne();

    if (!hero) {
      hero = await Hero.create(req.body);
    } else {
      hero = await Hero.findByIdAndUpdate(
        hero._id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      success: true,
      message: "Hero updated successfully.",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getHero,
  updateHero,
};
