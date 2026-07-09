const Resource = require("../models/Resource");

// Create Resource
const createResource = async (req, res) => {
  try {
    const file = req.file ? req.file.filename : (req.body.file || "");

    const resource = await Resource.create({
      ...req.body,
      file,
    });

    res.status(201).json({
      success: true,
      message: "Resource created successfully.",
      data: resource,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Resources
const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: resources.length,
      data: resources,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Resource By ID
const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({
        success: false,
        message: "Resource not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: resource,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Resource
const updateResource = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.file = req.file.filename;
    }

    const resource = await Resource.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!resource) {
      return res.status(404).json({
        success: false,
        message: "Resource not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Resource updated successfully.",
      data: resource,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Resource
const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);

    if (!resource) {
      return res.status(404).json({
        success: false,
        message: "Resource not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Resource deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
};