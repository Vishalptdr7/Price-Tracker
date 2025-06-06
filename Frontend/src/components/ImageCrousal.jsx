import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "https://images.pexels.com/photos/7567497/pexels-photo-7567497.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7567537/pexels-photo-7567537.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7567591/pexels-photo-7567591.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7567236/pexels-photo-7567236.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="p-6 mx-auto mt-6 max-w-7xl bg-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 space-y-4">
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800">DealHunt </h2>

          {/* Description paragraph */}
          <p className="text-gray-600 text-lg">
            Your ultimate price companion! Automatically track prices from
            multiple e-commerce platforms and never miss a deal.
          </p>

          {/* Feature list */}
          <ul className="list-disc list-inside text-gray-700">
            <li>Real-time price updates every hour for faster alerts</li>
            <li>Customizable notifications via email and SMS</li>
            <li>Advanced price history charts for smarter buying decisions</li>
          </ul>

          {/* Call to action button */}
          <button className="mt-4 px-6 py-3 bg-[#5cbdb9] text-white font-semibold rounded-lg hover:bg-[#49a9a4] transition duration-300">
            Get Started Now
          </button>
        </div>

        {/* Right Side Carousel */}
        <div className="relative w-full md:w-1/2">
          <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={image}
                  className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
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
      </div>
    </div>
  );
};

export default ImageCarousel;
