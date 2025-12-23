import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16 font-sans selection:bg-[#E31E24] selection:text-white">

            <div className="container mx-auto px-6">

                {/* Header */}
                <ScrollReveal direction="down">
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
                            Get In <span className="text-[#E31E24]">Touch</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Ready to transform your vehicle? Reach out to us for a consultation or visit our workshop.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

                    {/* Left: Contact Info */}
                    <ScrollReveal direction="left">
                        <div className="space-y-12">
                            {/* Card 1: Phone */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#E31E24] transition-colors duration-300 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
                                    <svg className="w-8 h-8 fill-[#E31E24]" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 018.59 3.91c0-.55-.45-1-1-1H4.39c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase italic mb-1">Call Us</h3>
                                    <p className="text-gray-400 mb-2">Mon-Sat from 10am to 9pm.</p>
                                    <p className="text-[#E31E24] text-xl font-bold">9822119832</p>
                                    <p className="text-gray-500">9323567097 / 9970215597</p>
                                </div>
                            </div>

                            {/* Card 2: Email */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#E31E24] transition-colors duration-300 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
                                    <svg className="w-8 h-8 fill-[#E31E24]" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase italic mb-1">Email</h3>
                                    <p className="text-gray-400 mb-2">Drop us a line anytime.</p>
                                    <p className="text-white text-lg font-medium">contact@captaincar.in</p>
                                </div>
                            </div>

                            {/* Card 3: Location */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#E31E24] transition-colors duration-300 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
                                    <svg className="w-8 h-8 fill-[#E31E24]" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase italic mb-1">Visit Us</h3>
                                    <p className="text-gray-400 mb-2">Come see our work in person.</p>
                                    <p className="text-white text-lg font-medium max-w-xs">
                                        Next to Greenland Hotel, Chavindra, Bhiwandi, Maharashtra 421302
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Form */}
                    <ScrollReveal direction="right" delay={200}>
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E31E24]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <h3 className="text-3xl font-black text-white uppercase italic mb-8">Send a Message</h3>

                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Name</label>
                                        <input type="text" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#E31E24] transition-colors" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</label>
                                        <input type="tel" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#E31E24] transition-colors" placeholder="Your Number" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                                    <input type="email" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#E31E24] transition-colors" placeholder="your@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                                    <textarea rows="4" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#E31E24] transition-colors resize-none" placeholder="Tell us about your car..."></textarea>
                                </div>
                                <button type="button" className="w-full bg-[#E31E24] text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-[#E31E24] transition-all transform hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Map Section (Full Width) */}
            <div className="h-[500px] w-full relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.986877524957!2d73.0534!3d19.2829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE2JzU4LjQiTiA3M8KwMDMnMTIuMiJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin&q=Captain+Car+Accessories,+Next+to+Greenland+Hotel,+Chavindra,+Bhiwandi"
                    width="100%"
                    height="100%"
                    className="w-full h-full transition-all duration-700"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Overlay Text on Desktop Map */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>

        </div>
    );
};

export default ContactUs;
