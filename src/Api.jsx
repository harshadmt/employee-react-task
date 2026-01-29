import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-react.onrender.com/emp",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    // ✅ NO Bearer
    config.headers.Authorization = token;
  }

  return config;
});

export default API;
