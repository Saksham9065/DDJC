const Page = require("../models/Page");

const getPage = async (req, res) => {
  try {
    const page = await Page.findOne({
      page: req.params.page,
    });

    res.json({
      success: true,
      data: page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updatePage = async (req, res) => {
  try {
    const page = await Page.findOneAndUpdate(
      { page: req.params.page },
      req.body,
      {
        new: true,
        upsert: true,
      }
    );

    res.json({
      success: true,
      data: page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getPage,
  updatePage,
};
