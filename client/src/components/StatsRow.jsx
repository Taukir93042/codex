import React from "react";
import { Users, PlayCircle, GraduationCap, Globe2 } from "lucide-react";

const StatsRow = () => {
  const stats = [
    {
      id: 1,
      number: "10K+",
      label: "Active Learners",
      icon: <Users size={28} className="text-blue-500" />,
      bg: "bg-blue-600/10",
    },
    {
      id: 2,
      number: "150+",
      label: "Online Courses",
      icon: <PlayCircle size={28} className="text-blue-500" />,
      bg: "bg-blue-600/10",
    },
    {
      id: 3,
      number: "50+",
      label: "Expert Instructors",
      icon: <GraduationCap size={28} className="text-blue-500" />,
      bg: "bg-blue-600/10",
    },
    {
      id: 4,
      number: "95%",
      label: "Success Rate",
      icon: <Globe2 size={28} className="text-blue-500" />,
      bg: "bg-blue-600/10",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#080d22]/90 border border-slate-800/80 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} border border-blue-500/20 flex items-center justify-center shrink-0`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                    {stat.number}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsRow;
