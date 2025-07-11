import React from 'react';
import AnimatedSection from '../AnimatedSection';

const MapSection = () => {
  return (
    <AnimatedSection>
      <div style={{ marginBottom: '6rem' }}>
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Location</h2>
        <p className="text-lg text-center text-gray-600" style={{ marginTop: '1rem' }}>Find us at our office, we are open on weekdays from 9am to 5pm.</p>
        <div className="w-full h-96" style={{ marginTop: '2rem' }}>
          <iframe
            title="our location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.173333304533!2d82.9832547741946!3d25.30016332598115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e1a6aaaaaab%3A0x85d87b50b5b4a413!2sUnnamed%20Road%2C%20Bangali%20Tola%2C%20Varanasi%2C%20Uttar%20Pradesh%20221001!5e0!3m2!1sen!2sin!4v1720707534343!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MapSection;
