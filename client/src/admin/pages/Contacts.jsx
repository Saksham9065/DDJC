import { useEffect, useState } from "react";
import api from "../services/api";
import DataTable from "../components/DataTable";

function Contacts() {
  const [contacts, setContacts] = useState([]);
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
      label: "Subject",
      key: "subject",
    },
    {
      label: "Status",
      key: "status",
    },
  ];

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data } = await api.get("/contact");

      setContacts(data.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  const handleDelete = async (contact) => {
    const confirmDelete = window.confirm(
      "Delete this contact?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(`/contact/${contact._id}`);

      fetchContacts();

    } catch (error) {

      console.error(error);

    }
  };

  const handleEdit = (contact) => {
    alert(
      `Update status for ${contact.fullName} (Coming Soon)`
    );
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-lg">
        Loading Contacts...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-[#0A2540]">
            Contact Messages
          </h1>

          <p className="text-gray-500">
            Manage messages received from the website.
          </p>

        </div>

      </div>

      <DataTable
        columns={columns}
        data={contacts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default Contacts;