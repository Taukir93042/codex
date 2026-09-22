import { useState, useContext, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Search } from "lucide-react";
import { CourseContext } from "../context/Appcontext";
import { assets } from "../assets/assets.js";

const Header = () => {
  const {
    showAuthModal,
    setShowAuthModal,
    setAuthType,
    isLoggedIn,
    setIsLoggedIn,
    setStoreUser,
    storeUser,
  } = useContext(CourseContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setStoreUser(null);
    setIsLoggedIn(false);
    setProfileOpen(false);
    setMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/course-list?search=${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030712]/95 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-1.5 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={assets.logo || assets.codecampus_logo}
            alt="CodeCampus"
            className="h-12 sm:h-14 md:h-16 lg:h-[82px] w-auto object-contain hover:scale-105 transition-all duration-200 drop-shadow-[0_2px_12px_rgba(59,130,246,0.18)]"
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm lg:text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 relative py-1 ${
                isActive
                  ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#3b82f6] after:rounded-full"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/course-list"
            className={({ isActive }) =>
              `transition-colors duration-200 relative py-1 ${
                isActive
                  ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#3b82f6] after:rounded-full"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `transition-colors duration-200 relative py-1 ${
                isActive
                  ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#3b82f6] after:rounded-full"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            About
          </NavLink>
          
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `transition-colors duration-200 relative py-1 ${
                isActive
                  ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#3b82f6] after:rounded-full"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right: Search Input + Log In + Sign Up */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Search Pill Input */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center relative"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-40 lg:w-48 xl:w-56 bg-[#070d24] border border-slate-700/80 rounded-full pl-4 pr-9 py-1.5 text-xs xl:text-sm text-white placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 text-slate-400 hover:text-blue-400 transition cursor-pointer"
              title="Search"
            >
              <Search size={15} />
            </button>
          </form>

          {/* User Auth Buttons or Profile Menu */}
          {isLoggedIn ? (
            <div className="relative shrink-0" ref={profileRef}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setProfileOpen(!profileOpen);
                }}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/70 transition text-sm font-medium cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  {storeUser?.name ? storeUser.name.charAt(0).toUpperCase() : <FaUserCircle size={16} />}
                </div>
                <span className="text-slate-200 max-w-[100px] truncate text-xs xl:text-sm">{storeUser?.name || "Account"}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-12 w-56 bg-[#090e24] rounded-xl shadow-2xl overflow-hidden z-50 border border-slate-700 p-1.5 backdrop-blur-xl">
                  <div className="px-3.5 py-2.5 border-b border-slate-800">
                    <p className="text-xs text-slate-400">Signed in as</p>
                    <p className="text-sm font-bold text-white truncate">{storeUser?.name || "Student"}</p>
                  </div>

                  <Link
                    to="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg transition hover:bg-blue-600/15 text-xs xl:text-sm text-slate-200 hover:text-white"
                  >
                    <FaUser className="text-slate-400" />
                    <span>Dashboard & Profile</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg mt-1 transition hover:bg-red-500/15 text-left cursor-pointer text-xs xl:text-sm text-red-400"
                  >
                    <FaSignOutAlt className="text-red-400" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => {
                  setAuthType("signin");
                  setShowAuthModal(true);
                }}
                className="px-4 py-1.5 rounded-xl text-xs xl:text-sm font-semibold text-slate-200 hover:text-white bg-transparent hover:bg-slate-800/80 border border-slate-700/80 transition cursor-pointer whitespace-nowrap shrink-0"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setAuthType("signup");
                  setShowAuthModal(true);
                }}
                className="px-4 py-1.5 rounded-xl text-xs xl:text-sm font-semibold text-white bg-[#2563eb] hover:bg-blue-600 transition shadow-md shadow-blue-600/25 cursor-pointer whitespace-nowrap shrink-0 hover:-translate-y-0.5"
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-xl text-slate-200 hover:text-white transition cursor-pointer"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative ml-auto h-full w-72 max-w-[80vw] bg-[#050816] border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-10">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src={assets.logo || assets.codecampus_logo}
                    alt="CodeCampus"
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <HiX size={20} />
                </button>
              </div>

              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="mt-5 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-3 pr-8 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-blue-500"
                />
                <button type="submit" className="absolute right-2.5 top-2.5 text-slate-400">
                  <Search size={14} />
                </button>
              </form>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-1.5 mt-5">
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive ? "bg-blue-600/20 text-blue-400 font-semibold" : "text-slate-300 hover:bg-slate-900"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/course-list"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive ? "bg-blue-600/20 text-blue-400 font-semibold" : "text-slate-300 hover:bg-slate-900"
                    }`
                  }
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/about-us"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive ? "bg-blue-600/20 text-blue-400 font-semibold" : "text-slate-300 hover:bg-slate-900"
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/about-us"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive ? "bg-blue-600/20 text-blue-400 font-semibold" : "text-slate-300 hover:bg-slate-900"
                    }`
                  }
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/contact-us"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive ? "bg-blue-600/20 text-blue-400 font-semibold" : "text-slate-300 hover:bg-slate-900"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </nav>
            </div>

            {/* Mobile Auth Bottom Section */}
            <div className="pt-5 border-t border-slate-800">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium border border-slate-800"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-center py-2.5 rounded-xl bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setAuthType("signin");
                      setShowAuthModal(true);
                      setMenuOpen(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-medium"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      setAuthType("signup");
                      setShowAuthModal(true);
                      setMenuOpen(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-600/30"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
