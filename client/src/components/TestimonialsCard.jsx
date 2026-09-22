import { FaStar, FaCheckCircle } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[#090e24]/90 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full shadow-xl shadow-black/30 text-white group">
      
      <div>
        {/* Top bar with Quote and Icon */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <FaQuoteLeft size={16} />
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">
            <FaCheckCircle className="text-emerald-400 text-xs" />
            <span>Verified Alumni</span>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mt-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <FaStar
              key={item}
              className="text-yellow-400 text-sm"
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 line-clamp-4 font-normal">
          "{testimonial.review}"
        </p>
      </div>

      {/* User Info Bottom */}
      <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30 ring-2 ring-blue-500/10 shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h4 className="text-sm sm:text-base font-bold text-white truncate group-hover:text-blue-300 transition">
            {testimonial.name}
          </h4>
          <p className="text-slate-400 text-xs truncate">
            {testimonial.role}
          </p>

          <div className="flex items-center gap-2 mt-1">
            {testimonial.companyLogo && (
              <img
                src={testimonial.companyLogo}
                alt={testimonial.company}
                className="h-3.5 object-contain brightness-0 invert opacity-60"
              />
            )}
            <span className="font-semibold text-[11px] text-slate-400">
              at {testimonial.company}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;