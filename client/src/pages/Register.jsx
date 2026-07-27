import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, GraduationCap, Briefcase, AlertCircle, CheckCircle2, ArrowLeft, User, ShieldCheck } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student"); // "student" or "instructor"
  
  // Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation & Form States
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Live password strength indicator
  const getPasswordStrength = () => {
    if (!password) return { label: "", color: "bg-gray-200", width: "w-0" };
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (password.length >= 10) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    if (strength <= 2) return { label: "Weak", color: "bg-red-500", width: "w-1/3" };
    if (strength <= 4) return { label: "Medium", color: "bg-amber-500", width: "w-2/3" };
    return { label: "Strong", color: "bg-emerald-500", width: "w-full" };
  };

  const strengthInfo = getPasswordStrength();

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role !== "student") {
      setErrors({ form: "Instructor registration is closed. Please sign up as a student." });
      return;
    }

    if (!validateForm()) return;

    // Simulate signup loading and success
    setIsLoading(true);
    setErrors({});

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Redirect to login after showing success check
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row font-sans">
      
      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-10 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition bg-white py-2 px-4 rounded-full shadow-sm border border-gray-100"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Left Panel: Aesthetic visual showcase (hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12 text-white">
        
        {/* Animated Background Gradients & Grids */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_40%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Logo */}
        <div className="relative z-10">
          <Link to="/" className="text-3xl font-extrabold tracking-tight">
            Code<span className="text-blue-500">Campus</span>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="relative z-10 max-w-md my-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <GraduationCap className="w-4 h-4" /> Student Portal
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-6">
            Join the developer ecosystem.
          </h1>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Learn from the best</h4>
                <p className="text-slate-400 text-sm mt-1">Get access to professional curriculums curated by industry experts.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Verifiable Certifications</h4>
                <p className="text-slate-400 text-sm mt-1">Share secure, verified credentials to enhance your resume and LinkedIn.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/20 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Collaborative Community</h4>
                <p className="text-slate-400 text-sm mt-1">Engage with thousands of fellow students in peer review code tasks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-xs text-slate-500 flex justify-between">
          <span>&copy; {new Date().getFullYear()} CodeCampus Inc.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition">Terms</a>
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Right Panel: Register Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 relative bg-slate-50">
        
        {/* Subtle grid backdrop for mobile */}
        <div className="absolute inset-0 opacity-5 lg:hidden bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="w-full max-w-md relative z-10 my-8">
          
          {/* Header */}
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Create Account
            </h2>
            <p className="text-slate-500 text-sm">
              Register to begin tracking your course completions.
            </p>
          </div>

          {/* Glassmorphic/Shadow Form Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            
            {/* Role Select Tabs */}
            <div className="flex bg-slate-100 p-1.5 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => {
                  setRole("student");
                  setErrors({});
                }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2 ${
                  role === "student"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Student
              </button>
              <button
                type="button"
                onClick={() => {
                  setRole("instructor");
                  setErrors({});
                }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2 ${
                  role === "instructor"
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-400 hover:text-slate-500 cursor-not-allowed"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Instructor
              </button>
            </div>

            {/* Error Message for Disabled Role */}
            {role === "instructor" && (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 mb-6 flex gap-3 items-start animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs">Instructor Registration Restricted</h4>
                  <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                    Instructor accounts cannot be self-registered on this application. Please contact administration.
                  </p>
                </div>
              </div>
            )}

            {/* Success Animation overlay inside card */}
            {isSuccess && (
              <div className="absolute inset-0 bg-white/95 rounded-3xl z-20 flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 animate-scaleUp">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Registration Complete</h3>
                <p className="text-slate-500 text-sm mt-1">Your account has been successfully created.</p>
                <p className="text-slate-400 text-xs mt-1">Simulating redirect to sign in...</p>
                <div className="w-24 h-1 bg-slate-100 rounded-full mt-6 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full animate-loadingBar" />
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form level error */}
              {errors.form && (
                <div className="bg-red-50 text-red-600 text-xs font-medium p-3 rounded-lg border border-red-100 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errors.form}
                </div>
              )}

              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    disabled={role !== "student" || isLoading}
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full bg-slate-50 border ${
                      errors.name ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                    } rounded-xl py-2.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4 disabled:opacity-50`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    disabled={role !== "student" || isLoading}
                    placeholder="jane.doe@codecampus.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-slate-50 border ${
                      errors.email ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                    } rounded-xl py-2.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4 disabled:opacity-50`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    disabled={role !== "student" || isLoading}
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full bg-slate-50 border ${
                      errors.password ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                    } rounded-xl py-2.5 pl-11 pr-11 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4 disabled:opacity-50`}
                  />
                  <button
                    type="button"
                    disabled={role !== "student" || isLoading}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Password Strength bar */}
                {password && (
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-bold text-slate-500">Password Strength:</span>
                      <span className="font-bold text-slate-700">{strengthInfo.label}</span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden flex">
                      <div className={`h-full ${strengthInfo.color} ${strengthInfo.width} transition-all duration-300`} />
                    </div>
                  </div>
                )}
                {errors.password && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    disabled={role !== "student" || isLoading}
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full bg-slate-50 border ${
                      errors.confirmPassword ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                    } rounded-xl py-2.5 pl-11 pr-11 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4 disabled:opacity-50`}
                  />
                  <button
                    type="button"
                    disabled={role !== "student" || isLoading}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Agree Terms Checkbox */}
              <div className="space-y-1.5">
                <div className="flex items-start">
                  <input
                    id="agree-terms"
                    type="checkbox"
                    disabled={role !== "student" || isLoading}
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 h-4.5 w-4.5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer disabled:opacity-50"
                  />
                  <label
                    htmlFor="agree-terms"
                    className="ml-2 block text-xs text-slate-600 cursor-pointer select-none leading-normal font-medium"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 font-bold hover:underline">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 font-bold hover:underline">Privacy Policy</a>.
                  </label>
                </div>
                {errors.agreeTerms && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.agreeTerms}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={role !== "student" || isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl py-3.5 font-bold shadow-lg shadow-blue-200/50 hover:shadow-blue-300/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <>
                    Sign Up
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Login Redirect */}
          <div className="text-center mt-6">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition"
              >
                Sign In
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
