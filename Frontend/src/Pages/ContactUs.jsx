import React, { useState } from 'react';
import ScrollReveal from '../Components/ScrollReveal';

const ContactUs = () => {
    const [submitted, setSubmitted] = useState(false);

    const contactMethods = [
        {
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 018.59 3.91c0-.55-.45-1-1-1H4.39c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" /></svg>,
            title: "Call Us",
            subtitle: "Mon-Sat from 10am to 9pm",
            value: "9822119832",
            subValue: "9323567097 / 9970215597",
            color: "text-[#E31E24]"
        },
        {
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>,
            title: "Email",
            subtitle: "Drop us a line anytime",
            value: "captaincardecor@gmail.com",
            color: "text-white"
        },
        {
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>,
            title: "Visit Us",
            subtitle: "Bhiwandi, Maharashtra",
            value: "Next to Greenland Hotel, Chavindra, Bhiwandi, 421302",
            color: "text-white"
        },
        {
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
            title: "WhatsApp Chat",
            subtitle: "Instant Response",
            value: "Chat Now",
            color: "text-[#25D366]",
            href: "https://wa.me/919822119832?text=HEY!%20I%20have%20an%20enquiry%20about%20car%20accessories."
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans selection:bg-[#E31E24] selection:text-white relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E31E24]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E31E24]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto px-6 relative z-10">



                {/* Header Section */}
                <ScrollReveal direction="down">
                    <div className="text-left mb-24 md:pl-14 lg:pl-26">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-[#E31E24]/30 bg-[#E31E24]/5 mb-6">
                            <span className="text-[#E31E24] text-xs font-black uppercase tracking-[0.3em]">Direct Connection</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-[0.8] flex flex-col items-start">
                            Reach <span className="text-[#E31E24] skew-x-[-10deg]">Captain.</span>
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light leading-relaxed">
                            Have a vision for your ride? Let's discuss your transformation. Our experts are ready to turn your automotive dreams into reality.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side: Information */}
                    <div className="lg:col-span-5 space-y-8">
                        {contactMethods.map((method, idx) => (
                            <ScrollReveal key={idx} direction="left" delay={idx * 100}>
                                <a
                                    href={method.href || '#'}
                                    target={method.href ? "_blank" : "_self"}
                                    rel={method.href ? "noopener noreferrer" : ""}
                                    className="block"
                                >
                                    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 hover:border-[#E31E24]/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E31E24]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex gap-6 relative z-10">
                                            <div className={`w-16 h-16 shrink-0 rounded-2xl bg-[#0d0d0d] border border-white/10 flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-500 shadow-xl group-hover:scale-110`}>
                                                <div className={`fill-[#E31E24] group-hover:fill-white transition-colors`}>
                                                    {method.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-black uppercase italic mb-1 tracking-tight">{method.title}</h3>
                                                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-4 font-bold">{method.subtitle}</p>
                                                <p className={`text-lg font-bold ${method.color}`}>{method.value}</p>
                                                {method.subValue && <p className="text-gray-500 text-sm mt-1">{method.subValue}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </ScrollReveal>
                        ))}

                        {/* Social Links */}
                        <ScrollReveal direction="up" delay={400}>
                            <div className="bg-gradient-to-r from-[#1a0505] to-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 mt-12 relative overflow-hidden">
                                <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-6 text-gray-500 underline decoration-[#E31E24] underline-offset-8">Follow Our Work</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <a
                                        href="https://www.instagram.com/captain_car_studio?igsh=N3JqNTNmOWVsNXZt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col items-center justify-center py-6 rounded-2xl border border-white/10 hover:border-[#E31E24] hover:bg-gradient-to-br hover:from-[#E31E24]/10 hover:to-transparent transition-all"
                                    >
                                        <div className="w-12 h-12 mb-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px] rounded-xl group-hover:scale-110 transition-transform">
                                            <div className="bg-black w-full h-full rounded-[10px] flex items-center justify-center">
                                                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                            </div>
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest text-white group-hover:text-[#E31E24] transition-colors">Instagram</span>
                                    </a>

                                    <a
                                        href="https://youtube.com/@captaincarstudio?si=YIjjoSJTTAiJtTVc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col items-center justify-center py-6 rounded-2xl border border-white/10 hover:border-[#FF0000] hover:bg-gradient-to-br hover:from-[#FF0000]/10 hover:to-transparent transition-all"
                                    >
                                        <div className="w-12 h-12 mb-3 bg-[#FF0000] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all">
                                            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest text-white group-hover:text-[#FF0000] transition-colors">YouTube</span>
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Side: Form Section */}
                    <ScrollReveal direction="right" delay={200} className="lg:col-span-7">
                        <div className="bg-[#080808] border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                            {/* Inner Shadows and Lights */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31E24]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#E31E24]/10 transition-colors duration-700" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-700" />

                            <div className="mb-12 relative z-10">
                                <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4 flex items-center gap-3">
                                    Inquiry Form
                                    <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
                                </h3>
                                <div className="w-full h-[1px] bg-white/10">
                                    <div className="w-20 h-full bg-[#E31E24]"></div>
                                </div>
                            </div>

                            {submitted ? (
                                <div className="text-center py-20 animate-fade-in relative z-10">
                                    <div className="w-24 h-24 bg-gradient-to-br from-[#E31E24] to-[#990a0f] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(227,30,36,0.4)] relative">
                                        <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-20" />
                                        <svg className="w-12 h-12 fill-white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                    </div>
                                    <h4 className="text-3xl font-black text-white uppercase italic mb-4">Transmission Received!</h4>
                                    <p className="text-gray-400 text-lg">Our specialists will contact you within 24 hours.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-10 px-8 py-3 rounded-full border border-white/20 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                    >
                                        New Inquiry
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
                                    <form
                                        action="https://docs.google.com/forms/d/e/1FAIpQLSdnbal2oJXly_MLc_HYrvU1Mbqh_GcBHMOgA2f1nW0MPAvJGw/formResponse"
                                        method="POST"
                                        target="hidden_iframe"
                                        onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
                                        className="space-y-8 relative z-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="relative group/input">
                                                <label className="text-[10px] font-black text-[#E31E24] uppercase tracking-[0.3em] ml-4 mb-2 block"> Name</label>
                                                <input
                                                    type="text"
                                                    name="entry.392644873"
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:bg-white/10 focus:border-[#E31E24] transition-all duration-300 placeholder:text-gray-600"
                                                    placeholder="Enter Full Name"
                                                />
                                                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent scale-x-0 group-hover/input:scale-x-100 transition-transform duration-500" />
                                            </div>
                                            <div className="relative group/input">
                                                <label className="text-[10px] font-black text-[#E31E24] uppercase tracking-[0.3em] ml-4 mb-2 block">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="entry.82022918"
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:bg-white/10 focus:border-[#E31E24] transition-all duration-300 placeholder:text-gray-600"
                                                    placeholder="+91-00000-00000"
                                                />
                                                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent scale-x-0 group-hover/input:scale-x-100 transition-transform duration-500" />
                                            </div>
                                        </div>
                                        <div className="relative group/input">
                                            <label className="text-[10px] font-black text-[#E31E24] uppercase tracking-[0.3em] ml-4 mb-2 block">Email Access</label>
                                            <input
                                                type="email"
                                                name="entry.2067350709"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:bg-white/10 focus:border-[#E31E24] transition-all duration-300 placeholder:text-gray-600"
                                                placeholder="pilot@shuttle.com"
                                            />
                                            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent scale-x-0 group-hover/input:scale-x-100 transition-transform duration-500" />
                                        </div>
                                        <div className="relative group/input">
                                            <label className="text-[10px] font-black text-[#E31E24] uppercase tracking-[0.3em] ml-4 mb-2 block">Message</label>
                                            <textarea
                                                name="entry.5473408"
                                                required
                                                rows="5"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:bg-white/10 focus:border-[#E31E24] transition-all duration-300 placeholder:text-gray-600 resize-none"
                                                placeholder="Tell us about your machine and the vision you have for it..."
                                            ></textarea>
                                            <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent scale-x-0 group-hover/input:scale-x-100 transition-transform duration-500" />
                                        </div>
                                        <button type="submit" className="w-full bg-gradient-to-r from-[#E31E24] to-[#B01015] text-white font-black uppercase tracking-[0.4em] py-5 rounded-2xl hover:bg-white hover:text-white hover:to-white transition-all transform hover:-translate-y-2 shadow-[0_20px_40px_rgba(227,30,36,0.2)] hover:shadow-[0_0_60px_rgba(227,30,36,0.4)] relative overflow-hidden group/btn">
                                            <span className="relative z-10">Send Message</span>
                                            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 z-0 opacity-0 group-hover/btn:opacity-10" />
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Opening Hours / Side Note */}
                <ScrollReveal direction="up" delay={500}>
                    <div className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest mb-2">Workshop Hours</h4>
                            <p className="text-gray-500 font-medium italic">We operate with precision from <span className="text-[#E31E24]">Monday to Saturday, 10:00 AM - 09:00 PM</span>. Sundays are for testing.</p>
                        </div>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-xs text-gray-600 font-bold uppercase tracking-widest mb-1">Cars Customised</p>
                                <p className="text-2xl font-black text-white italic tracking-tighter">5000+</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-600 font-bold uppercase tracking-widest mb-1">Happy Clients</p>
                                <p className="text-2xl font-black text-white italic tracking-tighter">4.6/5</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>

            {/* Map Section (Refined) */}
            <div className="relative h-[600px] w-full mt-20 group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-[#0a0a0a]/80 backdrop-blur-md rounded-full border border-white/10 group-hover:border-[#E31E24]/50 transition-all">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E31E24]">Live Navigation</span>
                </div>
                <iframe
                    title="Captain Car Audio & Accessories Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83194.4788254592!2d73.05857195929217!3d19.274098379261684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd0bd3ab28a7%3A0x9a04787bb35296c9!2sCaptain%20Car%20Audio!5e0!3m2!1sen!2sin!4v1766560019806!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    className="w-full h-full grayscale-[0.2] contrast-[1.1] brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="eager"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    referrerPolicy="no-referrer"
                ></iframe>
            </div>

        </div>
    );
};

export default ContactUs;
