import React from 'react';
import { Calendar, MessageSquare, Zap } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: '1. Consultation',
      description: 'Share your vision and requirements with our team. We listen to your ideas and provide expert suggestions.',
    },
    {
      icon: <Calendar className="w-12 h-12 text-pink-500" />,
      title: '2. Planning & Booking',
      description: 'We create a detailed plan and timeline for your event decor. Once approved, we lock in your date.',
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: '3. Creation & Setup',
      description: 'Our artists bring the design to life. We handle the complete setup at your venue, ensuring perfection.',
    },
  ];

  return (
    <section className="bg-white" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-4xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            Our Simple <span className="text-purple-600">3-Step Process</span>
          </h2>
          <p className="text-lg text-gray-600  mx-auto">
            From initial idea to final installation, we make the process seamless and stress-free.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
          {processSteps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="text-center" style={{ padding: '2rem' }}>
                <div className="flex justify-center" style={{ marginBottom: '1.5rem' }}>
                  <div className="bg-gray-100 rounded-full" style={{ padding: '1.5rem' }}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold" style={{ marginBottom: '0.75rem' }}>{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
