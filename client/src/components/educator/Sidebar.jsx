import {
  FiGrid,
  FiBookOpen,
  FiFolder,
  FiUsers,
  FiShoppingCart,
  FiCreditCard,
  FiStar,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { NavLink, replace, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




import { assets } from "../../assets/assets.js";

const Sidebar = () => {

  const navigate = useNavigate();

  
const handelLogout =()=>{
      localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logout successfully!");

        setTimeout(()=>{
          navigate("/",{replace: true})
        },1000)

     
}
  return (
    <aside className="w-64 h-screen bg-slate-950 text-slate-100 flex flex-col">
      <div className="h-20 flex flex-col justify-center px-6 border-b border-slate-800">
        <NavLink to="/" className="inline-block">
          <img
            src={assets.logo || assets.codecampus_logo}
            alt="CodeCampus"
            className="h-10 w-auto object-contain"
          />
        </NavLink>
        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 mt-1">
          Educator panel
        </p>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5">
        <nav className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">
              Main
            </p>
            <ul className="space-y-2">
              <li>
                <NavLink to="/admin" end>
                  {({ isActive }) => (
                    <button
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-200 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <FiGrid size={18} />
                      <span className="font-medium">Dashboard</span>
                    </button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/courses" end>



                   {({ isActive }) => (
                    <button
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-200 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <FiGrid size={18} />
                      <span className="font-medium">Courses</span>
                    </button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/course-category">
                    {({ isActive }) => (
                    <button
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-200 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <FiGrid size={18} />
                      <span className="font-medium">Categories</span>
                    </button>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">
              Management
            </p>
            <ul className="space-y-2">
              <li>
                
                <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-slate-800 hover:text-white">
                  <FiUsers size={18} />
                  <span className="font-medium">Students</span>
                </button>
              </li>
              <li>
                <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-slate-800 hover:text-white">
                  <FiShoppingCart size={18} />
                  <span className="font-medium">Orders</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">
              Settings
            </p>
            <ul className="space-y-2">
              <li>
                <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-slate-800 hover:text-white">
                  <FiSettings size={18} />
                  <span className="font-medium">Settings</span>
                </button>
              </li>
              <li>
                <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-slate-800 hover:text-white">
                  <FiStar size={18} />
                  <span className="font-medium">Reviews</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-slate-800 px-4 py-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500 px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white cursor-pointer" onClick={handelLogout}>
          <FiLogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
