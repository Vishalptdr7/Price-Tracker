import React from "react";

const HeroSectionShimmer = () => {
  return (
    <section className="bg-white animate-pulse">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        {/* Image shimmer */}
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <div className="w-full h-56 md:h-96 lg:h-full bg-gray-200 rounded shadow-lg"></div>
        </div>

        {/* Text shimmer */}
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 space-y-4">
            <div className="h-5 w-32 bg-gray-200 rounded-full" />
            <div className="h-10 w-3/4 bg-gray-300 rounded" />
            <div className="h-10 w-2/3 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="h-10 w-32 bg-gray-300 rounded-md" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionShimmer;
