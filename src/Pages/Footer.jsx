import React from "react";
import { Link } from "react-router";
import logo from "../assets/footer.png";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer max-w-7xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="col-span-1">
          <img src={logo} alt="Footer Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            Your trusted platform to post tasks, hire freelancers, and get jobs done efficiently.
          </p>
          <div className="flex gap-4 text-xl mt-4">
            <a href="https://www.facebook.com" className="hover:text-primary"><FaFacebookF /></a>
            <a href="https://www.instagram.com/" className="hover:text-primary"><FaInstagram /></a>
            <a href="https://x.com/" className="hover:text-primary"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/" className="hover:text-primary"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/" className="hover:text-primary"><FaYoutube /></a>
          </div>
        </div>

        {/* Discover */}
        <nav>
          <h6 className="footer-title">Discover</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/add-task" className="link link-hover">Add Task</Link>
          <Link to="/browse-tasks" className="link link-hover">Browse Tasks</Link>
          <Link to="/my-posted-tasks" className="link link-hover">My Tasks</Link>
          <Link to="/auth/login" className="link link-hover">Login/Signup</Link>
        </nav>

        {/* Resources */}
        <nav>
          <h6 className="footer-title">Resources</h6>
          <Link className="link link-hover">Help Center</Link>
          <Link className="link link-hover">Community</Link>
          <Link className="link link-hover">Blog</Link>
          <Link className="link link-hover">Guides</Link>
          <Link className="link link-hover">Contact</Link>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">About Us</Link>
          <Link className="link link-hover">Careers</Link>
          <Link className="link link-hover">Press</Link>
          <Link className="link link-hover">Partners</Link>
          <Link className="link link-hover">Privacy</Link>
        </nav>
      </div>

      {/* Bottom Note */}
      <div className="text-center py-4 border-t border-base-300 text-sm">
        © {new Date().getFullYear()} Freelance Task Marketplace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;