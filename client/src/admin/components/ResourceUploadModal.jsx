import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../services/api";

function ResourceUploadModal({
  open,
  onClose,
  onSuccess,
}) {

  const { register, handleSubmit, reset } =
    useForm();

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const onSubmit = async (data) => {

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("author", data.author);

      if (data.file[0]) {
        formData.append("file", data.file[0]);
      }

      await api.post(
        "/resources",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      reset();

      onSuccess();

      onClose();

    } catch (error) {

      console.log(error);

    }

    setLoading(false);

  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white w-full max-w-xl rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-6">

          Upload Resource

        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <input
            {...register("title")}
            placeholder="Title"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full border p-3 rounded-lg"
          />

          <input
            {...register("author")}
            placeholder="Author"
            className="w-full border p-3 rounded-lg"
          />

          <select
            {...register("category")}
            className="w-full border p-3 rounded-lg"
          >
            <option>Report</option>
            <option>Guide</option>
            <option>Research</option>
            <option>Document</option>
          </select>

          <input
            type="file"
            {...register("file")}
          />

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-3 rounded-lg"
            >
              Cancel
            </button>

            <button
              disabled={loading}
              className="bg-[#0A2540] text-white px-5 py-3 rounded-lg"
            >
              {loading
                ? "Uploading..."
                : "Upload"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ResourceUploadModal;
