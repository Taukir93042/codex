import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMoon,
  FiChevronDown,
} from "react-icons/fi";

const Header = ( ) => {
  return (
    <div className="sticky top-0 z-40 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-5">

        {/* Sidebar Toggle */}
        <button
           
          className="text-2xl text-gray-600 hover:text-blue-600 transition"
        >
          <FiMenu />
        </button>

        {/* Search */}
        <div className="hidden md:block relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search courses..."
            className="w-80 h-11 rounded-xl border border-gray-300 bg-gray-50 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative text-2xl text-gray-600 hover:text-blue-600 transition">
          <FiBell />

          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
            3
          </span>
        </button>

        {/* Dark Mode */}
        <button className="text-2xl text-gray-600 hover:text-blue-600 transition">
          <FiMoon />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Admin"
            className="w-11 h-11 rounded-full object-cover border"
          />

          <div className="hidden lg:block">
            <h4 className="text-sm font-semibold text-gray-800">
              Admin
            </h4>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>

          <FiChevronDown className="text-gray-500" />

        </div>

      </div>
    </div>
  );
};

export default Header;