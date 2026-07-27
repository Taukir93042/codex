import React from "react";
import Header from "../../components/educator/Header";
import Sidebar from "../../components/educator/Sidebar";
import Footer from "../../components/educator/Footer";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header />

        {/* main code */}
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Admin 👋</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <p className="text-gray-500">Total Students</p>
              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-3xl font-bold">350</h2>

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  👨‍🎓
                </div>
              </div>

              <p className="text-green-600 text-sm mt-3">
                +12.5% from last month
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <p className="text-gray-500">Total Courses</p>

              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-3xl font-bold">24</h2>

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  📚
                </div>
              </div>

              <p className="text-green-600 text-sm mt-3">
                +8.3% from last month
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <p className="text-gray-500">Revenue</p>

              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-3xl font-bold">₹28,450</h2>

                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                  💰
                </div>
              </div>

              <p className="text-green-600 text-sm mt-3">
                +10.2% from last month
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <p className="text-gray-500">Orders</p>

              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-3xl font-bold">156</h2>

                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  🛒
                </div>
              </div>

              <p className="text-green-600 text-sm mt-3">
                +10.2% from last month
              </p>
            </div>
          </div>

          {/* Chart + Activity */}
          <div className="grid lg:grid-cols-3 gap-4 mt-4">
            {/* Revenue */}
            <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Revenue Overview</h2>

                <button className="border rounded-lg px-4 py-2 text-sm">
                  This Month
                </button>
              </div>

              <div className="h-80 rounded-xl bg-slate-100 flex items-center justify-center text-gray-400">
                Revenue Chart
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-5">Recent Activity</h2>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">New student registered</h4>

                    <p className="text-sm text-gray-500">John Doe registered</p>
                  </div>

                  <span className="text-sm text-gray-400">2m</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">New Course Added</h4>

                    <p className="text-sm text-gray-500">React JS Basics</p>
                  </div>

                  <span className="text-sm text-gray-400">15m</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">New Order Received</h4>

                    <p className="text-sm text-gray-500">Order #12345</p>
                  </div>

                  <span className="text-sm text-gray-400">1h</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">New Review</h4>

                    <p className="text-sm text-gray-500">React Course</p>
                  </div>

                  <span className="text-sm text-gray-400">2h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {/* Courses */}
            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <div className="flex justify-between mb-5">
                <h2 className="font-semibold text-lg">Recent Courses</h2>

                <button className="text-blue-600 text-sm">View All</button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50">
                  React JS Basics
                </div>

                <div className="p-4 rounded-xl bg-slate-50">UI/UX Design</div>

                <div className="p-4 rounded-xl bg-slate-50">
                  JavaScript Advanced
                </div>

                <div className="p-4 rounded-xl bg-slate-50">
                  Node.js Complete Guide
                </div>
              </div>
            </div>

            {/* Students */}
            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <div className="flex justify-between mb-5">
                <h2 className="font-semibold text-lg">Recent Students</h2>

                <button className="text-blue-600 text-sm">View All</button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50">John Doe</div>

                <div className="p-4 rounded-xl bg-slate-50">Jane Smith</div>

                <div className="p-4 rounded-xl bg-slate-50">Michael Brown</div>

                <div className="p-4 rounded-xl bg-slate-50">Emily Johnson</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="font-semibold text-lg mb-5">Quick Actions</h2>

              <div className="grid grid-cols-2 gap-4">
                <button className="rounded-xl bg-blue-50 py-8 hover:bg-blue-100 transition">
                  📘
                  <p className="mt-2">Add Course</p>
                </button>

                <button className="rounded-xl bg-green-50 py-8 hover:bg-green-100 transition">
                  📂
                  <p className="mt-2">Add Category</p>
                </button>

                <button className="rounded-xl bg-purple-50 py-8 hover:bg-purple-100 transition">
                  👨‍🎓
                  <p className="mt-2">Add Student</p>
                </button>

                <button className="rounded-xl bg-yellow-50 py-8 hover:bg-yellow-100 transition">
                  📊
                  <p className="mt-2">View Reports</p>
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
