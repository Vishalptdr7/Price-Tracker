import React from "react";
import VideoCarousel from "./VideoCarousel";
import DetailsCard from "./DetailsCard";

import video1 from "./videos/1.mp4";
import video2 from "./videos/2.mp4";
import video3 from "./videos/3.mp4";

const VideoCarouselWithDetails = () => {
  const videos = [video1, video2, video3];

  return (
    <div className="p-4 sm:p-6 mx-auto mt-6 max-w-7xl bg-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-1/2">
          <VideoCarousel videos={videos} />
        </div>
        <div className="w-full md:w-1/2">
          <DetailsCard />
        </div>
      </div>
    </div>
  );
};

export default VideoCarouselWithDetails;
