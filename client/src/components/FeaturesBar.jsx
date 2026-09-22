import React from "react";
import { BookOpen, Users, Award, Laptop } from "lucide-react";

const FeaturesBar = () => {
  const features = [
    {
      id: 1,
      title: "Industry-Standard Curriculum",
      desc: "Learn real-world technologies with best practices.",
      icon: <BookOpen size={20} className="text-blue-400" />,
      iconBg: "bg-blue-600/20 border-blue-500/30",
    },
    {
      id: 2,
      title: "Expert Instructors",
      desc: "Learn from industry professionals and working developers.",
      icon: <Users size={20} className="text-indigo-400" />,
      iconBg: "bg-indigo-600/20 border-indigo-500/30",
    },
    {
      id: 3,
      title: "Verified Credentials",
      desc: "Earn certificates and showcase your skills.",
      icon: <Award size={20} className="text-cyan-400" />,
      iconBg: "bg-cyan-600/20 border-cyan-500/30",
    },
    {
      id: 4,
      title: "Hands-On Projects",
      desc: "Build and deploy real applications with guidance.",
      icon: <Laptop size={20} className="text-blue-400" />,
      iconBg: "bg-blue-600/20 border-blue-500/30",
    },
  ];

  return (
    <section className="w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#070c22]/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                className={`flex items-start gap-3.5 ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-5" : ""}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${feature.iconBg} border flex items-center justify-center shrink-0 mt-0.5 shadow-md`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
