import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection animation="fadeInUp" className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="font-poppins text-3xl font-bold text-gray-800 md:text-4xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mx-auto text-lg text-gray-600" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            We are proud to have so many happy clients. Here's what they have to say about our services.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.id} 
              delay={index * 100}
              className="flex flex-col justify-between rounded-xl bg-gray-50 shadow-lg"
              style={{ padding: '1rem' }}
            >
            
              <div>
                <div className="flex text-yellow-400" style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600" >"{testimonial.comment}"</p>
              </div>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" style={{ marginRight: '1rem' }} />
                <div style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                  <p className="font-poppins font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
