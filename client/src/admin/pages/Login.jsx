import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBalanceScale, FaLock, FaEnvelope } from "react-icons/fa";

import { API_URL } from "../../config";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${API_URL}/auth/login`,
        formData
      );

      localStorage.setItem("token", data.token);

      navigate("/admin/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10">

        <div className="text-center">

          <div className="w-20 h-20 bg-[#990000] rounded-full mx-auto flex items-center justify-center text-white text-3xl">

            <FaBalanceScale />

          </div>

          <h2 className="text-3xl font-bold mt-6 text-[#0A2540]">

            DDJC Admin

          </h2>

          <p className="text-gray-500 mt-2">

            Sign in to continue

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="font-medium">

              Email

            </label>

            <div className="relative mt-2">

              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@ddjc.org"
                className="w-full border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#990000]"
              />

            </div>

          </div>

          <div>

            <label className="font-medium">

              Password

            </label>

            <div className="relative mt-2">

              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#990000]"
              />

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#990000] text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;