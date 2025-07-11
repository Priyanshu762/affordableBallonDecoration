import React from 'react';
import HeroSection from '../components/pricing/HeroSection';
import PricingCards from '../components/pricing/PricingCards';
import FaqSection from '../components/pricing/FaqSection';
import CustomQuoteSection from '../components/pricing/CustomQuoteSection';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <PricingCards />
      <FaqSection />
      <CustomQuoteSection />
    </div>
  );
};

export default Pricing;
