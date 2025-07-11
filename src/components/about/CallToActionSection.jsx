import React from 'react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';

const CallToActionSection = () => {
  return (
    <section className="bg-gray-100" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection>
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl text-white text-center" style={{ padding: '4rem 2rem' }}>
            <h2 className="text-4xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto" style={{ marginBottom: '2rem' }}>
              Let's discuss your vision! Get a free, no-obligation consultation with our 
              expert decorators today.
            </p>
            <div className="flex justify-center" style={{ gap: '1rem' }}>
              <Button href="/contact" size="lg" variant="secondary">
                Book Free Consultation
              </Button>
              <Button href="/gallery" size="lg" variant="ghost">
                View Our Work
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToActionSection;
