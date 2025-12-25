import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';

const WhyUs = () => {
    return (
        <div className="bg-black text-white min-h-screen pt-24 pb-16 font-sans selection:bg-[#E31E24] selection:text-white">

            <div className="container mx-auto px-6">

                {/* 1. TOP STAT HERO (User's request: First at the top) */}
                <div className="mb-24">
                    <ScrollReveal direction="down" delay={100}>
                        <div className="relative max-w-6xl mx-auto md:pl-20 lg:pl-32">
                            <div className="bg-gradient-to-br from-[#1a0505] to-black border border-[#E31E24]/30 rounded-[3rem] p-12 md:p-20 text-left relative overflow-hidden group hover:border-[#E31E24] transition-all duration-500 shadow-[0_0_80px_-20px_rgba(227,30,36,0.4)]">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31E24]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                                <h2 className="text-5xl md:text-7xl font-black text-[#E31E24] mb-2 tracking-tighter leading-none group-hover:scale-105 transition-transform duration-700">
                                    5000+
                                </h2>
                                <p className="text-lg md:text-2xl font-black text-white uppercase tracking-[0.3em] mb-12">Happy Customers</p>

                                {/* Divider */}
                                <div className="max-w-md mr-auto h-px bg-gradient-to-r from-transparent via-[#E31E24]/50 to-transparent mb-12" />

                                {/* Testimonial */}
                                <div className="relative max-w-3xl mr-auto">
                                    <div className="absolute -top-10 left-0 text-7xl text-[#E31E24]/20 font-serif">"</div>
                                    <p className="text-gray-300 italic text-base md:text-xl leading-relaxed mb-8 relative z-10">
                                        Best car audio installation in town! The team at Captain transformed my car's interior completely. Highly recommended!
                                    </p>
                                    <div className="flex items-center justify-start gap-4">
                                        <div className="w-12 h-1 bg-[#E31E24] rounded-full" />
                                        <span className="text-[#E31E24] font-black uppercase text-base md:text-lg tracking-widest italic">Rajesh Kumar, Bhiwandi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* 2. MAIN HEADER (Why Choose Captain?) sitting below the stat */}
                <div className="mb-24 pt-20 border-t border-white/5">
                    <ScrollReveal direction="up">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                                    Why Choose <span className="text-[#E31E24]">Captain?</span>
                                </h1>
                                <p className="text-gray-400 text-base leading-relaxed mb-12 border-l-4 border-[#E31E24] pl-8">
                                    At Captain Car Audio & Accessories, we are committed to enhancing your driving experience with premium products and professional service. Our team of experts ensures every installation is perfect.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                                {[
                                    "Genuine Products with Warranty",
                                    "Expert Installation Team",
                                    "15+ Years of Experience",
                                    "Competitive Pricing",
                                    "After-Sales Support",
                                    "Wide Range of Brands"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-10 h-10 rounded-full bg-[#E31E24]/10 border border-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] transition-all duration-300 shadow-[0_0_15px_-5px_#E31E24]">
                                            <svg className="w-5 h-5 fill-[#E31E24] group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                        </div>
                                        <span className="font-black text-gray-200 group-hover:text-white transition-colors text-lg uppercase italic tracking-tighter">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* ================= WHY CAPTAIN IS BETTER (Cards) ================= */}
                <ScrollReveal direction="up" delay={300}>
                    <div className="mb-24 pt-20 border-t border-white/5">
                        <div className="text-left mb-16 px-6 md:pl-20 lg:pl-32">
                            <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-6">
                                Why <span className="text-[#E31E24]">Captain</span> is Better?
                            </h2>
                            <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
                                We don't just sell car audio – we deliver an experience. Here's what makes Captain Car Audio the #1 choice in Bhiwandi.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Superior Service */}
                            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:border-[#E31E24] transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-[#E31E24]/10 flex items-center justify-center mb-8 group-hover:bg-[#E31E24] transition-colors">
                                    <svg className="w-6 h-6 fill-[#E31E24] group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" /></svg>
                                </div>
                                <h3 className="text-2xl font-black text-[#E31E24] uppercase italic mb-6">Superior Service</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Expert Technicians</strong> – Our team has 15+ years of hands-on experience installing 10,000+ systems</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Same Day Installation</strong> – Walk in today, drive out with premium sound</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">After-Sales Support</strong> – Free tuning, adjustments & lifetime technical support</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Clean Installation</strong> – No visible wires, no damage to your car's interior</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2: Best Pricing */}
                            <div className="bg-[#1a0505] border border-[#E31E24]/50 p-8 rounded-3xl relative overflow-hidden group shadow-[0_0_40px_-10px_rgba(227,30,36,0.2)]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E31E24]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                                <div className="w-14 h-14 rounded-full bg-[#E31E24] border border-[#E31E24] flex items-center justify-center mb-8 text-white relative z-10">
                                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 2.5 1.68 2.5 2.45 0 .84-.44 1.54-1.6 1.54-1.28 0-2.32-.6-2.61-1.9h-2.2c.28 2.22 1.99 3.59 4.31 3.97V21h3v-2.14c2.28-.45 3.8-1.98 3.8-3.89 0-2.5-2-3.69-5-4.38-2.65-.65-2.65-1.72-2.65-2.4 0-.75.61-1.29 1.64-1.29z" /></svg>
                                </div>
                                <h3 className="text-2xl font-black text-[#E31E24] uppercase italic mb-6 relative z-10">Best Pricing</h3>
                                <ul className="space-y-4 relative z-10 mb-8">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Direct Brand Partnerships</strong> – We source directly, cutting out middlemen costs</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Price Match Guarantee</strong> – Find it cheaper? We'll match it + 5% off</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Free Installation</strong> – On select audio systems worth ₹10,000+</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">EMI Available</strong> – 0% EMI options on major credit cards</p>
                                    </li>
                                </ul>
                                <div className="bg-[#E31E24]/10 border border-[#E31E24]/30 p-4 rounded-xl text-center relative z-10">
                                    <p className="text-[#E31E24] font-bold text-lg uppercase tracking-wider">Save up to 30%</p>
                                    <p className="text-xs text-gray-500">compared to authorized showrooms</p>
                                </div>
                            </div>

                            {/* Card 3: Premium Quality */}
                            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:border-[#E31E24] transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-[#E31E24]/10 border border-[#E31E24] flex items-center justify-center mb-8 group-hover:bg-[#E31E24] transition-colors">
                                    <svg className="w-6 h-6 fill-[#E31E24] group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
                                </div>
                                <h3 className="text-2xl font-black text-[#E31E24] uppercase italic mb-6">Premium Quality</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">100% Genuine Products</strong> – Authorized dealer for all major brands</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">1-3 Year Warranty</strong> – Full manufacturer warranty on all products</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">No Duplicate/Refurbished</strong> – We never sell fake or second-hand items</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 fill-[#E31E24] mt-1 shrink-0" viewBox="0 0 24 24"><path d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6zm-1 9l-2.5 2.5-1.5-1.5-1.42 1.42L10.5 16.83 15.92 11.41 14.5 9.99z" /></svg>
                                        <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">GST Invoice</strong> – Proper billing with valid warranty claims</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ================= COMPARISON TABLE ================= */}
                <ScrollReveal direction="up" delay={300}>
                    <div className="mb-24 pt-20 border-t border-white/5">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-4 text-center">
                                Captain vs <span className="text-gray-500">Others</span>
                            </h2>
                            <p className="text-[#E31E24] font-bold tracking-widest uppercase text-xs text-center">See the Difference</p>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
                            {/* Table Container for horizontal scroll on very small mobile */}
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[600px] md:min-w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <th className="p-6 md:p-8 font-black uppercase italic tracking-wider text-xl md:text-2xl text-white w-1/3">Feature</th>
                                            <th className="p-6 md:p-8 font-black uppercase italic tracking-wider text-xl md:text-2xl text-[#E31E24] w-1/3 bg-[#E31E24]/5">Captain Car Audio</th>
                                            <th className="p-6 md:p-8 font-black uppercase italic tracking-wider text-xl md:text-2xl text-gray-500 w-1/3">Other Shops</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {[
                                            { feature: "Same Day Installation", captain: "✓ Yes", other: "2-3 Days Wait" },
                                            { feature: "Installation Warranty", captain: "✓ Lifetime", other: "30 Days / None" },
                                            { feature: "Price Match Guarantee", captain: "✓ Yes + 5% Off", other: "No" },
                                            { feature: "Free Sound Tuning", captain: "✓ Unlimited", other: "Paid / Once" },
                                            { feature: "Genuine Products", captain: "✓ Authorized", other: "Mixed / Unknown" },
                                            { feature: "After-Sales Support", captain: "✓ 24/7 WhatsApp", other: "Limited / None" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="group hover:bg-white/5 transition-colors">
                                                <td className="p-6 md:p-8 font-bold text-gray-300 text-sm md:text-lg">{row.feature}</td>
                                                <td className="p-6 md:p-8 font-black text-[#E31E24] text-lg md:text-xl bg-[#E31E24]/5 group-hover:bg-[#E31E24]/10 transition-colors">
                                                    {row.captain}
                                                </td>
                                                <td className="p-6 md:p-8 font-medium text-gray-500 text-sm md:text-lg">
                                                    {row.other}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Bottom Call to Action Strip */}
                <ScrollReveal direction="up" delay={400}>
                    <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-2">Ready to Upgrade?</h3>
                            <p className="text-gray-500 text-sm">Visit our workshop for a free consultation.</p>
                        </div>
                        <button className="bg-[#E31E24] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-[#E31E24] transition-all transform hover:-translate-y-1 skew-x-[-10deg]">
                            <span className="skew-x-[10deg] inline-block">Get Directions</span>
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default WhyUs;
