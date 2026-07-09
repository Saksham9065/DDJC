import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-20 bg-white shadow-sm border-b flex items-center justify-between px-8">

      {/* Left Section */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}

        <button className="lg:hidden text-2xl text-[#0A2540]">

          <FaBars />

        </button>

        <div>

          <h1 className="text-2xl font-bold text-[#0A2540]">

            Dashboard

          </h1>

          <p className="text-sm text-gray-500">

            {today}

          </p>

        </div>

      </div>

      {/* Center Search */}

      <div className="hidden md:flex items-center w-96 relative">

        <FaSearch className="absolute left-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#990000]"
        />

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-6">

        {/* Notification */}

        <button className="relative text-2xl text-gray-600 hover:text-[#990000] transition">

          <FaBell />

          <span className="absolute -top-1 -right-2 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">

            3

          </span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-[#0A2540]" />

          <div className="hidden md:block">

            <h3 className="font-semibold text-[#0A2540]">

              Admin

            </h3>

            <p className="text-xs text-gray-500">

              DDJC Administrator

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;