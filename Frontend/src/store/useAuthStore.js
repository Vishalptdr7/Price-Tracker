import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:8080" : "/";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  userId: null,
  setAuthUser: (userData) => set({ authUser: userData }),
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/users/currentUser");
      if (res.data.statusCode === 200) {
        set({
          authUser: res.data.message,
          userId: res.data.message.user_id,
        });
      } else {
        set({ authUser: null, userId: null });
      }
    } catch (error) {
      set({ authUser: null, userId: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/users/registerUser", data);
      set({ authUser: res.data.message }); // Reset authUser until OTP is verified
      toast.success("Account created successfully. OTP sent to your email.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      set({ isSigningUp: false });
    }
  },

  verifyOtp: async (data) => {
    try {
      const res = await axiosInstance.post("/users/verifyOtp", data);
      if (res.data.success) {
        set({ authUser: res.data.user });
         // Store the returned user data
      } else {
        toast.error(res.data.message || "OTP verification failed");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      toast.error("OTP verification failed");
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {

      const res = await axiosInstance.post("/users/login", data);
      
      set({ authUser: res.data.data.message });

      toast.success("Logged in successfully");







    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/users/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  },
}));
