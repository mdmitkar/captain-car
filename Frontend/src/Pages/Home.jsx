import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import ScrollReveal from '../Components/ScrollReveal';

const Home = () => {
    const [showHeroText, setShowHeroText] = useState(false);
    const [showBottomContent, setShowBottomContent] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: "Do you provide warranty on modifications?", a: "Yes! All our products come with a verified manufacturer warranty, and we provide a lifetime installation guarantee on our wiring work." },
        { q: "Will installing accessories affect my car's warranty?", a: "We use coupler-to-coupler installation methods which do not cut any original wires, ensuring your car's manufacturer warranty remains intact." },
        { q: "How long does a full interior customization take?", a: "Seat covers usually take 3-4 hours. A complete interior overhaul (audio + lights + seats) might take a full day. We value precision over speed." },
        { q: "Do you have options for all car brands?", a: "Absolutely. From Maruti to Mercedes, we have specific accessories tailored for every make and model." }
    ];

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowHeroText(true);
        }, 3000);

        const timer2 = setTimeout(() => {
            setShowBottomContent(true);
        }, 5500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="bg-premium-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-105 brightness-110"
                    >
                        <source src="/assets/figma-img/car-video - Made with Clipchamp.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-start">
                    <ScrollReveal direction="left" delay={500} className="max-w-4xl">
                        <div className={`glass-panel inline-block px-6 py-2 rounded-full mb-6 border-l-4 border-brand-red transition-all duration-1000 ${showHeroText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Premium Car Accessories</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] uppercase italic tracking-tighter drop-shadow-2xl flex flex-col gap-2">
                            <div className="flex gap-4 overflow-hidden">
                                <span className={`block text-white transition-all duration-700 delay-[0ms] transform ${showHeroText ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                                    REDEFINE
                                </span>
                                <span className={`block text-white transition-all duration-700 delay-[200ms] transform ${showHeroText ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                                    YOUR
                                </span>
                            </div>
                            <div className="flex gap-4 overflow-hidden">
                                <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#FF6B6B] filter drop-shadow-[0_0_20px_rgba(220,20,60,0.5)] transition-all duration-700 delay-[400ms] transform ${showHeroText ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                                    DRIVING
                                </span>
                                <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#FF6B6B] filter drop-shadow-[0_0_20px_rgba(220,20,60,0.5)] transition-all duration-700 delay-[600ms] transform ${showHeroText ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                                    IMPACT
                                </span>
                            </div>
                        </h1>
                        <p className={`text-gray-100 text-lg md:text-2xl font-light tracking-wide max-w-2xl mb-10 border-l border-white/50 pl-6 transition-all duration-1000 delay-0 transform ${showBottomContent ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
                            Experience the pinnacle of automotive interior design. We don't just modify cars; we forge identities.
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-[300ms] transform ${showBottomContent ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
                            <Link to="/contact">
                                <Button variant="custom" className="px-10 py-4 bg-brand-red hover:bg-white hover:text-brand-red text-white font-black rounded-none skew-x-[-10deg] transition-all duration-300 uppercase tracking-widest shadow-[5px_5px_0px_rgba(255,255,255,0.1)] hover:shadow-[5px_5px_0px_#B22222]">
                                    <span className="skew-x-[10deg] inline-block">Start Project</span>
                                </Button>
                            </Link>
                            <Link to="/services">
                                <button className="px-10 py-4 border border-white/50 hover:border-brand-red text-white font-bold uppercase tracking-widest hover:bg-brand-red/10 transition-all duration-300 skew-x-[-10deg] backdrop-blur-sm">
                                    <span className="skew-x-[10deg] inline-block">View Gallery</span>
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-brand-red to-transparent"></div>
                </div>
            </div>

            {/* ================= THE EXPERIENCE (About) ================= */}
            <div className="relative py-24 px-6 bg-[#080808] overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image Grid */}
                    <ScrollReveal direction="right" delay={200}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-red blur-[60px] opacity-20" />
                            <div className="relative grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="h-64 bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden group">
                                        <img src="/seatcover1.png" alt="Seat Cover" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                                    </div>
                                    <div className="h-48 bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden group">
                                        <img src="/seatcover4.png" alt="Seat Cover" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-48 bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden group">
                                        <img src="/seatcover6.png" alt="Seat Cover" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                                    </div>
                                    <div className="h-64 bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden group">
                                        <img src="/seatcover9.png" alt="Seat Cover" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Content */}
                    <ScrollReveal direction="left" delay={400}>
                        <div>
                            <h4 className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-4">Master Craftsmanship</h4>
                            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-8 leading-none">
                                We Are <br />
                                <span className="text-[#E31E24]">Captain Car.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-brand-red pl-6">
                                Founded by <strong>Tanveer Farooqui</strong>, we stand as the premier destination for automotive perfection.
                                From precision audio tuning to bespoke leather tailoring, our workshop in <span className="text-white font-bold">Bhiwandi</span> is where stock vehicles come to undergo a radical transformation.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div>
                                    <h3 className="text-3xl font-black text-white mb-1">15+</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-white mb-1">5000+</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Cars Modified</p>
                                </div>
                            </div>

                            <Link to="/why-us">
                                <Button variant="custom" className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full uppercase font-bold tracking-widest transition-all">
                                    Why Choose Us?
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* ================= SERVICES SLIDER (Horizontal) ================= */}
            <div className="py-12 bg-black relative">
                <div className="container mx-auto px-6 mb-8 flex items-end justify-between">
                    <ScrollReveal direction="down">
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                            Premium <span className="text-[#E31E24]">Accessories<br />      & Styling</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Mobile View: Manual Horizontal Scroll (Snap) */}
                <div className="md:hidden w-full overflow-x-auto pb-8 px-6 flex gap-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {[
                        { title: 'Bespoke Interiors', desc: 'Hand-stitched leather tailored to perfection.', img: '/seatcover8.png', color: 'from-red-900' },
                        { title: 'Concert Audio', desc: 'High-fidelity sound systems that shake the ground.', img: '/bossaudiosystem.png', color: 'from-blue-900' },
                        { title: 'Privacy Films', desc: 'Advanced heat rejection and UV protection.', img: '/suntekwindowfilm.png', color: 'from-yellow-900' },
                        { title: 'Tech Upgrades', desc: 'Android players, mood lighting, & security.', img: '/cardisplay2.png', color: 'from-purple-900' },
                        { title: 'Exterior Accessories', desc: 'Roof carriers, wheel caps, and detailing.', img: '/roofcarrier.png', color: 'from-green-900' },
                    ].map((service, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[85vw] snap-center h-[500px] relative rounded-3xl overflow-hidden border border-white/10 group">
                            <div className={`absolute inset-0 bg-gradient-to-b ${service.color} to-black opacity-30`} />
                            <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-contain p-8" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <h3 className="text-3xl font-black text-white uppercase italic mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                                <span className="text-brand-red font-bold uppercase tracking-widest text-xs flex items-center gap-2">Explore <span>→</span></span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View: Auto Marquee */}
                <div className="hidden md:block relative w-full overflow-hidden pb-4">
                    <div className="flex gap-8 animate-marquee-slow hover:[animation-play-state:paused] w-max">
                        {/* Duplicate the array 3 times for seamless looping */}
                        {[...Array(3)].map((_, i) => (
                            <React.Fragment key={i}>
                                {[
                                    { title: 'Bespoke Interiors', desc: 'Hand-stitched leather tailored to perfection.', img: '/seatcover8.png', color: 'from-red-900' },
                                    { title: 'Concert Audio', desc: 'High-fidelity sound systems that shake the ground.', img: '/bossaudiosystem.png', color: 'from-blue-900' },
                                    { title: 'Privacy Films', desc: 'Advanced heat rejection and UV protection.', img: '/suntekwindowfilm.png', color: 'from-yellow-900' },
                                    { title: 'Tech Upgrades', desc: 'Android players, mood lighting, & security.', img: '/cardisplay2.png', color: 'from-purple-900' },
                                    { title: 'Exterior Accessories', desc: 'Roof carriers, wheel caps, and detailing.', img: '/roofcarrier.png', color: 'from-green-900' },
                                ].map((service, idx) => (
                                    <div key={`${i}-${idx}`} className="w-[400px] flex-shrink-0 relative h-[500px] rounded-3xl overflow-hidden group border border-white/10 bg-white/5">
                                        <div className={`absolute inset-0 bg-gradient-to-b ${service.color} to-black opacity-30 group-hover:opacity-20 transition-opacity duration-500`} />
                                        <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" />

                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                            <h3 className="text-3xl font-black text-white uppercase italic mb-2 tracking-tighter">{service.title}</h3>
                                            <p className="text-gray-300 mb-6 font-medium text-sm leading-relaxed">{service.desc}</p>
                                            <span className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                                Explore Service <span>→</span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <style>{`
                    .animate-marquee-slow { animation: marquee-scroll 60s linear infinite; }
                    /* Slower animation for larger images */
                    @keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
                `}</style>
            </div>

            {/* ================= MARQUEE (Brands) ================= */}
            <div className="py-2 bg-brand-red overflow-hidden relative border-t border-b border-black"> {/* Reduced padding */}
                <div className="absolute inset-0 bg-[url('/assets/figma-img/bg-pattern.png')] opcode-10 mix-blend-multiply" />
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="animate-marquee flex gap-16 items-center">
                        {[1, 2, 3].map((i) => (
                            <React.Fragment key={i}>
                                {['AUDI', 'BMW', 'MERCEDES', 'PORSCHE', 'JAGUAR', 'LAND ROVER', 'VOLVO', 'LEXUS', 'TOYOTA', 'HONDA'].map((brand, idx) => (
                                    <span key={`${i}-${idx}`} className="text-5xl md:text-7xl font-black text-black/20 uppercase italic tracking-tighter">
                                        {brand}
                                    </span>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <style>{`
                    .animate-marquee { animation: marquee 30s linear infinite; }
                    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                `}</style>
            </div>

            {/* ================= FAQ SECTION ================= */}
            <div className="bg-[#050505] py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E31E24]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <ScrollReveal direction="up">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
                                You Asked, <span className="text-[#E31E24]">We Answered</span>
                            </h2>
                            <p className="text-gray-400">Everything you need to know about our services.</p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                                <div
                                    className={`group border rounded-2xl overflow-hidden transition-all duration-500 ${openFaq === idx ? 'bg-[#0a0a0a] border-[#E31E24] shadow-[0_0_30px_-10px_rgba(227,30,36,0.3)]' : 'bg-[#0a0a0a] border-white/5 hover:border-white/10'}`}
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-center justify-between p-6 text-left transition-colors"
                                    >
                                        <span className={`text-xl font-bold uppercase italic tracking-tight transition-colors duration-300 ${openFaq === idx ? 'text-[#E31E24]' : 'text-white group-hover:text-gray-200'}`}>
                                            {faq.q}
                                        </span>
                                        <span className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${openFaq === idx ? 'bg-[#E31E24] border-[#E31E24] rotate-45' : 'border-white/10 group-hover:border-[#E31E24] group-hover:text-[#E31E24]'}`}>
                                            <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'fill-white' : 'fill-current'}`} viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mx-6 mt-2">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= LOCATION MAP SECTION ================= */}
            <div className="bg-[#050505] py-20 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal direction="up">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
                                Visit Our <span className="text-[#E31E24]">Workshop</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Come see where the magic happens. We are located in the heart of Bhiwandi.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                            {/* Map Overlay Gradient (for style) */}
                            <div className="absolute inset-0 pointer-events-none z-10 border-[10px] border-white/5 rounded-[3rem]" />

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.986877524957!2d73.0534!3d19.2829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE2JzU4LjQiTiA3M8KwMDMnMTIuMiJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin&q=Captain+Car+Accessories,+Next+to+Greenland+Hotel,+Chavindra,+Bhiwandi"
                                width="100%"
                                height="100%"
                                className="w-full h-full grayscale-0 invert-0 md:grayscale md:invert-[.9] md:contrast-[1.1] md:hover:grayscale-0 md:hover:invert-0 md:hover:contrast-100 transition-all duration-700"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            {/* Address Card Overlay */}
                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-sm z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <h4 className="text-[#E31E24] font-bold uppercase tracking-widest mb-2 text-xs">Headquarters</h4>
                                <p className="text-white font-bold text-lg mb-1">Captain Car Accessories</p>
                                <p className="text-gray-400 text-sm leading-relaxed">Next to Greenland Hotel, Chavindra, Bhiwandi, Maharashtra 421302</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* ================= CONTACT / FOOTER ================= */}
            <footer className="bg-black pt-20 pb-10 border-t border-white/10 text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div className="col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <img src="/assets/figma-img/logo.png" alt="Captain Car" className="h-16 w-auto object-contain" />
                        </Link>
                        <div className="flex gap-4 mt-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all group hover:scale-110 hover:shadow-[0_0_20px_rgba(227,30,36,0.4)]">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#E31E24] font-bold uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#E31E24]">›</span> Our Services</Link></li>
                            <li><Link to="/why-us" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#E31E24]">›</span> About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#E31E24]">›</span> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-[#E31E24] font-bold uppercase tracking-widest mb-6">Contact Us</h4>
                        <div className="space-y-6 text-gray-400">
                            <div className="flex items-start gap-4 group">
                                <span className="text-2xl text-[#E31E24] group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 018.59 3.91c0-.55-.45-1-1-1H4.39c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-bold">Call Us:</p>
                                    <p className="text-xl text-[#E31E24] font-black">9822119832</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="text-2xl text-[#E31E24] group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                </span>
                                <p>contact@captaincar.in</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="text-2xl text-[#E31E24] group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                                </span>
                                <p>Mon - Sat: 10 AM - 9 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
                    <p>Copyright © 2025 Captain Car. All rights reserved.</p>
                </div>
            </footer>

        </div >
    );
};

export default Home;
