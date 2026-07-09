import { useEffect, useState } from "react";
import api from "../services/api";
import { FaTrash, FaDonate } from "react-icons/fa";

function Donations() {
  const [donations, setDonations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const { data } = await api.get("/donations");

      setDonations(data.data);

      const total = data.data.reduce(
        (sum, item) => sum + Number(item.amount),
        0
      );

      setTotalAmount(total);

    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this donation?")) return;

    try {
      await api.delete(`/donations/${id}`);

      fetchDonations();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-[#0A2540]">
            Donations
          </h1>

          <p className="text-gray-500">
            Manage all donations.
          </p>

        </div>

        <div className="bg-green-600 text-white px-6 py-4 rounded-xl flex items-center gap-3">

          <FaDonate className="text-2xl" />

          <div>

            <p>Total Donations</p>

            <h2 className="text-xl font-bold">

              ₹{totalAmount.toLocaleString()}

            </h2>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#0A2540] text-white">

            <tr>

              <th className="p-4 text-left">
                Donor
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Purpose
              </th>

              <th className="p-4 text-left">
                Payment
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {donations.map((item) => (

              <tr
                key={item._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">

                  {item.donorName}

                </td>

                <td className="p-4 font-semibold text-green-600">

                  ₹{item.amount}

                </td>

                <td className="p-4">

                  {item.purpose}

                </td>

                <td className="p-4">

                  {item.paymentMethod}

                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Donations;