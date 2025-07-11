import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  href,
  to,
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed btn-ripple';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:scale-105 focus:ring-purple-500',
    secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 focus:ring-purple-500',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-600 focus:ring-white',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-purple-500',
    link: 'bg-transparent text-purple-600 underline hover:text-purple-800 focus:ring-purple-500',
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const sizeStyles = {
    sm: { padding: '0.5rem 1rem' },
    md: { padding: '0.75rem 1.5rem' },
    lg: { padding: '1rem 2rem' },
    xl: { padding: '1.25rem 2.5rem' }
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizeClasses[size]} ${className}`;
  const style = { ...sizeStyles[size], ...props.style };

  if (to) {
    return (
      <Link to={to} className={classes} style={style} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} style={style} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={style}
      {...props}
      
    >
      {children}
    </button>
  );
};

export default Button;
