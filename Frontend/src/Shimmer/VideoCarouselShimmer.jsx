import React from "react";

const VideoCarouselShimmer = () => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-md animate-pulse">
      {/* Video Box */}
      <div className="relative h-56 md:h-96 bg-gray-300 rounded-lg" />

      {/* Indicators shimmer */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-gray-400 rounded-full" />
        ))}
      </div>

      {/* Controls shimmer */}
      <div className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-3">
        <span className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center" />
      </div>
      <div className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-3">
        <span className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center" />
      </div>
    </div>
  );
};

export default VideoCarouselShimmer;
