import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../Components/ScrollReveal';
import Button from '../Components/Button';

const Products = () => {
    const [expandedCategories, setExpandedCategories] = React.useState({});
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 1024); // lg breakpoint

    React.useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                { id: 5, name: "Premium Brown & Black Leather Seat Cover", img: "/seat cover/seatcover5-removebg-preview.png" },
                { id: 4, name: "Luxury Cream Quilted Seat Cover", img: "/seat cover/seatcover4-removebg-preview.png" },
                { id: 1, name: "Sporty Blue & Black Seat Cover", img: "/seat cover/seatcover1-removebg-preview.png" },
                { id: 2, name: "Classic Beige & Black Leatherette Cover", img: "/seat cover/seatcover2-removebg-preview.png" },
                { id: 6, name: "Rich Brown Leather Custom Upholstery", img: "/seatcover6.png" },
                { id: 8, name: "Premium Beige Diamond Stitch Seat Cover", img: "/seatcover8.png" },
            ]
        },
        {
            title: "Audio & Video Hubs",
            id: "audio-video",
            items: [
                { id: 10, name: "Android Precision Touch", img: "/car-display/cardisplay1-removebg-preview.png" },
                { id: 11, name: "Wide Dynamic Dashboard", img: "/car-display/cardisplay2-removebg-preview.png" },
                { id: 12, name: "OEM Intelligent Interface", img: "/car-display/cardisplay3-removebg-preview.png" },
                { id: 41, name: "Premium Single DIN Bluetooth Receiver", img: "/car-audio-player/car-audio-1-removebg-preview.png" },
                { id: 42, name: "Sony Style Single DIN Media Player", img: "/car-audio-player/car-audio-2-removebg-preview.png" },
                { id: 43, name: "Standard Single DIN MP3 Player", img: "/car-audio-player/car-audio-3-removebg-preview.png" },
                { id: 201, name: "Gemstone 10.1'' 2K QLED Android", img: "/newandroidsystem/nobgGemstone 10.1'' 2K QLED Android Car System.png" },
                { id: 202, name: "Oncord+ 9-inch Android Multimedia System", img: "/newandroidsystem/nobgONCORD+ 9 inch android system.png" },
                { id: 203, name: "Power Acoustik CP-71W Single DIN Player", img: "/newandroidsystem/nobgPower Acoustik CP-71W Single DIN Car Stereo with 6.5” Touchscreen, Wireless Apple CarPlay & Android Auto.png" },
                { id: 204, name: "Sansui SAM-5350 Pro Smart Infotainment", img: "/newandroidsystem/nobgsansuisam5350prosmartinfotainmentsystem1000x1000.png" },
            ]
        },
        {
            title: "Performance Speakers",
            id: "speakers",
            items: [
                { id: 16, name: "Sony Mega Bass Coaxial Speakers", img: "/speaker/bossaudiosystem-removebg-preview.png" },
                { id: 38, name: "Pioneer TS Series Oval Speakers", img: "/speaker/car-speaker-removebg-preview.png" },
                { id: 39, name: "JBL Coaxial Car Speakers", img: "/speaker/car-speaker-2-removebg-preview.png" },
                { id: 40, name: "4-inch Dashboard Speakers", img: "/speaker/car-speaker-3-removebg-preview.png" },
                { id: 301, name: "Ampere Audio AA-8K 8000W Mono Block Amplifier", img: "/newspeakers/nobgAmpere Audio AA-8K 8,000W Mono Block Car Amplifier.png" },
                { id: 302, name: "Blaupunkt ICx 402 4-Way Coaxial Speakers", img: "/newspeakers/nobgBlaupunkt ICx 402 4,2-Way Coaxial Car Speakers.png" },
                { id: 303, name: "Infinity REF-6532EX Reference 6.5 Coaxial", img: "/newspeakers/nobgInfinity REF-6532EX Reference 6.5 Inch Two-Way Coaxial.png" },
                { id: 304, name: "JBL Car Speakers", img: "/newspeakers/nobgJBL Car Speakers.png" },
                { id: 305, name: "Pioneer TS-A1671F 6.5 3-Way Coaxial", img: "/newspeakers/nobgPioneer TS-A1671F 6.5 3-Way Coaxial Car Speakers.png" },
                { id: 306, name: "Sony 3-Way Mica Reinforced Speakers", img: "/newspeakers/nobgSony - 6-12 3Way Car Speakers with Mica Reinforced.png" },
                { id: 307, name: "Under-Seat Active Subwoofer 850W", img: "/newspeakers/nobgUnder-Seat Active Subwoofer 850W.png" },
                { id: 308, name: "Pioneer DEQ-S1000A DSP", img: "/newspeakers/nobgpioneerdeq-s1000a-universal-sound-processor-dsp-pioneer-original.png" },
            ]
        },
        {
            title: "Armor & Carriers",
            id: "carriers",
            items: [
                { id: 17, name: "Aluminum Roof Luggage Carrier", img: "/carrier/carrier5-removebg-hero.png" },
                { id: 26, name: "Heavy Duty Front Bumper Guard", img: "/bumper/bumper1-removebg-preview.png" },
                { id: 27, name: "Rear Steel Bumper Protector", img: "/bumper/bumper2-removebg-preview.png" },
                { id: 28, name: "Custom Painted Front Bumpers", img: "/bumper/bumper3-removebg-preview.png" },
                { id: 24, name: "ABS Front Bumper Guard", img: "/assets/nobgcarrier2.png" },
                { id: 25, name: "Rear Bumper Diffuser / Guard", img: "/assets/nobgcarrier3.png" },
            ]
        },
        {
            title: "Wheel Precision Caps",
            id: "wheel-caps",
            items: [
                { id: 601, name: "Car Universal Wheel Cover HubCaps VELOCITY", img: "/newwheelcap/nobgCar Universal Wheel Cover HubCaps Red and Black Colour (VELOCITY_RED_BLACK_13).png" },
                { id: 602, name: "PRIGAN 16 Inch Matte Black Wheel Cover", img: "/newwheelcap/nobgPRIGAN 16 Inch Matte Black Wheel Cover (Available in 12,13,14,15,16 Inch).png" },
                { id: 603, name: "Favmoto Blue Color", img: "/newwheelcap/nobgfavmoto blue color.png" },
                { id: 22, name: "Sport Ring Velocity", img: "/car-tyre-cap/car-wheel_cap-removebg-preview.png" },
                { id: 34, name: "Matte Black Stealth", img: "/car-tyre-cap/car-wheel_cap2-removebg-preview.png" },
                { id: 35, name: "Silver Star Radiant", img: "/car-tyre-cap/car-wheel_cap-3-removebg-preview.png" },
            ]
        },
        {
            title: "Floor Architecture",
            id: "floor-mats",
            items: [
                { id: 23, name: "Beige 7D Precision Mat", img: "/assets/nobgfloormat/floor-mat.png" },
                { id: 32, name: "Red-Black Circuit Mat", img: "/assets/nobgfloormat/floor-mat2.png" },
                { id: 33, name: "Stealth All-Weather Mat", img: "/assets/nobgfloormat/floor-mat3.png" },
                { id: 36, name: "Grey Custom Artisan Mat", img: "/assets/nobgfloormat/floor-mat4.png" },
                { id: 37, name: "Heavy Duty Vulcan Mat", img: "/assets/nobgfloormat/floor-mat5.png" },
            ]
        },
        {
            title: "Elite Air Fragrances",
            id: "air-fresheners",
            items: [
                { id: 101, name: "My Shaldan Gel Perfume (Lime)", img: "/car-air-freshner/airfreshner-removebg-preview.png" },
                { id: 102, name: "Areon Ken Gel Fragrance", img: "/car-air-freshner/airfreshner2-removebg-preview.png" },
                { id: 103, name: "Godrej Aer Twist", img: "/car-air-freshner/airfreshner3-removebg-preview.png" },
                { id: 104, name: "Aromahpure Hanging Car Perfume - Musk", img: "/car-air-freshner/airfreshner4-removebg-preview.png" },
                { id: 105, name: "Lavender Lush Car Diffuser", img: "/car-air-freshner/airfreshner5-removebg-preview.png" },
                { id: 106, name: "Aromahpure Hanging Pod - Lavender", img: "/car-air-freshner/airfreshner6-removebg-preview.png" },
                { id: 107, name: "Premium Sandalwood Grain Perfume", img: "/car-air-freshner/airfreshner7-removebg-preview.png" },
            ]
        },
        {
            title: "Sun Control & Glass",
            id: "sun-control",
            items: [
                { id: 44, name: "Glacier Thermal Shield", img: "/carwashing4.png" },
                { id: 46, name: "Precision Window Clarity", img: "/windowwash2.png" },
                { id: 47, name: "Rapid Hydro Shield", img: "/carwashing3.png" },
            ]
        },
        {
            title: "LED Lights & Ambience",
            id: "led-lights",
            items: [
                { id: 108, name: "RGB Ambient Strips", img: "/ledlight1.jpg" },
                { id: 109, name: "Footwell Glow Kit", img: "/ledlight2.png" },
                { id: 110, name: "Starry Roof Ambience", img: "/ledlight3.png" },
                { id: 401, name: "300W LED Headlight Bulb H7 6000K", img: "/new lights/nobg300W LED Headlight Bulb, 6000K, 30000 Lumens, High Brightness Car Headlamp (H7).png" },
                { id: 402, name: "Cool White 200W Hyper Beam", img: "/new lights/nobgCool_White_200_Watt_My_TVS_Hyper_Beam_Light-removebg-preview.png" },
                { id: 403, name: "Hyundai 222W Alpha 1 LED", img: "/new lights/nobgHyundai_222W_Alpha_1_Car_LED__2857021663755-removebg-preview.png" },
                { id: 404, name: "LIU HJG 300W H4 LED Headlight", img: "/new lights/nobgLIU_HJG_300W_H4_White_Car_LED_DC_12V-80V_Headlight_Bulb-removebg-preview.png" },
                { id: 405, name: "Osram H4H19 LED Bulb 50W", img: "/new lights/nobgOsram_H4H19_LED_Headlight_Bulb_50W_6000K_White-removebg-preview.png" },
                { id: 406, name: "IPHCAR M617 Bi-Xenon Fog Lamp", img: "/new lights/nobgiphcar-m617-be-xenon-led-fog-lamp-main-1500x1500.png" },
            ]
        },
        {
            title: "Electronics & Accessories",
            id: "electronics",
            items: [
                { id: 501, name: "Car 16pin Wiring Harness Adapter", img: "/electronics/nobgCar 16pin Wiring Harness Adapter Canbus Box Decoder.png" },
                { id: 502, name: "Car USB Charging Hubs", img: "/electronics/nobgCar USB Charging Hubs.png" },
                { id: 503, name: "Car Fuse Relay", img: "/electronics/nobgcarfuserelay.png" },
                { id: 504, name: "Horn Relay", img: "/electronics/nobghornrelay.png" },
                { id: 505, name: "RCA Audio Cable", img: "/electronics/nobgrcaaudiocable.png" },
            ]
        }
    ];

    return (
        <div className="bg-premium-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">
            <Helmet>
                <title>Our Products - Captain Car</title>
                <meta name="description" content="Browse our wide range of car accessories: Android Players, Speakers, Seat Covers, LED Lights, and more. Quality you can trust." />
            </Helmet>

            {/* ================= HERO HEADER ================= */}
            <div className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl w-full mx-auto px-6 md:pl-20 lg:pl-32 relative z-10 text-left">
                    <ScrollReveal direction="down">
                        <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 inline-block">
                            Store Catalogue
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-[0.9] uppercase italic tracking-tighter">
                            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#FF6B6B]">Collection</span>
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
                            Explore our curated selection of high-end accessories designed to elevate your driving experience.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* ================= PRODUCTS GRID ================= */}
            <div className="max-w-7xl mx-auto px-6 pb-32">
                {categories.map((category, idx) => {
                    const isExpanded = expandedCategories[category.id];
                    let visibleItems;
                    let hasMore;

                    if (isDesktop) {
                        visibleItems = category.items;
                        hasMore = false;
                    } else {
                        visibleItems = isExpanded ? category.items : category.items.slice(0, 6);
                        hasMore = category.items.length > 6;

                        // Special logic for categories expanding from 3 items (Mobile Only)
                        if (['air-fresheners', 'wheel-caps', 'floor-mats', 'seat-covers', 'speakers', 'audio-video', 'sun-control', 'led-lights', 'electronics'].includes(category.id)) {
                            visibleItems = isExpanded ? category.items : category.items.slice(0, 3);
                            hasMore = category.items.length > 3;
                        }
                    }

                    return (
                        <div key={category.id} id={category.id} className="mb-24 last:mb-0 scroll-mt-32">
                            <ScrollReveal direction="left" delay={100}>
                                <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4">
                                    <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-white">
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
                                                <h3 className="text-lg font-bold uppercase italic tracking-tight mb-2 text-gray-200 group-hover:text-white transition-colors">
                                                    {product.name}
                                                </h3>
                                                <div className="flex justify-between items-end mt-4">
                                                    <a
                                                        href={`https://wa.me/919822119832?text=${encodeURIComponent(`Hey, I want to know more about ${product.name} ${category.title}. Kindly share more details.`)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/btn"
                                                    >
                                                        <span className="text-brand-red text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover/btn:border-brand-red transition-all cursor-pointer">
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
            <footer className="bg-black pt-16 pb-10 border-t border-white/10 text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div className="col-span-1">
                        <Link to="/" className="inline-block mb-2">
                            <img src="/assets/figma-img/logo.png" alt="Captain Car" className="h-16 w-auto object-contain" />
                        </Link>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Car Audio & Accessories</p>

                        <div className="flex gap-4 mt-6">
                            <a href="https://www.instagram.com/captain_car_studio?igsh=N3JqNTNmOWVsNXZt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all group hover:scale-110 hover:shadow-[0_0_20px_rgba(227,30,36,0.4)]">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://wa.me/919822119832?text=HEY!%20I%20have%20an%20enquiry%20about%20car%20accessories." target="_blank" rel="noopener noreferrer" className="h-12 px-6 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center gap-3 hover:bg-[#25D366] hover:text-black transition-all group hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                <span className="font-bold uppercase tracking-wider text-xs text-[#25D366] group-hover:text-black">Chat With Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#E31E24] font-bold uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#E31E24]">›</span> Our Services</Link></li>
                            <li><Link to="/why-us" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#E31E24]">›</span> Why Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#E31E24]">›</span> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-[#E31E24] font-bold uppercase tracking-widest mb-6">Contact Us</h4>
                        <div className="space-y-6 text-gray-400">
                            <div className="flex items-start gap-4 group">
                                <span className="text-2xl text-[#E31E24] group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 018.59 3.91c0-.55-.45-1-1-1H4.39c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-bold">Call Us:</p>
                                    <p className="text-xl text-[#E31E24] font-black">9822119832</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="text-2xl text-[#E31E24] group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                </span>
                                <p>captaincardecor@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="text-2xl text-[#E31E24] group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                                </span>
                                <p>Mon - Sat: 10 AM - 9 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest gap-4">
                    <p>Copyright © 2025 Captain Car. All rights reserved.</p>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/datamatexlogo.webp" alt="DataMatex" className="w-12 h-auto object-contain hover:scale-110 transition-all duration-300" />
                        <p className="font-bold text-[10px]">Designed by <a href="https://datamatex.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-black"><span className="text-[#4F46E5]">Data</span><span className="text-[#F97316]">Matex</span></a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Products;
