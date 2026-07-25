import { useEffect, useState } from "react";
import api from "../services/api";

function AboutCMS() {
  const [about, setAbout] = useState(null);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    mission: "",
    vision: "",
    objectives: "",
    history: "",
    founderMessage: "",
    chairpersonMessage: "",
    bannerImage: "",
    isPublished: true,
  });

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    try {
      const { data } = await api.get("/api/about/about");
      if (data.data) {
        setAbout(data.data);
        setForm({
          title: data.data.title || "",
          subtitle: data.data.subtitle || "",
          mission: data.data.mission || "",
          vision: data.data.vision || "",
          objectives: data.data.objectives || "",
          history: data.data.history || "",
          founderMessage: data.data.founderMessage || "",
          chairpersonMessage: data.data.chairpersonMessage || "",
          bannerImage: data.data.bannerImage || "",
          isPublished: data.data.isPublished ?? true,
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

    try {
      await api.put("/api/about/about", form);
      alert("About updated successfully.");
      loadAbout();
    } catch (error) {
      console.error(error);
      alert("Failed to update about.");
    }
  };

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold text-[#0A2540]">
        About CMS
      </h1>

      <form
        onSubmit={handleSave}
        className="bg-white rounded-xl shadow p-6 space-y-4"
      >
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
          name="mission"
          value={form.mission}
          onChange={handleChange}
          placeholder="Mission"
          className="w-full border rounded-lg p-3"
          rows="4"
        />

        <textarea
          name="vision"
          value={form.vision}
          onChange={handleChange}
          placeholder="Vision"
          className="w-full border rounded-lg p-3"
          rows="4"
        />

        <textarea
          name="objectives"
          value={form.objectives}
          onChange={handleChange}
          placeholder="Objectives"
          className="w-full border rounded-lg p-3"
          rows="4"
        />

        <textarea
          name="history"
          value={form.history}
          onChange={handleChange}
          placeholder="History"
          className="w-full border rounded-lg p-3"
          rows="4"
        />

        <textarea
          name="founderMessage"
          value={form.founderMessage}
          onChange={handleChange}
          placeholder="Founder Message"
          className="w-full border rounded-lg p-3"
          rows="4"
        />

        <textarea
          name="chairpersonMessage"
          value={form.chairpersonMessage}
          onChange={handleChange}
          placeholder="Chairperson Message"
          className="w-full border rounded-lg p-3"
          rows="4"
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
          Save About
        </button>
      </form>
    </div>
  );
}

export default AboutCMS;
