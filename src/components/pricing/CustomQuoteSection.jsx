import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';

const CustomQuoteSection = () => {
  return (
    <section style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div
        className="container mx-auto"
        style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
      >
        <AnimatedSection>
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-2xl">
            <div
              className="grid md:grid-cols-2 items-center"
              style={{ gap: '2rem', padding: '4rem' }}
            >
              <div className="text-white">
                <h2
                  className="text-4xl font-bold font-poppins"
                  style={{ marginBottom: '1.5rem' }}
                >
                  Need a Custom Package?
                </h2>
                <p className="text-xl opacity-90" style={{ marginBottom: '2rem' }}>
                  Every event is unique. If our standard packages don't fit
                  your needs, we'll create a custom quote just for you.
                </p>
                <div className="flex flex-col sm:flex-row" style={{ gap: '1.5rem' }}>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6" style={{ marginRight: '0.75rem' }} />
                    <span className="text-lg font-semibold">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6" style={{ marginRight: '0.75rem' }} />
                    <span className="text-lg font-semibold">
                      hello@example.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button
                  to="/contact"
                  variant="secondary"
                  size="xl"
                  className="bg-white text-purple-600 hover:bg-gray-50 w-full sm:w-auto"
                >
                  Request a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomQuoteSection;
