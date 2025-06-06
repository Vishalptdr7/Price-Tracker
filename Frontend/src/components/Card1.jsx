import React from "react";

const Card1 = () => {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-white/25 overflow-hidden hover:shadow-white/5 hover:shadow-3xl w-[350px]">
        {/* Background gradients & effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div
            style={{ animationDelay: "0.5s" }}
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"
          />
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 blur-xl animate-ping" />
          <div
            style={{ animationDelay: "1s" }}
            className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg animate-ping"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-[200%] transition-transform duration-1000" />
        </div>

        {/* Content */}
        <div className="p-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Icon container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
              <div
                style={{ animationDelay: "0.5s" }}
                className="absolute inset-0 rounded-full border border-white/10 animate-pulse"
              />
              <div className="p-6 rounded-full backdrop-blur-lg border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-white/20">
                <div className="transform group-hover:rotate-180 transition-transform duration-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-current text-white group-hover:text-gray-200 transition-colors duration-300 drop-shadow-lg"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c3.086 0 5.897-1.144 8.061-3.02l-1.415-1.415C16.985 21.32 14.589 22 12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2c4.963 0 9.09 3.613 9.878 8.327l1.993-.327C22.497 4.79 17.652 0 12 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse">
                DealHunt
              </p>
            </div>

            {/* Description */}
            <div className="space-y-1 max-w-sm">
              <p className="text-gray-300 text-sm font-semibold leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Track product prices,
              </p>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                get notified when prices drop,
              </p>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                and shop smarter with ease.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Amazon & Flipkart support included.
              </p>
            </div>

            {/* Separator line */}
            <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse" />

            {/* Dots */}
            <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
            </div>
          </div>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default Card1;
