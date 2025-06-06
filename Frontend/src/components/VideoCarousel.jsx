import React, { useState, useEffect } from "react";

const VideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [videos.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-md">
      <div className="relative h-56 md:h-96">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <video
              src={video}
              controls={false}
              autoPlay={index === currentIndex}
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#5cbdb9]" : "bg-gray-400"
            }`}
            aria-current={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-3"
        aria-label="Previous video"
      >
        <span className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-3"
        aria-label="Next video"
      >
        <span className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default VideoCarousel;
