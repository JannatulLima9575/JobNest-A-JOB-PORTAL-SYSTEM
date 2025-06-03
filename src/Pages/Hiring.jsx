import React from 'react';
import { Link } from 'react-router';
import hiring1 from '../assets/team/hiring1.svg'
import hiring2 from '../assets/team/hiring2.svg'
import { HiOutlineCheckBadge } from "react-icons/hi2";

const Hiring = () => {
     return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="rounded-2xl border border-blue-100 bg-base-100 shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Illustration */}
        <img
          src={hiring2}
          alt="left"
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />

        {/* Text Content */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">We are</h2>
          <h1 className="text-3xl font-bold text-primary">HIRING</h1>
        </div>

        <div>
             <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Let’s <span className="font-semibold text-primary">Work Together</span> <br />& Explore <span className="font-semibold text-primary">Opportunities</span>
          </p>
        </div>

        {/* Button */}
        <Link to={'/jobApply/:id'} className="btn btn-primary btn-md text-white">
          <HiOutlineCheckBadge /> Apply now
        </Link>

        {/* Right Illustration */}
        <img
          src={hiring1}
          alt="right"
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default Hiring;