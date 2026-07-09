const Media = require("../models/Media");

// ==========================
// Create Media
// ==========================

const createMedia = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      isPublished,
    } = req.body;

    const media = await Media.create({
      title,
      description,
      category,
      isPublished,
      image: req.file ? req.file.filename : "",
    });

    res.status(201).json({
      success: true,
      message: "Media uploaded successfully.",
      data: media,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get All Media
// ==========================

const getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: media.length,
      data: media,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Single Media
// ==========================

const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    if (!media) {
      return res.status(404).json({
        success: false,
        message: "Media not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: media,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Media
// ==========================

const updateMedia = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const media = await Media.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!media) {
      return res.status(404).json({
        success: false,
        message: "Media not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Media updated successfully.",
      data: media,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Media
// ==========================

const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(
      req.params.id
    );

    if (!media) {
      return res.status(404).json({
        success: false,
        message: "Media not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Media deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
};