import { useState } from "react";
import api from "../services/api";

function Settings() {
  const [settings, setSettings] = useState({
    organization: "Dalit Dignity & Justice Center",
    email: "info@ddjc.org",
    phone: "+91 9876543210",
    address: "Jalaun, Uttar Pradesh, India",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend endpoint when ready
      // await api.put("/settings", settings);

      alert("Settings saved successfully.");

    } catch (error) {

      console.error(error);

      alert("Unable to save settings.");

    }
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-[#0A2540]">
          Settings
        </h1>

        <p className="text-gray-500">
          Manage organization information.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >

        <div>

          <label className="block mb-2 font-medium">
            Organization Name
          </label>

          <input
            type="text"
            name="organization"
            value={settings.organization}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

          </div>

        </div>

        <div>

          <label className="block mb-2 font-medium">
            Address
          </label>

          <textarea
            rows="3"
            name="address"
            value={settings.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            name="facebook"
            placeholder="Facebook URL"
            value={settings.facebook}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="instagram"
            placeholder="Instagram URL"
            value={settings.instagram}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="twitter"
            placeholder="Twitter URL"
            value={settings.twitter}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={settings.linkedin}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

        </div>

        <button
          type="submit"
          className="bg-[#990000] text-white px-8 py-3 rounded-lg hover:bg-red-900 transition"
        >
          Save Settings
        </button>

      </form>

    </div>
  );
}

export default Settings;