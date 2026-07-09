import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaCamera,
} from "react-icons/fa";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Administrator",
    email: "admin@ddjc.org",
    phone: "+91 9876543210",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile Updated Successfully");
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-[#0A2540]">
          Admin Profile
        </h1>

        <p className="text-gray-500">
          Manage your account settings.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Profile Card */}

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

          <div className="relative w-40 h-40 mx-auto">

            <img
              src="https://ui-avatars.com/api/?name=Admin"
              alt="Admin"
              className="rounded-full w-full h-full object-cover"
            />

            <button className="absolute bottom-2 right-2 bg-[#990000] text-white p-3 rounded-full">

              <FaCamera />

            </button>

          </div>

          <h2 className="text-2xl font-bold mt-6">
            DDJC Admin
          </h2>

          <p className="text-gray-500">
            Super Administrator
          </p>

        </div>

        {/* Profile Form */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>

              <label>Name</label>

              <div className="relative mt-2">

                <FaUser className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg py-3 pl-12"
                />

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label>Email</label>

                <div className="relative mt-2">

                  <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg py-3 pl-12"
                  />

                </div>

              </div>

              <div>

                <label>Phone</label>

                <div className="relative mt-2">

                  <FaPhone className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="w-full border rounded-lg py-3 pl-12"
                  />

                </div>

              </div>

            </div>

            <hr />

            <h3 className="text-xl font-semibold">
              Change Password
            </h3>

            <div className="grid gap-5">

              <div className="relative">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Current Password"
                  onChange={handleChange}
                  className="w-full border rounded-lg py-3 pl-12"
                />

              </div>

              <div className="relative">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  onChange={handleChange}
                  className="w-full border rounded-lg py-3 pl-12"
                />

              </div>

              <div className="relative">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  className="w-full border rounded-lg py-3 pl-12"
                />

              </div>

            </div>

            <button
              className="bg-[#990000] text-white px-8 py-3 rounded-lg hover:bg-red-900"
            >
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;