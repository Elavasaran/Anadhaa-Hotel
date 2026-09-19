import React from 'react';
import { Hero } from '../components/Hero';
import { InfoStrip } from '../components/InfoStrip';
import { VegIntro } from '../components/VegIntro';
import { NHTravellerSection } from '../components/NHTravellerSection';
import { FoodHighlights } from '../components/FoodHighlights';
import { RestaurantExperience } from '../components/RestaurantExperience';
import { LocationSection } from '../components/LocationSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <InfoStrip />
      <VegIntro />
      <NHTravellerSection />
      <FoodHighlights />
      <RestaurantExperience />
      <LocationSection />
      <ReviewsSection />
      <FinalCTA />
    </div>
  );
};
