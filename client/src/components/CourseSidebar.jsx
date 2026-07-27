import { useState, useEffect } from "react";
import {
  FaPlay,
  FaClock,
  FaBookOpen,
  FaMobileAlt,
  FaInfinity,
  FaCertificate,
  FaDownload,
  FaShareAlt,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

const CourseSidebar = ({ course }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 45, seconds: 0 });
  const [showShareToast, setShowShareToast] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!course) return null;

  // Compute mock discount
  const originalPrice = Math.round(course.price * 3.5);
  const discountPct = Math.round(((originalPrice - course.price) / originalPrice) * 100);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  };

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <aside className="sticky top-28">
      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed bottom-5 right-5 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow-2xl z-50 animate-bounce text-sm font-semibold">
          📋 Course link copied to clipboard!
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition duration-300 hover:shadow-2xl">

        {/* Thumbnail Preview */}
        <div className="relative group">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-90 transition">
            <button className="bg-white/90 backdrop-blur text-indigo-600 rounded-full p-5 hover:scale-110 shadow-lg hover:bg-white transition">
              <FaPlay className="text-xl ml-1 animate-pulse" />
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-6">

          {/* Pricing */}
          <div className="flex items-end gap-3 flex-wrap">
            <h2 className="text-4xl font-black text-gray-900 leading-none">
              ₹{course.price}
            </h2>

            <span className="text-lg line-through text-gray-400 font-medium">
              ₹{originalPrice}
            </span>

            <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-100">
              {discountPct}% OFF
            </span>
          </div>

          {/* Flash sale timer */}
          <div className="flex items-center gap-1.5 text-rose-600 text-sm mt-4 font-bold bg-rose-50 border border-rose-100 rounded-xl px-3 py-2 animate-pulse w-fit">
            <span>🔥 Offer ends in {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s</span>
          </div>

          {/* Actions */}
          <div className="space-y-3 mt-6">

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transform hover:-translate-y-0.5 active:translate-y-0">
              Enroll Now
            </button>

            <button 
              onClick={() => setIsInCart(!isInCart)}
              className={`w-full border py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition ${
                isInCart 
                  ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100" 
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              <FaShoppingCart />
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>

            <button 
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`w-full border py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition ${
                isWishlisted 
                  ? "bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FaHeart className={isWishlisted ? "text-rose-600" : ""} />
              {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-6"></div>

          {/* This Course Includes */}
          <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wider">
            This Course Includes:
          </h3>

          <div className="space-y-4 text-sm text-gray-600 font-medium">

            <div className="flex items-center gap-3">
              <FaClock className="text-blue-500 text-base" />
              <span>{course.duration} on-demand video</span>
            </div>

            <div className="flex items-center gap-3">
              <FaBookOpen className="text-blue-500 text-base" />
              <span>{course.lessons} Lectures</span>
            </div>

            <div className="flex items-center gap-3">
              <FaDownload className="text-blue-500 text-base" />
              <span>Downloadable Resources</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileAlt className="text-blue-500 text-base" />
              <span>Access on Mobile and TV</span>
            </div>

            <div className="flex items-center gap-3">
              <FaInfinity className="text-blue-500 text-base" />
              <span>Full lifetime access</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCertificate className="text-blue-500 text-base" />
              <span>Certificate of completion</span>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-6"></div>

          {/* Money Back Guarantee */}
          <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100 text-center">
            <p className="text-emerald-800 font-bold text-sm flex items-center justify-center gap-1.5">
              🛡️ 30-Day Money Back Guarantee
            </p>
          </div>

          {/* Share */}
          <button 
            onClick={handleShare}
            className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 text-gray-600 font-bold text-sm transition"
          >
            <FaShareAlt />
            Share Course
          </button>

        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;