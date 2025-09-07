import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

// Login user
export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    if (res.data.status === "success") {
      localStorage.setItem("authToken", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
    }
    return res.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
    return err.response?.data;
  }
};
