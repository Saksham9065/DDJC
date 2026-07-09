import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

/* ================= WEBSITE PAGES ================= */

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Media from "./pages/Media";
import Stories from "./pages/Stories";
import Resources from "./pages/Resources";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import InCourt from "./pages/InCourt";
import OutCourt from "./pages/OutCourt";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import MediaStories from "./pages/MediaStories";
import Careers from "./pages/Careers";
import Internships from "./pages/Internships";
import Donate from "./pages/Donate";

/* ================= ADMIN ================= */

import ProtectedRoute from "./admin/components/ProtectedRoute";
import AdminLayout from "./admin/layout/AdminLayout";

/* ================= ADMIN PAGES ================= */

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Analytics from "./admin/pages/Analytics";
import Notifications from "./admin/pages/Notifications";
import ExportCenter from "./admin/pages/ExportCenter";
import Profile from "./admin/pages/Profile";
import Contacts from "./admin/pages/Contacts";
import Volunteers from "./admin/pages/Volunteers";
import MediaAdmin from "./admin/pages/Media";
import ResourcesAdmin from "./admin/pages/Resources";
import Donations from "./admin/pages/Donations";
import Settings from "./admin/pages/Settings";

function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <main className="min-h-screen">
        <Routes>

          {/* ================= WEBSITE ROUTES ================= */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />

          <Route path="/resources" element={<Resources />} />

          <Route path="/work" element={<OurWork />} />
          <Route path="/work/in-court" element={<InCourt />} />
          <Route path="/work/out-court" element={<OutCourt />} />

          <Route path="/report" element={<Reports />} />

          <Route path="/media" element={<Media />} />
          <Route path="/media/news" element={<News />} />
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/stories" element={<MediaStories />} />

          <Route path="/stories" element={<Stories />} />

          <Route path="/join/careers" element={<Careers />} />
          <Route path="/join/internships" element={<Internships />} />
          <Route path="/join/volunteers" element={<Volunteer />} />

          <Route path="/volunteer" element={<Volunteer />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/donate" element={<Donate />} />

          {/* ================= ADMIN LOGIN ================= */}

          <Route
            path="/admin/login"
            element={<Login />}
          />

          {/* ================= PROTECTED ADMIN ================= */}

          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>

              <Route
                path="/admin/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/admin/analytics"
                element={<Analytics />}
              />

              <Route
                path="/admin/notifications"
                element={<Notifications />}
              />

              <Route
                path="/admin/export"
                element={<ExportCenter />}
              />

              <Route
                path="/admin/profile"
                element={<Profile />}
              />

              <Route
                path="/admin/contacts"
                element={<Contacts />}
              />

              <Route
                path="/admin/volunteers"
                element={<Volunteers />}
              />

              <Route
                path="/admin/media"
                element={<MediaAdmin />}
              />

              <Route
                path="/admin/resources"
                element={<ResourcesAdmin />}
              />

              <Route
                path="/admin/donations"
                element={<Donations />}
              />

              <Route
                path="/admin/settings"
                element={<Settings />}
              />

            </Route>
          </Route>

          {/* ================= 404 PAGE ================= */}

          <Route
            path="*"
            element={
              <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                  <h1 className="text-7xl font-bold text-[#990000]">
                    404
                  </h1>

                  <p className="mt-4 text-xl text-gray-600">
                    Oops! Page Not Found
                  </p>
                </div>
              </div>
            }
          />

        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;