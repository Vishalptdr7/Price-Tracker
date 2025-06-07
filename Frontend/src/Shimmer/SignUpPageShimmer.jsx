import React from "react";

const SignUpPageShimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6 animate-pulse">
        {/* Title */}
        <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto" />

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Name */}
          <div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
            <div className="h-12 bg-gray-100 rounded" />
          </div>

          {/* Email */}
          <div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
            <div className="h-12 bg-gray-100 rounded" />
          </div>

          {/* Mobile */}
          <div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
            <div className="h-12 bg-gray-100 rounded" />
          </div>

          {/* Password */}
          <div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
            <div className="h-12 bg-gray-100 rounded" />
          </div>

          {/* Submit Button */}
          <div className="h-12 bg-teal-300/50 rounded" />

          {/* Redirect Text */}
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mt-2" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPageShimmer;
