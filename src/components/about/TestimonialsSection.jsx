import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="bg-white" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-4xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in our work, but our clients' words mean the world to us.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.id} 
              delay={index * 200}
              className="flex"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col" style={{ padding: '2rem' }}>
                <div className="flex items-center" style={{ marginBottom: '1rem' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ marginRight: '1rem' }}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.eventType}</p>
                  </div>
                </div>
                <div className="flex" style={{ marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">"{testimonial.comment}"</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
