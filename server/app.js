const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// ================= Routes =================

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const contactRoutes = require("./routes/contactRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");
const mediaRoutes = require("./routes/mediaRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const donationRoutes = require("./routes/donationRoutes");
const exportRoutes = require("./routes/exportRoutes");

const app = express();

// ================= Middleware =================

app.use(
  cors({
    origin: function (origin, callback) {
      const allowed = [
        "http://localhost:5173",
        "http://localhost:5000",
        process.env.CLIENT_ORIGIN,
      ].filter(Boolean);

      if (!origin || allowed.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// ================= Static Files =================

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ================= Health Check =================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 DDJC Backend API is running successfully.",
    version: "1.0.0",
  });
});

// ================= API Routes =================

// Authentication
app.use("/api/auth", authRoutes);

// Dashboard
app.use("/api/admin", adminRoutes);

// Analytics
app.use("/api/analytics", analyticsRoutes);

// Notifications
app.use("/api/notifications", notificationRoutes);

// Contact
app.use("/api/contact", contactRoutes);

// Volunteer
app.use("/api/volunteer", volunteerRoutes);

// Media
app.use("/api/media", mediaRoutes);

// Resources
app.use("/api/resources", resourceRoutes);

// Donations
app.use("/api/donations", donationRoutes);

// Export
app.use("/api/export", exportRoutes);

// ================= 404 =================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

module.exports = app;