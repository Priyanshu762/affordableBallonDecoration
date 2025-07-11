import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            Let's Plan Your <span className="text-yellow-300">Perfect Event</span>
          </h1>
          <p className="text-xl md:text-2xl  mx-auto opacity-90" style={{ marginBottom: '2rem' }}>
            Ready to transform your celebration into something magical? 
            Get in touch for a free consultation and custom quote!
          </p>
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            <Button 
              href="tel:+916307943091" 
              variant="outline" 
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button 
              href="https://wa.me/916307943091" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="primary" 
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
