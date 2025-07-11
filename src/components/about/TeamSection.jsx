import React from 'react';
import AnimatedSection from '../AnimatedSection';

const TeamSection = ({ teamMembers }) => {
  return (
    <section className="bg-white" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-4xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The creative minds behind every beautiful decoration. Our passionate team 
            brings years of experience and unlimited creativity to every event.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto" style={{ gap: '2rem' }}>
          {teamMembers.map((member, index) => (
            <AnimatedSection 
              key={member.id} 
              delay={index * 200}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2" style={{ padding: '2rem' }}>
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl font-bold group-hover:scale-105 transition-transform duration-300" style={{ marginBottom: '1.5rem' }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800" style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
                <p className="text-purple-600 font-medium" style={{ marginBottom: '1rem' }}>{member.position}</p>
                <p className="text-gray-600 leading-relaxed" style={{ marginBottom: '1.5rem' }}>{member.bio}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center" style={{ gap: '0.5rem' }}>
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      style={{ padding: '0.25rem 0.75rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
