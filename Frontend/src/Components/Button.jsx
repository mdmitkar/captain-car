import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    const baseClasses = 'px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg';

    const variants = {
        primary: 'bg-gradient-to-r from-brand-red to-brand-red-dark text-white hover:from-brand-red-dark hover:to-brand-red shadow-red-500/50',
        secondary: 'bg-white text-black hover:bg-gray-100 border-2 border-white',
        custom: '', // Allows custom classes to override everything
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
