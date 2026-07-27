import { useState } from "react";
import { 
  FaCheck, 
  FaChevronDown, 
  FaChevronUp, 
  FaPlay, 
  FaRegFileAlt, 
  FaStar, 
  FaStarHalfAlt, 
  FaChevronRight,
  FaBookOpen,
  FaClock,
  FaGraduationCap,
  FaUserAlt,
  FaInfoCircle
} from "react-icons/fa";

const CourseContent = ({ course }) => {
  const [activeAccordion, setActiveAccordion] = useState({});
  const [showAllDescription, setShowAllDescription] = useState(false);
  const [activeFaq, setActiveFaq] = useState({});

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleFaq = (index) => {
    setActiveFaq((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Helper to render stars
  const renderStars = (rating) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
      } else if (i === floorRating + 1 && hasHalf) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-sm" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-200 text-sm" />);
      }
    }
    return stars;
  };

  return (
    <div className="space-y-12">
      
      {/* 1. What You'll Learn */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FaGraduationCap /></span>
          What you'll learn
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {course.whatYouWillLearn?.map((point, index) => (
            <div key={index} className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-1 flex-shrink-0 bg-emerald-50 p-1 rounded-full text-xs">
                <FaCheck />
              </span>
              <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Course Curriculum Accordion */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FaBookOpen /></span>
              Course Content
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {course.curriculum?.length} sections • {course.lessons} lectures • {course.duration} total length
            </p>
          </div>
          <button 
            onClick={() => {
              const allOpen = {};
              course.curriculum?.forEach((_, i) => { allOpen[i] = true; });
              setActiveAccordion(allOpen);
            }}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            Expand All Sections
          </button>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200">
          {course.curriculum?.map((section, sectionIdx) => {
            const isOpen = !!activeAccordion[sectionIdx];
            return (
              <div key={sectionIdx} className="bg-white">
                <button
                  onClick={() => toggleAccordion(sectionIdx)}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                    <span className="font-bold text-gray-800 text-base md:text-lg">
                      {section.title}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 font-medium">
                    {section.lectures.length} lectures • {section.duration}
                  </span>
                </button>

                {isOpen && (
                  <div className="bg-slate-50/50 px-6 py-4 divide-y divide-gray-100">
                    {section.lectures.map((lecture, lectureIdx) => (
                      <div key={lectureIdx} className="py-3 flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-blue-500">
                            {lecture.isPreview ? <FaPlay className="text-[10px]" /> : <FaRegFileAlt className="text-gray-400" />}
                          </span>
                          <span className={`${lecture.isPreview ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                            {lecture.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          {lecture.isPreview && (
                            <button className="text-xs font-semibold text-blue-600 hover:underline">
                              Preview Lesson
                            </button>
                          )}
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <FaClock className="text-[10px]" />
                            {lecture.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Requirements */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FaInfoCircle /></span>
          Requirements
        </h2>
        <ul className="space-y-3">
          {course.requirements?.map((req, index) => (
            <li key={index} className="flex gap-3 items-start text-sm text-gray-600">
              <span className="text-blue-500 mt-1.5">&#9679;</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Description */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
        <div className={`text-sm text-gray-600 leading-relaxed whitespace-pre-line ${!showAllDescription ? 'line-clamp-6' : ''}`}>
          {course.description}
        </div>
        <button
          onClick={() => setShowAllDescription(!showAllDescription)}
          className="mt-4 text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition"
        >
          {showAllDescription ? "Read Less" : "Read More"}
          <FaChevronRight className={`text-xs transition ${showAllDescription ? '-rotate-90' : 'rotate-90'}`} />
        </button>
      </section>

      {/* 5. Instructor Section */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FaUserAlt /></span>
          Instructor Profile
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={course.instructor?.avatar}
            alt={course.instructor?.name}
            className="w-24 h-24 rounded-2xl object-cover border border-gray-100 flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900">{course.instructor?.name}</h3>
            <p className="text-sm font-medium text-gray-500 mt-1">{course.instructor?.title}</p>
            
            {/* Instructor stats */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs font-semibold text-gray-700">
              <div className="flex items-center gap-1.5">
                <FaStar className="text-yellow-400" />
                <span>{course.instructor?.rating} Instructor Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaGraduationCap className="text-blue-500" />
                <span>{course.instructor?.studentsCount.toLocaleString()} Students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaBookOpen className="text-indigo-500" />
                <span>{course.instructor?.coursesCount} Courses</span>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {course.instructor?.bio}
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQs Accordion */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {course.faqs?.map((faq, index) => {
            const isOpen = !!activeFaq[index];
            return (
              <div key={index} className="border border-gray-100 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-gray-800 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="text-gray-400">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-slate-50/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Student Reviews */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Feedback & Reviews</h2>
        
        {/* Rating Breakdown Summary */}
        <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
          <div className="text-center">
            <h3 className="text-5xl font-black text-blue-600">{course.rating}</h3>
            <div className="flex justify-center mt-2">
              {renderStars(course.rating)}
            </div>
            <p className="text-xs font-semibold text-gray-500 mt-2">Course Rating</p>
          </div>
          
          <div className="flex-grow w-full space-y-2">
            {[
              { stars: 5, pct: "75%" },
              { stars: 4, pct: "18%" },
              { stars: 3, pct: "5%" },
              { stars: 2, pct: "1%" },
              { stars: 1, pct: "1%" }
            ].map((bar, index) => (
              <div key={index} className="flex items-center gap-3 text-xs font-semibold text-gray-600">
                <span className="w-3">{bar.stars}</span>
                <FaStar className="text-yellow-400" />
                <div className="flex-grow bg-gray-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full rounded-full" style={{ width: bar.pct }}></div>
                </div>
                <span className="w-8 text-right">{bar.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Written Reviews List */}
        <div className="divide-y divide-gray-100">
          {course.reviews?.map((review, index) => (
            <div key={index} className="py-6 first:pt-0 last:pb-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-[10px] text-gray-400 font-semibold">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-13">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CourseContent;
