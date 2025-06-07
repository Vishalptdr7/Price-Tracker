import React, { useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCrousal";
import { HeroSection } from "./HeroSection";
import HeroSectionShimmer from "../../src/Shimmer/HeroSectionShimmer";
import VideoCarouselWithDetails from "../components/VideoCarouselWithDetails";
import GraphSection from "../components/GraphSection";
import ImageCarouselShimmer from "../../src/Shimmer/ImageCarouselShimmer";
import VideoCarouselWithDetailsShimmer from "../../src/Shimmer/VideoCarouselWithDetailsShimmer";
import GraphSectionShimmer from "../../src/Shimmer/GraphSectionShimmer";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-pinky min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4">
      <div className="space-y-8">
        {isLoading ? <HeroSectionShimmer /> : <HeroSection />}
        {isLoading ? <ImageCarouselShimmer /> : <ImageCarousel />}
        {isLoading ? (
          <VideoCarouselWithDetailsShimmer />
        ) : (
          <VideoCarouselWithDetails />
        )}
        {isLoading ? <GraphSectionShimmer /> : <GraphSection />}
      </div>
    </section>
  );
};

export default HomePage;
