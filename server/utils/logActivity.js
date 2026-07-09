const Activity = require("../models/Activity");

const logActivity = async (
  action,
  module,
  description,
  admin = "Administrator"
) => {
  try {
    await Activity.create({
      action,
      module,
      description,
      admin,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = logActivity;
