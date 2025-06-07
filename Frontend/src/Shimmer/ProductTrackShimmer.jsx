import React from "react";

const ProductTrackShimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe9f4] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl space-y-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto" />

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-1/3 bg-gray-300 rounded" />
            <div className="h-12 w-full bg-gray-200 rounded-lg" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-1/3 bg-gray-300 rounded" />
            <div className="h-12 w-full bg-gray-200 rounded-lg" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-1/3 bg-gray-300 rounded" />
            <div className="h-12 w-full bg-gray-200 rounded-lg" />
          </div>
          <div className="h-12 w-full bg-gray-300 rounded-lg" />
        </div>

        <div className="h-12 w-1/2 mx-auto bg-gray-300 rounded-lg" />
      </div>
    </div>
  );
};

export default ProductTrackShimmer;
