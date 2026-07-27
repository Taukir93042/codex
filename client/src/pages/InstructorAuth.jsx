import React from "react";
import { assets } from "../assets/assets.js";
import { Mail, Lock, Eye, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InstructorAuth = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-[28px] shadow-[0_18px_60px_rgba(15,23,42,0.12)] overflow-hidden grid lg:grid-cols-[0.95fr_0.9fr]">
        <div className="relative hidden lg:flex items-center justify-center bg-slate-950">
          <img
            src={assets.instructorAuth1}
            alt="Instructor working"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-slate-350/88"></div>
          <button className="absolute top-10 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15 cursor-pointer" onClick={()=>navigate("/")}>
            <ArrowLeft size={16} />
            Back to home
          </button>
          <div className="relative z-10 p-8 text-white max-w-md">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400 mb-3">
              Instructor space
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Teach.
              <br />
              Inspire.
              <br />
              Empower.
            </h1>
            <div className="w-16 h-[3px] bg-amber-400 rounded-full my-5"></div>
            <p className="text-slate-300 text-sm leading-6">
              Welcome to CodeCampus instructor login. Build courses, manage
              students, and share what you know.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 flex items-center justify-center bg-slate-50">
          <div className="w-full max-w-sm">
            <div className="text-center mb-7">
              <h2 className="text-3xl font-semibold tracking-tight">
                Code<span className="text-blue-600">Campus</span>
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Instructor login to manage your classroom and content.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <Mail size={18} className="text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <Lock size={18} className="text-slate-400" />
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    className="text-slate-400 hover:text-slate-600 transition"
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] sm:text-sm text-slate-500">
                <button
                  type="button"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Forgot password?
                </button>
                <span>Instructor only</span>
              </div>

              <button
                type="button"
                className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-white text-sm font-semibold transition hover:bg-blue-700"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <User size={18} />
                  Login as Instructor
                </span>
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
              New to CodeCampus? Contact support to set up your instructor
              account.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorAuth;
