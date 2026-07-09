import { useEffect, useState } from "react";
import api from "../services/api";
import DataTable from "../components/DataTable";

function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      label: "Name",
      key: "fullName",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Phone",
      key: "phone",
    },
    {
      label: "Occupation",
      key: "occupation",
    },
    {
      label: "City",
      key: "city",
    },
  ];

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const { data } = await api.get("/volunteer");

      setVolunteers(data.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  const handleDelete = async (volunteer) => {
    const confirmDelete = window.confirm(
      "Delete this volunteer?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(`/volunteer/${volunteer._id}`);

      fetchVolunteers();

    } catch (error) {

      console.error(error);

    }
  };

  const handleEdit = (volunteer) => {
    alert(
      `Update Volunteer: ${volunteer.fullName} (Coming Soon)`
    );
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-lg">
        Loading Volunteers...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-[#0A2540]">
            Volunteers
          </h1>

          <p className="text-gray-500">
            Manage volunteer registrations.
          </p>

        </div>

      </div>

      <DataTable
        columns={columns}
        data={volunteers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default Volunteers;