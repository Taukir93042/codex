import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <section className="bg-white px-10">

      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 items-center gap-10">

        {/* Left */}

        <div>

          <h1 className="text-6xl font-bold leading-tight">
            Learn Today,
            <br />
            <span className="text-blue-600">
              Lead Tomorrow.
            </span>
          </h1>

          <p className="text-gray-500 mt-6 text-lg">
            Explore top courses, learn new skills and
            advance your career with CodeCampus.
          </p>

          <div className="mt-8 flex gap-5">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl">
              Explore Courses
            </button>

            <button className="text-blue-600 font-semibold">
              How It Works →
            </button>

          </div>

          {/* Features */}

          <div className="flex flex-wrap gap-10 mt-14">

            <div>
              <h3 className="font-semibold">
                📘 Quality Content
              </h3>
              <p className="text-sm text-gray-500">
                Expert instructors
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                🏆 Get Certified
              </h3>
              <p className="text-sm text-gray-500">
                Boost your career
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                👨‍💻 Learn Anytime
              </h3>
              <p className="text-sm text-gray-500">
                Flexible and easy
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div>
          <img
            src={assets.heroImg}
            alt="Hero"
            className="w-full"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;
