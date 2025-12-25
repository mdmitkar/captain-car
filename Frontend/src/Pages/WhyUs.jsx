import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';

const WhyUs = () => {
    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-20 font-sans selection:bg-[#E31E24] selection:text-white overflow-hidden relative">

            {/* Background Ambient Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#E31E24]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* 1. HERO SECTION */}
                <ScrollReveal direction="down">
                    <div className="text-center mb-24">
                        <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-md">
                            <span className="text-[#E31E24] text-xs font-black uppercase tracking-[0.3em]">The Captain Difference</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
                            Why We Are <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] to-red-600">The Best Choice.</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                            In Bhiwandi, many shops modify cars. But at <strong>Captain Car</strong>, we don't just fit parts – we create art. We give you peace of mind, genuine quality, and a car that stands out from the crowd.
                        </p>
                    </div>
                </ScrollReveal>

                {/* 2. THE BIG STATS (Floating Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    {[
                        { number: "15+", label: "Years Experience", desc: "Expert Hands Only" },
                        { number: "5000+", label: "Cars Modified", desc: "Trusted by All" },
                        { number: "100%", label: "Genuine Parts", desc: "No Fake Products" }
                    ].map((stat, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem] text-center hover:border-[#E31E24]/50 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="text-6xl font-black text-white italic tracking-tighter mb-2 group-hover:text-[#E31E24] transition-colors">{stat.number}</h3>
                                <p className="text-[#E31E24] font-bold uppercase tracking-widest text-sm mb-2">{stat.label}</p>
                                <p className="text-gray-500 text-xs font-medium">{stat.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* 3. CORE VALUES (Detailed Layout) */}
                <div className="mb-32 space-y-24">
                    {/* Feature 1: NO WIRE CUTTING */}
                    <ScrollReveal direction="left">
                        <div className="flex flex-col md:flex-row items-center gap-12 group">
                            <div className="w-full md:w-1/2 relative order-1 md:order-1">
                                <div className="absolute inset-0 bg-[#E31E24]/20 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="relative bg-gradient-to-br from-[#111] to-black border border-white/10 p-8 rounded-[2.5rem] h-[320px] flex items-center justify-center overflow-hidden group-hover:border-[#E31E24]/50 transition-all duration-500 shadow-2xl">
                                    {/* Cool Circuit/Plug Visual */}
                                    <div className="relative flex items-center gap-1">
                                        {/* Male Plug */}
                                        <div className="flex flex-col gap-2 transform group-hover:translate-x-2 transition-transform duration-500">
                                            <div className="w-12 h-3 bg-gray-600 rounded-l-md relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div></div>
                                            <div className="w-12 h-3 bg-gray-600 rounded-l-md relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div></div>
                                            <div className="w-12 h-3 bg-gray-600 rounded-l-md relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div></div>
                                        </div>
                                        {/* Female Socket */}
                                        <div className="flex flex-col gap-2 transform group-hover:-translate-x-2 transition-transform duration-500">
                                            <div className="w-12 h-3 bg-gray-700 rounded-r-md border-l-2 border-black"></div>
                                            <div className="w-12 h-3 bg-gray-700 rounded-r-md border-l-2 border-black"></div>
                                            <div className="w-12 h-3 bg-gray-700 rounded-r-md border-l-2 border-black"></div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 right-6 bg-green-500/10 px-6 py-2 rounded-full border border-green-500/30 backdrop-blur-md">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-green-400 text-xs font-black uppercase tracking-widest">Warranty Safe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-left order-2 md:order-2">
                                <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                                    Zero Wire Cutting. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] to-orange-500">Warranty Safe.</span>
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed text-justify hyphens-auto tracking-tight break-words mb-8 border-l-4 border-[#E31E24] pl-6">
                                    Many local mechanics cut your car's original wiring to fit accessories. This can be dangerous and **voids your company warranty**. At Captain Car, we use professional **Coupler-to-Coupler** fittings. This means we simply plug in the new system without cutting a single wire. Your car remains safe, new, and warranty protected.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-6 py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/10 hover:bg-[#E31E24] hover:border-[#E31E24] transition-all cursor-default">Plug & Play</span>
                                    <span className="px-6 py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/10 hover:bg-[#E31E24] hover:border-[#E31E24] transition-all cursor-default">Safety First</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Feature 2: ORIGINAL PRODUCTS */}
                    <ScrollReveal direction="right">
                        <div className="flex flex-col md:flex-row gap-12 group">
                            {/* Text on Left for this row for variety, or keep alternating? User image showed split screen text on right for bottom one too? No, usually alternating is better for reading. Sticking to alternating (Text Left, Image Right) */}
                            <div className="w-full md:w-1/2 text-left order-2 md:order-1">
                                <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                                    Only Genuine Products. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">No Fakes.</span>
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed text-justify hyphens-auto tracking-tight break-words mb-8 border-l-4 border-green-500 pl-6">
                                    The market is full of cheap copy products that look like the real thing but stop working after a few months. We are straightforward – we sell **Only Original**. Whether it is Sony, JBL, Pioneer, or Mozo, you get the real deal with a proper **GST Bill and Company Warranty**. We value your trust more than profit.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-6 py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/10 hover:bg-green-600 hover:border-green-600 transition-all cursor-default">Official Dealer</span>
                                    <span className="px-6 py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/10 hover:bg-green-600 hover:border-green-600 transition-all cursor-default">GST Bill</span>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 relative order-1 md:order-2">
                                <div className="absolute inset-0 bg-green-500/20 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="relative bg-gradient-to-bl from-[#111] to-black border border-white/10 p-8 rounded-[2.5rem] h-[320px] flex items-center justify-center overflow-hidden group-hover:border-green-500/50 transition-all duration-500 shadow-2xl">
                                    {/* Verified Shield Visual */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 animate-pulse"></div>
                                        <svg className="w-32 h-32 fill-none stroke-green-500 stroke-[1.5] drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2 border-4 border-black">
                                            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 bg-green-500/10 px-6 py-2 rounded-full border border-green-500/30 backdrop-blur-md">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-green-400 text-xs font-black uppercase tracking-widest">100% Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Feature 3: AFTER SALE SUPPORT */}
                    <ScrollReveal direction="left">
                        <div className="flex flex-col md:flex-row items-center gap-12 group">
                            <div className="w-full md:w-1/2 relative order-1 md:order-1">
                                <div className="absolute inset-0 bg-yellow-500/20 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="relative bg-gradient-to-br from-[#111] to-black border border-white/10 p-8 rounded-[2.5rem] h-[320px] flex items-center justify-center overflow-hidden group-hover:border-yellow-500/50 transition-all duration-500 shadow-2xl">
                                    {/* Handshake/Heart Visual */}
                                    <div className="relative group-hover:scale-110 transition-transform duration-500">
                                        <svg className="w-32 h-32 fill-none stroke-yellow-500 stroke-[1.5] drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div className="absolute -top-2 -right-2 transform rotate-12">
                                            <svg className="w-12 h-12 fill-yellow-500 animate-bounce" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 right-6 bg-yellow-500/10 px-6 py-2 rounded-full border border-yellow-500/30 backdrop-blur-md">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                                            <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Lifetime Support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-left order-2 md:order-2">
                                <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                                    We Are Here For You. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Even After Payment.</span>
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed text-justify hyphens-auto tracking-tight break-words mb-8 border-l-4 border-yellow-500 pl-6">
                                    Most shops forget the customer once the work is done. Not us. If you face any small issue in wiring, setting, or sound turning even after 1 year, just come to the shop. We provide **Lifetime Service Support** for our installation. Your satisfaction is our long-term asset.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-6 py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/10 hover:bg-yellow-600 hover:border-yellow-600 transition-all cursor-default">Always Available</span>
                                    <span className="px-6 py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/10 hover:bg-yellow-600 hover:border-yellow-600 transition-all cursor-default">Family Treatment</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* 3.1 THE CAPTAIN ADVANTAGE (Three Pillars) */}
                <div className="mb-32">
                    <ScrollReveal direction="up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
                                The <span className="text-[#E31E24]">Captain</span> Advantage
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                                Three pillars that define our legacy.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Superior Service */}
                        <ScrollReveal direction="up" delay={100}>
                            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-[2rem] hover:border-[#E31E24]/50 transition-all duration-500 group relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E31E24]/5 rounded-full blur-2xl group-hover:bg-[#E31E24]/10 transition-colors" />

                                <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <svg className="w-8 h-8 fill-[#E31E24]" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" /></svg>
                                </div>

                                <h3 className="text-2xl font-black text-white uppercase italic mb-6 group-hover:text-[#E31E24] transition-colors">Superior Service</h3>

                                <ul className="space-y-4">
                                    {[
                                        { text: "Expert Technicians (15+ Years)", icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
                                        { text: "Same Day Installation", icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" },
                                        { text: "Free Lifetime Tuning", icon: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" },
                                        { text: "Clean Invisible Wiring", icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 fill-gray-500 shrink-0" viewBox="0 0 24 24"><path d={item.icon} /></svg>
                                            <span className="text-gray-400 text-sm font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* Card 2: Best Pricing (Center Highlight) */}
                        <ScrollReveal direction="up" delay={200}>
                            <div className="bg-[#1a0505] border border-[#E31E24] p-8 rounded-[2rem] relative overflow-hidden h-full transform md:-translate-y-4 shadow-[0_0_50px_rgba(227,30,36,0.2)]">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#E31E24]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                                <div className="absolute top-4 right-4 bg-[#E31E24] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full animate-pulse">
                                    Best Value
                                </div>

                                <div className="w-16 h-16 rounded-2xl bg-[#E31E24] flex items-center justify-center mb-8 shadow-lg">
                                    <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 2.5 1.68 2.5 2.45 0 .84-.44 1.54-1.6 1.54-1.28 0-2.32-.6-2.61-1.9h-2.2c.28 2.22 1.99 3.59 4.31 3.97V21h3v-2.14c2.28-.45 3.8-1.98 3.8-3.89 0-2.5-2-3.69-5-4.38-2.65-.65-2.65-1.72-2.65-2.4 0-.75.61-1.29 1.64-1.29z" /></svg>
                                </div>

                                <h3 className="text-2xl font-black text-[#E31E24] uppercase italic mb-6">Unbeatable Pricing</h3>

                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Direct Brand Partnerships",
                                        "Price Match Guarantee (+5% Off)",
                                        "Free Installation (Orders > ₹10k)",
                                        "EMI Available (0% Interest)",
                                        "Save ~30% vs Showrooms"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#E31E24]/20 flex items-center justify-center shrink-0">
                                                <svg className="w-3 h-3 fill-[#E31E24]" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                            </div>
                                            <span className="text-white text-sm font-bold">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* Card 3: Premium Quality */}
                        <ScrollReveal direction="up" delay={300}>
                            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-[2rem] hover:border-[#E31E24]/50 transition-all duration-500 group relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />

                                <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <svg className="w-8 h-8 fill-[#E31E24]" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
                                </div>

                                <h3 className="text-2xl font-black text-white uppercase italic mb-6 group-hover:text-[#E31E24] transition-colors">Premium Quality</h3>

                                <ul className="space-y-4">
                                    {[
                                        { text: "100% Genuine Products", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" },
                                        { text: "1-3 Year Manufacturer Warranty", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" },
                                        { text: "No Refurbished / Fake Items", icon: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" },
                                        { text: "GST Invoice Provided", icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 fill-gray-500 shrink-0" viewBox="0 0 24 24"><path d={item.icon} /></svg>
                                            <span className="text-gray-400 text-sm font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <ScrollReveal direction="up">
                    <div className="bg-[#080808] border border-white/5 rounded-[3rem] p-8 md:p-14 mb-24 relative overflow-hidden">
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E31E24] to-transparent" />

                        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-center mb-16">
                            Captain Car <span className="text-gray-600 text-xl mx-4 not-italic font-medium normal-case">vs</span> Local Garage
                        </h2>

                        <div className="space-y-4">
                            {/* Header Row */}
                            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs md:text-sm uppercase tracking-widest font-black text-gray-500">
                                <div className="col-span-5 md:col-span-4 text-left">Feature</div>
                                <div className="col-span-3 md:col-span-4 text-center text-[#E31E24]">Captain Car</div>
                                <div className="col-span-4 md:col-span-4 text-center">Local Garage</div>
                            </div>

                            {/* Rows */}
                            {[
                                { name: "Product Quality", captain: "100% Original", local: "Mix / Fake Copies" },
                                { name: "Installation type", captain: "Coupler-to-Coupler", local: "Wire Cutting / Taping" },
                                { name: "Car Warranty", captain: "Safe & Active", local: "High Risk Void" },
                                { name: "Technicians", captain: "15+ Years Expert", local: "Learning Boys" },
                                { name: "After Service", captain: "Lifetime Support", local: "No Guarantee" },
                                { name: "Pricing", captain: "Fixed & Fair", local: "Hidden Charges" }
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-12 gap-4 items-center py-6 border-b border-white/5 hover:bg-white/5 transition-colors rounded-xl px-4">
                                    <div className="col-span-5 md:col-span-4 font-bold text-white text-sm md:text-lg">{row.name}</div>
                                    <div className="col-span-3 md:col-span-4 text-center font-black text-[#E31E24] italic bg-[#E31E24]/10 py-1 rounded-lg text-xs md:text-base border border-[#E31E24]/20">{row.captain}</div>
                                    <div className="col-span-4 md:col-span-4 text-center text-gray-500 text-xs md:text-sm font-medium">{row.local}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* 5. FINAL PUNCHLINE */}
                <ScrollReveal direction="up" delay={200}>
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8">
                            Don't Risk Your Car. <br />
                            <span className="text-white">Choose Expert Care.</span>
                        </h2>
                        <div className="relative inline-block group cursor-default">
                            <span className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-[#E31E24] group-hover:text-white transition-colors duration-500 relative z-10">
                                Visit Our Workshop Today
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#E31E24] group-hover:w-0 transition-all duration-500"></div>
                            <div className="absolute inset-0 blur-lg bg-[#E31E24]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    );
};

export default WhyUs;
