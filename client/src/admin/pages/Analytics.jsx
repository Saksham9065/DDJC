import {
  FaUsers,
  FaEnvelope,
  FaDonate,
  FaImages,
} from "react-icons/fa";

import StatsCard from "../components/StatsCard";
import DonationChart from "../charts/DonationChart";

function Analytics() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold text-[#0A2540]">
          Analytics Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Overview of DDJC performance and growth.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Contacts"
          value="128"
          icon={<FaEnvelope />}
          color="bg-blue-600"
        />

        <StatsCard
          title="Volunteers"
          value="96"
          icon={<FaUsers />}
          color="bg-green-600"
        />

        <StatsCard
          title="Donations"
          value="₹2.8L"
          icon={<FaDonate />}
          color="bg-red-600"
        />

        <StatsCard
          title="Media Posts"
          value="64"
          icon={<FaImages />}
          color="bg-purple-600"
        />

      </div>

      {/* Donation Chart */}

      <DonationChart
        donations={[
          12,
          18,
          25,
          30,
          45,
          52,
          48,
          60,
          66,
          70,
          82,
          95,
        ]}
      />

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Monthly Report */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-5">
            Monthly Summary
          </h2>

          <ul className="space-y-4">

            <li className="flex justify-between">
              <span>Total Contacts</span>
              <strong>128</strong>
            </li>

            <li className="flex justify-between">
              <span>Total Volunteers</span>
              <strong>96</strong>
            </li>

            <li className="flex justify-between">
              <span>Total Donations</span>
              <strong>₹2,80,000</strong>
            </li>

            <li className="flex justify-between">
              <span>Media Published</span>
              <strong>64</strong>
            </li>

          </ul>

        </div>

        {/* Growth */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-5">
            Growth
          </h2>

          <div className="space-y-5">

            <div>

              <p className="mb-2">
                Volunteers
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div className="bg-green-600 h-3 rounded-full w-4/5"></div>

              </div>

            </div>

            <div>

              <p className="mb-2">
                Donations
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div className="bg-red-600 h-3 rounded-full w-3/4"></div>

              </div>

            </div>

            <div>

              <p className="mb-2">
                Contacts
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div className="bg-blue-600 h-3 rounded-full w-2/3"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;