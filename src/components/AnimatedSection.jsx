import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  className = '',
  style = {}
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const animationClasses = {
    fadeInUp: 'animate-fadeInUp',
    fadeInLeft: 'animate-fadeInLeft',
    fadeInRight: 'animate-fadeInRight',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView 
          ? `opacity-100 ${animationClasses[animation]}` 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ 
        transitionDelay: inView ? `${delay}ms` : '0ms',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
