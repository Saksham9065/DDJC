import { useEffect, useState } from "react";
import api from "../services/api";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data } = await api.get("/contact");
      setContacts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/contact/${id}`);

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/contact/${id}/status`, {
        status,
      });

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Contact Messages
        </h1>

      </div>

      <div className="bg-white rounded-xl shadow overflow-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4">Name</th>

              <th>Email</th>

              <th>Subject</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {contacts.map((item) => (

              <tr key={item._id}>

                <td className="p-4">
                  {item.fullName}
                </td>

                <td>
                  {item.email}
                </td>

                <td>
                  {item.subject}
                </td>

                <td>

                  <select
                    value={item.status}
                    onChange={(e) =>
                      updateStatus(
                        item._id,
                        e.target.value
                      )
                    }
                  >

                    <option>New</option>

                    <option>Resolved</option>

                  </select>

                </td>

                <td>

                  <button
                    onClick={() =>
                      deleteContact(item._id)
                    }
                    className="bg-red-600 text-white px-3 py-2 rounded"
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

export default Contacts;
