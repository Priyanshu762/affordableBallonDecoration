import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Star
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Birthday Parties',
    'Wedding Decorations',
    'Baby Showers',
    'Corporate Events',
    'Graduation Parties',
    'Anniversary Celebrations'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div
        className="container mx-auto"
        style={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '4rem',
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          }}
          className="md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Company Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="flex items-center" style={{ gap: '0.75rem' }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <span className="font-poppins text-2xl font-bold">
                Affordable Balloon Decoration
              </span>
            </div>
            <p className="leading-relaxed text-gray-300">
              Creating magical moments with affordable balloon decorations in
              Varanasi and surrounding areas. We transform your celebrations
              into unforgettable experiences with creative designs and
              professional setup.
            </p>
            <div className="flex items-center" style={{ gap: '0.5rem' }}>
              <div className="flex" style={{ gap: '0.25rem' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-base text-gray-300">
                4.8/5 (127 reviews)
              </span>
            </div>
          </div>
                <div className='flex  gap-6 justify-between'>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl font-semibold text-white"
              style={{ marginBottom: '2rem' }}
            >
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 transition-colors duration-200 hover:text-purple-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xl font-semibold text-white"
              style={{ marginBottom: '2rem' }}
            >
              Our Services
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {services.map((service) => (
                <li key={service} className="flex items-center text-gray-300">
                  <span
                    className="text-purple-400"
                    style={{ marginRight: '0.75rem' }}
                  >
                    •
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-xl font-semibold text-white"
              style={{ marginBottom: '2rem' }}
            >
              Get In Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="flex items-start" style={{ gap: '1rem' }}>
                <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-purple-400" />
                <div>
                  <p className="text-gray-300">+91 63079-43091</p>
                  <p className="text-sm text-gray-400">Mon-Sun 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start" style={{ gap: '1rem' }}>
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-purple-400" />
                <div>
                  <p className="text-gray-300">
                    info@affordableballoondecoration.com
                  </p>
                  <p className="text-sm text-gray-400">Online support</p>
                </div>
              </div>
              <div className="flex items-start" style={{ gap: '1rem' }}>
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-purple-400" />
                <div>
                  <p className="text-gray-300">Varanasi, Uttar Pradesh</p>
                  <p className="text-sm text-gray-400">
                    Serving Varanasi and nearby cities
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div
        className="border-t border-gray-800"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex" style={{ gap: '1rem' }}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-pink-500"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-blue-500"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/916307943091"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-green-500"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Affordable Balloon Decoration. All Rights
            Reserved.
          </p>
          <p className="text-center text-sm text-gray-500">
            Designed with{' '}
            <Heart className="inline h-4 w-4 text-red-500" /> by{' '}
            <a
              href="https://www.linkedin.com/in/anurag-singh-57b57324b/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-purple-400 hover:underline"
            >
              Anurag Singh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
