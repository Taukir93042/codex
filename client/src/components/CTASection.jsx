import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-18 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-gray-900">
          Learn anything, anytime, anywhere
        </h2>

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-7">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
          anim id veniam aliqua proident excepteur commodo do ea.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition">
            Get started
          </button>

          <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600 transition">
            Learn more
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTASection;