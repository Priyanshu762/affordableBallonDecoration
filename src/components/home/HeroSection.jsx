import React from 'react';
import { Star, ArrowRight, Heart, Gift, Sparkles } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import Button from '../Button';

const HeroSection = ({ companyStats }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-20 w-20 animate-float rounded-full bg-purple-200 opacity-60"></div>
        <div className="absolute top-40 right-20 h-16 w-16 animate-float rounded-full bg-pink-200 opacity-60 [animation-delay:1s]"></div>
        <div className="absolute bottom-40 left-20 h-12 w-12 animate-float rounded-full bg-yellow-200 opacity-60 [animation-delay:2s]"></div>
        <div className="absolute bottom-20 right-40 h-24 w-24 animate-float rounded-full bg-blue-200 opacity-60 [animation-delay:0.5s]"></div>
      </div>

      <div className="container relative z-10 mx-auto" style={{ paddingTop: '5rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="grid min-h-[80vh] grid-cols-1 items-center lg:grid-cols-2" style={{ gap: '3rem' }}>
          {/* Left Column - Content */}
          <AnimatedSection animation="fadeInLeft" className="text-center lg:text-left">
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="inline-flex items-center rounded-full bg-purple-100 text-sm font-medium text-purple-700" style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}>
                <Sparkles className="h-4 w-4" style={{ marginRight: '0.5rem' }} />
                Trusted by 500+ Happy Families
              </span>
            </div>
            
            <h1 className="font-poppins text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ marginBottom: '1.5rem' }}>
              <span className="gradient-text">Affordable Balloon</span>
              <br />
              <span className="text-gray-800">Decoration for Every</span>
              <br />
              <span className="gradient-text">Celebration! 🎈</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600 lg:mx-0" style={{ marginBottom: '2rem' }}>
              Transform your special moments into magical memories with our creative, 
              professional, and budget-friendly balloon decoration services. From birthdays 
              to weddings, we make every celebration extraordinary!
            </p>
            
            <div className="flex flex-col items-center justify-center" style={{ gap: '1rem', marginBottom: '2rem' }}>
              <Button 
                to="/contact" 
                size="lg"
                className="shadow-colorful"
                >
                <Gift className="h-5 w-5" style={{ marginRight: '0.5rem' }} />
                Book Free Consultation
              </Button>
              <Button to="/services" size="lg" className="w-full sm:w-auto">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-200" style={{ gap: '1rem', paddingTop: '2rem' }}>
              {companyStats.map((stat, index) => (
                <AnimatedSection 
                  key={stat.id} 
                  delay={index * 100}
                  className="text-center"
                >
                  <div style={{ marginBottom: '0.25rem' }} className="text-2xl">{stat.icon}</div>
                  <div className="gradient-text text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column - Image/Visual */}
          <AnimatedSection animation="fadeInRight" className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Main illustration placeholder */}
              <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100">
                <div className="text-center">
                  <Heart className="mx-auto h-24 w-24 animate-bounce-slow text-purple-500" style={{ marginBottom: '1rem' }} />
                  <p className="font-medium text-purple-700">Beautiful Balloon Decorations</p>
                  <p className="text-sm text-purple-600">Professional Setup & Design</p>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 left-4 h-8 w-8 animate-float rounded-full bg-red-300"></div>
                <div className="absolute top-8 right-8 h-6 w-6 animate-float rounded-full bg-blue-300 [animation-delay:1s]"></div>
                <div className="absolute bottom-8 left-8 h-10 w-10 animate-float rounded-full bg-yellow-300 [animation-delay:2s]"></div>
                <div className="absolute bottom-4 right-4 h-7 w-7 animate-float rounded-full bg-green-300 [animation-delay:0.5s]"></div>
              </div>

              {/* Floating testimonial card */}
              <div className="absolute -bottom-8 left-3 lg:-left-8 max-w-xs animate-float rounded-2xl bg-white shadow-xl" style={{ padding: '1rem' }}>
                <div className="flex items-center" style={{ marginBottom: '0.5rem' }}>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600" style={{ marginLeft: '0.5rem' }}>5.0</span>
                </div>
                <p className="font-medium text-gray-700">
                  "Absolutely amazing work! Made our daughter's birthday magical."
                </p>
                <p className="text-xs text-gray-500" style={{ marginTop: '0.25rem' }}>- Sarah Johnson</p>
              </div>

              {/* Floating price tag */}
              <div className="absolute -top-4 right-4 lg:-right-4 animate-float rounded-full bg-gradient-to-r from-green-400 to-green-500 text-sm font-bold text-white [animation-delay:1.5s]" style={{ padding: '0.5rem 1rem' }}>
                Starting Rs 500
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-purple-300">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-purple-400"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
