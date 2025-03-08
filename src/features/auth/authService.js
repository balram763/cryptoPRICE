import axios from "axios";

const API_URL = "/api/user"; // Base API URL

const login = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, formData);
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data?.message || error.message);
    throw error;
  }
};

const register = async (formData) => {
  try {
    const res = await axios.post(API_URL, formData);
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data?.message || error.message);
    throw error;
  }
};

const logOut = async () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};

const authService = {
  login,
  register,
  logOut,
};

export default authService;
