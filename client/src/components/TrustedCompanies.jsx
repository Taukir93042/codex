import { assets } from "../assets/assets.js";

const TrustedCompanies = () => {
  return (
    <section className="py-12 sm:py-16 px-6 bg-slate-950/40 backdrop-blur-xs border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-400 tracking-wider uppercase mb-8">
          <span>Global Industry Impact</span>
        </div>
        
        <h3 className="text-sm md:text-base text-slate-300 font-medium mb-10 tracking-wide">
          Our alumni and learners are hired by top technology giants and fast-growing startups
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="p-3 rounded-xl hover:bg-slate-800/40 transition duration-300">
            <img
              src={assets.microsoft_logo}
              alt="Microsoft"
              className="h-6 md:h-7 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>

          <div className="p-3 rounded-xl hover:bg-slate-800/40 transition duration-300">
            <img
              src={assets.walmart_logo}
              alt="Walmart"
              className="h-7 md:h-8 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>

          <div className="p-3 rounded-xl hover:bg-slate-800/40 transition duration-300">
            <img
              src={assets.accenture_logo}
              alt="Accenture"
              className="h-7 md:h-8 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>

          <div className="p-3 rounded-xl hover:bg-slate-800/40 transition duration-300">
            <img
              src={assets.adobe_logo}
              alt="Adobe"
              className="h-7 md:h-8 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>

          <div className="p-3 rounded-xl hover:bg-slate-800/40 transition duration-300">
            <img
              src={assets.paypal_logo}
              alt="PayPal"
              className="h-7 md:h-8 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;