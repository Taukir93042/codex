import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      {/* Top */}

      <div className="flex items-center justify-between">

        <FaQuoteLeft className="text-3xl text-blue-100" />

        <div
          className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-xl`}
        >
          {testimonial.icon}
        </div>

      </div>

      {/* Rating */}

      <div className="flex items-center gap-1 mt-2">

        {[1, 2, 3, 4, 5].map((item) => (
          <FaStar
            key={item}
            className="text-yellow-400 text-lg"
          />
        ))}

      </div>

      {/* Review */}

      <p className="text-gray-600 leading-8 mt-3 min-h-[80px]">
        {testimonial.review}
      </p>

      <hr className="my-2" />

      {/* User */}

      <div className="flex items-center gap-4">

        <img
          src={testimonial.image}
          alt=""
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
        />

        <div className="flex-1">

          <h3 className="text-sm font-semibold">
            {testimonial.name}
          </h3>

          <p className="text-gray-500">
            {testimonial.role}
          </p>

          <div className="flex items-center gap-2 mt-2">

            <img
              src={testimonial.companyLogo}
              alt=""
              className="w-20 h-8 object-contain"
            />

            <span className="font-semibold text-sm">
              {testimonial.company}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;