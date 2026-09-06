import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import InstructorAuthModal from "./InstructorAuthModal";
import { FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { CourseContext } from "../context/Appcontext";

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
  const profileRef = useRef(null);

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

  useEffect(() => {
    console.log("store user", storeUser);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setStoreUser(null);
    setIsLoggedIn(false);
    setProfileOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="relative w-full border-b border-slate-800 bg-[#050816] px-10 text-white">
        <div className=" max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold">
            Code<span className="text-blue-600">Campus</span>
          </Link>
          <nav className="hidden min-[878px]:flex items-center gap-10 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/course-list"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600"
              }
            >
              Courses
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600"
              }
            >
              Contact
            </NavLink>
          </nav>
          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Desktop Button */}

            <div className="hidden min-[878px]:flex items-center gap-3">
              {isLoggedIn ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setProfileOpen(!profileOpen);
                    }}
                    className="flex items-center gap-3 text-lg hover:text-blue-600 cursor-pointer"
                  >
                    <FaUserCircle className="text-3xl" />
                    <span>{storeUser?.name}</span>
                  </button>
                  {profileOpen && (
                    <div className="absolute right-0 top-12 w-48 bg-[#080d1d] rounded-xl shadow-2xl overflow-hidden z-50 border border-slate-700/80">
                      {/* Profile */}
                      <Link
                        to="/profile"
                        onClick={() => setProfileOpen(false)}
                        className="group flex items-center gap-3 px-5 py-3.5 transition hover:bg-blue-600/10"
                      >
                        <FaUser className="text-slate-400 group-hover:text-blue-400 transition" />

                        <span className="text-slate-200 group-hover:text-white transition">
                          Profile
                        </span>
                      </Link>

                      {/* Logout */}
                      <button
                        onClick={handleLogout}
                        className="group w-full flex items-center gap-3 px-5 py-3.5 border-t border-slate-800 transition hover:bg-red-500/10 text-left cursor-pointer"
                      >
                        <FaSignOutAlt className="text-red-400" />

                        <span className="text-red-400">Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setAuthType("signin");
                      setShowAuthModal(true);
                    }}
                    className="px-5 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 transition cursor-pointer"
                  >
                    Sigin
                  </button>
                  <button
                    onClick={() => {
                      setAuthType("signup");
                      setShowAuthModal(true);
                    }}
                    className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold cursor-pointer"
                  >
                    Create Acount
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="min-[878px]:hidden text-3xl"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className={`fixed top-0 right-0 h-screen w-72 bg-[#050816] border-l border-slate-700 z-50 transform transition-transform duration-300 ease-in-out min-[878px]:hidden ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <div className="flex justify-end p-5">
              <button onClick={() => setMenuOpen(false)}>
                <HiX className="text-3xl" />
              </button>
            </div>

            <nav className="flex flex-col">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 hover:bg-slate-800"
              >
                Home
              </NavLink>

              <NavLink
                to="/about-us"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 hover:bg-slate-800"
              >
                About
              </NavLink>

              <NavLink
                to="/course-list"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 hover:bg-slate-800"
              >
                Courses
              </NavLink>

              <NavLink
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 hover:bg-slate-800"
              >
                Contact
              </NavLink>

              <div className="px-6 py-4">
                {isLoggedIn ? (
                  <div className="relative flex flex-col items-start gap-3 w-full">
                    <button
                      onClick={() => setProfileOpen(!profileOpen)}
                      className="flex items-center gap-3 text-lg hover:text-blue-600 cursor-pointer text-white w-full text-left"
                    >
                      <FaUserCircle className="text-3xl" />
                      <span>{storeUser?.name}</span>
                    </button>
                    {profileOpen && (
                      <div className="w-full bg-white text-slate-800 rounded-lg shadow-xl overflow-hidden z-50 border border-slate-200 mt-2">
                        {/* Profile */}
                        <Link
                          to="/profile"
                          onClick={() => {
                            setProfileOpen(false);
                            setMenuOpen(false);
                          }}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 transition text-slate-700 hover:text-slate-900"
                        >
                          <FaUser className="text-slate-500" />
                          Profile
                        </Link>

                        {/* Logout */}
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-100 transition text-red-500 text-left cursor-pointer border-t border-slate-100"
                        >
                          <FaSignOutAlt className="text-red-500" />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setAuthType("signup");
                        setShowAuthModal(true);
                        setMenuOpen(false);
                      }}
                      className="w-full text-center bg-blue-600 py-3 rounded-full font-semibold text-white cursor-pointer"
                    >
                      Create Account
                    </button>

                    <button
                      onClick={() => {}}
                      className="w-full text-center bg-slate-800 border border-slate-700 py-3 rounded-full font-semibold text-white cursor-pointer"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Modal */}
    </>
  );
};

export default Header;
