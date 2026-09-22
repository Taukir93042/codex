import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Headphones, 
  ShieldCheck
  
} from "lucide-react";
import { toast } from "react-toastify";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    track: "Full-Stack Web Development",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      toast.success("Thank you! Your message has been sent to our admissions team.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        track: "Full-Stack Web Development",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section className="py-20 sm:py-28 bg-transparent px-4 sm:px-6 lg:px-8 relative" id="contact">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Headphones size={16} />
            <span>Connect With Admissions & Mentors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Have Questions? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Let's Talk About Your Career.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you want course recommendations, syllabus details, or corporate training, our team is ready to help.
          </p>
        </div>

        {/* 2-Column Grid: Contact Details (Left) + Form (Right) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Details Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Phone Card */}
            <a
              href="tel:+18005550199"
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition">Phone & WhatsApp Support</h4>
                <p className="text-sm font-semibold text-blue-400 mt-1">+1 (800) 555-0199</p>
                <p className="text-xs text-slate-400 mt-0.5">Toll-free student helpline</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:support@codecampus.com"
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">Email Inquiries</h4>
                <p className="text-sm font-semibold text-indigo-400 mt-1">support@codecampus.com</p>
                <p className="text-xs text-slate-400 mt-0.5">Average response under 2 hours</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Innovation Campus</h4>
                <p className="text-sm text-slate-300 mt-1">123 Innovation St, Silicon Valley, CA 94043</p>
                <p className="text-xs text-slate-400 mt-0.5">Open for scheduled in-person visits</p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Counseling Hours</h4>
                <p className="text-sm text-slate-300 mt-1">Monday – Saturday: 9:00 AM – 8:00 PM EST</p>
                <p className="text-xs text-slate-400 mt-0.5">24/7 Discord community support</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Glassmorphic Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-[#090e26]/90 border border-slate-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send Us a Direct Message</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">Fill out the form below and an instructor will contact you.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <MessageSquare size={20} />
                </div>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-semibold mb-6 flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                  <span>Your message has been sent successfully! Our team will respond shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition"
                    />
                  </div>
                </div>

                {/* Phone Number & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 019-2834"
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Course Syllabus & Admissions"
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition"
                    />
                  </div>
                </div>

                {/* Preferred Track / Course Subject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Topic of Interest / Preferred Track
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition"
                  >
                    <option value="Full-Stack Web Development">Full-Stack Web Development (React & Node)</option>
                    <option value="Python & AI Engineering">Python & AI Engineering</option>
                    <option value="Backend Architecture & DevOps">Backend Architecture & DevOps</option>
                    <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
                    <option value="General Admission & Mentorship">General Admission & Mentorship Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you're looking to learn or any questions you have about curriculum, timing, or certifications..."
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {/* Privacy note */}
                <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-500">
                  <ShieldCheck size={14} className="text-slate-400" />
                  <span>We value your privacy. Your information is never shared.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;