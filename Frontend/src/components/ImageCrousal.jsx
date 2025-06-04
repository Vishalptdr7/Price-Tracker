import React from "react";

const ImageCarousel = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.pexels.com/photos/936320/pexels-photo-936320.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 1"
          />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.pexels.com/photos/32396586/pexels-photo-32396586/free-photo-of-analyzing-crypto-market-on-a-tablet-screen.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 2"
          />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
          />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 4"
          />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.pexels.com/photos/7567497/pexels-photo-7567497.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 5"
          />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={i === 0 ? "true" : "false"}
            aria-label={`Slide ${i + 1}`}
            data-carousel-slide-to={i}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
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
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
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
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
