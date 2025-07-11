import React from 'react';
import { services, testimonials, companyStats, whyChooseUs } from '../data/content';
import HeroSection from '../components/home/HeroSection';
import FeaturedServices from '../components/home/FeaturedServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  const featuredServices = services.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection companyStats={companyStats} />
      <FeaturedServices featuredServices={featuredServices} />
      <WhyChooseUs whyChooseUs={whyChooseUs} />
      <Testimonials testimonials={featuredTestimonials} />
      <CallToAction />
    </div>
  );
};

export default Home;
