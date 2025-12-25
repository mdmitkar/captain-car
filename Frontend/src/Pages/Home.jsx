import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import ScrollReveal from '../Components/ScrollReveal';

const Home = () => {
    const [showHeroText, setShowHeroText] = useState(false);
    const [showBottomContent, setShowBottomContent] = useState(false);
    const [showButton, setShowButton] = useState(false);
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

    const [hoveredImg, setHoveredImg] = useState(null);

    useEffect(() => {
        const heroTimer = setTimeout(() => setShowHeroText(true), 1860);
        const bottomTimer = setTimeout(() => setShowBottomContent(true), 3500);
        const buttonTimer = setTimeout(() => setShowButton(true), 5500);

        return () => {
            clearTimeout(heroTimer);
            clearTimeout(bottomTimer);
            clearTimeout(buttonTimer);
        };
    }, []);

    const services = [

        {
            title: 'Concert Audio',
            desc: 'Audiophile-grade sound engineering. From high-fidelity speakers and powerful subwoofers to precision DSP tuning for a studio-quality experience on wheels.',
            img: '/speaker/bossaudiosystem-removebg-preview.png',
            link: '/products#speakers'
        },
        {
            title: 'Premium Interiors',
            desc: 'Luxury meets comfort. Hand-crafted Nappa leather seat covers and ergonomic fittings that transform your cabin into a first-class lounge.',
            img: '/seat cover/seatcover1-removebg-preview.png',
            link: '/products#seat-covers'
        },
        {
            title: 'Tech Upgrades',
            desc: 'The latest in automotive intelligence. High-resolution Android displays, 360-degree cameras, and ambient mood lighting controlled right from your smartphone.',
            img: '/car-display/cardisplay2-removebg-preview.png',
            link: '/products#audio-video'
        },
        {
            title: 'Exterior Styling',
            desc: "Command the road with presence. Custom body kits, premium alloy wheels, and professional chrome deletions that give your vehicle a distinct, aggressive edge.",
            img: '/car-tyre-cap/car-wheel_cap-removebg-preview.png',
            link: '/products#wheel-caps'
        },
    ];

    const smoothScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const distance = elementPosition;
            const duration = 500; // 0.5s for instant-feel response
            let start = null;

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);

                // Ease-out cubic: starts fast, slows down at the end. No startup delay.
                const ease = 1 - Math.pow(1 - percentage, 3);

                window.scrollTo(0, startPosition + distance * ease);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }
            window.requestAnimationFrame(step);
        }
    };

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
                        <source src="/assets/captain/final-thar-video.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="relative z-20 w-full h-full flex flex-col justify-center items-start px-6 md:pl-20 lg:pl-32">
                    <ScrollReveal direction="left" delay={500} className="max-w-4xl">
                        <div className={`glass-panel inline-block px-6 py-2 rounded-full mb-6 border-l-4 border-brand-red transition-all duration-1000 ${showHeroText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Premium Car Accessories</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[0.9] uppercase italic tracking-tighter drop-shadow-2xl flex flex-col gap-2">
                            <div className="flex gap-4 overflow-hidden">
                                <span className={`block text-white transition-all duration-700 delay-[0ms] transform ${showHeroText ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                                    CRAFT
                                </span>
                                <span className={`block text-white transition-all duration-700 delay-[200ms] transform ${showHeroText ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                                    YOUR
                                </span>
                            </div>
                            <div className="flex gap-4 overflow-hidden p-8 pr-32 -m-8">
                                <span className={`block pr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#FF6B6B] filter drop-shadow-[0_0_20px_rgba(220,20,60,0.5)] transition-all duration-700 delay-[400ms] transform ${showHeroText ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                                    DRIVING
                                </span>
                                <span className={`block pr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#FF6B6B] filter drop-shadow-[0_0_20px_rgba(220,20,60,0.5)] transition-all duration-700 delay-[600ms] transform ${showHeroText ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                                    LEGACY
                                </span>
                            </div>
                        </h1>
                        <div className="relative mb-10 max-w-2xl pl-6">
                            {/* Animated Line */}
                            <div className={`absolute left-0 top-0 bottom-0 w-[1px] bg-white/50 origin-top transition-transform duration-700 ease-out delay-[800ms] ${showBottomContent ? 'scale-y-100' : 'scale-y-0'}`} />

                            {/* Animated Text */}
                            <p className={`text-gray-100 text-lg md:text-xl font-bold tracking-wide transition-all duration-1000 delay-[1200ms] transform ${showBottomContent ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                                Experience the pinnacle of automotive interior design. We don't just modify cars: we forge identities...
                            </p>
                        </div>


                        <div className={`flex justify-center w-full transition-all duration-1000 delay-[300ms] transform opacity-0 hidden`}>
                            {/* Placeholder to keep layout shift minimal if needed, or just remove fully. I will remove the code block fully in TargetContent */}
                        </div>
                    </ScrollReveal>
                </div>

                <div className={`absolute bottom-6 left-0 w-full flex flex-col items-center justify-center z-30 transition-all duration-1000 transform cursor-pointer ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
                    <Button
                        variant="custom"
                        onClick={() => smoothScrollTo('about-section')}
                        className="mb-6 px-10 py-4 bg-[#E31E24] hover:bg-white hover:text-[#E31E24] text-white text-lg font-black rounded-none skew-x-[-10deg] transition-all duration-300 uppercase tracking-widest shadow-[0_0_30px_rgba(227,30,36,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
                    >
                        <span className="skew-x-[10deg] inline-block">Discover More</span>
                    </Button>

                    <div
                        className="flex flex-col -space-y-6 animate-bounce hover:scale-110 transition-transform duration-300"
                        onClick={() => smoothScrollTo('about-section')}
                    >
                        <svg className="w-10 h-10 text-[#E31E24] opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7l5 5 5-5" /></svg>
                        <svg className="w-10 h-10 text-[#E31E24] opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7l5 5 5-5" /></svg>
                        <svg className="w-10 h-10 text-[#E31E24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7l5 5 5-5" /></svg>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-brand-red to-transparent"></div>
                </div>
            </div>

            {/* ================= THE EXPERIENCE (About) ================= */}
            <div id="about-section" className="relative py-24 px-6 bg-black overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: The Visionary Feature */}
                    <ScrollReveal direction="right" delay={200}>
                        <div className="relative h-[600px] md:h-[850px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(227,30,36,0.2)] group">
                            {/* Cinematic Overlay Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10 opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />

                            {/* Pulse Glow Effect */}
                            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none z-0" />

                            <img
                                src="/contact/owner.png"
                                alt="Tanveer Farooqui - Founder"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] relative z-0"
                            />

                            {/* Identifier Badge Overlay */}
                            <div className="absolute bottom-12 left-12 right-12 z-20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-[2px] bg-brand-red shadow-[0_0_10px_#E31E24]" />
                                    <span className="text-white font-black uppercase italic tracking-widest text-xs md:text-sm">Founder & Master Craftsman</span>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2 leading-none">
                                    Tanveer <span className="text-brand-red">Farooqui</span>
                                </h3>
                                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">The Heart of Captain Car Audio</p>
                            </div>

                            {/* Tech HUD Detail */}
                        </div>
                    </ScrollReveal>

                    {/* Right: Content */}
                    <ScrollReveal direction="left" delay={400}>
                        <div>
                            <h4 className="text-brand-red text-sm font-bold uppercase tracking-[0.5em] mb-4">The Legacy of Precision</h4>

                            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-8 leading-[0.8]">
                                We Are <br />
                                <span className="text-[#E31E24]">Captain Car...</span>
                            </h2>

                            <div className="space-y-6 text-gray-400 text-base leading-relaxed mb-10 text-justify hyphens-auto tracking-tight break-words">
                                <p>
                                    Started by <strong className="text-white">Tanveer Farooqui</strong>, Captain Car isn't just a shop; it's a place for car lovers. We have become very popular in Bhiwandi because we truly love what we do. With over 15 years of experience, Tanveer is ambitious about every project. He treats your vehicle like his own, giving it full attention to make sure the work is neat, unique, and truly professional.
                                </p>

                                <p>
                                    We believe your car shows your personality. Whether it is fitting premium seat covers that feel luxurious or installing a heavy sound system that booms, we focus on every single detail. We are professional in work—we never rush. We take our time to ensure every fitting is perfect, giving your car that rich, classy look you always wanted.
                                </p>

                                <p>
                                    We always stay updated with the new trends and fashion in cars. From installing smart Android players to designing luxury interiors, our work is known for being durable and stylish. We are dedicated to quality. We don't just add accessories; we upgrade your lifestyle, making your driving experience comfortable and elite.
                                </p>

                                <p>
                                    Located in <strong className="text-white">Chavindra, Bhiwandi</strong>, our workshop is open for everyone who values honest service and good relations. We have earned a strong reputation because we treat customers like family. When you come to us, you get our promise of excellence and complete customer satisfaction.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-1">15+</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Years Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-1">5000+</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Cars Modified</p>
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

            {/* ================= THE CAPTAIN'S STANDARD (Process) ================= */}
            <div className="py-20 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal direction="up">
                        <div className="text-center mb-16">
                            <h4 className="text-brand-red text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Methodology</h4>
                            <h2 className="text-2xl md:text-4xl font-black text-white italic uppercase tracking-tighter mb-6">
                                The <span className="text-[#E31E24]">Captain's</span> Standard
                            </h2>
                            <p className="text-gray-400 text-base max-w-3xl mx-auto">
                                Transparency, precision, and passion. We follow a meticulous four-step process to ensure your vehicle transformation exceeds every industry standard.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Diagnostic Grid Style Cards */}
                        {[
                            {
                                step: "01",
                                title: "Vision Consultation",
                                desc: "Every project starts with a detailed discussion. We understand your car, your usage, and your needs, and suggest the best options that suit your style, comfort, and budget."
                            },
                            {
                                step: "02",
                                title: "Custom Design Planning",
                                desc: "Based on the discussion, our team prepares a complete design plan. From audio setup positioning to seat cover patterns and interior finish, everything is planned clearly before starting the work."
                            },
                            {
                                step: "03",
                                title: "Skilled Craftsmanship",
                                desc: "This is where the real work begins. Our experienced technicians carefully install each component with proper tools, ensuring perfect fitting, clean finish, and long-lasting quality just like factory standards."
                            },
                            {
                                step: "04",
                                title: "Final Inspection & Handover",
                                desc: "Before delivery, Tanveer Farooqui personally checks the overall work quality. We fine-tune audio settings, explain all upgrades, and hand over the car only after it meets our quality promise."
                            }
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                                <div className="group relative p-6 bg-black border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-brand-red/50 transition-all duration-500 h-full">
                                    {/* HUD Background Scan Line */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-down pointer-events-none" />

                                    <span className="text-5xl font-black text-brand-red/10 group-hover:text-brand-red/20 transition-all duration-700 block mb-6 italic">{item.step}</span>
                                    <h3 className="text-sm md:text-base font-black text-white mb-4 uppercase italic tracking-tighter group-hover:text-brand-red transition-colors duration-500 whitespace-nowrap">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed text-justify hyphens-auto tracking-tight font-medium break-words">{item.desc}</p>

                                    {/* Corner Accent */}
                                    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/5 group-hover:border-brand-red/30 transition-colors duration-500" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= MARQUEE (Brands) ================= */}
            <div className="py-10 bg-black overflow-hidden relative border-t border-b border-white/10">
                <div className="max-w-7xl w-full mx-auto px-6 mb-8 text-center relative z-10">
                    <h3 className="text-[#E31E24] font-bold uppercase tracking-[0.3em] text-sm md:text-lg glow-text">We Work For</h3>
                </div>

                <div className="relative">
                    {/* Gradient Mask for "Center Visible, Edges Hidden" effect */}
                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black via-transparent to-black w-full h-full" />

                    <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
                        <div className="animate-marquee flex gap-16 items-center">
                            {[...Array(3)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {[
                                        { name: 'Maruti Suzuki', src: '/assets/car_logos/suzuki.svg' },
                                        { name: 'Hyundai', src: '/assets/car_logos/hyundai.svg' },
                                        { name: 'Mahindra', src: '/assets/car_logos/mahindra.svg' },
                                        { name: 'Tata Motors', src: '/assets/car_logos/tata.svg' },
                                        { name: 'Honda', src: '/assets/car_logos/honda.svg' },
                                        { name: 'Toyota', src: '/assets/car_logos/toyota.svg' },
                                        { name: 'Kia', src: '/assets/car_logos/kia.svg' },
                                        { name: 'MG', src: '/assets/car_logos/mg.svg' },
                                        { name: 'Skoda', src: '/assets/car_logos/skoda.svg' },
                                        { name: 'Volkswagen', src: '/assets/car_logos/volkswagen.svg' },
                                        { name: 'Fiat', src: '/assets/car_logos/fiat.svg' },
                                        { name: 'Ford', src: '/assets/car_logos/ford.svg' },
                                        { name: 'Nissan', src: '/assets/car_logos/nissan.svg' },
                                        { name: 'Opel', src: '/assets/car_logos/opel.svg' },
                                        { name: 'Renault', src: '/assets/car_logos/renault.svg' }
                                    ].map((brand, idx) => (
                                        <div key={`${i}-${idx}`} className="mx-8 flex items-center justify-center min-w-[120px]">
                                            <img
                                                src={brand.src}
                                                alt={brand.name}
                                                className="h-16 md:h-24 w-auto object-contain brightness-0 invert opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`
                    .animate-marquee { animation: marquee 40s linear infinite; }
                    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                    .glow-text { text-shadow: 0 0 20px rgba(227, 30, 36, 0.5); }
                    @keyframes scanLine {
                        0% { transform: translateY(-100%); }
                        50% { transform: translateY(100%); }
                        100% { transform: translateY(-100%); }
                    }
                    @keyframes scan-down {
                        0% { transform: translateY(0); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: translateY(300px); opacity: 0; }
                    }
                    .animate-scan-down { animation: scan-down 3s infinite linear; }
                `}</style>
            </div>

            {/* ================= SERVICES SLIDER (Horizontal) ================= */}
            <div className="py-12 bg-black relative">
                <div className="max-w-7xl w-full mx-auto px-6 mb-8 flex items-end justify-between">
                    <ScrollReveal direction="down">
                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter">
                            Premium <span className="text-[#E31E24]">Accessories<br />      & Styling</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Mobile View: Manual Horizontal Scroll (Snap) */}
                <div className="md:hidden w-full overflow-x-auto pb-8 px-6 flex gap-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[85vw] snap-center h-[380px] relative rounded-3xl overflow-hidden border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] to-black opacity-60" />
                            <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-contain pb-10" />
                            <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 pt-10 bg-gradient-to-t from-black via-black/90 to-transparent">
                                <h3 className="text-xl font-black text-white uppercase italic mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-xs font-medium mb-3 leading-relaxed">{service.desc}</p>
                                <Link to={service.link} className="text-brand-red font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-white transition-colors">
                                    Explore <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View: Auto Marquee */}
                <div className="hidden md:block relative w-full overflow-hidden pb-4">
                    <div className="flex gap-6 animate-marquee-slow hover:[animation-play-state:paused] w-max">
                        {/* Duplicate the array 3 times for seamless looping */}
                        {[...Array(3)].map((_, i) => (
                            <React.Fragment key={i}>
                                {services.map((service, idx) => (
                                    <div key={`${i}-${idx}`} className="w-[450px] flex-shrink-0 relative h-auto min-h-[450px] rounded-[3.5rem] overflow-hidden group border border-white/10 bg-black hover:border-brand-red/50 transition-all duration-500 flex flex-col">

                                        {/* Image Section */}
                                        <div className="relative h-64 w-full bg-gradient-to-b from-[#1a0505] to-black p-6 flex items-center justify-center flex-shrink-0">
                                            <img src={service.img} alt={service.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000" />
                                        </div>

                                        {/* Text Section */}
                                        <div className="relative flex-grow w-full px-8 pb-8 pt-4 bg-black z-10 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-xl font-black text-white uppercase italic mb-2 tracking-tighter whitespace-nowrap">{service.title}</h3>
                                                <p className="text-gray-300 mb-6 font-medium text-sm leading-relaxed text-justify hyphens-auto tracking-tight break-words">{service.desc}</p>
                                            </div>
                                            <Link to={service.link} className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all hover:text-white mt-auto">
                                                Explore Full Catalogue <span>→</span>
                                            </Link>
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

            {/* ================= FAQ SECTION ================= */}
            <div className="bg-[#050505] py-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E31E24]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <ScrollReveal direction="up">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">
                                You Asked, <span className="text-[#E31E24]">We Answered</span>
                            </h2>
                            <p className="text-gray-400 text-sm">Everything you need to know about our services.</p>
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
                                        <span className={`text-lg font-bold uppercase italic tracking-tight transition-colors duration-300 ${openFaq === idx ? 'text-[#E31E24]' : 'text-white group-hover:text-gray-200'}`}>
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
            <div className="bg-[#050505] py-16 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
                    <ScrollReveal direction="up">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">
                                Visit Our <span className="text-[#E31E24]">Workshop</span>
                            </h2>
                            <p className="text-gray-400 text-base max-w-2xl mx-auto">
                                Come see where the magic happens. We are located in the heart of Bhiwandi.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <div className="relative w-full h-[550px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_-30px_rgba(227,30,36,0.15)] group">
                            {/* HUD Detail Accent Framing */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83194.4788254592!2d73.05857195929217!3d19.274098379261684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd0bd3ab28a7%3A0x9a04787bb35296c9!2sCaptain%20Car%20Audio!5e0!3m2!1sen!2sin!4v1766560019806!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                className="w-full h-full animate-in fade-in duration-1000"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* ================= CONTACT / FOOTER ================= */}
            <footer className="bg-black pt-16 pb-10 border-t border-white/10 text-white">
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
                            <li><Link to="/why-us" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#E31E24]">›</span> Why Us</Link></li>
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

            {/* Cinema Hover Preview Overlay */}
            <div
                className={`fixed inset-0 z-[200] pointer-events-none transition-all duration-700 flex items-center justify-center p-8 md:p-24 ${hoveredImg ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-700 ${hoveredImg ? 'opacity-100' : 'opacity-0'}`} />

                {hoveredImg && (
                    <div className="relative w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center animate-in zoom-in-75 fade-in duration-500">
                        {/* Dramatic Red Glow behind the big image */}
                        <div className="absolute inset-0 bg-brand-red/20 blur-[150px] rounded-full animate-pulse" />

                        <img
                            src={hoveredImg}
                            alt="Quick Preview"
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(227,30,36,0.4)]"
                        />

                        {/* Decorative Scanner Effect on Big Preview */}
                        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent z-20 animate-scan pointer-events-none" style={{
                            animation: 'scanLine 4s infinite linear'
                        }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
