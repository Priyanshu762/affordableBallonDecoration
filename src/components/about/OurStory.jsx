import React from 'react';
import AnimatedSection from '../AnimatedSection';

const OurStory = () => {
  return (
    <section className="bg-white" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '3rem' }}>
          <AnimatedSection animation="fadeInLeft">
            <h2 className="text-4xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p style={{ marginBottom: '1.5rem' }}>
                Affordable Balloon Decoration was born from a simple belief: every celebration deserves to be magical, 
                and beautiful decorations shouldn't break the bank. Founded by Priya Sharma in 2019 in the heart of Varanasi, 
                our journey started when Priya couldn't find affordable yet elegant balloon decorations 
                for her daughter's birthday party.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                What began as a personal quest for beautiful, budget-friendly decorations quickly grew 
                into a passion for helping families and businesses in Varanasi create unforgettable moments. We've 
                since decorated over 1,000 events across the city, from intimate birthday parties to grand wedding 
                celebrations and corporate events.
              </p>
              <p>
                Today, our team of creative professionals continues to push the boundaries of balloon 
                artistry while keeping our services accessible to everyone in Varanasi and surrounding areas. We're not just decorators 
                – we're memory makers, dream weavers, and celebration specialists who understand the cultural richness of our beautiful city.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl" style={{ marginBottom: '1rem' }}>🎈</div>
                  <h3 className="text-xl font-bold text-purple-700" style={{ marginBottom: '0.5rem' }}>5+ Years of Magic</h3>
                  <p className="text-purple-600">Creating beautiful memories</p>
                </div>
                
                {/* Floating achievement badges */}
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold animate-float" style={{ padding: '0.25rem 0.75rem' }}>
                  500+ Happy Clients
                </div>
                <div className="absolute bottom-4 right-4 bg-green-400 text-green-900 rounded-full text-sm font-bold animate-float" style={{animationDelay: '1s', padding: '0.25rem 0.75rem' }}>
                  4.8★ Rating
                </div>
                <div className="absolute top-1/2 right-4 bg-blue-400 text-blue-900 rounded-full text-sm font-bold animate-float" style={{animationDelay: '2s', padding: '0.25rem 0.75rem' }}>
                  1000+ Events
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
