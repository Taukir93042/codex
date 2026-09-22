import React from "react";
import { 
  Code2, 
  Layers, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Rocket, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Workflow
} from "lucide-react";
import { Link } from "react-router-dom";

const LMSFeatures = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Path",
      desc: "Curated learning tracks spanning Full-Stack, AI Engineering, DevOps, and System Design.",
      icon: <Layers className="text-blue-400" size={24} />,
      color: "from-blue-600/20 to-cyan-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      step: "02",
      title: "Hands-On Practice",
      desc: "Interactive video modules, code along with real repositories, and master key concepts.",
      icon: <Terminal className="text-indigo-400" size={24} />,
      color: "from-indigo-600/20 to-purple-500/10",
      borderColor: "border-indigo-500/30",
    },
    {
      step: "03",
      title: "Build Production Apps",
      desc: "Engineer scalable, production-grade applications that stand out on your resume and GitHub.",
      icon: <Cpu className="text-purple-400" size={24} />,
      color: "from-purple-600/20 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      step: "04",
      title: "Get Certified & Hired",
      desc: "Earn verified industry credentials and access career guidance to land senior engineering roles.",
      icon: <Rocket className="text-emerald-400" size={24} />,
      color: "from-emerald-600/20 to-teal-500/10",
      borderColor: "border-emerald-500/30",
    },
  ];

  const benefits = [
    {
      title: "Production-Grade Tech Stacks",
      desc: "Learn modern frameworks like React 19, Next.js, Node.js, TypeScript, Docker, and PostgreSQL with current industry standards.",
      icon: <Code2 className="text-blue-400" size={28} />,
      badge: "Modern Stacks",
    },
    {
      title: "1-on-1 Code Reviews & Guidance",
      desc: "Get personalized feedback from senior engineers to polish your code quality, structure, and problem-solving skills.",
      icon: <Users className="text-indigo-400" size={28} />,
      badge: "Mentorship",
    },
    {
      title: "Recognized Industry Certificates",
      desc: "Every completed masterclass grants a cryptographically verifiable certificate to share on LinkedIn.",
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      badge: "Verifiable",
    },
    {
      title: "Lifetime Access & Continuous Updates",
      desc: "Buy once, access forever. All curriculum is updated regularly as frameworks and tools evolve.",
      icon: <Sparkles className="text-cyan-400" size={28} />,
      badge: "Always Fresh",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-transparent text-white relative" id="how-it-works">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: How It Works Pathway */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Workflow size={16} />
            <span>Structured Learning Pathway</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How CodeCampus Accelerates Your Career
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A proven, four-step mastery blueprint designed to transition passionate learners into top-tier software engineers.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b ${item.color} to-slate-900/40 border ${item.borderColor} backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 group`}
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-mono text-3xl font-black text-slate-600/60 group-hover:text-slate-400 transition-colors">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 2: Bento Grid Benefits */}
        <div className="mt-28 sm:mt-36">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold">
              The CodeCampus Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              Why 10,000+ Engineers Choose Us
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              Built by developers for developers. We cut through tutorial fluff and focus on real engineering capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {benefit.icon}
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-semibold text-indigo-300 mb-2">
                    {benefit.badge}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout action */}
          <div className="mt-12 text-center">
            <Link
              to="/course-list"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-base transition group"
            >
              <span>Explore Curriculum Catalog</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LMSFeatures;
