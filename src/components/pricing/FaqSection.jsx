import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { faqs } from '../../data/content';

const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full flex justify-between items-center text-left"
      onClick={onClick}
      style={{ padding: '1.5rem 0' }}
    >
      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
      {isOpen ? (
        <ChevronUp className="w-6 h-6 text-purple-600" />
      ) : (
        <ChevronDown className="w-6 h-6 text-gray-400" />
      )}
    </button>
    {isOpen && (
      <div className="overflow-hidden transition-all duration-300 ease-in-out">
        <p className="text-gray-600" style={{ paddingBottom: '1.5rem' }}>
          {faq.answer}
        </p>
      </div>
    )}
  </div>
);

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      className="bg-white"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div
        className="container mx-auto"
        style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
      >
        <AnimatedSection
          className="text-center max-w-3xl mx-auto"
          style={{ marginBottom: '4rem' }}
        >
          <h2
            className="text-4xl font-bold font-poppins"
            style={{ marginBottom: '1.5rem' }}
          >
            Pricing Questions Answered
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our pricing, packages, and
            services.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openFaq === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
