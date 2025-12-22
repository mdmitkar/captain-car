import React from 'react';
import Button from '../Components/Button';
import ScrollReveal from '../Components/ScrollReveal';

const Home = () => {
    return (
        <div className="bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative w-full flex flex-col items-center justify-center pt-32 pb-12 md:min-h-screen md:pt-40 md:pb-20 overflow-hidden">
                {/* Background Components - Kept simple patterns only */}
                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url(/assets/figma-img/bg-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

                {/* Simple Gradient for depth instead of image */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent z-0 pointer-events-none" />

                {/* Hero Content */}
                <ScrollReveal>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
                        <div className="text-center max-w-6xl mx-auto mb-8 md:mb-8 mt-4 md:mt-0 relative z-20">
                            {/* Improved Visibility & Styling */}
                            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight tracking-tighter uppercase italic flex flex-col gap-2 md:gap-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Enhance Your</span>
                                <span className="text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">Vehicle's</span>
                                <span className="text-brand-red drop-shadow-[0_0_20px_rgba(220,20,60,0.6)]">Performance</span>
                            </h1>
                            <p className="text-base md:text-2xl text-gray-200 font-medium tracking-widest uppercase mt-4 max-w-3xl mx-auto drop-shadow-md">
                                Trusted Modification Workshop for Cars and Trucks
                            </p>
                        </div>

                        {/* Car Image Container - REMOVED CLOUD IMAGE LAYER COMPLETELY */}
                        <div className="relative w-full max-w-7xl mx-auto my-6 md:my-12 group flex justify-center items-center">
                            {/* Platform Shadow/Glow */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-12 md:h-24 bg-gradient-to-t from-black via-brand-red/10 to-transparent blur-3xl z-0 transition-all duration-1000 group-hover:via-brand-red/20" />

                            {/* Smoke/Cloud Oval Background - Visible only on Laptop/Desktop */}
                            <img
                                src="/assets/figma-img/smoke0cloud.png"
                                alt="Smoke Effect"
                                className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[100px] md:w-[1750px] max-w-none h-auto object-contain opacity-80 z-0 pointer-events-none mix-blend-screen"
                            />

                            {/* CLEAN IMAGE: No background text/ghosting behind it */}
                            <img
                                src="/assets/figma-img/car2.png"
                                alt="Modified Porsche GT3 RS"
                                className="relative z-10 w-[90%] md:w-[90%] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out md:-mt-[800px]"
                            />
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center mt-6 mb-8 md:mb-12 w-full px-4 relative z-20">
                            <Button variant="secondary" className="px-8 py-3 md:px-10 md:py-4 bg-white text-black font-black rounded-full hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(255,255,255,0.1)] text-sm md:text-lg uppercase tracking-wider w-full sm:w-auto">
                                Discover More
                            </Button>
                            <button className="text-gray-300 text-sm md:text-lg font-bold hover:text-brand-red transition-colors duration-300 uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-brand-red pb-1 py-3 w-full sm:w-auto">
                                Upgrade Now
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= ABOUT US SECTION ================= */}
            {/* Added negative margin top to close visual gap between black hero bottom and this section */}
            <div className="relative py-12 px-6 md:py-32 md:px-16" style={{
                backgroundColor: '#0a0a0a',
                backgroundImage: 'url(/assets/figma-img/bg-pattern.png)',
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
                backgroundAttachment: 'scroll'
            }}>
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

                <ScrollReveal>
                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
                        <div className="flex justify-center md:justify-start relative order-2 md:order-1">
                            <div className="absolute inset-0 bg-brand-red/5 blur-3xl rounded-full opacity-50"></div>
                            <img
                                src="/assets/figma-img/logo.png"
                                alt="OCD Fab & Performance Logo"
                                className="w-48 md:w-full max-w-xs md:max-w-xl object-contain drop-shadow-2xl relative z-10"
                            />
                        </div>

                        <div className="text-center md:text-left order-1 md:order-2">
                            <h2 className="text-3xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter uppercase text-white">About Us</h2>
                            <h3 className="text-lg md:text-3xl text-brand-red font-bold mb-4 md:mb-10 uppercase tracking-widest leading-snug">
                                Welcome to OCD Fab & Performance
                            </h3>

                            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 font-medium tracking-wide">
                                Where passion meets precision. Since 1995, we've been redefining vehicle modification.
                                Our friendly team of professionals shares a love for automotive mastery. We set trends with
                                innovative excellence, ensuring your vehicle stands out.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= SERVICES SECTION ================= */}
            <div className="relative py-12 px-6 md:py-24 bg-black">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-4 uppercase text-white tracking-tighter">Services</h2>
                        <h3 className="text-sm md:text-2xl text-brand-red font-bold mb-8 md:mb-16 uppercase tracking-widest">
                            Upgrade performance, style, and comfort with OCD.
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10 px-4">
                            {['Performance Package', 'Exterior Modification', 'Interior Modification', 'Audio System', 'Suspension Upgrades', 'Other Services'].map((service, index) => (
                                <div key={index} className="group relative bg-[#0F0F0F]/80 backdrop-blur-md border border-white/5 py-8 px-6 rounded-2xl shadow-xl hover:shadow-brand-red/20 transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-12 h-1 bg-brand-red/50 mb-4 group-hover:w-full transition-all duration-300 rounded-full" />
                                        <span className="text-gray-200 group-hover:text-white font-black text-lg md:text-xl uppercase tracking-wider text-center">{service}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= PRODUCTS SECTION ================= */}
            <div className="relative py-12 px-6 md:py-24 bg-[#0a0a0a]">
                <ScrollReveal>
                    <div className="max-w-8xl mx-auto text-center">
                        <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-4 uppercase text-white tracking-tighter">Products</h2>
                        <h3 className="text-sm md:text-2xl text-brand-red font-bold mb-8 md:mb-16 uppercase tracking-widest">
                            Explore our premium selection
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-0 md:px-4">
                            {[
                                { title: 'Performance', subtitle: 'Enhancement', img: '/tyremiddle.png', desc: 'Optimize your vehicle\'s power and speed with our signature performance enhancement packages.', link: '#' },
                                { title: 'Custom', subtitle: 'Exterior', img: '/cardisplay1.png', desc: 'Elevate your ride\'s aesthetics with our exclusive exterior styling kits featuring creative designs.', link: '#' },
                                { title: 'Audio', subtitle: 'System', img: '/audiobull.png', desc: 'Immerse yourself in a world of superior sound with our premium audio system upgrades.', link: '#' }
                            ].map((product, idx) => (
                                <div key={idx} className="bg-[#121212] p-6 md:p-10 rounded-3xl border border-white/5 hover:border-brand-red/40 transition-all duration-500 group relative overflow-hidden flex flex-col">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-colors duration-500"></div>

                                    <h4 className="text-white text-xl md:text-3xl font-black mb-1 uppercase tracking-tighter relative z-10">{product.title}</h4>
                                    <h4 className="text-brand-red/80 text-sm md:text-base font-bold mb-6 uppercase tracking-[0.3em] group-hover:text-brand-red transition-colors relative z-10">{product.subtitle}</h4>

                                    <div className="h-56 md:h-72 flex items-center justify-center mb-8 relative">
                                        <div className="absolute inset-0 bg-brand-red/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <img src={product.img} alt={product.title} className="max-h-full object-contain group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 relative z-10 drop-shadow-2xl" />
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                                        {product.desc}
                                    </p>

                                    <a href={product.link} className="mt-auto w-full py-4 rounded-xl bg-white/5 border border-white/5 text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-red hover:border-brand-red transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-brand-red/20">
                                        Get The Offer <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= GALLERY SECTION ================= */}
            <div className="relative py-12 px-4 md:py-24 bg-black">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">Gallery</h2>
                        <div className="h-1 w-16 md:w-24 bg-brand-red mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
                        <div className="col-span-1 row-span-2 overflow-hidden rounded-lg md:rounded-xl border border-white/10 group">
                            <img src="/assets/gallery1.png" alt="Gallery" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-lg md:rounded-xl border border-white/10 group">
                            <img src="/assets/gallery2.png" alt="Gallery" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-lg md:rounded-xl border border-white/10 group">
                            <img src="/assets/gallery3.png" alt="Gallery" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="col-span-1 row-span-2 overflow-hidden rounded-lg md:rounded-xl border border-white/10 group">
                            <img src="/assets/gallery4.png" alt="Gallery" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="col-span-2 row-span-1 overflow-hidden rounded-lg md:rounded-xl border border-white/10 group">
                            <img src="/seatcover1.png" alt="Gallery" className="w-full h-32 md:h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= TESTIMONIAL & OTHERS ================= */}
            <div className="relative py-12 px-6 md:py-24 bg-[#0a0a0a]">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto text-center mb-12 md:mb-20">
                        <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">Testimonial</h2>
                        <h3 className="text-sm md:text-xl text-brand-red font-bold uppercase tracking-widest">Client Experiences</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
                        <div className="bg-[#0F0F0F] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-brand-red/30 hover:bg-[#141414] transition-all duration-300 relative group">
                            <div className="absolute top-8 right-8 text-6xl text-brand-red/10 font-serif leading-none">"</div>
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center shadow-lg"><span className="text-lg md:text-xl font-bold text-gray-300">AT</span></div>
                                <div><h4 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide">Amanda Turner</h4><div className="text-brand-red text-xs md:text-sm tracking-widest">★★★★★</div></div>
                            </div>
                            <p className="text-gray-400 italic text-base md:text-lg leading-relaxed relative z-10">"The seamless integration of style and performance provided by Captain Car is unmatched. My vehicle looks stunning and performs better than ever!"</p>
                        </div>
                        <div className="bg-[#0F0F0F] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-brand-red/30 hover:bg-[#141414] transition-all duration-300 relative group">
                            <div className="absolute top-8 right-8 text-6xl text-brand-red/10 font-serif leading-none">"</div>
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-brand-red to-red-900 border-none flex items-center justify-center shadow-lg shadow-brand-red/20"><span className="text-lg md:text-xl font-bold text-white">JD</span></div>
                                <div><h4 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide">Jonathan Dean</h4><div className="text-brand-red text-xs md:text-sm tracking-widest">★★★★★</div></div>
                            </div>
                            <p className="text-gray-400 italic text-base md:text-lg leading-relaxed relative z-10">"Absolutely professional service. The audio system upgrade changed my entire driving experience. Highly recommended for any enthusiast."</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= LOCATION SECTION ================= */}
            <div className="relative py-12 px-6 md:py-24 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[#050505] opacity-50" style={{ backgroundImage: 'radial-gradient(circle at center, #111 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <ScrollReveal>
                    <div className="relative z-10 max-w-6xl mx-auto text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-6xl font-black mb-2 uppercase text-white tracking-tighter">Location</h2>
                        <h3 className="text-sm md:text-xl text-brand-red font-bold uppercase tracking-widest">
                            Explore Our Physical Automotive Hub
                        </h3>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-72 md:h-96 group">
                        {/* Placeholder for map */}
                        <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                            <p className="text-gray-600 font-mono text-sm md:text-lg tracking-widest uppercase">Interactive Map Loading...</p>
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                        {/* Overlay Button */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-center">
                            <a href="#" className="bg-white text-black font-black px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-brand-red hover:text-white hover:shadow-brand-red/40 transition-all duration-300 text-sm md:text-base inline-flex items-center gap-2 transform hover:-translate-y-1">
                                <span>Get Directions</span>
                                <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= FOOTER ================= */}
            <footer className="bg-black border-t border-white/5 pt-16 pb-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-16 text-center md:text-left">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-4xl font-black text-white italic mb-6 tracking-tighter">CAPTAIN<span className="text-brand-red">CAR</span></h2>
                        <p className="text-gray-500 text-sm leading-7">
                            Redefining automotive excellence with precision modifications and premium upgrades. Your vehicle, our passion.
                        </p>
                    </div>
                    <div className="hidden md:block col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-gray-500 text-sm font-medium">
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Home</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Services</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Products</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                    <div className="hidden md:block col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Services</h4>
                        <ul className="space-y-3 text-gray-500 text-sm font-medium">
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Performance Tuning</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Exterior Styling</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Interior Customization</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Audio Systems</li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contact</h4>
                        <p className="text-gray-500 text-sm mb-3 font-medium">123 Auto Hub, Industrial Area<br />Bhiwandi, Maharashtra</p>
                        <p className="text-gray-500 text-sm mb-3 font-bold text-brand-red tracking-wide">+91 98765 43210</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-6">
                            {/* Social Placeholders */}
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer text-white/50 hover:text-white">FB</div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer text-white/50 hover:text-white">IG</div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer text-white/50 hover:text-white">YT</div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs uppercase tracking-widest">© 2025 Captain Car. All Rights Reserved.</p>
                    <p className="text-gray-700 text-xs tracking-wide">Designed with precision.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
