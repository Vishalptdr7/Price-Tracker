import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="relative flex flex-col-reverse py-12 sm:py-16 lg:pt-0 lg:flex-col lg:pb-0">
        {/* Image Section */}
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-full rounded shadow-lg lg:rounded-none lg:shadow-none"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Shopping Deal"
          />
        </div>

        {/* Text Section */}
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-300">
                Smart Shopping
              </p>

              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
                Track prices in real-time
                <br className="hidden md:block" />
                and never miss{" "}
                <span className="inline-block text-indigo-600">
                  the best deal!
                </span>
              </h2>

              <p className="text-base text-gray-700 sm:text-lg">
                DealHunt monitors prices from Amazon & Flipkart and alerts you
                when prices drop. Start tracking and save more with zero effort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/product-track">
                <div className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition">
                  Get Started
                </div>
              </Link>

              <a
                href="#about"
                className="text-sm font-medium text-gray-800 hover:text-indigo-600 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
