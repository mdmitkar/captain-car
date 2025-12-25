import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import { productCategories } from '../Data/categories';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToCategory = (id) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/products') {
            navigate('/products');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Why Us', path: '/why-us' },
        { name: 'Products', path: '/products', isDropdown: true },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className={`mx-4 rounded-full px-8 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-black/40 backdrop-blur-lg border border-white/5'}`}>
                {/* Logo */}
                <Link to="/" className="flex items-center group">
                    <img
                        src="/assets/figma-img/logo.png"
                        alt="Captain Car Logo"
                        className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                to={link.path}
                                className={`relative px-2 py-1 transition-all duration-300 flex items-center ${isActive(link.path) ? 'text-[#DC143C]' : 'text-gray-300 group-hover:text-white'}`}
                            >
                                <span className="font-medium tracking-widest text-sm uppercase flex items-center gap-1">
                                    {link.name}
                                    {link.isDropdown && <span className="text-[10px] mt-0.5 transition-transform duration-300 group-hover:rotate-180">▼</span>}
                                </span>
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#DC143C] transition-all duration-300 ${isActive(link.path) ? 'w-full shadow-[0_0_10px_#DC143C]' : 'w-0 group-hover:w-full'}`} />
                            </Link>

                            {/* Dropdown for Products */}
                            {link.isDropdown && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                                    <div className="w-[600px] bg-[#050505] border border-white/10 rounded-3xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden relative group/menu">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC143C] via-[#DC143C]/50 to-transparent" />

                                        {/* Decorative Blur */}
                                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#DC143C]/10 rounded-full blur-[80px] pointer-events-none" />

                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                                            {productCategories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => scrollToCategory(category.id)}
                                                    className="group/item flex items-center justify-between text-left text-gray-400 hover:text-white px-4 py-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5"
                                                >
                                                    <span className="text-xs font-medium uppercase tracking-widest group-hover/item:translate-x-2 transition-transform duration-300">
                                                        {category.title}
                                                    </span>
                                                    <span className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 text-[#DC143C]">
                                                        →
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
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
                    <div key={link.path} className="flex flex-col items-center gap-4 w-full">
                        <div className="flex items-center gap-2 justify-center w-full relative">
                            {/* Ghost Button for alignment balance */}
                            {link.isDropdown && <div className="p-2 w-10 h-10 invisible" />}

                            <Link
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-3xl font-bold uppercase tracking-tighter hover:text-brand-red transition-colors ${isActive(link.path) ? 'text-[#DC143C]' : 'text-white'}`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                {link.name}
                            </Link>

                            {link.isDropdown && (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setMobileProductsOpen(!mobileProductsOpen);
                                    }}
                                    className="p-2 w-10 h-10 flex items-center justify-center text-white hover:text-[#DC143C] transition-colors"
                                >
                                    <svg
                                        className={`w-6 h-6 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            )}
                            {/* Spacer to replace button if no dropdown, maintaining absolute center if needed, but not strictly required for other links as they are alone */}
                            {!link.isDropdown && <div className="hidden" />}
                        </div>

                        {/* Mobile Submenu for Products */}
                        {link.isDropdown && (
                            <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${mobileProductsOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-2 mx-4 flex flex-col gap-1 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                                    {productCategories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => scrollToCategory(category.id)}
                                            className="text-gray-400 hover:text-white hover:bg-white/10 text-xs font-bold uppercase tracking-[0.2em] py-3 px-4 rounded-xl transition-all text-left flex items-center justify-between group/subitem"
                                        >
                                            {category.title}
                                            <span className="opacity-0 group-hover/subitem:opacity-100 text-[#DC143C] transition-opacity">→</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
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
