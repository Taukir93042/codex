import React from "react";
import { BookOpen, Users, GraduationCap, Award, BarChart3 } from "lucide-react";

const WhyChooseUs = () => {
  const items = [
    {
      id: 1,
      title: "Practical Learning",
      desc: "Learn by doing with hands-on projects and real-world examples.",
      icon: <BookOpen className="w-7 h-7 text-blue-400" strokeWidth={2.2} />,
      isFeatured: false,
    },
    {
      id: 2,
      title: "Expert Instructors",
      desc: "Learn from industry professionals with real experience.",
      icon: <Users className="w-7 h-7 text-blue-400" strokeWidth={2.2} />,
      isFeatured: false,
    },
    {
      id: 3,
      title: "Real Projects",
      desc: "Build and showcase projects to strengthen your portfolio.",
      icon: <GraduationCap className="w-9 h-9 text-white" strokeWidth={2.2} />,
      isFeatured: true,
    },
    {
      id: 4,
      title: "Recognized Certificates",
      desc: "Earn certificates to validate your skills and stand out.",
      icon: <Award className="w-7 h-7 text-blue-400" strokeWidth={2.2} />,
      isFeatured: false,
    },
    {
      id: 5,
      title: "Career Focused",
      desc: "Get job-ready with in-demand skills and career guidance.",
      icon: <BarChart3 className="w-7 h-7 text-blue-400" strokeWidth={2.2} />,
      isFeatured: false,
    },
  ];

  return (
    <section className="w-full py-5 sm:py-7 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
              WHY CHOOSE US
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-1">
            Why Learn With <span className="text-blue-500">CodeCampus</span>?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
            Everything you need to master modern technologies and accelerate your career.
          </p>
        </div>

        {/* Curved Glowing Wave & 5 Connected Cards Container */}
        <div className="relative pt-6 sm:pt-8 lg:pt-14">
          
          {/* Glowing Wavy Line across the 5 cards (Visible on lg screens) */}
          <div className="hidden lg:block absolute -top-4 left-0 right-0 h-28 pointer-events-none z-20">
            <svg
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              <defs>
                <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Glowing Background Curve */}
              <path
                d="M 30 72 C 60 68, 80 46, 100 46 C 130 46, 170 65, 200 65 C 230 65, 270 46, 300 46 C 340 46, 380 58, 400 58 C 435 58, 465 14, 500 14 C 535 14, 565 58, 600 58 C 620 58, 660 46, 700 46 C 730 46, 770 65, 800 65 C 830 65, 870 46, 900 46 C 920 46, 940 68, 970 72"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                filter="url(#wave-glow)"
                opacity="0.9"
              />

              {/* Glowing Node 1 */}
              <circle cx="100" cy="46" r="5.5" fill="#60a5fa" filter="url(#wave-glow)" />
              <circle cx="100" cy="46" r="2.5" fill="#ffffff" />

              {/* Glowing Node 2 */}
              <circle cx="300" cy="46" r="5.5" fill="#60a5fa" filter="url(#wave-glow)" />
              <circle cx="300" cy="46" r="2.5" fill="#ffffff" />

              {/* Center Glowing Node 3 (Peak) */}
              <circle cx="500" cy="14" r="7.5" fill="#3b82f6" filter="url(#wave-glow)" />
              <circle cx="500" cy="14" r="3.5" fill="#ffffff" />

              {/* Glowing Node 4 */}
              <circle cx="700" cy="46" r="5.5" fill="#60a5fa" filter="url(#wave-glow)" />
              <circle cx="700" cy="46" r="2.5" fill="#ffffff" />

              {/* Glowing Node 5 */}
              <circle cx="900" cy="46" r="5.5" fill="#60a5fa" filter="url(#wave-glow)" />
              <circle cx="900" cy="46" r="2.5" fill="#ffffff" />
            </svg>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 relative z-10">
            {items.map((item) => (
              <div
                key={item.id}
                className={`group rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center justify-between transition-all duration-300 relative ${
                  item.isFeatured
                    ? "bg-[#091330] border-2 border-blue-500/60 shadow-[0_0_35px_rgba(37,99,235,0.2)] lg:-translate-y-3 hover:shadow-[0_0_45px_rgba(37,99,235,0.35)]"
                    : "bg-[#070e24]/90 border border-[#172554]/70 hover:border-blue-500/50 hover:bg-[#0a1435] shadow-lg hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5"
                }`}
              >
                {/* Icon Container */}
                <div className="mb-6 relative flex items-center justify-center">
                  {item.isFeatured ? (
                    // Center Card: Big glowing neon circle badge
                    <div className="relative">
                      <div className="absolute -inset-2 bg-blue-500/40 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                      <div className="w-20 h-20 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 border-2 border-blue-300 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.7)] group-hover:scale-105 transition-transform duration-300 relative z-10">
                        {item.icon}
                      </div>
                    </div>
                  ) : (
                    // Regular Card: Dark blue circular badge with border
                    <div className="w-16 h-16 rounded-full bg-[#0b1738] border border-blue-500/30 flex items-center justify-center group-hover:border-blue-400 group-hover:scale-110 group-hover:bg-[#0f204d] transition-all duration-300 shadow-md">
                      {item.icon}
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2.5 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[220px]">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Glowing Blue Indicator Line */}
                <div className="w-10 h-1 bg-blue-500 rounded-full mt-6 shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:w-14 group-hover:bg-blue-400 transition-all duration-300" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
