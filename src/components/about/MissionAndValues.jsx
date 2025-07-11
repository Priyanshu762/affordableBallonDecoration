import React from 'react';
import { Heart, Award, Users, Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const MissionAndValues = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'We genuinely love what we do and it shows in every balloon we place.',
      color: 'red'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'Premium materials and professional setup for decorations that last.',
      color: 'purple'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'Beautiful decorations shouldn\'t be a luxury - we make them affordable.',
      color: 'blue'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, from design to cleanup.',
      color: 'yellow'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-4xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            Our Mission & <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're driven by the joy of creating magical moments and making beautiful 
            celebrations accessible to everyone.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
          {values.map((value, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 200}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2" style={{ padding: '2rem' }}>
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${
                  value.color === 'red' ? 'from-red-400 to-red-500' :
                  value.color === 'purple' ? 'from-purple-400 to-purple-500' :
                  value.color === 'blue' ? 'from-blue-400 to-blue-500' :
                  'from-yellow-400 to-yellow-500'
                } text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{ marginBottom: '1rem' }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold" style={{ marginBottom: '0.75rem' }}>{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;
