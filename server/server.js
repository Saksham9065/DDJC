require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// ==========================
// Start Server
// ==========================

const startServer = async () => {
  try {
    // Connect MongoDB
    await connectDB();

    // Start Express Server
    app.listen(PORT, () => {
      console.log("====================================");
      console.log("🚀 DDJC Server Running");
      console.log(`🌐 Server: http://localhost:${PORT}`);
      console.log("====================================");
    });
  } catch (error) {
    console.error("❌ Server Startup Failed");
    console.error(error.message);
    process.exit(1);
  }
};

startServer();