import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { toast } from "react-hot-toast";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const password = location.state?.password;

  const [formData, setFormData] = useState({
    email: email,
    password: password,
  });

  const { verifyOtp, authUser, login } = useAuthStore();

  const handleOtpChange = (e) => setOtp(e.target.value);

  
  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    if (!email) {
      toast.error("User email is missing");
      return;
    }

    if (!/^\d{6}$/.test(otp)) {
      toast.error("OTP should be a 6-digit number");
      return;
    }

    setIsVerifying(true);

    try {
      await verifyOtp({ email, otp });
      setTimeout(() => {
        if (authUser) {
          console.log("User logged in successfully", authUser);
          login(formData);
          toast.success("Email verified successfully.");
          navigate("/");
        } else {
          toast.error("User data not found after OTP verification");
        }
      }, 500);
    } catch (error) {
      console.error("Error in OTP verification:", error);
      toast.error("OTP verification failed");
    } finally {
      setIsVerifying(false);
    }
  };

  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-gray-200">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">OTP Verification</h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter the 6-digit OTP sent to your email
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              OTP Code
            </label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={handleOtpChange}
              maxLength={6}
              placeholder="e.g. 123456"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          <button
            onClick={handleVerifyOtp}
            disabled={isVerifying}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition disabled:bg-indigo-400"
          >
            {isVerifying ? "Verifying..." : "Verify OTP"}
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
