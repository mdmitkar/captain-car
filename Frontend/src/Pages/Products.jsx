import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../Components/ScrollReveal';
import Button from '../Components/Button';

const Products = () => {
    const [expandedCategories, setExpandedCategories] = React.useState({});
    const [selectedImage, setSelectedImage] = React.useState(null);

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    const categories = [
        {
            title: "Seat Covers",
            id: "seat-covers",
            items: [
                { id: 1, name: "Blue Mesh Fabric", img: "/seatcover1.png" },
                { id: 2, name: "Beige Comfort", img: "/seatcover2.png" },
                { id: 3, name: "Tan Sport Leatherette", img: "/seatcover3.png" },
                { id: 4, name: "Grey Ribbed Fabric ", img: "/seatcover4.png" },
                { id: 5, name: "Brown Black Ergonomic", img: "/seatcover5.png" },
                { id: 6, name: "Dual-Tone Brown", img: "/seatcover6.png" },
                { id: 8, name: "Beige Diamond Stitch", img: "/seatcover8.png" },
                { id: 9, name: "Brown Executive", img: "/seatcover9.png" },
            ]
        },
        {
            title: "Audio & Video Players",
            id: "audio-video",
            items: [
                { id: 10, name: "Android Touch Display", img: "/cardisplay1.png" },
                { id: 11, name: "Wide Screen Touch Display", img: "/cardisplay2.png" },
                { id: 12, name: "OEM Fit Touch Display", img: "/cardisplay3.png" },
                { id: 41, name: "USB Bluetooth Audio Player", img: "/assets/car-audio-1.png" },
                { id: 42, name: "Classic Single-DIN Player", img: "/assets/car-audio-2.png" },
                { id: 43, name: "LED Display Audio Player", img: "/assets/car-audio-3.png" },
            ]
        },
        {
            title: "Speakers & Woofers",
            id: "speakers",
            items: [

                { id: 16, name: "Boss Audio System", img: "/bossaudiosystem.png" },
                { id: 38, name: "Pro Series Speaker", img: "/assets/car-speaker.png" },
                { id: 39, name: "Component Speaker", img: "/assets/car-speaker-2.png" },
                { id: 40, name: "Coaxial Speaker Pair", img: "/assets/car-speaker-3.png" },
            ]
        },
        {
            title: "Carriers & Bumpers",
            id: "carriers",
            items: [
                // Display 3 Carriers first
                { id: 17, name: "Heavy Duty Roof Carrier", img: "/carrier5.png" },
                { id: 24, name: "Aerodynamic Carrier", img: "/carrier2.webp" },
                { id: 25, name: "Luggage Rack Pro", img: "/carrier3.webp" },
                // Display 3 Bumpers next
                { id: 26, name: "Front Guard Bumper", img: "/bumper1.webp" },
                { id: 27, name: "Rear Protection Bumper", img: "/bumper2.webp" },
                { id: 28, name: "Off-Road Bumper", img: "/bumper3.jpg" },
                // Remaining items for "View All"
                { id: 29, name: "Sleek Roof Carrier", img: "/carrier4.jpg" },
                { id: 30, name: "Utility Carrier", img: "/carrier6.webp" },
                { id: 31, name: "Sport Bumper Guard", img: "/bumper4.jpg" },
            ]
        },
        {
            title: "Sun Control Film",
            id: "sun-control",
            items: [
                { id: 44, name: "Premium Car Washing", img: "/carwashing4.png" },

                { id: 46, name: "Deep Clean Wash", img: "/windowwash2.png" },
                { id: 47, name: "Quick Wash Service", img: "/carwashing3.png" },
            ]
        },
        {
            title: "LED Lights & Ambience",
            id: "led-lights",
            items: [
                { id: 48, name: "GVAA LED Headlight", img: "/ledlight1.jpg" },
                { id: 49, name: "A-Class LED Headlight", img: "/ledlight2.png" },
                { id: 50, name: "Elegant LED Headlight", img: "/ledlight3.png" },
                
            ]
        },
        {
            title: "Wheel Caps",
            id: "wheel-caps",
            items: [
                { id: 22, name: "Sport Ring Cap", img: "/assets/car-wheel cap.png" },
                { id: 34, name: "Matte Black Cap", img: "/assets/car-wheel cap2.png" },
                { id: 35, name: "Silver Star Cap", img: "/assets/car-wheel cap-3.png" },
            ]
        },
        {
            title: "Floor Mats",
            id: "floor-mats",
            items: [
                { id: 23, name: "Beige 7D Floor Mat", img: "/assets/floor-mat.png" },
                { id: 32, name: "Red-Black Carpet Mat", img: "/assets/floor-mat2.png" },
                { id: 33, name: "Black All-Weather Mat", img: "/assets/floor-mat3.png" },
                { id: 36, name: "Grey Custom Stitch Mat", img: "/assets/floor-mat4.png" },
                { id: 37, name: "Black Heavy Rubber Mat", img: "/assets/floor-mat5.png" },
            ]
        },
        {
            title: "Premium Air Fresheners",
            id: "air-fresheners",
            items: [
                { id: 101, name: "Royal Oudh", img: "/airfreshner.jpg" },
                { id: 102, name: "Oceanic Breeze", img: "/airfreshner2.jpg" },
                { id: 103, name: "Lavender Mist", img: "/airfreshner3.jpg" },
                { id: 104, name: "Citrus Burst", img: "/airfreshner4.jpg" },
                { id: 105, name: "Musk Intense", img: "/airfreshner5.jpg" },
                { id: 106, name: "Vanilla Noir", img: "/airfreshner6.jpg" },
                { id: 107, name: "Sandalwood Pure", img: "/airfreshner7.jpg" },
            ]
        }
    ];

    return (
        <div className="bg-premium-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">

            {/* ================= HERO HEADER ================= */}
            <div className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <ScrollReveal direction="down">
                        <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 inline-block">
                            Store Catalogue
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] uppercase italic tracking-tighter">
                            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#FF6B6B]">Collection</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            Explore our curated selection of high-end accessories designed to elevate your driving experience.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* ================= PRODUCTS GRID ================= */}
            <div className="max-w-7xl mx-auto px-6 pb-32">
                {categories.map((category, idx) => {
                    const isExpanded = expandedCategories[category.id];
                    let visibleItems = isExpanded ? category.items : category.items.slice(0, 6);
                    let hasMore = category.items.length > 6;

                    // Special logic for categories expanding from 3 items
                    // 'wheel-caps' needs to show only 3 but view all expands to custom view
                    if (['air-fresheners', 'wheel-caps', 'floor-mats', 'seat-covers', 'speakers', 'audio-video', 'sun-control', 'led-lights'].includes(category.id)) {
                        visibleItems = isExpanded ? category.items : category.items.slice(0, 3);
                        hasMore = category.items.length > 3;
                    }

                    // Special Override for Wheel Caps logic: Always allow 'View All' even if items <= 3 (to show full image)
                    if (category.id === 'wheel-caps' && !isExpanded) {
                        hasMore = true;
                    }

                    return (
                        <div key={category.id} id={category.id} className="mb-24 last:mb-0 scroll-mt-32">
                            <ScrollReveal direction="left" delay={100}>
                                <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4">
                                    <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                                        {category.title}
                                    </h2>
                                    <div className="h-[1px] flex-grow bg-gradient-to-r from-brand-red to-transparent"></div>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {visibleItems.map((product, pIdx) => (
                                    <ScrollReveal key={product.id} direction="up" delay={pIdx * 100}>
                                        <div className="group relative bg-[#0f0f0f] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-red/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(227,30,36,0.15)] hover:-translate-y-2">
                                            {/* Image Container */}
                                            <div
                                                className="relative h-64 md:h-72 w-full bg-[#111] p-4 flex items-center justify-center overflow-hidden cursor-zoom-in group-hover:bg-[#161616] transition-colors outline-none"
                                                onClick={() => setSelectedImage(product.img)}
                                            >
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                <img
                                                    src={product.img}
                                                    alt={product.name}
                                                    loading="lazy"
                                                    className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 relative">
                                                <h3 className="text-xl font-bold uppercase italic tracking-tight mb-2 text-gray-200 group-hover:text-white transition-colors">
                                                    {product.name}
                                                </h3>
                                                <div className="flex justify-between items-end mt-4">
                                                    <a
                                                        href={`https://wa.me/919822119832?text=${encodeURIComponent(`Hey, I want to know more about ${product.name} ${category.title}. Kindly share more details.`)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/btn"
                                                    >
                                                        <span className="text-brand-red text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover/btn:border-brand-red transition-all cursor-pointer">
                                                            Enquire Now
                                                        </span>
                                                    </a>
                                                    <a
                                                        href={`https://wa.me/919822119832?text=${encodeURIComponent(`Hey, I want to know more about ${product.name} ${category.title}. Kindly share more details.`)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300">
                                                            <span className="text-lg">→</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            {/* Special Full Image for Wheel Caps when expanded */}
                            {category.id === 'wheel-caps' && isExpanded && (
                                <ScrollReveal direction="up" delay={200}>
                                    <div className="mt-8 relative w-full bg-[#111] rounded-3xl overflow-hidden border border-white/5 group">
                                        <div
                                            className="relative h-[500px] w-full bg-[#1a1a1a] p-0 flex items-center justify-center overflow-hidden cursor-zoom-in"
                                            onClick={() => setSelectedImage("/assets/car-wheel cap-ful.png")}
                                        >
                                            <img
                                                src="/assets/car-wheel cap-ful.png"
                                                alt="Full Wheel Cap Collection"
                                                className="w-full h-full object-contain md:object-cover filter drop-shadow-2xl"
                                            />
                                            <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                                                <span className="text-white font-bold uppercase tracking-widest text-sm">Full Collection View</span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )}

                            {hasMore && (
                                <div className="flex justify-center mt-12">
                                    <Button
                                        onClick={() => toggleCategory(category.id)}
                                        variant="custom"
                                        className="px-8 py-3 bg-white/5 hover:bg-brand-red text-white uppercase tracking-widest text-sm font-bold skew-x-[-10deg] transition-all"
                                    >
                                        <span className="skew-x-[10deg] inline-block">
                                            {isExpanded ? 'Show Less' : 'View All'}
                                        </span>
                                    </Button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* ================= LIGHTBOX ================= */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-brand-red text-4xl transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full review"
                        className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl animate-zoom-in"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* ================= CONTACT / FOOTER ================= */}
            <footer className="bg-black pt-20 pb-10 border-t border-white/10 text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <img src="/assets/figma-img/logo.png" alt="Captain Car" className="h-16 w-auto object-contain" />
                        </Link>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all">FB</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all">IG</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all">YT</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-brand-red font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/" className="hover:text-white transition-colors">Get In Touch</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Returns</Link></li>
                            <li><Link to="/why-us" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Business */}
                    <div>
                        <h4 className="text-brand-red font-bold uppercase tracking-widest mb-6">Business</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/why-us" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Bulk Orders</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-brand-red font-bold uppercase tracking-widest mb-6">Contact Us</h4>
                        <div className="space-y-6 text-gray-400">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="text-white font-bold">We're available by phone:</p>
                                    <p className="text-xl text-brand-red font-black">9822119832</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✉️</span>
                                <p>contact@captaincar.in</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">🕒</span>
                                <p>Monday to Saturday 10 AM to 9 PM</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
                    <p>Copyright © 2025 Captain Car. All rights reserved.</p>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-green-500 font-bold">Chat with us</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Products;
