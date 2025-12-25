import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../Components/ScrollReveal';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-red selection:text-white pt-40 pb-16 relative">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/assets/figma-img/bg-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Hero Section */}
                <ScrollReveal>
                    <div className="text-left mb-16 relative pt-10 px-6 md:pl-20 lg:pl-32">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
                            Expertise You Can Trust
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-6 leading-none drop-shadow-2xl">
                            Our <span className="text-[#E31E24]">Services</span>
                        </h1>
                        <p className="text-sm md:text-base text-gray-400 max-w-3xl leading-relaxed border-l-4 border-brand-red/50 pl-6 text-left">
                            We don't just upgrade cars; we transform them. From concert-level audio to showroom-finish detailing, explore our comprehensive range of premium services.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Workflow Stats (New) */}
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-y border-white/5 py-8">
                        {[
                            { label: "Years Experience", val: "15+" },
                            { label: "Premium Cars", val: "5000+" },
                            { label: "Expert Technicians", val: "12" },
                            { label: "Warranty Support", val: "100%" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl font-black text-white italic">{stat.val}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div
                                onClick={() => setSelectedService(service)}
                                className="h-full bg-gradient-to-b from-[#1a0505] to-black border border-white/5 hover:border-[#E31E24] hover:-translate-y-2 rounded-3xl p-6 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(227,30,36,0.3)]"
                            >
                                {/* Hover Image Background */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[10s]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                </div>

                                <div className="relative z-10 block">
                                    <div className="w-16 h-16 bg-black border border-[#E31E24]/20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-colors duration-500">
                                        <div className="text-[#E31E24] w-8 h-8 group-hover:text-white transition-colors duration-500">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase italic mb-4 tracking-tight group-hover:text-[#E31E24] transition-colors duration-300">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium text-sm group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                                </div>

                                <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="uppercase text-xs font-bold tracking-[0.2em] text-[#E31E24]">Tap to Explore</span>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-300">
                                        <span className="text-white text-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* THE PROCESS SECTION (New Content to increase page size) */}
                <div className="mb-32 relative">
                    <ScrollReveal direction="left">
                        <h2 className="text-2xl md:text-4xl font-black text-white italic uppercase mb-12 tracking-tighter">
                            The Captain's <span className="text-[#E31E24]">Standard</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {[
                            { title: "Consultation", desc: "We analyze your vehicle and understand your specific needs before recommending the best upgrades.", icon: "01" },
                            { title: "Precision Install", desc: "Our certified technicians ensure factory-finish installation with zero wire cutting or warranty voiding.", icon: "02" },
                            { title: "Quality Check", desc: "Every upgrade goes through a rigorous testing phase to ensure flawless performance and longevity.", icon: "03" }
                        ].map((step, idx) => (
                            <ScrollReveal key={idx} delay={idx * 150} direction="up">
                                <div className="bg-[#111] p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-[#E31E24]/50 transition-colors">
                                    <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 group-hover:text-[#E31E24]/10 transition-colors">
                                        {step.icon}
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white uppercase mb-4">{step.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* TRANSFORMATION GALLERY (New Visual Content) */}
                <div className="mb-20">
                    <ScrollReveal direction="right">
                        <div className="flex items-end justify-between mb-10">
                            <h2 className="text-2xl md:text-4xl font-black text-white italic uppercase tracking-tighter">
                                Recent <span className="text-[#E31E24]">Works</span>
                            </h2>
                            <Link to="/products" className="hidden md:block text-[#E31E24] font-bold uppercase tracking-widest text-[10px] border-b border-[#E31E24]">View Full Catalogue</Link>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
                        <ScrollReveal delay={0} className="col-span-2 row-span-2 h-full">
                            <div className="w-full h-full rounded-3xl overflow-hidden relative group">
                                <img src="/seatcover6.png" alt="Showcase" className="w-full h-full object-contain bg-[#111]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <span className="text-white font-bold uppercase">Premium Interiors</span>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100} className="col-span-2 row-span-2 h-full">
                            <div className="w-full h-full rounded-3xl overflow-hidden relative group">
                                <img src="/new photos/somecarfilm1.jpg" alt="Showcase" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <span className="text-white font-bold uppercase">Sun Control & Glass</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* MODAL POPUP OVERLAY */}
                {/* MODAL POPUP OVERLAY */}
                {selectedService && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        {/* Backdrop with Blur */}
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
                            onClick={() => setSelectedService(null)}
                        />

                        {/* Modal Card */}
                        <div className="relative bg-[#0f0f0f] border border-[#E31E24]/30 rounded-[2.5rem] w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-[0_0_100px_rgba(227,30,36,0.2)] animate-in zoom-in-95 duration-300 scrollbar-hide">

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 z-[60] w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-[#E31E24] hover:border-[#E31E24] transition-colors"
                            >
                                ✕
                            </button>

                            {/* Top Image / Hero */}
                            <div className="relative h-60 md:h-72 w-full bg-[#151515] flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-10" />
                                <img
                                    src={selectedService.detailImgTop || selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-full object-contain p-4 relative z-0"
                                />
                            </div>

                            <div className="p-8 md:p-10 relative z-20 -mt-24 md:-mt-32">
                                <div className="inline-block px-3 py-1 rounded-lg bg-[#E31E24] text-white text-[10px] font-bold uppercase tracking-widest mb-4 shadow-lg">
                                    Premium Service
                                </div>

                                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-2 drop-shadow-lg leading-none">
                                    {selectedService.title}
                                </h2>
                                <h3 className="text-[#E31E24] text-base md:text-lg font-bold italic mb-6">
                                    "{selectedService.localPitch}"
                                </h3>

                                <div className="text-gray-300 leading-relaxed mb-8 border-l-2 border-[#E31E24]/50 pl-6 text-sm md:text-base">
                                    {selectedService.detailedDesc}
                                </div>

                                {/* Bottom Image (If exists) */}
                                {selectedService.detailImgBottom && (
                                    <div className="rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-lg group relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                        <img
                                            src={selectedService.detailImgBottom}
                                            alt="Detail View"
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80">
                                            Signature Finish
                                        </div>
                                    </div>
                                )}

                                <a
                                    href={`https://wa.me/919822119832?text=${encodeURIComponent(`Hey, I am interested in ${selectedService.title} service. Please share details.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <button className="w-full bg-gradient-to-r from-[#E31E24] to-[#B01015] text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(227,30,36,0.4)] transition-all transform hover:-translate-y-1 relative overflow-hidden group">
                                        <span className="relative z-10">Book Now via WhatsApp</span>
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

const services = [
    {
        title: "Concert Audio",
        description: "High-fidelity sound systems that shake the ground.",
        image: "/bossaudiosystem.png",
        detailImgTop: "/speaker/bossaudiosystem-removebg-preview.png",
        localPitch: "Boss Bass, Pura Hall Hila Denge!",
        detailedDesc: "Experience studio-quality sound in your car. We install high-power woofers, DSPs, and amplifiers that give you a crystal clear output with zero distortion.",
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
        detailImgTop: "/seat cover/seatcover2-removebg-preview.png",
        localPitch: "Interiors Jo Dil Jeet Le!",
        detailedDesc: "From Nappa leather finishes to sweat-proof fabrics, our seat covers are stitched to perfection. Comfort aur style ka perfect combo.",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h1V6c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5v4h1v5h14v-5z" />
            </svg>
        )
    },
    {
        title: "Ambient Lighting",
        description: "Set the mood. App-controlled LED strips and starlights.",
        image: "/cardisplay2.png",
        detailImgTop: "/ledlight2.png",
        localPitch: "Gaadi Hai Ya Disco?",
        detailedDesc: "Multi-color ambient light strips with app control. Change colors according to your mood. Raat mein full vibe banegi!",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
        )
    },
    {
        title: "Privacy Films",
        description: "Advanced heat rejection and UV protection.",
        image: "/suntekwindowfilm.png",
        detailImgTop: "/windowwash.png",
        localPitch: "Dhoop Ka Tension Khatam!",
        detailedDesc: "High-quality sun control films that keep your car cool even in peak summer. Privacy bhi, cooling bhi.",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
            </svg>
        )
    },
    {
        title: "Security Systems",
        description: "GPS trackers, central locking, and alarms.",
        image: "/keylessentrysystem.png",
        detailImgTop: "/key-less-entry/key-less-entry-system-1-hero.png",
        localPitch: "Chori Ka Koi Chance Nahi!",
        detailedDesc: "Protect your car with trusted central locking and GPS systems. Sleep peaceful knowing your car is safe.",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
        )
    },
    {
        title: "Exterior Styling",
        description: "Body kits, chrome detailing, and bold alloy wheels.",
        image: "/tyremiddle.png",
        detailImgTop: "/carrier/carrier5-removebg-hero.png",
        localPitch: "Road Pe Sirf Aap Dikhenge!",
        detailedDesc: "Carriers, bumpers, and guards that give your car a heavy-duty muscular look. Presence aisi ki sab dekhte reh jayein.",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
        )
    }
];

export default Services;
