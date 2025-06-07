import { Mail, Phone, MapPin } from "lucide-react";

const ContactComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">
          We're here to help! Reach out to us for any inquiries or support.
        </p>

        {/* Contact Info */}
        <div className="mt-6 space-y-5 sm:space-y-6">
          <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-4 rounded-lg border">
            <Mail className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" />
            <a
              href="mailto:supportdealhunt@gmail.com"
              className="text-gray-800 text-sm sm:text-base font-medium hover:text-indigo-600 transition"
            >
              supportdealhunt@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-4 rounded-lg border">
            <Phone className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-800 text-sm sm:text-base font-medium">
              +91 9876543210
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-4 rounded-lg border">
            <MapPin className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-800 text-sm sm:text-base font-medium">
              Indore, India
            </span>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-8 text-center">
          <a
            href="mailto:supportdealhunt@gmail.com"
            className="inline-block bg-indigo-600 text-white px-5 py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
