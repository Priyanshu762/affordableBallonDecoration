import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';
import { services } from '../../data/content';

const ServicesGrid = () => {
  return (
    <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.id} 
              delay={index * 150}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                {/* Service Image */}
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Service Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div className="flex justify-between items-start" style={{ marginBottom: '0.75rem' }}>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    <span className="text-purple-600 font-bold text-lg">{service.priceRange}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed" style={{ marginBottom: '1.5rem' }}>{service.description}</p>

                  {/* Features List */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide" style={{ marginBottom: '0.5rem' }}>
                      What's Included:
                    </h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600" style={{ marginBottom: '0.25rem' }}>
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" style={{ marginRight: '0.5rem' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    to="/contact" 
                    className="w-full group-hover:shadow-lg"
                    size="md"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4" style={{ marginLeft: '0.5rem' }} />
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

export default ServicesGrid;
