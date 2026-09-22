import React from "react";
import {
  GraduationCap,
  Code2,
  Award,
  Zap,
  Users2,
  Rocket,
} from "lucide-react";

const HeroFeatureBar = () => {
  const features = [
    {
      id: 1,
      title: "200+ Tech Courses",
      description: "Expert-led curriculum",
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
    },
    {
      id: 2,
      title: "Hands-on Projects",
      description: "Build portfolio apps",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/25",
    },
    {
      id: 3,
      title: "Verified Certificate",
      description: "LinkedIn credentials",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/25",
    },
    {
      id: 4,
      title: "Lifetime Access",
      description: "Learn at your own pace",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
    },
    {
      id: 5,
      title: "Mentor Support",
      description: "1-on-1 doubt assistance",
      icon: <Users2 className="w-5 h-5 text-purple-400" />,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/25",
    },
    {
      id: 6,
      title: "Job-Ready Skills",
      description: "Career tech roadmaps",
      icon: <Rocket className="w-5 h-5 text-rose-400" />,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/25",
    },
  ];

  return (
    <section className="w-full bg-[#030716]/95 border-y border-slate-800/80 py-4 sm:py-5 relative z-20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-3 items-center">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 group transition-transform duration-200 hover:-translate-y-0.5 ${
                index !== 0 ? "lg:pl-3" : ""
              } ${
                index !== features.length - 1
                  ? "lg:border-r lg:border-slate-800/60"
                  : ""
              }`}
            >
              {/* Icon Container */}
              <div
                className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                {item.icon}
              </div>

              {/* Text Info */}
              <div className="flex flex-col min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 font-normal leading-tight truncate">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFeatureBar;


