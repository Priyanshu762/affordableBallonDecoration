import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const WhyChooseUs = ({ whyChooseUs }) => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="grid items-center md:grid-cols-2" style={{ gap: '4rem' }}>
          <AnimatedSection animation="fadeInLeft">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Event setup" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 h-24 w-24 animate-float rounded-full bg-purple-200 opacity-80"></div>
              <div className="absolute -top-8 -left-8 h-20 w-20 animate-float rounded-full bg-pink-200 opacity-80 [animation-delay:1s]"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight">
            <h2 className="font-poppins text-3xl font-bold text-gray-800 md:text-4xl" style={{ marginBottom: '1.5rem' }}>
              Why <span className="gradient-text">Choose Us?</span>
            </h2>
            <p className="text-lg text-gray-600" style={{ marginBottom: '2rem' }}>
              We are committed to providing the best balloon decoration services with a focus on quality, creativity, and customer satisfaction.
            </p>
            <ul className="space-y-4">
              {whyChooseUs.map((item) => (
                <li key={item.id} className="flex items-start">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-purple-500" style={{ marginRight: '1rem' }} />
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
