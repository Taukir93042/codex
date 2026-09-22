import React, { useState, useContext, useEffect } from "react";
import { CourseContext } from "../context/Appcontext";
import { toast } from "react-toastify";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  X,
  User,
} from "lucide-react";
import { studentSignin, studentSignup } from "../api/studentApi";

const AuthModal = () => {
  const {
    authType,
    setAuthType,
    showAuthModal,
    setShowAuthModal,
    setIsLoggedIn,
    setStoreUser,
  } = useContext(CourseContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showAuthModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showAuthModal]);

  if (!showAuthModal) return null;

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (authType === "signup") {
        response = await studentSignup(formData);
      } else {
        response = await studentSignin({
          email: formData.email,
          password: formData.password,
        });
      }

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setStoreUser(response.data.user);
        setShowAuthModal(false);
        setIsLoggedIn(true);
      } else {
        toast.error(response.data.message || "Authentication failed");
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md p-4 animate-fade-in"
      onClick={() => setShowAuthModal(false)}
    >
      <div
        className="w-full max-w-md bg-slate-900/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 sm:p-8 relative shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)_inset] flex flex-col overflow-hidden max-h-[90vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Glass Lights */}
        <div className="absolute -top-20 -left-20 w-44 h-44 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-slate-300 hover:text-white transition duration-200 p-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full backdrop-blur-md cursor-pointer z-10"
          onClick={() => setShowAuthModal(false)}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 relative z-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {authType === "signup" ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-slate-300/80 text-xs mt-1.5 font-medium">
            {authType === "signup"
              ? "Join CodeCampus and build your software engineering career."
              : "Please sign in to access your purchased courses."}
          </p>
        </div>

        <form
          className="space-y-4 overflow-y-auto hide-scrollbar flex-grow pr-0.5 relative z-10"
          onSubmit={handleSubmit}
        >
          {/* Name Field (Signup Only) */}
          {authType === "signup" && (
            <div>
              <label
                className="block text-xs font-semibold text-slate-200 mb-1.5"
                htmlFor="name"
              >
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  name="name"
                  required
                  placeholder="John Doe"
                  onChange={handelChange}
                  className="w-full bg-black/30 hover:bg-black/40 focus:bg-black/50 backdrop-blur-md border border-white/15 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500/25 transition-all shadow-inner"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label
              className="block text-xs font-semibold text-slate-200 mb-1.5"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                placeholder="john@example.com"
                onChange={handelChange}
                className="w-full bg-black/30 hover:bg-black/40 focus:bg-black/50 backdrop-blur-md border border-white/15 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500/25 transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              className="block text-xs font-semibold text-slate-200 mb-1.5"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                placeholder="enter strong password"
                name="password"
                onChange={handelChange}
                value={formData.password}
                className="w-full bg-black/30 hover:bg-black/40 focus:bg-black/50 backdrop-blur-md border border-white/15 focus:border-cyan-400 rounded-xl pl-10 pr-10 py-2.5 sm:py-3 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500/25 transition-all shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2563eb]/30 hover:bg-[#2563eb]/45 backdrop-blur-md border border-[#3b82f6]/50 hover:border-[#60a5fa]/70 text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-6 hover:-translate-y-0.5 active:translate-y-0"
          >
            {loading ? "Please wait..." : authType === "signup" ? "Create Account" : "Sign In"}
          </button>
        </form>

        {/* Modal Switch Footer */}
        <div className="mt-6 pt-4 border-t border-white/15 text-center text-xs text-slate-300/80 relative z-10">
          {authType === "signup" ? (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                className="font-bold text-blue-400 hover:text-blue-300 transition cursor-pointer ml-1 underline underline-offset-4 decoration-blue-400/40 hover:decoration-blue-300"
                onClick={() => setAuthType("signin")}
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account yet?{" "}
              <button
                type="button"
                className="font-bold text-blue-400 hover:text-blue-300 transition cursor-pointer ml-1 underline underline-offset-4 decoration-blue-400/40 hover:decoration-blue-300"
                onClick={() => setAuthType("signup")}
              >
                Sign Up Free
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
