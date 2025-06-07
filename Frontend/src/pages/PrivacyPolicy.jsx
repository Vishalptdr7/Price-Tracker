const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4 sm:px-6 md:px-10 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md border border-gray-200 p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: <span className="font-medium">June 2025</span>
          </p>
        </div>

        {/* Intro */}
        <section className="mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Welcome to DealHunt
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base">
            At <span className="font-semibold">DealHunt</span>, your privacy is
            important to us. This Privacy Policy explains how we collect, use,
            and protect your information when you use our price tracking and
            deal notification services.
          </p>
        </section>

        {/* Data Collection */}
        <section className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            1. Information We Collect
          </h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            <li>
              <span className="font-medium">Account Details:</span> Name, email
              address, and preferences.
            </li>
            <li>
              <span className="font-medium">Tracking Data:</span> Products you
              track, alert frequency, and wishlists.
            </li>
            <li>
              <span className="font-medium">Technical Data:</span> Device info,
              browser type, IP address, and cookies.
            </li>
          </ul>
        </section>

        {/* Usage of Data */}
        <section className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            2. How We Use Your Information
          </h2>
          <p className="mt-3 text-gray-700 text-sm sm:text-base">
            We use your data to deliver, improve, and personalize your
            experience:
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            <li>Send real-time price drop alerts and deal notifications.</li>
            <li>Analyze user preferences to optimize our service.</li>
            <li>Prevent fraud, ensure security, and maintain reliability.</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            3. Data Security
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base">
            We adopt industry-standard encryption and security protocols to
            safeguard your personal data. While we strive to ensure full
            protection, no system is immune to breaches. Always use strong
            passwords and stay vigilant.
          </p>
        </section>

        {/* User Rights */}
        <section className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            4. Your Rights
          </h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            <li>
              Access and update your profile and notification preferences.
            </li>
            <li>Delete your account and associated data at any time.</li>
            <li>Withdraw consent for data processing or marketing emails.</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            5. Contact Us
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base">
            For privacy concerns, feel free to reach out at:{" "}
            <a
              href="mailto:privacy@dealhunt.com"
              className="text-indigo-600 font-medium hover:underline"
            >
              privacy@dealhunt.com
            </a>
          </p>
        </section>

        {/* Footer */}
        <p className="mt-10 text-center text-gray-500 text-xs sm:text-sm">
          By using DealHunt, you consent to this Privacy Policy and our Terms of
          Use.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
