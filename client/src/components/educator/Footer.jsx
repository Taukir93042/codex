import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-800">
            CodeCampus
          </span>
          . All rights reserved.
        </p>

        {/* Center */}
        <p className="flex items-center gap-2 text-sm text-gray-500">
          Made with
          <FaHeart className="text-red-500" />
          by CodeCampus Team
        </p>

        {/* Right */}
        <div className="flex items-center gap-5 text-sm">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            Terms
          </a>

          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            Support
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;