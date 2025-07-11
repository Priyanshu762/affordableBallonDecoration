import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-32 w-32 animate-float rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 right-0 h-40 w-40 animate-float rounded-full bg-white/10 [animation-delay:1s]"></div>
      </div>
      <div className="container relative mx-auto" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection animation="zoomIn" className="text-center">
          <h2 className="font-poppins text-3xl font-bold text-white md:text-4xl" style={{ marginBottom: '1rem' }}>
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="mx-auto text-lg text-purple-100" style={{ marginBottom: '2rem' }}>
            Let's create something amazing together. Contact us today for a free consultation and let's start planning your perfect event.
          </p>
          <div className="flex justify-center" style={{ gap: '1rem' }}>
            <Button 
              to="/contact" 
              size="lg"
              className="bg-white text-purple-600 shadow-lg hover:bg-gray-100"
            >
              <Gift className="h-5 w-5" style={{ marginRight: '0.5rem' }} />
              Book Now
            </Button>
            <Button 
              to="/services" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Our Services <ArrowRight className="h-5 w-5" style={{ marginLeft: '0.5rem' }} />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;
