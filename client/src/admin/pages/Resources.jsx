import { useEffect, useState } from "react";
import api from "../services/api";
import ResourceUploadModal from "../components/ResourceUploadModal";

function Resources() {
  const [resources, setResources] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const { data } = await api.get("/resources");
      setResources(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteResource = async (id) => {
    if (!window.confirm("Delete this resource?")) return;

    try {
      await api.delete(`/resources/${id}`);
      fetchResources();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Resources
          </h1>

          <p className="text-gray-500">
            Manage reports, PDFs and documents.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#0A2540] text-white px-5 py-3 rounded-lg"
        >
          + Upload Resource
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4">Title</th>

              <th>Category</th>

              <th>Author</th>

              <th>Downloads</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {resources.map((item) => (

              <tr
                key={item._id}
                className="border-b"
              >

                <td className="p-4">
                  {item.title}
                </td>

                <td>
                  {item.category}
                </td>

                <td>
                  {item.author}
                </td>

                <td>
                  {item.downloads}
                </td>

                <td>

                  <button
                    onClick={() =>
                      deleteResource(item._id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <ResourceUploadModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={fetchResources}
      />

    </div>
  );
}

export default Resources;
