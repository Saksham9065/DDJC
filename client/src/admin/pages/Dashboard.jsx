import { useEffect, useState } from "react";
import api from "../services/api";

import {
  FaUsers,
  FaEnvelope,
  FaDonate,
  FaImages,
  FaBook,
  FaUserShield,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";

import StatsCard from "../components/StatsCard";
import DonationChart from "../charts/DonationChart";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const { data } = await api.get("/admin/dashboard");

      setDashboard(data);

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading Dashboard...
      </div>
    );
  }

  const stats = dashboard.statistics;

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-bold text-[#0A2540]">
          DDJC Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Administrator
        </p>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        <StatsCard
          title="Contacts"
          value={stats.totalContacts}
          icon={<FaEnvelope />}
          color="bg-blue-600"
        />

        <StatsCard
          title="Volunteers"
          value={stats.totalVolunteers}
          icon={<FaUsers />}
          color="bg-green-600"
        />

        <StatsCard
          title="Donations"
          value={stats.totalDonations}
          icon={<FaDonate />}
          color="bg-red-600"
        />

        <StatsCard
          title="Media"
          value={stats.totalMedia}
          icon={<FaImages />}
          color="bg-purple-600"
        />

        <StatsCard
          title="Resources"
          value={stats.totalResources}
          icon={<FaBook />}
          color="bg-yellow-500"
        />

        <StatsCard
          title="Admins"
          value={stats.totalAdmins}
          icon={<FaUserShield />}
          color="bg-[#0A2540]"
        />

      </div>

      {/* Charts */}

      <DonationChart
        donations={[12,18,22,17,26,31,29,41,37,44,52,61]}
      />

      {/* Bottom Grid */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Recent Contacts */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-bold">
              Recent Contacts
            </h2>

            <FaArrowRight />

          </div>

          {dashboard.latestContacts.length === 0 ? (
            <p>No contacts found.</p>
          ) : (
            dashboard.latestContacts.map((item) => (
              <div
                key={item._id}
                className="border-b py-3"
              >
                <h4 className="font-semibold">
                  {item.fullName}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.email}
                </p>
              </div>
            ))
          )}

        </div>

        {/* Recent Volunteers */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-bold">
              Recent Volunteers
            </h2>

            <FaArrowRight />

          </div>

          {dashboard.latestVolunteers.length === 0 ? (
            <p>No volunteers found.</p>
          ) : (
            dashboard.latestVolunteers.map((item) => (
              <div
                key={item._id}
                className="border-b py-3"
              >
                <h4 className="font-semibold">
                  {item.fullName}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.email}
                </p>
              </div>
            ))
          )}

        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-4 gap-5">

          <button className="bg-[#990000] text-white rounded-xl py-5 flex flex-col items-center gap-3 hover:bg-red-900">

            <FaPlus className="text-3xl" />

            Add Media

          </button>

          <button className="bg-blue-600 text-white rounded-xl py-5 flex flex-col items-center gap-3">

            <FaPlus className="text-3xl" />

            Add Resource

          </button>

          <button className="bg-green-600 text-white rounded-xl py-5 flex flex-col items-center gap-3">

            <FaUsers className="text-3xl" />

            Volunteers

          </button>

          <button className="bg-purple-600 text-white rounded-xl py-5 flex flex-col items-center gap-3">

            <FaEnvelope className="text-3xl" />

            Contacts

          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;