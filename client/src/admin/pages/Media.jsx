import { useEffect, useState } from "react";
import api from "../services/api";
import { FaTrash, FaUpload } from "react-icons/fa";

import { API_BASE_URL } from "../../config";

function Media() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "News",
    isPublished: true,
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  // ==========================
  // Fetch Media
  // ==========================

  const fetchMedia = async () => {
    try {
      const { data } = await api.get("/media");

      setMedia(data.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  // ==========================
  // Upload Media
  // ==========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("isPublished", form.isPublished);

    if (image) {
      formData.append("image", image);
    }

    try {

      await api.post("/media", formData);

      setForm({
        title: "",
        description: "",
        category: "News",
        isPublished: true,
      });

      setImage(null);

      fetchMedia();

    } catch (error) {

      console.error(error);

    }
  };

  // ==========================
  // Delete
  // ==========================

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this media?")) return;

    try {

      await api.delete(`/media/${id}`);

      fetchMedia();

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-[#0A2540]">

          Media Management

        </h1>

        <p className="text-gray-500">

          Upload and manage media gallery.

        </p>

      </div>

      {/* Upload Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 space-y-4"
      >

        <input
          type="text"
          placeholder="Title"
          className="w-full border rounded-lg p-3"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          required
        />

        <textarea
          placeholder="Description"
          className="w-full border rounded-lg p-3"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <select
          className="w-full border rounded-lg p-3"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        >
          <option>News</option>
          <option>Gallery</option>
          <option>Event</option>
        </select>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          className="bg-[#990000] text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          <FaUpload />

          Upload Media
        </button>

      </form>

      {/* Media Grid */}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6">

          {media.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              <img
                src={`${API_BASE_URL}/uploads/${item.image}`}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">

                <h3 className="font-bold">

                  {item.title}

                </h3>

                <p className="text-sm text-gray-500 mt-2">

                  {item.category}

                </p>

                <button
                  onClick={() =>
                    handleDelete(item._id)
                  }
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaTrash />

                  Delete

                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Media;