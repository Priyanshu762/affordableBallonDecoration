import React from 'react';
import { teamMembers, testimonials, companyStats } from '../data/content';
import HeroSection from '../components/about/HeroSection';
import OurStory from '../components/about/OurStory';
import MissionAndValues from '../components/about/MissionAndValues';
import TeamSection from '../components/about/TeamSection';
import StatsSection from '../components/about/StatsSection';
import TestimonialsSection from '../components/about/TestimonialsSection';
import CallToActionSection from '../components/about/CallToActionSection';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <OurStory />
      <MissionAndValues />
      <TeamSection teamMembers={teamMembers} />
      <StatsSection companyStats={companyStats} />
      <TestimonialsSection testimonials={testimonials} />
      <CallToActionSection />
    </div>
  );
};

export default About;
