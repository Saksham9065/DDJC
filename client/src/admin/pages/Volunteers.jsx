import { useEffect, useState } from "react";
import api from "../services/api";

function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const { data } = await api.get("/volunteer");
      setVolunteers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVolunteer = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this volunteer?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/volunteer/${id}`);
      fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  const updateVolunteer = async (id, status) => {
    try {
      await api.put(`/volunteer/${id}`, {
        status,
      });

      fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Volunteers
        </h1>

        <p className="text-gray-500">
          Manage volunteer applications.
        </p>

      </div>

      <div className="bg-white rounded-xl shadow overflow-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4">Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {volunteers.map((item) => (

              <tr
                key={item._id}
                className="border-b"
              >

                <td className="p-4">
                  {item.fullName}
                </td>

                <td>
                  {item.email}
                </td>

                <td>
                  {item.phone}
                </td>

                <td>

                  <select
                    value={item.status || "Pending"}
                    onChange={(e) =>
                      updateVolunteer(
                        item._id,
                        e.target.value
                      )
                    }
                    className="border rounded px-3 py-2"
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Approved">
                      Approved
                    </option>

                    <option value="Rejected">
                      Rejected
                    </option>

                  </select>

                </td>

                <td>

                  <button
                    onClick={() =>
                      deleteVolunteer(item._id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
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

export default Volunteers;
