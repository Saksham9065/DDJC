const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createAdmin = async () => {
  try {
    const existing = await Admin.findOne();

    if (existing) {
      console.log("Admin already exists.");
      return;
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await Admin.create({
      email: "admin@ddjc.org",
      password: hashedPassword,
      name: "Admin",
    });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE || "7d",
    });

    console.log("Default admin created:");
    console.log("Email: admin@ddjc.org");
    console.log("Password: admin123");
    console.log("Token:", token);
  } catch (error) {
    console.error("Error creating admin:", error.message);
  }
};

module.exports = createAdmin;
