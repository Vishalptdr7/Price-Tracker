import React from 'react';
import ImageCarousel from '../components/ImageCrousal';
import { HeroSection } from './HeroSection';
import Card1 from '../components/Card1';
import { Video } from 'lucide-react';
import VideoCarouselWithDetails from '../components/VideoCarouselWithDetails';
import DealHuntGraph from '../components/DealHuntGraph';
const HomePage = () => {
  
  return (
    <section className='bg-pinky'>
      <div>
        <HeroSection />
        
        <ImageCarousel />
        <VideoCarouselWithDetails/>
        <DealHuntGraph/>
        
      </div>
    </section>
  );
};

export default HomePage;
