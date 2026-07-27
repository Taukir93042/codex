import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className='w-full border-b bg-white px-10'>
    <div className=' max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
    {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Code<span className="text-blue-600">Campus</span>
        </Link>
         <nav className="hidden md:flex items-center gap-10 font-medium">
          <Link className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Home
          </Link>

          <Link className="hover:text-blue-600">
            Courses
          </Link>

          <Link className="hover:text-blue-600">
            Categories
          </Link>

          <Link className="hover:text-blue-600">
            About
          </Link>

          <Link to="/instructor-auth" className="hover:text-blue-600">
            Become an Instructor
          </Link>
        </nav>
        {/* Buttons */}
        <div className="flex gap-3">
          <Link to="/login" className="border px-5 py-2 rounded-lg hover:bg-gray-100 text-center font-medium transition">
            Log In
          </Link>

          <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-center font-medium transition">
            Sign Up
          </Link>
        </div>
    </div>
    </header>
  )
}

export default Header
