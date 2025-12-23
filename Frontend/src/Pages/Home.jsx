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
                            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Premium Car Modification</span>
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Captain Car.</span>
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
            <div className="py-0 bg-black relative"> {/* Removed padding to kill gap */}
                <div className="container mx-auto px-6 mb-8 flex items-end justify-between">
                    <ScrollReveal direction="down">
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                            Premium <span className="text-brand-red">Accessories</span><br />& Styling
                        </h2>
                    </ScrollReveal>
                    {/* Horizontal Infinite Loop Scroll - Full Screen Style */}
                </div>

                {/* Horizontal Infinite Loop Scroll - Full Screen Style */}
                <div className="relative w-full overflow-hidden pb-4">
                    <div className="flex gap-0 animate-marquee-slow hover:[animation-play-state:paused] w-max">
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
                                    <div key={`${i}-${idx}`} className="w-screen md:w-[60vw] flex-shrink-0 relative h-[80vh] overflow-hidden group border-r border-white/10">
                                        <div className={`absolute inset-0 bg-gradient-to-b ${service.color} to-black opacity-60 group-hover:opacity-30 transition-opacity duration-500`} />
                                        <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover p-12 group-hover:scale-110 transition-transform duration-700" />

                                        <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/80 to-transparent">
                                            <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-4 tracking-tighter">{service.title}</h3>
                                            <p className="text-gray-300 mb-8 font-medium text-xl max-w-xl">{service.desc}</p>
                                            <span className="inline-flex items-center gap-4 text-brand-red font-bold uppercase tracking-widest text-lg group-hover:gap-6 transition-all">
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
            <div className="bg-[#0a0a0a] py-10 px-6"> {/* Reduced padding */}
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal direction="up">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">You Asked, <span className="text-brand-red">We Answered</span></h2>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                                <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-xl font-bold text-gray-200">{faq.q}</span>
                                        <span className={`text-2xl text-brand-red transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-48 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= CONTACT / FOOTER ================= */}
            <footer className="bg-black pt-20 pb-10 border-t border-white/10 text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <img src="/assets/figma-img/logo.png" alt="Captain Car" className="h-16 w-auto object-contain" />
                        </Link>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all">FB</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all">IG</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all">YT</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-brand-red font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/" className="hover:text-white transition-colors">Get In Touch</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Returns</Link></li>
                            <li><Link to="/why-us" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Business */}
                    <div>
                        <h4 className="text-brand-red font-bold uppercase tracking-widest mb-6">Business</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/why-us" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Bulk Orders</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-brand-red font-bold uppercase tracking-widest mb-6">Contact Us</h4>
                        <div className="space-y-6 text-gray-400">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="text-white font-bold">We're available by phone:</p>
                                    <p className="text-xl text-brand-red font-black">9822119832</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✉️</span>
                                <p>contact@captaincar.in</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">🕒</span>
                                <p>Monday to Saturday 10 AM to 9 PM</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
                    <p>Copyright © 2025 Captain Car. All rights reserved.</p>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-green-500 font-bold">Chat with us</span>
                    </div>
                </div>
            </footer>

        </div >
    );
};

export default Home;
