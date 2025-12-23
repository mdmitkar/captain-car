import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';

const WhyUs = () => {
    return (
        <div className="bg-black text-white min-h-screen pt-24 pb-16 font-sans selection:bg-[#E31E24] selection:text-white overflow-x-hidden">

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                    {/* Left: Text Content */}
                    <ScrollReveal direction="left">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                                Why Choose <span className="text-[#E31E24]">Captain?</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-[#E31E24] pl-6">
                                At Captain Car Audio & Accessories, we are committed to enhancing your driving experience with premium products and professional service. Our team of experts ensures every installation is perfect.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                {[
                                    "Genuine Products with Warranty",
                                    "Expert Installation Team",
                                    "15+ Years of Experience",
                                    "Competitive Pricing",
                                    "After-Sales Support",
                                    "Wide Range of Brands"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-[#E31E24]/10 border border-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] transition-all duration-300">
                                            <svg className="w-4 h-4 fill-[#E31E24] group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                        </div>
                                        <span className="font-bold text-gray-200 group-hover:text-white transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Stat Card & Testimonial */}
                    <div className="relative">
                        {/* 5000+ Stat Card */}
                        <ScrollReveal direction="right" delay={200}>
                            <div className="bg-gradient-to-br from-[#1a0505] to-black border border-[#E31E24]/30 rounded-[3rem] p-12 text-center relative overflow-hidden group hover:border-[#E31E24] transition-all duration-500 shadow-[0_0_60px_-20px_rgba(227,30,36,0.3)] hover:shadow-[0_0_80px_-20px_rgba(227,30,36,0.5)]">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31E24]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

                                <h2 className="text-6xl md:text-8xl font-black text-[#E31E24] mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-500">
                                    5000+
                                </h2>
                                <p className="text-2xl font-bold text-white uppercase tracking-[0.2em] mb-12">Happy Customers</p>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E31E24]/50 to-transparent mb-12" />

                                {/* Testimonial */}
                                <div className="relative">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-[#E31E24]/20 font-serif">"</div>
                                    <p className="text-gray-300 italic text-lg mb-6 leading-relaxed relative z-10">
                                        Best car audio installation in town! The team at Captain transformed my car's interior completely. Highly recommended!
                                    </p>
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="w-10 h-1 bg-[#E31E24] rounded-full" />
                                        <span className="text-[#E31E24] font-bold uppercase text-sm tracking-widest">Rajesh Kumar, Delhi</span>
                                    </div>
                                </div>

                                {/* Modern Arrow Icon (Bottom Right) */}
                                <div className="absolute bottom-8 right-8 w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-300">
                                    <svg className="w-5 h-5 fill-current transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" viewBox="0 0 24 24"><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" /></svg>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Decor Elements */}
                        <div className="absolute -z-10 top-1/2 -right-20 w-80 h-80 bg-[#E31E24]/5 rounded-full blur-[100px]" />
                        <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
                    </div>
                </div>

                {/* Bottom Call to Action Strip */}
                <ScrollReveal direction="up" delay={400}>
                    <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">Ready to Upgrade?</h3>
                            <p className="text-gray-500">Visit our workshop for a free consultation.</p>
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
