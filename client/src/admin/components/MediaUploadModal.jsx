import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";

function MediaUploadModal({ open, onClose, onSuccess }) {
  const { register, handleSubmit, reset } = useForm();

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("isPublished", data.isPublished);

      if (data.image[0]) {
        formData.append("image", data.image[0]);
      }

      await api.post("/media", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      reset();
      setPreview(null);
      onSuccess();
      onClose();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-2xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Upload Media
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <input
            {...register("title")}
            placeholder="Title"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full border rounded-lg p-3"
          />

          <select
            {...register("category")}
            className="w-full border rounded-lg p-3"
          >
            <option>Gallery</option>
            <option>News</option>
            <option>Event</option>
            <option>Campaign</option>
          </select>

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              {...register("isPublished")}
            />

            Publish Immediately

          </label>

          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={(e) => {
              if (e.target.files[0]) {
                setPreview(
                  URL.createObjectURL(
                    e.target.files[0]
                  )
                );
              }
            }}
          />

          {preview && (

            <img
              src={preview}
              alt="preview"
              className="h-56 rounded-lg object-cover"
            />

          )}

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-lg border"
            >
              Cancel
            </button>

            <button
              disabled={loading}
              className="bg-[#0A2540] text-white px-6 py-3 rounded-lg"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default MediaUploadModal;
