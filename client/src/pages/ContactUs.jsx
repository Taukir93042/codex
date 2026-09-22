import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { assets } from "../assets/assets.js";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="flex-grow max-w-full">
        {/* ================= THIN HERO BANNER SECTION WITH IMAGE ================= */}
        <section className="relative w-full overflow-hidden bg-[#030712] border-b border-slate-800/80">
          {/* Background Image with Crisp Contrast */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url(${assets.courses_banner_hero || assets.about_us_workspace || assets.banner_img})`,
            }}
          />

          {/* Very Light Subtle Tint For High Image Clarity & Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />

          {/* Ambient Neon Cyan / Blue Subtle Glow Behind Centered Text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-28 bg-blue-600/15 rounded-full blur-[80px] pointer-events-none" />

          {/* Banner Content Container (Centered & Thin) */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-11 z-10 flex flex-col items-center justify-center text-center">
            
            {/* Section Tag */}
            <div className="flex items-center justify-center gap-2 mb-2 drop-shadow-md">
              <div className="w-8 h-[2px] bg-gradient-to-l from-[#38bdf8] to-transparent rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                GET IN TOUCH
              </span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Contact Us
            </h2>
              
            {/* Breadcrumb Navigation with Home Link */}
            <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-200 mt-2.5 sm:mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <Link
                to="/"
                className="text-slate-200 hover:text-cyan-400 font-semibold transition-colors"
              >
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-300" />
              <span className="text-cyan-400 font-bold">Contact</span>
            </nav>

          </div>
        </section>

        {/* Main Grid Content */}
        <section className="py-16 px-4 sm:px-10 bg-[#050816]">
          <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
            
            {/* Left Side: Contact Information Card Grid */}
            <div className="flex flex-col space-y-8 lg:sticky lg:top-8 self-start">
              <div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">Connect With Us</h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Whether you have questions, need guidance, or want to learn more, we're here to help.
                </p>
              </div>

              {/* Info Details Cards */}
              <div className="grid gap-6 w-full max-w-xl">
                
                {/* Phone */}
                <div className="group p-6 rounded-2xl border flex items-center border-slate-800/80 bg-[#0b1129]/60 hover:border-blue-500/40 transition duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition duration-300 flex-shrink-0 mr-4">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition">Phone Support</h3>
                    <p className="font-semibold text-blue-400 text-sm mt-1">
                      +1 (800) 555-0199
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="group p-6 rounded-2xl border flex items-center border-slate-800/80 bg-[#0b1129]/60 hover:border-blue-500/40 transition duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition duration-300 flex-shrink-0 mr-4">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition">Email Inquiries</h3>
                    
                    <p className="font-semibold text-blue-400 text-sm mt-1">
                      support@codecampus.com
                    </p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="group p-6 rounded-2xl border flex items-center border-slate-800/80 bg-[#0b1129]/60 hover:border-blue-500/40 transition duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition duration-300 flex-shrink-0 mr-4">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition">Headquarters</h3>
                    <p className="font-semibold text-blue-400 text-sm mt-1">
                      123 Innovation St, CA 94043
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="group p-6 rounded-2xl border flex items-center border-slate-800/80 bg-[#0b1129]/60 hover:border-blue-500/40 transition duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition duration-300 flex-shrink-0 mr-4">
                    <FaClock size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition">Support Hours</h3>
                    <p className="font-semibold text-blue-400 text-sm mt-1">
                      Mon - Fri: 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Contact Form Container */}
            <div className="rounded-3xl border border-slate-800/80 bg-[#0b1129]/40 p-8 lg:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl"></div>
              
              <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
             <p className="text-white mb-8 leading-relaxed">
  Fill out the form below, and we'll get back to you soon.
</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3 relative z-10">
                {/* First and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition duration-200"
                    />
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+1 (800) 555-0199"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Describe your inquiry in detail..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20 text-center cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* Map Location Section */}
        <section className="pb-20 px-4 sm:px-10 bg-[#050816]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="px-6 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold uppercase tracking-wider text-sm">
                Our Location
              </span>
              <h2 className="text-4xl font-extrabold mt-6 text-white tracking-tight">Find Us on the Map</h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                Stop by our main campus or get directions to attend our regular student workshops and hackathons.
              </p>
            </div>
            
            <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
              <iframe
                title="CodeCampus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325335515754!2d-122.01116148469499!3d37.33468037984242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sus!4v1659999999999!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale invert opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-500"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
