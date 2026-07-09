// Centralized API configuration.
// Override the backend URL in production with the VITE_API_URL env var
// (e.g. https://ddjc-backend.onrender.com). Always includes the trailing
// origin so upload/download links work against the live backend.

export const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ||
  "http://localhost:5000";

export const API_URL = `${API_BASE_URL}/api`;
