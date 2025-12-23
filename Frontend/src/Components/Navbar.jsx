import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="glass-panel mx-4 mt-4 rounded-2xl px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center group">
                    <img
                        src="/assets/figma-img/logo.png"
                        alt="Captain Car Logo"
                        className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative group px-2 py-1 transition-all duration-300 ${isActive(link.path) ? 'text-brand-red' : 'text-gray-300 hover:text-white'}`}
                        >
                            <span className="font-bold tracking-widest text-sm uppercase">{link.name}</span>
                            <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-red transition-all duration-300 ${isActive(link.path) ? 'w-full shadow-[0_0_10px_#DC143C]' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button
                        variant="custom"
                        className="relative overflow-hidden !bg-brand-red-dark hover:!bg-brand-red text-white shadow-[0_0_15px_rgba(220,20,60,0.4)] hover:shadow-[0_0_25px_rgba(220,20,60,0.6)] transition-all duration-300 rounded-full px-6 py-2 group"
                    >
                        <span className="relative z-10 font-black tracking-widest uppercase text-xs flex items-center gap-2">
                            Book Now <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                {navLinks.map((link, idx) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-3xl font-black uppercase text-white tracking-tighter hover:text-brand-red transition-colors"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="mt-8">
                    <Button
                        onClick={() => setMobileMenuOpen(false)}
                        variant="custom"
                        className="!bg-brand-red text-white text-xl font-bold px-10 py-4 rounded-full shadow-[0_0_30px_rgba(220,20,60,0.5)]"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
