import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail } from 'lucide-react';
import clsx from 'clsx';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          { 'bg-white shadow-md': isScrolled, 'bg-transparent': !isScrolled }
        )}
      >
        {/* Top contact bar */}
        <div
          className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-500 text-white"
          style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
        >
          <div
            className="container mx-auto flex items-center justify-between text-sm"
            style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
          >
            <div className="flex items-center" style={{ gap: '3rem' }}>
              <div className="flex items-center" style={{ gap: '0.25rem' }}>
                <Phone className="h-4 w-4" />
                <span>+91 63079-43091</span>
              </div>
              <div className="flex items-center" style={{ gap: '0.25rem' }}>
                <Mail className="h-4 w-4" />
                <span>info@affordableballoondecoration.com</span>
              </div>
            </div>
            <div className="text-sm">
              ✨ Free consultation for events over ₹5000!
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div
          className="container mx-auto"
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
        >
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center" style={{ gap: '0.5rem' }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span
                className={clsx(
                  'font-poppins font-bold transition-colors text-xl md:text-2xl',
                  'text-gray-800'
                )}
              >
                <span className="md:hidden">Affordable Balloons</span>
                <span className="hidden md:inline">Affordable Balloon Decoration</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden items-center text-lg md:flex"
              style={{ gap: '1.25rem' }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    'font-medium transition-colors duration-200 hover:text-purple-600',
                    {
                      'border-b-2 border-purple-600 text-purple-600':
                        location.pathname === link.path,
                      'text-gray-700':
                        isScrolled && location.pathname !== link.path,
                      'text-white md:text-gray-700':
                        !isScrolled && location.pathname !== link.path,
                    }
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-ripple transform rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                }}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              style={{ padding: '0.5rem' }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 transition-colors text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={clsx(
            'fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out md:hidden',
            {
              'translate-x-0': isOpen,
              'translate-x-full': !isOpen,
            }
          )}
        >
          <div
            className="flex h-full flex-col items-center justify-center"
            style={{ gap: '2rem' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'text-2xl font-medium transition-colors duration-200 hover:text-purple-600',
                  {
                    'text-purple-600': location.pathname === link.path,
                    'text-gray-700': location.pathname !== link.path,
                  }
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="transform rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
              style={{
                paddingLeft: '2rem',
                paddingRight: '2rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
              }}
            >
              Book Now
            </Link>
            <div
              className="absolute bottom-10 text-center"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                className="flex items-center text-gray-600"
                style={{ gap: '0.5rem' }}
              >
                <Phone className="h-5 w-5" />
                <span>+91 63079-43091</span>
              </div>
              <div
                className="flex items-center text-gray-600"
                style={{ gap: '0.5rem' }}
              >
                <Mail className="h-5 w-5" />
                <span>info@affordableballoondecoration.com</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
