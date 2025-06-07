import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";
import { useAuthStore } from "./store/useAuthStore";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import VerifyOtpPage from "./pages/OtpPage";
import ContactComponent from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "flowbite";
import ProductTrackPage from "./pages/ProductTrackPage";
import Footer from "./components/Footer";
import AllTrackedProducts from "./pages/AllTrackedProducts";
import PriceHistoryPage from "./pages/PriceHistoryPage";
import SignUpPageShimmer from "./Shimmer/SignUpPageShimmer";

const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuthStore();
  if (!authUser) return <Navigate to="/login" />;
  return children;
};

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-10 h-10 animate-spin" />
      </div>
    );
  }
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={authUser ? <HomePage /> : <Navigate to="/login" />}
          />

          <Route
            path="/register"
            element={
              authUser ? (
                <Navigate to="/" />
              ) : isCheckingAuth ? (
                <SignUpPageShimmer />
              ) : (
                <SignUpPage />
              )
            }
          />

          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/" />}
          />

          <Route path="/verifyOtp" element={<VerifyOtpPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactComponent />} />

          <Route
            path="/product-track"
            element={
              <ProtectedRoute>
                <ProductTrackPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/get-all-products"
            element={
              <ProtectedRoute>
                <AllTrackedProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/priceHistory"
            element={
              <ProtectedRoute>
                <PriceHistoryPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
