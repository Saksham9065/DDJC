const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

// ================= Routes =================

const homeRoutes = require("./routes/homeRoutes");
const pageRoutes = require("./routes/pageRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const activityRoutes = require("./routes/activityRoutes");
const settingRoutes = require("./routes/settingRoutes");

const contactRoutes = require("./routes/contactRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");
const mediaRoutes = require("./routes/mediaRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const donationRoutes = require("./routes/donationRoutes");
const exportRoutes = require("./routes/exportRoutes");

const app = express();

// ================= Middleware =================

app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5000",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
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

// Activity
app.use("/api/activity", activityRoutes);

// Home
app.use("/api/home", homeRoutes);

// Hero
app.use("/api/hero", require("./routes/heroRoutes"));

// Pages
app.use("/api/pages", pageRoutes);

// Settings
app.use("/api/settings", settingRoutes);

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

// ================= Error Handler =================

const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);

// ================= 404 =================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

module.exports = app;