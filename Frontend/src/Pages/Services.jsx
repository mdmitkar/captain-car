import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../Components/ScrollReveal';

const Services = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white pt-24 pb-20 relative">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/assets/figma-img/bg-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Hero Section */}
                <ScrollReveal>
                    <div className="text-center mb-20 relative">
                        <div className="inline-block px-4 py-1 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-bold uppercase tracking-[0.2em] mb-1 backdrop-blur-sm">
                            Expertise You Can Trust
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-6 leading-none drop-shadow-2xl">
                            Our <span className="text-[#E31E24]">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed border-l-4 border-brand-red/50 pl-6 text-left md:text-center md:border-none md:pl-0">
                            We don't just upgrade cars; we transform them. Explore our comprehensive range of premium services designed for the ultimate driving experience.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-[#E31E24] hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(227,30,36,0.5)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
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
                                    <h3 className="text-3xl font-black text-white uppercase italic mb-4 tracking-tight group-hover:text-[#E31E24] transition-colors duration-300">{service.title}</h3>
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
        </div>
    );
};

const services = [
    {
        title: "Car Audio Systems",
        description: "Transform your daily drive into a concert. We install premium sound systems, heavy-duty amplifiers, and earth-shaking subwoofers from global top brands.",
        image: "/pioneeraudio.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
        )
    },
    {
        title: "Interior Accessories",
        description: "Luxury meets comfort. Our custom seat covers, 7D mats, and dashboard kits are crafted to give your vehicle a showroom-fresh interior feel.",
        image: "/seatcover1.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h1V6c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5v4h1v5h14v-5z" />
            </svg>
        )
    },
    {
        title: "Ambient Lighting",
        description: "Set the mood. Advanced app-controlled LED strips, footwell lighting, and starlight headings integrated seamlessly into your car's interior.",
        image: "/cardisplay2.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
        )
    },
    {
        title: "Professional Installation",
        description: "Zero compromise. We use non-invasive, coupler-to-coupler installation techniques that protect your car's original wiring and warranty.",
        image: "/tyremiddle.png",
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
        image: "/roofcarrier.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
        )
    }
];

export default Services;
