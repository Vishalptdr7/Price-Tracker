import React from "react";
import VideoCarouselShimmer from "./VideoCarouselShimmer";
import DetailsCardShimmer from "./DetailsCardShimmer";

const VideoCarouselWithDetailsShimmer = () => {
  return (
    <div className="p-6 mx-auto mt-6 max-w-7xl bg-white rounded-xl shadow-lg animate-pulse">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-1/2">
          <VideoCarouselShimmer />
        </div>
        <div className="w-full md:w-1/2">
          <DetailsCardShimmer />
        </div>
      </div>
    </div>
  );
};

export default VideoCarouselWithDetailsShimmer;
