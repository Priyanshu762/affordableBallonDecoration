import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { faqs } from '../../data/content';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
        style={{ padding: '1.5rem 0' }}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-purple-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="overflow-hidden transition-all duration-300 ease-in-out">
          <p className="text-gray-600" style={{ paddingBottom: '1.5rem' }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <AnimatedSection className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-4xl font-bold font-poppins" style={{ marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We have answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onClick={() => handleFaqToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
