import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../Components/ScrollReveal';

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white pt-32 pb-16 relative">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/assets/figma-img/bg-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Hero Section */}
                <ScrollReveal>
                    <div className="text-center mb-16 relative">
                        <div className="inline-block px-4 py-1 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-bold uppercase tracking-[0.2em] mb-1 backdrop-blur-sm">
                            Expertise You Can Trust
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-6 leading-none drop-shadow-2xl">
                            Our <span className="text-[#E31E24]">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed border-l-4 border-brand-red/50 pl-6 text-left md:text-center md:border-none md:pl-0">
                            We don't just upgrade cars; we transform them. Explore our comprehensive range of premium services designed for the ultimate driving experience.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div
                                className="h-full bg-gradient-to-b from-[#1a0505] to-black border border-white/5 rounded-3xl p-6 hover:border-[#E31E24] hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(227,30,36,0.5)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveService(service)}
                            >
                                {/* Hover Image Background */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[10s]" />
                                    {/* Heavy Dark Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                </div>

                                <div className="relative z-10 block">
                                    <div className="w-16 h-16 bg-black border border-[#E31E24]/20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-colors duration-500">
                                        {/* Render SVG Icon */}
                                        <div className="text-[#E31E24] w-8 h-8 group-hover:text-white transition-colors duration-500">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tight group-hover:text-[#E31E24] transition-colors duration-300">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium text-base group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                                </div>

                                <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="uppercase text-xs font-bold tracking-[0.2em] text-[#E31E24]">Explore</span>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-300">
                                        <span className="text-white text-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>

            {/* Explore Modal */}
            {activeService && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-700"
                        onClick={() => setActiveService(null)}
                    />

                    <div className="relative w-full max-w-7xl bg-[#050505] border border-white/5 rounded-[4rem] overflow-hidden flex flex-col h-[85vh] shadow-[0_0_150px_-30px_rgba(227,30,36,0.4)] animate-in zoom-in-95 duration-700">
                        {/* Modal Header */}
                        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-brand-red/10 via-transparent to-transparent">
                            <div className="flex items-center gap-6">
                                <div className="hidden md:flex flex-col items-center">
                                    <span className="text-brand-red font-black text-xl italic leading-none">CPTN</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Verified</span>
                                </div>
                                <div className="h-10 w-px bg-white/10 hidden md:block" />
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-1">
                                        The <span className="text-brand-red">Spotlight</span>
                                    </h3>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">{activeService.title} • Technical Archive</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveService(null)}
                                className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
                            >
                                <span className="text-xl group-hover:rotate-90 transition-transform duration-500">✕</span>
                            </button>
                        </div>

                        {/* Modal Content - Spotlight View */}
                        <div className="flex-1 overflow-hidden p-6 md:p-10">
                            {activeService.exploreImages && activeService.exploreImages.length > 0 ? (
                                <div className="h-full flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center">

                                    {/* Left: Large Cinematic Image Section */}
                                    <div className="lg:col-span-7 h-full w-full relative group">
                                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-brand-red/30 z-20 pointer-events-none" />
                                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-brand-red/30 z-20 pointer-events-none" />

                                        <div className="relative h-full aspect-video lg:aspect-auto bg-gradient-to-br from-white/[0.03] to-transparent rounded-[3rem] p-6 flex items-center justify-center border border-white/5 overflow-hidden">
                                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-brand-red/10 blur-[80px] opacity-50" />
                                            <img
                                                src={activeService.exploreImages[0]}
                                                alt="Featured Product"
                                                className="max-w-full max-h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10"
                                            />
                                            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent z-20 animate-scan-y opacity-40" />
                                        </div>
                                    </div>

                                    {/* Right: Detailed Specs & Info */}
                                    <div className="lg:col-span-5 space-y-6 w-full">
                                        <div className="space-y-2">
                                            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-brand-red/20 bg-brand-red/5 text-brand-red text-[9px] font-black uppercase tracking-[0.4em]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                                                Masterpiece Component
                                            </div>
                                            <h4 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter leading-[0.9]">
                                                {activeService.title} <br />
                                                <span className="text-gray-600 font-bold">Standard</span>
                                            </h4>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[1.5rem] hover:border-brand-red/30 transition-all">
                                                    <span className="text-[9px] font-black text-brand-red uppercase tracking-widest block mb-1">Build Grade</span>
                                                    <p className="text-white text-sm font-bold italic uppercase">Aeronautical</p>
                                                </div>
                                                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[1.5rem] hover:border-brand-red/30 transition-all">
                                                    <span className="text-[9px] font-black text-brand-red uppercase tracking-widest block mb-1">Warranty</span>
                                                    <p className="text-white text-sm font-bold italic uppercase">Lifetime Gear</p>
                                                </div>
                                            </div>

                                            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-[1.8rem] relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-brand-red" />
                                                <h5 className="text-[10px] font-black text-white uppercase italic tracking-widest mb-1.5">Architecture</h5>
                                                <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                                                    Every component in the {activeService.title.toLowerCase()} collection is hand-verified for structural durability and meets the Captain's personal seal of excellence.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Link
                                                to="/contact"
                                                className="group/btn relative inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-black uppercase tracking-widest italic rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(227,30,36,0.4)] w-full text-center"
                                                onClick={() => setActiveService(null)}
                                            >
                                                <span className="relative z-10 text-sm">Inquire Installation</span>
                                                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-700 opacity-10 z-0" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                        <span className="text-4xl text-gray-500 italic font-black">?</span>
                                    </div>
                                    <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">Syncing Intelligence...</h4>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer Decorative */}
                        <div className="px-10 py-5 border-t border-white/5 bg-black/50 flex items-center justify-between">
                            <div className="flex gap-8">
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-[0.3em]">Status</span>
                                    <span className="text-brand-red font-black uppercase italic text-xs tracking-tighter">Ready</span>
                                </div>
                                <div className="h-6 w-px bg-white/10 hidden sm:block" />
                                <div className="hidden sm:flex flex-col">
                                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-[0.3em]">Hardware ID</span>
                                    <span className="text-white font-black uppercase italic text-xs tracking-tighter">XC-77{Math.floor(Math.random() * 90) + 10}</span>
                                </div>
                            </div>
                            <span className="hidden md:block text-[8px] font-bold text-gray-700 uppercase tracking-widest">&copy; 2025 Captain Car Audio &bull; Precision &amp; Legacy</span>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes scan-y {
                    0% { transform: translateY(-200%); }
                    100% { transform: translateY(200%); }
                }
                .animate-scan-y {
                    animation: scan-y 4s linear infinite;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #E31E24;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

const services = [
    {
        title: "Concert Audio",
        description: "High-fidelity sound systems that shake the ground.",
        image: "/bossaudiosystem.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
        ),
        exploreImages: [
            "/speaker/bossaudiosystem-removebg-preview.png",
            "/speaker/car-speaker-2-removebg-preview.png",
            "/speaker/car-speaker-3-removebg-preview.png",
            "/speaker/car-speaker-removebg-preview.png",
            "/car-audio-player/car-audio-1-removebg-preview.png",
            "/car-audio-player/car-audio-2-removebg-preview.png",
            "/car-audio-player/car-audio-3-removebg-preview.png"
        ]
    },
    {
        title: "Interior Accessories",
        description: "Luxury meets comfort. Our custom seat covers, 7D mats, and dashboard kits are crafted to give your vehicle a showroom-fresh interior feel.",
        image: "/seatcover1.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h1V6c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5v4h1v5h14v-5z" />
            </svg>
        ),
        exploreImages: [
            "/seat cover/seatcover1-removebg-preview.png",
            "/seat cover/seatcover2-removebg-preview.png",
            "/seat cover/seatcover4-removebg-preview.png",
            "/seat cover/seatcover5-removebg-preview.png",
            "/car-air-freshner/airfreshner-removebg-preview.png",
            "/car-air-freshner/airfreshner2-removebg-preview.png",
            "/car-air-freshner/airfreshner3-removebg-preview.png",
            "/car-air-freshner/airfreshner4-removebg-preview.png",
            "/car-air-freshner/airfreshner5-removebg-preview.png",
            "/car-air-freshner/airfreshner6-removebg-preview.png",
            "/car-air-freshner/airfreshner7-removebg-preview.png"
        ]
    },
    {
        title: "Ambient Lighting",
        description: "Set the mood. Advanced app-controlled LED strips, footwell lighting, and starlight headings integrated seamlessly into your car's interior.",
        image: "/cardisplay2.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
        ),
        exploreImages: [
            "/car-display/cardisplay1-removebg-preview.png",
            "/car-display/cardisplay2-removebg-preview.png",
            "/car-display/cardisplay3-removebg-preview.png"
        ]
    },
    {
        title: "Privacy Films",
        description: "Advanced heat rejection and UV protection.",
        image: "/suntekwindowfilm.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
            </svg>
        )
    },
    {
        title: "Security Systems",
        description: "Sleep soundly. High-tech GPS trackers, central locking systems, and intrusion alarms to keep your valuable asset safe 24/7.",
        image: "/keylessentrysystem.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
        )
    },
    {
        title: "Exterior Styling",
        description: "Turn heads. From aerodynamic body kits and chrome detailing to bold alloy wheels and wraps, we define your car's road presence.",
        image: "/tyremiddle.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
        ),
        exploreImages: [
            "/bumper/bumper1-removebg-preview.png",
            "/bumper/bumper2-removebg-preview.png",
            "/bumper/bumper3-removebg-preview.png",
            "/carrier/carrier5-removebg-hero.png"
        ]
    }
];

export default Services;
