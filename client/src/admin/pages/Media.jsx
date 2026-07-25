import { useEffect, useState } from "react";
import api from "../services/api";
import MediaUploadModal from "../components/MediaUploadModal";

function Media() {
  const [media, setMedia] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const { data } = await api.get("/media");
      setMedia(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMedia = async (id) => {
    if (!window.confirm("Delete this media?")) return;

    try {
      await api.delete(`/media/${id}`);
      fetchMedia();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Media Management
          </h1>

          <p className="text-gray-500">
            Upload and manage media files.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#0A2540] text-white px-5 py-3 rounded-lg"
        >
          + Upload Media
        </button>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {media.map((item) => (

          <div
            key={item._id}
            className="bg-white rounded-xl shadow overflow-hidden"
          >

            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="font-bold text-xl">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.description}
              </p>

              <div className="flex gap-3 mt-5">

                <button
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteMedia(item._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      <MediaUploadModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={fetchMedia}
      />

    </div>
  );
}

export default Media;
