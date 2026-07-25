import { useEffect, useState } from "react";
import api from "../services/api";

function Pages() {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState("");
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    content: "",
    bannerImage: "",
    isPublished: true,
  });

  const pageTypes = [
    "home",
    "about",
    "team",
    "vision",
    "mission",
    "footer",
    "contact",
  ];

  useEffect(() => {
    if (selectedPage) {
      loadPage(selectedPage);
    }
  }, [selectedPage]);

  const loadPage = async (pageName) => {
    try {
      const { data } = await api.get(`/pages/${pageName}`);
      if (data.data) {
        setForm({
          title: data.data.title || "",
          subtitle: data.data.subtitle || "",
          content: data.data.content || "",
          bannerImage: data.data.bannerImage || "",
          isPublished: data.data.isPublished ?? true,
        });
      } else {
        setForm({
          title: "",
          subtitle: "",
          content: "",
          bannerImage: "",
          isPublished: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!selectedPage) {
      alert("Please select a page.");
      return;
    }

    try {
      await api.put(`/pages/${selectedPage}`, {
        ...form,
        page: selectedPage,
      });

      alert("Page updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to update page.");
    }
  };

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold text-[#0A2540]">
        Pages
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Page
          </label>

          <select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option value="">-- Select a page --</option>

            {pageTypes.map((page) => (
              <option key={page} value={page}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {selectedPage && (
          <form onSubmit={handleSave} className="space-y-4">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              name="subtitle"
              value={form.subtitle}
              onChange={handleChange}
              placeholder="Subtitle"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Content"
              className="w-full border rounded-lg p-3"
              rows="6"
            />

            <input
              type="text"
              name="bannerImage"
              value={form.bannerImage}
              onChange={handleChange}
              placeholder="Banner Image URL"
              className="w-full border rounded-lg p-3"
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isPublished"
                checked={form.isPublished}
                onChange={(e) =>
                  setForm({
                    ...form,
                    isPublished: e.target.checked,
                  })
                }
              />

              Published
            </label>

            <button
              type="submit"
              className="bg-[#0A2540] text-white px-6 py-3 rounded-lg"
            >
              Save Page
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Pages;
