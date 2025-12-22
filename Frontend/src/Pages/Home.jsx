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
                        <div className="text-center max-w-6xl mx-auto mb-8 md:mb-8 mt-4 md:mt-0 relative z-20 pointer-events-none">
                            {/* Improved Visibility & Styling: Textured Backing & Stronger Shadows */}
                            <div className="inline-block px-4 py-2 rounded-xl backdrop-blur-sm bg-black/10 md:bg-transparent md:backdrop-filter-none">
                                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight tracking-tighter uppercase italic flex flex-col gap-2 md:gap-4 drop-shadow-[0_8px_15px_rgba(0,0,0,0.9)]">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 drop-shadow-sm">Enhance Your</span>
                                    <span className="text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-md">Vehicle's</span>
                                    <span className="text-brand-red drop-shadow-[0_0_25px_rgba(220,20,60,0.8)]">Performance</span>
                                </h1>
                                <p className="text-base md:text-2xl text-white font-bold tracking-widest uppercase mt-4 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)] bg-black/40 md:bg-transparent px-4 py-1 rounded">
                                    Trusted Modification Workshop for Cars and Trucks
                                </p>
                            </div>
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
            {/* ================= ABOUT OWNER & CONTACT ================= */}
            <div className="relative py-12 px-6 md:py-24 bg-[#0a0a0a] overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent skew-x-12 pointer-events-none" />
                <ScrollReveal>
                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left: Brand Identity */}
                        <div className="order-2 md:order-1 bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-brand-red/30 transition-all duration-500">
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl group-hover:bg-brand-red/20 transition-all duration-700" />

                            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase text-white tracking-tighter italic">
                                Captain <span className="text-brand-red">Car</span>
                            </h2>
                            <h3 className="text-xl md:text-2xl text-gray-300 font-bold mb-8 uppercase tracking-widest leading-snug">
                                One Stop Solution For<br />
                                <span className="text-white">All Car Interior & Accessories</span>
                            </h3>

                            <div className="space-y-6 text-gray-400">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex-shrink-0 flex items-center justify-center text-brand-red text-xl">📍</div>
                                    <div>
                                        <p className="font-bold text-white uppercase tracking-wider mb-1">Workshop Address</p>
                                        <p className="leading-relaxed">Next to Greenland Hotel,<br />Chavindra, Bhiwandi - 421 302</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex-shrink-0 flex items-center justify-center text-brand-red text-xl">📞</div>
                                    <div>
                                        <p className="font-bold text-white uppercase tracking-wider mb-1">Contact Us</p>
                                        <p className="font-mono text-white text-lg">9822119832 / 9323567097</p>
                                        <p className="font-mono text-gray-500">9970215597</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Owner Profile */}
                        <div className="order-1 md:order-2 text-center md:text-left relative">
                            <div className="inline-block px-6 py-2 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-6">
                                Meet The Expert
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase text-white italic tracking-tighter leading-none">
                                Tanveer<br /><span className="text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Farooqui</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                                With decades of expertise, we specialize in high-end customization.
                                From <span className="text-brand-red font-bold">Audio Systems</span> to <span className="text-brand-red font-bold">Seat Covers</span>,
                                we transform vehicles into masterpieces.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <span className="bg-[#1a1a1a] px-5 py-2 rounded border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-300">Interior Specialist</span>
                                <span className="bg-[#1a1a1a] px-5 py-2 rounded border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-300">Premium Accessories</span>
                                <span className="bg-[#1a1a1a] px-5 py-2 rounded border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-300">Custom Audio</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= INFORMATIVE SERVICES SHOWCASE ================= */}
            <div className="relative py-12 px-6 md:py-24 bg-black">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto mb-16 text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">Premium Upgrades</h2>
                        <h3 className="text-xl md:text-2xl text-brand-red font-bold uppercase tracking-widest">
                            Official Retailer & Installer
                        </h3>
                    </div>

                    {/* 1. SEAT COVERS - GALLERY SLIDER */}
                    <div className="mb-20">
                        <div className="flex items-center justify-between mb-8 px-4">
                            <h4 className="text-2xl md:text-4xl font-black text-white uppercase italic">Custom Seat Covers</h4>
                            <div className="h-[1px] flex-grow bg-white/10 mx-6"></div>
                            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">View Collection</span>
                        </div>

                        {/* Scrollable Gallery */}
                        <div className="flex overflow-x-auto gap-4 md:gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
                            {[1, 2, 3, 4, 5, 6, 8, 9].map((num) => (
                                <div key={num} className="min-w-[280px] md:min-w-[350px] snap-center relative group rounded-2xl overflow-hidden border border-white/10 hover:border-brand-red/50 transition-all duration-500">
                                    <div className="aspect-[4/5] bg-[#111]">
                                        <img
                                            src={`/seatcover${num}.png`}
                                            alt={`Seat Cover Design ${num}`}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-white font-bold uppercase tracking-wider text-lg">Design #{num}</p>
                                        <p className="text-brand-red text-xs uppercase tracking-widest">Premium Leather</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. AUDIO & INFOTAINMENT - BRAND CLOUD */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
                        <div className="bg-[#0f0f0f] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                            <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-8 relative z-10">
                                Audio & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Infotainment</span>
                            </h4>
                            <p className="text-gray-400 mb-8 relative z-10">Experience concert-level sound with our expertly tuned systems from world-class brands.</p>

                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {[
                                    { name: 'Sony', img: '/sonymakebelive.png' },
                                    { name: 'Pioneer', img: '/pioneeraudio.png' },
                                    { name: 'Boss', img: '/bossaudiosystem.png' },
                                    { name: 'AudioBull', img: '/audiobull.png' }
                                ].map((brand, idx) => (
                                    <div key={idx} className="bg-white/5 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors h-24">
                                        <img src={brand.img} alt={brand.name} className="max-w-[80%] max-h-[80%] object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. SUN CONTROL - PRIVACY FILMS */}
                        <div className="bg-[#0f0f0f] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
                            <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-8 relative z-10">
                                Sun Control <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Films</span>
                            </h4>
                            <p className="text-gray-400 mb-8 relative z-10">Advanced heat rejection and UV protection with high-performance window films.</p>

                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {[
                                    { name: '3M', img: '/3M.png' },
                                    { name: 'Garware', img: '/garware.png' },
                                    { name: 'LLumar', img: '/LLumar.png' },
                                    { name: 'Suntek', img: '/suntekwindowfilm.png' }
                                ].map((brand, idx) => (
                                    <div key={idx} className="bg-white/5 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors h-24">
                                        <img src={brand.img} alt={brand.name} className="max-w-[80%] max-h-[80%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 4. ESSENTIAL ACCESSORIES */}
                    <div className="text-left">
                        <h4 className="text-2xl md:text-4xl font-black text-white uppercase italic mb-8 px-4">Essential Accessories</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                            {[
                                { title: 'Roof Carriers', img: '/roofcarrier.png', bg: 'bg-red-900/10' },
                                { title: 'Wheel Caps', img: '/tyremiddle.png', bg: 'bg-blue-900/10' },
                                { title: 'Floor Mats', img: '/seatcover7.png', bg: 'bg-green-900/10' },
                                { title: 'Car Care', img: '/windowwash.png', bg: 'bg-purple-900/10' },
                            ].map((item, idx) => (
                                <div key={idx} className={`rounded-2xl border border-white/5 p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden ${item.bg}`}>
                                    <img src={item.img} alt={item.title} className="h-24 md:h-32 object-contain mb-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                    <h5 className="text-white font-bold uppercase tracking-wider relative z-10">{item.title}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= AGGRESSIVE COMPARISON - "WHY US?" ================= */}
            <div className="relative py-12 px-6 md:py-24 bg-[#050505]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">Why Risk It?</h2>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Don't settle for cheap imitations. Your vehicle deserves the best handling and verified accessories.</p>
                        </div>

                        {/* Comparison Table */}
                        <div className="bg-[#111] rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">
                            <div className="grid grid-cols-3 bg-[#0a0a0a] p-6 border-b border-white/5 text-xs md:text-base font-bold uppercase tracking-widest text-gray-500 sticky top-0 md:static">
                                <div className="text-left">Feature</div>
                                <div className="text-center text-red-500/50">Local Market</div>
                                <div className="text-center text-brand-red">Captain Car</div>
                            </div>

                            {[
                                { feat: 'Material Quality', bad: 'Generic / Synthetic', good: 'Premium / Genuine' },
                                { feat: 'Fitment Finish', bad: 'Loose / Wrinkled', good: 'OEM Factory Fit' },
                                { feat: 'Audio Tuning', bad: 'Bass Only', good: 'Full Spectrum Clarity' },
                                { feat: 'Installation', bad: 'Rushed Job', good: 'Expert Precision' },
                                { feat: 'Warranty', bad: 'No Guarantee', good: 'Verified Support' },
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-3 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors group">
                                    <div className="font-bold text-gray-300 uppercase text-xs md:text-lg">{row.feat}</div>
                                    <div className="text-center text-gray-600 group-hover:text-red-500/70 transition-colors uppercase text-xs md:text-sm font-medium">{row.bad}</div>
                                    <div className="text-center text-white font-black uppercase text-xs md:text-lg flex justify-center items-center gap-2">
                                        <span className="hidden md:inline">✅</span> {row.good}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= SUPPORTED BRANDS MARQUEE ================= */}
            <div className="py-12 bg-brand-red/5 border-y border-brand-red/10 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-8">
                    <p className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">We Customize All Major Brands</p>
                </div>

                {/* Scrolling Marquee text for "Cool" effect */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="animate-marquee flex gap-12 md:gap-24 items-center">
                        {/* Repeated twice for seamless loop */}
                        {[1, 2].map((i) => (
                            <React.Fragment key={i}>
                                {['HYUNDAI', 'MARUTI SUZUKI', 'HONDA', 'TATA', 'MAHINDRA', 'TOYOTA', 'KIA', 'VOLKSWAGEN', 'SKODA', 'MERCEDES', 'BMW', 'AUDI'].map((car, idx) => (
                                    <span key={`${i}-${idx}`} className="text-3xl md:text-6xl font-black text-transparent text-stroke-white opacity-30 uppercase italic hover:opacity-100 hover:text-white transition-all duration-300 cursor-default">
                                        {car}
                                    </span>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                {/* CSS for Marquee */}
                <style>{`
                    .animate-marquee { animation: marquee 20s linear infinite; }
                    .text-stroke-white { -webkit-text-stroke: 1px rgba(255,255,255,0.5); }
                    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                `}</style>
            </div>

            {/* ================= FINAL CTA ================= */}
            <div className="relative py-24 px-6 bg-black text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/figma-img/bg-pattern.png')] opacity-20 bg-cover bg-center" />
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black text-white italic uppercase tracking-tighter mb-8">
                        Ready For The <br /><span className="text-brand-red">Transformation?</span>
                    </h2>
                    <button className="bg-white text-black font-black text-lg md:text-2xl px-10 py-5 rounded-full hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 uppercase tracking-widest">
                        Visit Workshop Today
                    </button>
                </div>
            </div>

            {/* ================= FOOTER ================= */}
            <footer className="bg-black border-t border-white/5 pt-16 pb-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-16 text-center md:text-left">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-4xl font-black text-white italic mb-6 tracking-tighter">CAPTAIN<span className="text-brand-red">CAR</span></h2>
                        <p className="text-gray-500 text-sm leading-7">
                            Redefining automotive excellence with precision modifications. <br />
                            Specialists in Seat Covers, Audio Systems, and Sun Control Films.
                        </p>
                    </div>
                    <div className="hidden md:block col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Explore</h4>
                        <ul className="space-y-3 text-gray-500 text-sm font-medium">
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Seat Cover Collection</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Audio & Infotainment</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Sun Control Films</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Accessories</li>
                        </ul>
                    </div>
                    <div className="hidden md:block col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Services</h4>
                        <ul className="space-y-3 text-gray-500 text-sm font-medium">
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Custom Interior Design</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Professional Audio Tuning</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Paint Protection Film</li>
                            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Electrical Upgrades</li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Visit Us</h4>
                        <p className="text-gray-500 text-sm mb-3 font-medium">Next to Greenland Hotel,<br />Chavindra, Bhiwandi - 421 302</p>
                        <p className="text-gray-500 text-sm mb-1 font-bold text-brand-red tracking-wide">9822119832 / 9323567097</p>
                        <p className="text-gray-500 text-sm mb-3 font-bold text-gray-400 tracking-wide">9970215597 (Support)</p>

                        <div className="flex justify-center md:justify-start gap-4 mt-6 opacity-50 hover:opacity-100 transition-opacity">
                            {/* Social Placeholders */}
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer text-white">IG</div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer text-white">FB</div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer text-white">YT</div>
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
