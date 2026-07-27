import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  // Function to render stars based on rating
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
    <Link 
      to={`/course-details/${course.id}`} 
      className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col h-full"
    >
      
      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-44 object-cover"
      />

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between flex-grow">

        <div>
          {/* Category Badge */}
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
            {course.category}
          </span>

          {/* Course Title */}
          <h3 className="text-lg font-bold text-gray-900 mt-3 line-clamp-2 hover:text-blue-600 transition">
            {course.title}
          </h3>

          {/* Educator */}
          <p className="text-sm text-gray-500 mt-2">
            By {course.instructor?.name || course.instructor}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">
            <span className="font-semibold text-gray-800 text-sm">
              {course.rating}
            </span>

            <div className="flex items-center">
              {renderStars(course.rating)}
            </div>

            <span className="text-xs text-gray-500 ml-1">
              ({course.students.toLocaleString()} students) 
            </span>
          </div>
        </div>

        {/* Price & Level */}
        <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-100">
          <span className="text-xl font-black text-gray-900">
            ₹{course.price}
          </span>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default CourseCard;