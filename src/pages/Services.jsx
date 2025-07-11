import React from 'react';
import HeroSection from '../components/services/HeroSection';
import ServicesGrid from '../components/services/ServicesGrid';
import ProcessSection from '../components/services/ProcessSection';
import FaqSection from '../components/services/FaqSection';
import CallToActionSection from '../components/about/CallToActionSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <FaqSection />
      <CallToActionSection />
    </div>
  );
};

export default Services;
