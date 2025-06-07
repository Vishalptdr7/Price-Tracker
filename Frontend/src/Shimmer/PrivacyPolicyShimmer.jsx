import React from "react";

const shimmerClasses = "animate-pulse bg-gray-300 dark:bg-gray-700 rounded";

const PrivacyPolicyShimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4 sm:px-6 md:px-10 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md border border-gray-200 p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className={`${shimmerClasses} h-8 sm:h-10 w-48 mx-auto`} />
          <div className={`${shimmerClasses} h-4 w-32 mx-auto`} />
        </div>

        {/* Sections */}
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="mt-10 space-y-4">
            <div className={`${shimmerClasses} h-6 sm:h-7 w-60`} />
            <div className={`${shimmerClasses} h-4 w-full`} />
            <div className={`${shimmerClasses} h-4 w-full`} />
            <div className={`${shimmerClasses} h-4 w-5/6`} />
          </div>
        ))}

        {/* Footer */}
        <div className="mt-10 text-center">
          <div className={`${shimmerClasses} h-4 w-2/3 mx-auto`} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyShimmer;
