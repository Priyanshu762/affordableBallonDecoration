import React from 'react';
import { Check, Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';
import { pricingPackages } from '../../data/content';

const PricingCards = () => {
  return (
    <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div
        className="container mx-auto"
        style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
      >
        <AnimatedSection
          className="text-center max-w-3xl mx-auto"
          style={{ marginBottom: '4rem' }}
        >
          <h2
            className="text-4xl font-bold font-poppins"
            style={{ marginBottom: '1.5rem' }}
          >
            Choose Your{' '}
            <span className="gradient-text">Perfect Package</span>
          </h2>
          <p className="text-xl text-gray-600">
            All packages include professional setup, quality balloons, and our
            satisfaction guarantee. Need something custom? Just ask!
          </p>
        </AnimatedSection>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto"
          style={{ gap: '2rem' }}
        >
          {pricingPackages.map((pkg, index) => (
            <AnimatedSection
              key={pkg.id}
              delay={index * 200}
              className="group"
            >
              <div
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden pricing-card ${
                  pkg.popular
                    ? 'ring-4 ring-purple-500 ring-opacity-50'
                    : ''
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm font-bold flex items-center"
                      style={{
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                      }}
                    >
                      <Star
                        className="w-4 h-4 fill-current"
                        style={{ marginRight: '0.25rem' }}
                      />
                      Most Popular
                    </div>
                  </div>
                )}

                <div style={{ padding: '2rem' }}>
                  {/* Package Header */}
                  <div
                    className="text-center"
                    style={{ marginBottom: '2rem' }}
                  >
                    <h3
                      className="text-2xl font-bold text-gray-800"
                      style={{ marginBottom: '0.5rem' }}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className="text-gray-600"
                      style={{ marginBottom: '1rem' }}
                    >
                      {pkg.description}
                    </p>
                    <div style={{ marginBottom: '1rem' }}>
                      <span className="text-5xl font-bold gradient-text">
                        {pkg.price}
                      </span>
                      {pkg.price !== 'Custom' && (
                        <span className="text-gray-500">/event</span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check
                          className="w-5 h-5 text-green-500 flex-shrink-0"
                          style={{
                            marginRight: '0.75rem',
                            marginTop: '0.125rem',
                          }}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    to="/contact"
                    className={`w-full ${pkg.popular ? 'shadow-lg' : ''}`}
                    variant={pkg.popular ? 'primary' : 'outline'}
                    size="lg"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
