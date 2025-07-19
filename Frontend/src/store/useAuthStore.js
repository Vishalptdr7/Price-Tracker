import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";



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
      const res = await axiosInstance.get("/api/users/currentUser");

      if (res.data.statusCode === 200) {
        set({
          authUser: res.data.message,
        });
      } else {
        set({ authUser: null });
      }
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/api/users/registerUser", data);
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
      const res = await axiosInstance.post("/api/users/verifyOtp", data);
      if (res.data.success) {
        set({ authUser: res.data.data }); // set user
        return res.data.data; // ✅ return the user
      } else {
        toast.error(res.data.message || "OTP verification failed");
        return null;
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      toast.error("OTP verification failed");
      return null;
    }
  },

  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/api/users/login", formData);

      const user = res.data?.data?.user;
      if (!user) {
        throw new Error("No user data returned");
      }

      set({ authUser: user });
      toast.success("Logged in successfully");
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error?.response?.data?.message || error.message || "Login failed"
      );
      return false;
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/api/users/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  },
}));
