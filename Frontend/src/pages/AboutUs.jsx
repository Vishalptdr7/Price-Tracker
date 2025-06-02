import { Briefcase, Globe, Users, CheckCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center  px-6 py-20">
      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">About DealHunt</h1>
        <p className="mt-4 text-lg text-gray-600">
          DealHunt is a powerful price tracking and deal notification platform
          that helps you save money by automatically monitoring prices on
          Amazon, Flipkart, and more. Set your desired price, and we’ll notify
          you when it drops — effortlessly.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
          <Globe className="size-12 text-indigo-600" />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Real-Time Monitoring
          </h3>
          <p className="mt-2 text-gray-600">
            Stay updated with automatic daily checks for product price changes
            across major platforms.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
          <Users className="size-12 text-indigo-600" />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Smart Alerts
          </h3>
          <p className="mt-2 text-gray-600">
            Get instant email or SMS notifications when your tracked products
            hit your desired price.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
          <Briefcase className="size-12 text-indigo-600" />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Visual Price History
          </h3>
          <p className="mt-2 text-gray-600">
            Track price changes over time with intuitive graphs and make smarter
            buying decisions.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
          <CheckCircle className="size-12 text-indigo-600" />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Transparent & Secure
          </h3>
          <p className="mt-2 text-gray-600">
            Your data is safe with us. We provide a seamless and secure price
            tracking experience.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Start Saving with DealHunt Today!
        </h2>
        <p className="mt-2 text-gray-600">
          Join a growing community of smart shoppers using DealHunt to never
          miss a deal again.
        </p>
        <a
          href="/register"
          className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
