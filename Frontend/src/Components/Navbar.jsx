import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/assets/figma-img/logo.png"
                        alt="Captain Car Logo"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative group px-1 py-1 transition-all duration-300 ${isActive(link.path)
                                ? 'text-brand-red'
                                : 'text-white hover:text-brand-red'
                                }`}
                        >
                            <span className="font-bold tracking-wide text-lg">{link.name}</span>
                            {/* Sharp Center-Out Underline */}
                            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-brand-red transition-all duration-300 ease-out ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button
                        variant="custom"
                        className="group relative !bg-[#B22222] text-white shadow-none hover:bg-[#900000] hover:scale-105 transition-all duration-300 rounded-full px-8 py-3"
                    >
                        <span className="relative z-10 font-black tracking-wider uppercase flex items-center gap-2">
                            Discover More <span className="text-xl">→</span>
                        </span>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
