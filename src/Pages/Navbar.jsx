import { Link } from "react-router";
import ThemeToggle from "../Components/ThemeToggle";
import { useEffect, useState, use } from "react";
import { AuthContext } from './../Context/AuthContext/AuthContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("User signed out successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <div
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-blue-50 dark:bg-gray-900"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6">
        {/* Mobile View */}
        <div className="w-full flex items-center justify-between lg:hidden">
          <Link to="/" className="flex items-center">
            <img className="w-52 h-auto mr-2" src={logo} />
          </Link>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-200 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/my-jobs">My Jobs</Link></li>
              <li><Link to="/applications">Applications</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <div className="divider my-1"></div>
              {user ? (
                <li><button onClick={handleSignOut} className="btn btn-outline btn-sm w-full">Sign Out</button></li>
              ) : (
                <div className="flex flex-col gap-2 w-1/2 mb-2">
                  <li><Link to="/register" className="btn-sm w-full">Register</Link></li>
                  <li><Link to="/login" className="btn-sm w-full">Sign In</Link></li>
                </div>
              )}
              <ThemeToggle/>
            </ul>
          </div>
        </div>

        {/* Desktop View */}
        <div className="navbar hidden lg:flex">
          <div className="navbar-start">
            <Link to="/" className="flex items-center ml-2">
              <img className="w-60 h-auto mr-2" src={logo} />
            </Link>
          </div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1 font-semibold text-base text-base-content dark:text-white">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/my-jobs">My Jobs</Link></li>
              <li><Link to="/applications">Applications</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <button onClick={handleSignOut} className="btn btn-outline btn-sm">Sign Out</button>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
                <Link to="/login" className="btn btn-outline btn-sm">Sign In</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;