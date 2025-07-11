import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, CheckCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { contactDetails } from '../../data/content';

const iconComponents = {
  Phone: <Phone className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
};

const ContactInfo = () => {
  const socialLinks = [
    {
      href: "https://instagram.com/affordableballoondecoration",
      label: "Follow us on Instagram",
      icon: <Instagram className="w-6 h-6" />,
      className: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      href: "https://facebook.com/affordableballoondecoration",
      label: "Like us on Facebook",
      icon: <Facebook className="w-6 h-6" />,
      className: "bg-blue-600"
    },
    {
      href: "https://wa.me/916307943091",
      label: "Chat with us on WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      className: "bg-green-500"
    }
  ];

  return (
    <AnimatedSection>
      <div style={{ marginBottom: '4rem' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We're here to help with any questions you may have.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white bg-pink-500 rounded-full">
                {iconComponents[item.icon]}
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-900">{item.title}</h3>
              {item.action ? (
                <a href={item.action} className="block mt-2 text-center text-pink-600 hover:text-pink-700">
                  {item.content}
                </a>
              ) : (
                <p className="mt-2 text-center text-gray-600">{item.content}</p>
              )}
              <p className="mt-1 text-sm text-center text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col text-center gap-4 "
      style={{marginBottom: '4rem'}}>
        <h3 className="text-2xl font-bold text-gray-900">Follow Us</h3>
        <p className="mt-2 text-lg text-gray-600">Stay updated with our latest work and offers.</p>
        <div className="flex justify-center mt-6 space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`flex items-center justify-center w-12 h-12 text-white rounded-full transition-transform duration-300 transform hover:scale-110 ${link.className}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactInfo;
