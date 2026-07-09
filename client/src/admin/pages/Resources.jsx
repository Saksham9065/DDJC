import { useEffect, useState } from "react";
import api from "../services/api";
import {
  FaTrash,
  FaUpload,
  FaDownload,
} from "react-icons/fa";

import { API_BASE_URL } from "../../config";

function Resources() {
  const [resources, setResources] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Guide",
    author: "DDJC",
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchResources();
  }, []);

  // Fetch Resources

  const fetchResources = async () => {
    try {
      const { data } = await api.get("/resources");

      setResources(data.data);

    } catch (err) {
      console.log(err);
    }
  };

  // Upload Resource

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("author", form.author);

    if (file) {
      formData.append("file", file);
    }

    try {
      await api.post("/resources", formData);

      setForm({
        title: "",
        description: "",
        category: "Guide",
        author: "DDJC",
      });

      setFile(null);

      fetchResources();

    } catch (err) {
      console.log(err);
    }
  };

  // Delete Resource

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this resource?")) return;

    try {
      await api.delete(`/resources/${id}`);

      fetchResources();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-[#0A2540]">
        Resources
      </h1>

      {/* Upload Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 space-y-4"
      >

        <input
          className="w-full border p-3 rounded"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <textarea
          className="w-full border p-3 rounded"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-3 rounded"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        >
          <option>Guide</option>
          <option>Report</option>
          <option>Publication</option>
          <option>Research</option>
        </select>

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <button
          className="bg-[#990000] text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          <FaUpload />

          Upload Resource
        </button>

      </form>

      {/* Table */}

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-[#0A2540] text-white">

            <tr>

              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Author
              </th>

              <th className="p-4">
                Actions
              </th>

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

                <td className="p-4">
                  {item.category}
                </td>

                <td className="p-4">
                  {item.author}
                </td>

                <td className="p-4">

                  <div className="flex gap-3 justify-center">

                    <a
                      href={`${API_BASE_URL}/uploads/${item.file}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-blue-600 text-white p-2 rounded"
                    >
                      <FaDownload />
                    </a>

                    <button
                      onClick={() =>
                        handleDelete(item._id)
                      }
                      className="bg-red-600 text-white p-2 rounded"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Resources;