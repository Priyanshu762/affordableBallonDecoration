import React, { useState } from 'react';
import HeroSection from '../components/contact/HeroSection';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    theme: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    // Reset form if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      theme: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50">
      <HeroSection />
      <div className="container mx-auto" style={{ padding: '4rem 1rem' }}>
        <ContactInfo />
        <ContactForm 
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <MapSection />
      </div>
    </div>
  );
};

export default Contact;
