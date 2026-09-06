import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CourseContext } from "../context/Appcontext";

const Profile = () => {
  const { storeUser, isLoggedIn } = useContext(CourseContext);

  // User login nahi hai
  if (!isLoggedIn || !storeUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        {/* Profile Header */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d1d]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.18),transparent_40%)]" />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row">

              {/* Avatar */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-600 text-4xl font-bold">
                {storeUser?.avatar ? (
                  <img
                    src={`http://localhost:5000/${storeUser.avatar}`}
                    alt={storeUser.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  storeUser?.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)
                )}
              </div>

              {/* User Info */}
              <div className="text-center sm:text-left">

                <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  <h1 className="text-3xl font-bold">
                    {storeUser.name}
                  </h1>

                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase text-indigo-400">
                    {storeUser.role}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-400 sm:justify-start">
                  ✉️
                  {storeUser.email}
                </div>

                

              </div>
            </div>
          </div>
        </section>

        {/* Account Information */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-[#080d1d] p-6 sm:p-8">

          <h2 className="text-xl font-bold">
            Account Information
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your account details
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Full Name
              </label>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm">
                {storeUser.name}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email Address
              </label>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-slate-400">
                {storeUser.email}
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Account Type
              </label>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm capitalize">
                {storeUser.role}
              </div>
            </div>

                     {/* Student ID */}
          <div  >
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Student ID
            </label>

            <div className="break-all rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-mono text-xs text-slate-400">
              {storeUser._id}
            </div>
          </div>

          </div>



        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Profile;