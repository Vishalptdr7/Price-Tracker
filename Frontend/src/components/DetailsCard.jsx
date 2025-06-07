import React from "react";

const DetailsCard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 px-4 sm:px-6 lg:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Services Provided
      </h2>
      <p className="text-gray-600 text-base sm:text-lg">
        Experience seamless and reliable price tracking with our advanced
        platform that helps you save money and shop smart.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
        <li>
          Automatic price monitoring on popular e-commerce sites like Amazon and
          Flipkart
        </li>
        <li>Instant notifications when your desired price is reached</li>
        <li>
          Track multiple products simultaneously with personalized watchlists
        </li>
        <li>Historical price charts to analyze price trends before buying</li>
        <li>Email and SMS alerts so you never miss a deal</li>
        <li>Secure user data protection with end-to-end encryption</li>
        <li>Multi-factor authentication to safeguard your account</li>
      </ul>
      <p className="text-gray-600 italic text-sm sm:text-base">
        We prioritize your privacy and security to keep your account safe at all
        times.
      </p>
    </div>
  );
};

export default DetailsCard;
