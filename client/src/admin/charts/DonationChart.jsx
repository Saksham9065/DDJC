import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function DonationChart({ donations }) {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Donations",

        data: donations,

        backgroundColor: "#990000",
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-6">

        Monthly Donations

      </h2>

      <Bar data={data} />

    </div>
  );
}

export default DonationChart;