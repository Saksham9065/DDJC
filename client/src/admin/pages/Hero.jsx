import { useEffect, useState } from "react";
import api from "../services/api";

function HeroPage() {
  const [hero, setHero] = useState(null);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    buttonLink: "",
    backgroundImage: "",
    isPublished: true,
  });

  useEffect(() => {
    loadHero();
  }, []);

  const loadHero = async () => {
    try {
      const { data } = await api.get("/hero");
      if (data.data) {
        setHero(data.data);
        setForm({
          title: data.data.title || "",
          subtitle: data.data.subtitle || "",
          buttonText: data.data.buttonText || "",
          buttonLink: data.data.buttonLink || "",
          backgroundImage: data.data.backgroundImage || "",
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
      await api.put("/hero", form);
      alert("Hero updated successfully.");
      loadHero();
    } catch (error) {
      console.error(error);
      alert("Failed to update hero.");
    }
  };

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold text-[#0A2540]">
        Hero Section
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

        <input
          type="text"
          name="buttonText"
          value={form.buttonText}
          onChange={handleChange}
          placeholder="Button Text"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="buttonLink"
          value={form.buttonLink}
          onChange={handleChange}
          placeholder="Button Link"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="backgroundImage"
          value={form.backgroundImage}
          onChange={handleChange}
          placeholder="Background Image URL"
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
          Save Hero
        </button>
      </form>
    </div>
  );
}

export default HeroPage;
