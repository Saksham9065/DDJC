import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChartBar,
  FaBell,
  FaFileExport,
  FaUserCircle,
  FaEnvelope,
  FaUsers,
  FaImages,
  FaBook,
  FaDonate,
  FaCog,
  FaSignOutAlt,
  FaBalanceScale,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: <FaChartBar />,
  },
  {
    name: "Notifications",
    path: "/admin/notifications",
    icon: <FaBell />,
  },
  {
    name: "Export Center",
    path: "/admin/export",
    icon: <FaFileExport />,
  },
  {
    name: "Profile",
    path: "/admin/profile",
    icon: <FaUserCircle />,
  },
  {
    name: "Contacts",
    path: "/admin/contacts",
    icon: <FaEnvelope />,
  },
  {
    name: "Volunteers",
    path: "/admin/volunteers",
    icon: <FaUsers />,
  },
  {
    name: "Media",
    path: "/admin/media",
    icon: <FaImages />,
  },
  {
    name: "Resources",
    path: "/admin/resources",
    icon: <FaBook />,
  },
  {
    name: "Donations",
    path: "/admin/donations",
    icon: <FaDonate />,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <FaCog />,
  },
];

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");

    navigate("/admin/login");
  };

  return (
    <aside className="w-72 min-h-screen bg-[#0A2540] text-white flex flex-col shadow-2xl">

      {/* Logo */}

      <div className="p-6 border-b border-white/10">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-[#990000] flex items-center justify-center">

            <FaBalanceScale className="text-2xl" />

          </div>

          <div>

            <h2 className="text-xl font-bold">
              DDJC Admin
            </h2>

            <p className="text-xs text-gray-300">
              Management System
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto py-5">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group mx-3 mb-2 flex items-center gap-4 rounded-xl px-5 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-[#990000] text-white shadow-lg"
                  : "text-gray-300 hover:bg-[#163B65] hover:text-white"
              }`
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="font-medium tracking-wide">
              {item.name}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* Footer */}

      <div className="border-t border-white/10 p-6">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-700 transition"
        >
          <FaSignOutAlt />

          Logout
        </button>

        <div className="mt-6 text-center">

          <p className="text-xs text-gray-400">
            DDJC Admin Panel
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Version 1.0.0
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;