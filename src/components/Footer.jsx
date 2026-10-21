import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Instagram, 
  Facebook, 
  MessageCircle,
  Youtube,
  Twitter,
  Star,
  ArrowRight
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

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/affordableballoondecoration',
      icon: Instagram,
      bgHover: 'hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600',
      ariaLabel: 'Follow us on Instagram',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/affordableballoondecoration',
      icon: Facebook,
      bgHover: 'hover:bg-blue-600',
      ariaLabel: 'Like us on Facebook',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/916307943091?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20balloon%20decoration%20services.',
      icon: MessageCircle,
      bgHover: 'hover:bg-green-600',
      ariaLabel: 'Chat with us on WhatsApp',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@affordableballoondecoration',
      icon: Youtube,
      bgHover: 'hover:bg-red-600',
      ariaLabel: 'Subscribe on YouTube',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/affordabledecor',
      icon: Twitter,
      bgHover: 'hover:bg-sky-500',
      ariaLabel: 'Follow us on Twitter / X',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Company Info & Social Badges */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-md group-hover:scale-105 transition-transform duration-200">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="font-poppins text-xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Affordable Balloon Decoration
              </span>
            </Link>

            <p className="leading-relaxed text-gray-300 text-sm">
              Creating magical moments with affordable balloon decorations in
              Varanasi and surrounding areas. We transform your celebrations
              into unforgettable experiences with creative designs and
              professional setup.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex text-amber-400 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-300">
                4.8 / 5.0 (127+ reviews)
              </span>
            </div>

            {/* Social Media Links in Company Section */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">
                Connect With Us
              </h4>
              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      title={social.name}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-300 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg ${social.bgHover}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center text-gray-300 text-sm transition-all duration-200 hover:text-purple-400 hover:translate-x-1"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-purple-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-gray-300 text-sm transition-all duration-200 hover:text-purple-400 hover:translate-x-1"
                  >
                    <span className="text-purple-400 mr-2 text-base leading-none">•</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & WhatsApp */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+916307943091"
                className="flex items-start gap-3 text-gray-300 hover:text-purple-300 transition-colors group"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">+91 63079-43091</p>
                  <p className="text-xs text-gray-400">Mon-Sun 9AM-6PM</p>
                </div>
              </a>

              <a
                href="mailto:hello@affordableballoondecoration.com"
                className="flex items-start gap-3 text-gray-300 hover:text-purple-300 transition-colors group"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">hello@affordableballoondecoration.com</p>
                  <p className="text-xs text-gray-400">Online 24/7 support</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 text-purple-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Varanasi, Uttar Pradesh</p>
                  <p className="text-xs text-gray-400">Kamchchha, Bhelupur & nearby</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/916307943091?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20balloon%20decoration%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950/70 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
            &copy; {currentYear} Affordable Balloon Decoration. All Rights Reserved.
          </p>

          {/* Social Icons row */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 mr-1 hidden sm:inline">Follow us:</span>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  title={social.name}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-gray-400 text-center md:text-right flex items-center justify-center gap-1">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-pink-500 fill-pink-500 inline" />
            <span>in Varanasi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
