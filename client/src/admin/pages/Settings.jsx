import { useEffect, useState } from "react";
import api from "../services/api";

function Settings() {
  const [form, setForm] = useState({
    ngoName: "",
    email: "",
    phone: "",
    address: "",
    footerText: "",
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const { data } = await api.get("/settings");
      setForm(data.data);
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

  const saveSettings = async (e) => {
    e.preventDefault();

    try {
      await api.put("/settings", form);
      alert("Settings updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to update settings.");
    }
  };

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold text-[#0A2540]">
        Settings
      </h1>

      <form
        onSubmit={saveSettings}
        className="bg-white rounded-xl shadow p-6 space-y-4"
      >
        <input
          type="text"
          name="ngoName"
          value={form.ngoName}
          onChange={handleChange}
          placeholder="NGO Name"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="footerText"
          value={form.footerText}
          onChange={handleChange}
          placeholder="Footer Text"
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          className="bg-[#0A2540] text-white px-6 py-3 rounded-lg"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;
