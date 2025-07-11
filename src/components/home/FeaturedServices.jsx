import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';

const FeaturedServices = ({ featuredServices }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection animation="fadeInUp" className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="font-poppins text-3xl font-bold text-gray-800 md:text-4xl">
            Our Most <span className="gradient-text">Popular Services</span>
          </h2>
          <p className="mx-auto mt-4  text-lg text-gray-600"
          style={{ marginTop: '2rem' ,marginBottom: '2rem' }}>
            We offer a wide range of balloon decoration services to make your event unforgettable.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {featuredServices.map((service, index) => (
            <AnimatedSection 
              key={service.id} 
              delay={index * 100}
              className="overflow-hidden rounded-xl bg-gray-50 shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
              <div style={{ padding: '1.5rem' }}>
                <h3 className="font-poppins text-xl font-bold text-gray-800" style={{ marginBottom: '0.75rem' }}>{service.title}</h3>
                <p className="text-gray-600" style={{ marginBottom: '1.5rem' }}>{service.description}</p>
                <Button 
                  to="/services" 
                  variant="secondary"
                  className="bg-purple-600 text-white shadow-lg hover:bg-purple-700"
                >
                  Learn More <ArrowRight className="h-4 w-4" style={{ marginLeft: '0.5rem' }} />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
