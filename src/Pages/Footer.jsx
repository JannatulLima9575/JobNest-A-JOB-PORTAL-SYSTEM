import React from "react";
import { Link } from "react-router";
import logoImage from "../assets/FavIcon.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer max-w-7xl mx-auto p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding */}
        <aside className="col-span-2 md:col-span-1">
          <div className="flex items-center ">
            <img className="w-6 h-6" src={logoImage}/>
          <Link to="/" className="text-2xl font-bold text-primary ml-2">
                      Job<span className="text-secondary">Nest</span>
                    </Link>
          </div>
          <p className="mt-2 font-semibold leading-snug">
            Empowering Freelancers since 2024
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover">Task Posting</Link>
          <Link className="link link-hover">Freelancer Bidding</Link>
          <Link className="link link-hover">Project Management</Link>
          <Link className="link link-hover">Client Support</Link>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">About Us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <Link to="/jobs" className="link link-hover">Careers</Link>
          <Link className="link link-hover">Blog</Link>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of Use</Link>
          <Link className="link link-hover">Privacy Policy</Link>
          <Link className="link link-hover">Cookie Policy</Link>
        </nav>
      </div>

      {/* Bottom Note */}
      <div className="text-center py-4 border-t border-base-300 text-sm">
        © {new Date().getFullYear()} JOBNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;