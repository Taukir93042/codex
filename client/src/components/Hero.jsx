import { FaAward, FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <section
      className="bg-[#050816] bg-no-repeat bg-cover bg-[center_right] md:bg-contain md:bg-right-top px-4 sm:px-10"
      style={{
        backgroundImage: `url(${assets.banner_img})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20 text-white">
        <div className="max-w-xl lg:max-w-2xl bg-[#050816]/85 md:bg-transparent p-6 md:p-0 rounded-3xl backdrop-blur-md md:backdrop-blur-none border border-white/5 md:border-none shadow-xl md:shadow-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Learn Today,
            <br />
            <span className="text-blue-600">Lead Tomorrow.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Explore top courses, learn new skills and advance your career with
            CodeCampus.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl">
              Explore Courses
            </button>

            <button className="text-blue-500 font-semibold">
              How It Works →
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-10 mt-14">
            {/* Quality Content */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <FaBookOpen className="text-blue-500 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-white">
                  Quality Content
                </h3>
                <p className="text-sm text-slate-400">Expert instructors</p>
              </div>
            </div>

            {/* Get Certified */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <FaAward className="text-blue-500 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-white">
                  Get Certified
                </h3>
                <p className="text-sm text-slate-400">Boost your career</p>
              </div>
            </div>

            {/* Learn Anytime */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <FaLaptopCode className="text-blue-500 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-white">
                  Learn Anytime
                </h3>
                <p className="text-sm text-slate-400">Flexible and easy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
