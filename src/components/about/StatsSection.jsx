import React from 'react';
import AnimatedSection from '../AnimatedSection';

const StatsSection = ({ companyStats }) => {
  return (
    <section className="text-white" style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-4xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            Our Impact in <span className="text-yellow-300">Numbers</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Every number represents a celebration made special, a memory created, 
            and a smile brought to someone's face.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto" style={{ gap: '2rem' }}>
          {companyStats.map((stat, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 200}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl" style={{ padding: '2rem' }}>
                <h3 className="text-5xl font-bold text-yellow-300" style={{ marginBottom: '1rem' }}>{stat.value}</h3>
                <p className="text-xl opacity-90">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
