import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          DealHunt
        </Link>

        {/* Home, About, Contact */}
        <div className="ml-4 hidden md:flex gap-4">
          <Link to="/" className="btn btn-ghost text-sm">
            Home
          </Link>
          <Link to="/aboutus" className="btn btn-ghost text-sm">
            About Us
          </Link>
          <Link to="/contact" className="btn btn-ghost text-sm">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex-none flex items-center gap-4">
        {authUser ? (
          <>
            {/* Avatar with Initial */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {authUser?.fullname?.charAt(0).toUpperCase() || "U"}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
