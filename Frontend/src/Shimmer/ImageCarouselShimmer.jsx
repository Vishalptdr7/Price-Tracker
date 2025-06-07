import React from "react";

const ImageCarouselShimmer = () => {
  return (
    <div className="p-6 mx-auto mt-6 max-w-7xl bg-white rounded-xl shadow-lg animate-pulse">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side Content (Text shimmer) */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="h-10 w-2/3 bg-gray-300 rounded-md" />
          <div className="h-5 w-full bg-gray-200 rounded-md" />
          <div className="h-5 w-5/6 bg-gray-200 rounded-md" />

          <div className="space-y-2 mt-4">
            <div className="h-4 w-4/5 bg-gray-200 rounded-md" />
            <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
            <div className="h-4 w-2/3 bg-gray-200 rounded-md" />
          </div>

          <div className="mt-4 h-10 w-40 bg-gray-300 rounded-lg" />
        </div>

        {/* Right Side Carousel Image shimmer */}
        <div className="relative w-full md:w-1/2">
          <div className="relative h-56 md:h-96 bg-gray-300 rounded-lg" />
          {/* Dots shimmer */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-400 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselShimmer;
