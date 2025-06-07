import { Briefcase, Globe, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      {/* Hero Section */}
      <div className="max-w-4xl text-center px-2 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          About DealHunt
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          DealHunt is a powerful price tracking and deal notification platform
          that helps you save money by automatically monitoring prices on
          Amazon, Flipkart, and more. Set your desired price, and we’ll notify
          you when it drops — effortlessly.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full px-2 sm:px-0">
        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
          <Globe className="w-12 h-12 text-indigo-600" />
          <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Real-Time Monitoring
          </h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
            Stay updated with automatic daily checks for product price changes
            across major platforms.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
          <Users className="w-12 h-12 text-indigo-600" />
          <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Smart Alerts
          </h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
            Get instant email or SMS notifications when your tracked products
            hit your desired price.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
          <Briefcase className="w-12 h-12 text-indigo-600" />
          <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Visual Price History
          </h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
            Track price changes over time with intuitive graphs and make smarter
            buying decisions.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
          <CheckCircle className="w-12 h-12 text-indigo-600" />
          <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Transparent & Secure
          </h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
            Your data is safe with us. We provide a seamless and secure price
            tracking experience.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center px-2 sm:px-0 max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Start Saving with DealHunt Today!
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
          Join a growing community of smart shoppers using DealHunt to never
          miss a deal again.
        </p>
        <Link
          to="/product-track"
          className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
