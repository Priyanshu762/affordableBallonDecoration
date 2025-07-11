import React from 'react';
import AnimatedSection from '../AnimatedSection';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            About <span className="text-yellow-300">Affordable Balloon Decoration</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90" style={{ marginBottom: '2rem' }}>
            Bringing joy, creativity, and magic to celebrations since 2019. 
            We believe every moment deserves to be special, regardless of budget.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
