import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_URL
      : "https://price-tracker-backend-server.vercel.app/api",
  withCredentials: true,
});
