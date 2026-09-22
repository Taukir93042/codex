import React from "react";
import { UserPlus, Compass, Code2, Award, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create an Account",
      desc: "Sign up in seconds and get instant access to free lessons and developer resources.",
      icon: <UserPlus className="w-6 h-6 text-blue-400" strokeWidth={2.2} />,
      accent: "from-blue-500/20 to-cyan-500/10",
      borderAccent: "border-blue-500/30",
    },
    {
      step: "02",
      title: "Choose Your Path",
      desc: "Explore 200+ structured courses across Web Dev, DevOps, Python, AI, and more.",
      icon: <Compass className="w-6 h-6 text-indigo-400" strokeWidth={2.2} />,
      accent: "from-indigo-500/20 to-blue-500/10",
      borderAccent: "border-indigo-500/30",
    },
    {
      step: "03",
      title: "Learn & Build Projects",
      desc: "Watch practical videos, code real-world applications, and get 1-on-1 doubt support.",
      icon: <Code2 className="w-6 h-6 text-cyan-400" strokeWidth={2.2} />,
      accent: "from-cyan-500/20 to-blue-500/10",
      borderAccent: "border-cyan-500/30",
    },
    {
      step: "04",
      title: "Get Certified & Hired",
      desc: "Earn accredited industry certificates and showcase verified portfolio projects.",
      icon: <Award className="w-6 h-6 text-emerald-400" strokeWidth={2.2} />,
      accent: "from-emerald-500/20 to-cyan-500/10",
      borderAccent: "border-emerald-500/30",
    },
  ];

  return (
    <section className="w-full py-5 sm:py-7 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
              HOW IT WORKS
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-1">
            Simple Steps to Start Your <span className="text-blue-500">Journey</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
            From your very first lesson to building production-ready apps, follow our proven 4-step path.
          </p>
        </div>

        {/* 4 Interactive Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="group relative rounded-2xl bg-[#080d24]/90 border border-[#172554]/70 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/60 hover:bg-[#0c1638] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Watermark Step Number */}
              <span className="absolute -top-3 -right-2 font-mono font-black text-6xl sm:text-7xl text-white/[0.03] group-hover:text-blue-500/[0.08] transition-colors select-none pointer-events-none">
                {item.step}
              </span>

              {/* Top Row: Icon + Step Badge */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} border ${item.borderAccent} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-extrabold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
                  STEP {item.step}
                </span>
              </div>

              {/* Step Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator / Arrow for desktop flow */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors relative z-10">
                <span>Phase {idx + 1}</span>
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;

