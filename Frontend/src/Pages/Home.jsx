import React from 'react';
import Button from '../Components/Button';
import ScrollReveal from '../Components/ScrollReveal';

const Home = () => {
    return (
        <div className="bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative w-full flex flex-col items-center justify-center pt-24 pb-12 md:min-h-screen md:pt-0 md:pb-0 overflow-hidden">
                {/* Background Components - Kept simple patterns only */}
                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url(/assets/figma-img/bg-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

                {/* Simple Gradient for depth instead of image */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent z-0 pointer-events-none" />

                {/* Hero Content */}
                <ScrollReveal>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
                        <div className="text-center max-w-5xl mx-auto mb-8 md:mb-8 mt-4 md:mt-0">
                            {/* FIXED: Reduced font size further for mobile to prevent wrapping/overlap */}
                            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight tracking-tighter uppercase italic flex flex-col gap-1 md:gap-4">
                                <span className="text-white drop-shadow-2xl">Enhance Your Vehicle's</span>
                                <span className="text-white drop-shadow-2xl">Performance</span>
                            </h1>
                            <p className="text-sm md:text-2xl text-gray-300 font-medium tracking-wide mt-2">
                                Trusted Modification Workshop for Cars and Trucks
                            </p>
                        </div>

                        {/* Car Image Container - REMOVED CLOUD IMAGE LAYER COMPLETELY */}
                        <div className="relative w-full max-w-7xl mx-auto my-6 md:my-12 group flex justify-center">
                            {/* Platform Shadow/Glow */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-12 md:h-24 bg-gradient-to-t from-black via-brand-red/10 to-transparent blur-3xl z-0 transition-all duration-1000 group-hover:via-brand-red/20" />

                            {/* CLEAN IMAGE: No background text/ghosting behind it */}
                            <img
                                src="/assets/figma-img/car.png"
                                alt="Modified Porsche GT3 RS"
                                className="relative z-10 w-[90%] md:w-[90%] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto relative z-10">
                            {['Performance Package', 'Exterior Modification', 'Interior Modification', 'Audio System', 'Suspension Upgrades', 'Other Services'].map((service, index) => (
                                <div key={index} className="group bg-[#111] border border-white/5 py-4 px-6 md:py-6 md:px-8 rounded-xl shadow-lg hover:bg-brand-red hover:border-brand-red transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                                    <span className="text-gray-300 group-hover:text-white font-bold text-base md:text-xl uppercase tracking-wider transition-colors">{service}</span>
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
                                <div key={idx} className="bg-[#151515] p-6 md:p-10 rounded-2xl border border-white/5 hover:border-brand-red/50 transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <h4 className="text-white text-xl md:text-2xl font-bold mb-1 uppercase">{product.title}</h4>
                                    <h4 className="text-gray-400 text-lg md:text-xl font-medium mb-6 md:mb-8 uppercase tracking-widest group-hover:text-white transition-colors">{product.subtitle}</h4>

                                    <div className="h-48 md:h-64 flex items-center justify-center mb-6 md:mb-8 relative">
                                        <div className="absolute inset-0 bg-brand-red/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <img src={product.img} alt={product.title} className="max-h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10" />
                                    </div>

                                    <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed px-2 md:px-4 group-hover:text-gray-300 transition-colors">
                                        {product.desc}
                                    </p>

                                    <a href={product.link} className="text-brand-red font-black text-xs md:text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2">
                                        Get The Offer <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
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
                    <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase text-white tracking-tighter">Testimonial</h2>
                        <h3 className="text-sm md:text-xl text-brand-red font-bold uppercase tracking-widest">Client Experiences</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#121212] p-6 md:p-8 rounded-xl border border-white/5 hover:border-brand-red/30 transition-all">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-700 flex items-center justify-center"><span className="text-lg md:text-2xl font-bold text-gray-400">AT</span></div>
                                <div><h4 className="text-white text-lg md:text-xl font-bold">Amanda Turner</h4><div className="text-brand-red text-xs md:text-sm">★★★★★</div></div>
                            </div>
                            <p className="text-gray-400 italic text-sm md:text-base leading-relaxed">"The seamless integration of style and performance provided by Captain Car is unmatched."</p>
                        </div>
                        <div className="bg-[#121212] p-6 md:p-8 rounded-xl border border-white/5 hover:border-brand-red/30 transition-all">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-red flex items-center justify-center"><span className="text-lg md:text-2xl font-bold text-white">JD</span></div>
                                <div><h4 className="text-white text-lg md:text-xl font-bold">Jonathan Dean</h4><div className="text-brand-red text-xs md:text-sm">★★★★★</div></div>
                            </div>
                            <p className="text-gray-400 italic text-sm md:text-base leading-relaxed">"Absolutely professional service. The audio system upgrade changed my entire driving experience."</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= LOCATION SECTION ================= */}
            <div className="relative py-12 px-6 md:py-24 bg-black">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-2 md:mb-4 uppercase text-white tracking-tighter">Location</h2>
                        <h3 className="text-sm md:text-xl text-brand-red font-bold uppercase tracking-widest">
                            Explore Our Physical Automotive Hub
                        </h3>
                    </div>

                    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-64 md:h-96 relative">
                        {/* Placeholder for map */}
                        <div className="absolute inset-0 bg-[#222] flex items-center justify-center">
                            <p className="text-gray-500 font-mono text-sm md:text-lg">Interactive Map Integration</p>
                        </div>
                        {/* Overlay Button */}
                        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-full text-center">
                            <a href="#" className="bg-brand-red text-white font-bold px-6 py-2 md:px-8 md:py-3 rounded-full shadow-lg hover:bg-red-700 transition text-sm md:text-base inline-block">Get Directions</a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= FOOTER ================= */}
            <footer className="bg-black border-t border-white/10 pt-12 pb-8 px-6 md:pt-20 md:pb-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-brand-red italic mb-4 md:mb-6">CAPTAIN</h2>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Your trusted partner for premium automotive modifications.</p>
                    </div>
                    <div className="hidden md:block">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-500 text-sm"><li>Home</li><li>Services</li><li>Products</li><li>Contact Us</li></ul>
                    </div>
                    <div className="hidden md:block">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-500 text-sm"><li>Performance</li><li>Exterior</li><li>Interior</li><li>Audio</li></ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-4 md:mb-6">Contact</h4>
                        <p className="text-gray-500 text-xs md:text-sm mb-2">123 Auto Hub, Bhiwandi</p>
                        <p className="text-gray-500 text-xs md:text-sm mb-2">+91 98765 43210</p>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-6 md:pt-8 text-center">
                    <p className="text-gray-600 text-xs uppercase tracking-widest">© 2025 Captain Car. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
