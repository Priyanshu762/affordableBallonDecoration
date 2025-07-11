import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const SubmissionSuccess = () => {
  return (
    <div className="lg:col-span-2">
      <AnimatedSection animation="fadeInRight">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-center" style={{ padding: '4rem 2rem', minHeight: '500px' }}>
          <CheckCircle className="w-24 h-24 text-green-500" style={{ marginBottom: '2rem' }} />
          <h2 className="text-3xl font-bold font-poppins" style={{ marginBottom: '1rem' }}>
            Thank You!
          </h2>
          <p className="text-xl text-gray-600" style={{ marginBottom: '2rem' }}>
            Your message has been sent successfully. We'll get back to you within 2 business hours.
          </p>
          <p className="text-gray-500">
            If your request is urgent, please call us at <a href="tel:+916307943091" className="text-purple-600 font-semibold">+91 63079-43091</a>.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SubmissionSuccess;
