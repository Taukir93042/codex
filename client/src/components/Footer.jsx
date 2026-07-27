import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Logo & About */}

          <div>
            <div className="flex items-center gap-3">

              <img
                src={assets.favicon}
                alt="CodeCampus"
                className="h-10"
              />

              <h2 className="text-2xl font-bold text-white">
                CodeCampus
              </h2>

            </div>

            <p className="mt-6 text-gray-400 leading-8">
              CodeCampus is an online learning platform helping students
              master programming, web development, data science, and
              modern technologies through industry-ready courses.
            </p>
          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Company
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Courses
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Privacy Policy
                </a>
              </li>

            </ul>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Subscribe to our Newsletter
            </h3>

            <p className="text-gray-400 mb-6">
              Get the latest courses, coding tips, resources, and updates
              delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} CodeCampus. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
};

export default Footer;