import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import ScrollReveal from '../Components/ScrollReveal';

const Home = () => {
    const [showHeroText, setShowHeroText] = useState(false);
    const [showBottomContent, setShowBottomContent] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowHeroText(true);
        }, 3000); // 3-second delay for Title

        const timer2 = setTimeout(() => {
            setShowBottomContent(true);
        }, 5500); // 5.5-second delay for Subtitle & Buttons

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="bg-premium-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Video Background with Cinematic Overlay */}
                {/* Video Background with Cinematic Overlay */}
                <div className="absolute inset-0 z-0">
                    {/* Overlays removed for maximum brightness */}
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

                {/* Hero Content - Left to Right Animation */}
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
                        <p className={`text-gray-300 text-lg md:text-2xl font-light tracking-wide max-w-2xl mb-10 border-l border-white/20 pl-6 transition-all duration-1000 delay-0 transform ${showBottomContent ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
                            Experience the pinnacle of automotive interior design. We don't just modify cars; we forge identities.
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-[300ms] transform ${showBottomContent ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
                            <Button variant="custom" className="px-10 py-4 bg-brand-red hover:bg-white hover:text-brand-red text-white font-black rounded-none skew-x-[-10deg] transition-all duration-300 uppercase tracking-widest shadow-[5px_5px_0px_rgba(255,255,255,0.1)] hover:shadow-[5px_5px_0px_#B22222]">
                                <span className="skew-x-[10deg] inline-block">Start Project</span>
                            </Button>
                            <button className="px-10 py-4 border border-white/30 hover:border-brand-red text-white font-bold uppercase tracking-widest hover:bg-brand-red/10 transition-all duration-300 skew-x-[-10deg] backdrop-blur-sm">
                                <span className="skew-x-[10deg] inline-block">View Gallery</span>
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-brand-red to-transparent"></div>
                </div>
            </div>

            {/* ================= THE EXPERIENCE (About) ================= */}
            <div className="relative py-24 px-6 bg-[#080808] overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image Grid (simulated generated assets for now) */}
                    <ScrollReveal direction="right" delay={200}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-red blur-[60px] opacity-20" />
                            <div className="relative grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="h-64 bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden group">
                                        {/* Placeholder for leather seat image */}
                                        <div className="w-full h-full bg-[url('/seatcover1.png')] bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                                    </div>
                                    <div className="h-48 bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden group">
                                        <div className="w-full h-full bg-[url('/seatcover4.png')] bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-48 bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden group">
                                        <div className="w-full h-full bg-[url('/seatcover6.png')] bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                                    </div>
                                    <div className="h-64 bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden group">
                                        <div className="w-full h-full bg-[url('/seatcover9.png')] bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
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

                            <Button variant="custom" className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full uppercase font-bold tracking-widest transition-all">
                                Meet The Team
                            </Button>
                        </div>
                    </ScrollReveal>

                </div>
            </div>

            {/* ================= SERVICES SLIDER (Horizontal) ================= */}
            <div className="py-24 bg-black relative">
                <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
                    <ScrollReveal direction="down">
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                            Premium <span className="text-brand-red">Accessories</span><br />& Styling
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="left" delay={200} className="hidden md:block">
                        <p className="text-gray-400 text-sm uppercase tracking-widest max-w-xs text-right">
                            Swipe to see how we accessorize your ride with perfection
                        </p>
                    </ScrollReveal>
                </div>

                {/* Horizontal Snap Scroll */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 scrollbar-hide">
                    {[
                        { title: 'Bespoke Interiors', desc: 'Hand-stitched leather tailored to perfection.', img: '/seatcover1.png', color: 'from-red-900' },
                        { title: 'Concert Audio', desc: 'High-fidelity sound systems that shake the ground.', img: '/bossaudiosystem.png', color: 'from-blue-900' },
                        { title: 'Privacy Films', desc: 'Advanced heat rejection and UV protection.', img: '/suntekwindowfilm.png', color: 'from-yellow-900' },
                        { title: 'Tech Upgrades', desc: 'Android players, mood lighting, & security.', img: '/sonymakebelive.png', color: 'from-purple-900' },
                    ].map((service, idx) => (
                        <div key={idx} className="min-w-[85vw] md:min-w-[400px] snap-center relative h-[500px] rounded-3xl overflow-hidden group border border-white/10">
                            <div className={`absolute inset-0 bg-gradient-to-b ${service.color} to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                            <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-700" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-black text-white uppercase italic mb-2">{service.title}</h3>
                                <p className="text-gray-300 mb-6 font-medium">{service.desc}</p>
                                <span className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                    Explore Service <span>→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= MARQUEE (Brands) ================= */}
            <div className="py-16 bg-brand-red overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/assets/figma-img/bg-pattern.png')] opcode-10 mix-blend-multiply" />
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="animate-marquee flex gap-16 items-center">
                        {[1, 2, 3].map((i) => (
                            <React.Fragment key={i}>
                                {['AUDI', 'BMW', 'MERCEDES', 'PORSCHE', 'JAGUAR', 'LAND ROVER', 'VOLVO', 'LEXUS', 'TOYOTA', 'HONDA'].map((brand, idx) => (
                                    <span key={`${i}-${idx}`} className="text-6xl md:text-8xl font-black text-black/20 uppercase italic tracking-tighter">
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

            {/* ================= CONTACT / FOOTER ================= */}
            <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">

                    {/* Brand Info */}
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-black text-white italic tracking-tighter mb-6 relative inline-block">
                            CAPTAIN CAR
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-red rounded-full blur-xl opacity-50"></div>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Modifying ordinary into extraordinary. We are the architects of your dream drive.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all text-white cursor-pointer">IG</div>
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all text-white cursor-pointer">YT</div>
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all text-white cursor-pointer">FB</div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="md:w-1/3">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4 inline-block">Visit The Workshop</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="text-brand-red text-xl">📍</span>
                                <p className="text-gray-400">Next to Greenland Hotel,<br />Chavindra, Bhiwandi - 421 302</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-brand-red text-xl">📞</span>
                                <div>
                                    <p className="text-white font-bold text-lg">9822119832</p>
                                    <p className="text-gray-500">9323567097</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map / Image Area */}
                    <div className="md:w-1/3 h-64 bg-white/5 rounded-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="flex items-center justify-center h-full">
                            <span className="text-gray-500 uppercase tracking-widest font-bold">Map Location View</span>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2025 Captain Car Styling. All Rights Reserved.</p>
                    <p>Designed for Excellence.</p>
                </div>
            </footer>

        </div>
    );
};

export default Home;
