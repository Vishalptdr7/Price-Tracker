import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const SignUpPage = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isSigningUp } = useAuthStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({ fullname, email, password, mobileNo });
      navigate("/verifyOtp", { state: { email, password } });
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-teal-600">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <label
              htmlFor="fullname"
              className="text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="John Doe"
              value={fullname}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Mobile */}
          <div className="relative">
            <label
              htmlFor="mobileNo"
              className="text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              id="mobileNo"
              type="tel"
              placeholder="e.g. 9876543210"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSigningUp}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            {isSigningUp ? "Signing up..." : "Sign Up"}
          </button>

          {/* Redirect */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-teal-600 font-medium hover:underline"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
