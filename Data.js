// Data.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

// helper axios dengan token
const api = axios.create({ baseURL: API_URL });
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});



// Register
export const register = async (name, email, password) => {
  try {
    const res = await api.post("/register", { name, email, password });
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
};

// Verify Email
export const verifyEmail = async (token) => {
  try {
    const res = await api.get(`/verify-email/${token}`);
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
};

// Resend Verification
export const resendVerification = async (email) => {
  try {
    const res = await api.post("/resend-verification", { email });
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
};

// Login
export const login = async (email, password) => {
  try {
    const res = await api.post("/login", { email, password });
    if (res.data.status === "success") {
      localStorage.setItem("authToken", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
    }
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
};

// Get Profile
export const getProfile = async () => {
  try {
    const res = await api.get("/profile");
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
};

// Logout
export const logout = async () => {
  try {
    const res = await api.post("/logout");
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    return res.data;
  } catch (err) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    return err.response?.data;
  }
};

// Forgot Password
export const forgotPassword = async (email) => {
  try {
    const res = await api.post("/forgot-password", { email });
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
};

// Reset Password
export const resetPassword = async (resetToken, password) => {
  try {
    const res = await axios.post(`${API_URL}/reset-password`,
      { password },
      { headers: { Authorization: `Bearer ${resetToken}` } }
    );
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
};
