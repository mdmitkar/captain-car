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
                { id: 1, name: "Luxury Leather Red", img: "/seatcover1.png" },
                { id: 2, name: "Premium Beige Comfort", img: "/seatcover2.png" },
                { id: 3, name: "Sport Black Edition", img: "/seatcover3.png" },
                { id: 4, name: "Custom Stitch Pattern", img: "/seatcover4.png" },
                { id: 5, name: "Ergonomic Design", img: "/seatcover5.png" },
                { id: 6, name: "Two-Tone Classic", img: "/seatcover6.png" },
                
                { id: 8, name: "Diamond Quilt", img: "/seatcover8.png" },
                { id: 9, name: "Executive Suite", img: "/seatcover9.png" },
            ]
        },
        {
            title: "Audio & Video Players",
            id: "audio-video",
            items: [
                { id: 10, name: "Touch Display Unit 1", img: "/cardisplay1.png" },
                { id: 11, name: "Touch Display Unit 2", img: "/cardisplay2.png" },
                { id: 12, name: "Touch Display Unit 3", img: "/cardisplay3.png" },
                { id: 13, name: "Pioneer System", img: "/pioneeraudio.png" },
                { id: 14, name: "Sony Experience", img: "/sonymakebelive.png" },
            ]
        },
        {
            title: "Speakers & Woofers",
            id: "speakers",
            items: [
                { id: 15, name: "Audio Bull Woofer", img: "/audiobull.png" },
                { id: 16, name: "Boss Audio System", img: "/bossaudiosystem.png" },
            ]
        },
        {
            title: "Carriers & Bumpers",
            id: "carriers",
            items: [
                { id: 17, name: "Heavy Duty Roof Carrier", img: "/roofcarrier.png" },
            ]
        },
        {
            title: "Sun Control Film",
            id: "sun-control",
            items: [
                { id: 18, name: "Suntek Protection", img: "/suntekwindowfilm.png" },
                { id: 19, name: "3M Wrap Film", img: "/3M.png" },
                { id: 20, name: "LLumar Film", img: "/LLumar.png" },
                { id: 21, name: "Garware Ice Cool", img: "/garware.png" },
            ]
        },
        {
            title: "Wheel Caps",
            id: "wheel-caps",
            items: [
                { id: 22, name: "Sport Alloy Style", img: "/tyremiddle.png" },
            ]
        },
        {
            title: "Floor Mats",
            id: "floor-mats",
            items: [
                { id: 23, name: "3D Custom Mats", img: "/uploaded_cloud_0.png" }, // Placeholder based on plan
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
                    const visibleItems = isExpanded ? category.items : category.items.slice(0, 6);
                    const hasMore = category.items.length > 6;

                    return (
                        <div key={category.id} className="mb-24 last:mb-0">
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
                                        <div className="group relative bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-500">
                                            {/* Image Container */}
                                            <div
                                                className="relative h-64 md:h-72 w-full bg-[#1a1a1a] p-8 flex items-center justify-center overflow-hidden cursor-zoom-in"
                                                onClick={() => setSelectedImage(product.img)}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <img
                                                    src={product.img}
                                                    alt={product.name}
                                                    className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 relative">
                                                <h3 className="text-xl font-bold uppercase italic tracking-tight mb-2 text-gray-200 group-hover:text-white transition-colors">
                                                    {product.name}
                                                </h3>
                                                <div className="flex justify-between items-end mt-4">
                                                    <Link to="/contact">
                                                        <span className="text-brand-red text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-brand-red transition-all cursor-pointer">
                                                            Enquire Now
                                                        </span>
                                                    </Link>
                                                    <Link to="/contact">
                                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                                            <span className="text-lg">→</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

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
