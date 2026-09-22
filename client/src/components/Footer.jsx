import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <footer className="w-full bg-[#030511] text-slate-400 pt-5 pb-4 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo | Nav Links | Social Icons + Handwriting */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pb-4 border-b border-slate-800/60">
          
          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={assets.logo || assets.codecampus_logo}
              alt="CodeCampus"
              className="h-20 sm:h-18 md:h-16 w-auto object-contain hover:scale-105 transition-all duration-200"
            />
          </Link>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-slate-300">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/course-list" className="hover:text-cyan-400 transition-colors">
              Courses
            </Link>
            <Link to="/about-us" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            
            <Link to="/contact-us" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right: Social Media Icons + Aesthetic Script */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="YouTube"
              >
                <FaYoutube size={15} />
              </a>
            </div>

            
          </div>

        </div>

        {/* Bottom Row: Copyright & Legal Policies */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs text-slate-500">
          <p>© 2025 Code Campus. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link to="/about-us" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about-us" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact-us" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
