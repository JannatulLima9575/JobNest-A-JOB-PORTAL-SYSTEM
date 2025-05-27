import React from "react";
import { Link } from "react-router";
import ThemeToggle from "../Components/ThemeToggle";
import logoImage from "../assets/FavIcon.png";

const Navbar = () => {
  return (
    <div className="w-full bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        {/* Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/my-jobs">My Jobs</Link></li>
              <li><Link to="/applications">Applications</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <img className="w-6 h-6" src={logoImage}/>
          <Link to="/" className="text-2xl font-bold text-primary ml-2">
            Job<span className="text-secondary">Nest</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/my-jobs">My Jobs</Link></li>
            <li><Link to="/applications">Applications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Login/Register + Dark Toggle */}

        <div className="navbar-end flex gap-2">
            <ThemeToggle/>
          <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
          <Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;