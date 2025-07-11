import React from 'react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90" style={{ marginBottom: '2rem' }}>
            Professional balloon decoration services for every occasion. 
            From intimate gatherings to grand celebrations, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            <Button 
              to="/contact" 
              variant="outline" 
              size="lg"
            >
              Get a Custom Quote
            </Button>
            <Button 
              to="/gallery" 
              variant="primary" 
              size="lg"
            >
              View Our Work
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
