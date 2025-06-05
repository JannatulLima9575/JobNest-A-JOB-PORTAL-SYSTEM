import React from "react";

const Find = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* Card 1 */}
        <div className="flex items-center bg-[#FFF4EF] dark:bg-[#2d1b12] p-6 rounded-lg shadow-sm 
          transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <img
            src="https://i.ibb.co/zWBdc45m/image.png"
            alt="Job Tools"
            className="w-28 h-28 mr-6 object-contain"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Powerful Job Tools
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm mb-3">
              Explore tools designed to make your job search easier — from resume builders to interview prep. Stay ahead with AI-powered recommendations tailored to your career goals.
            </p>
            <a
              href="#"
              className="text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline flex items-center gap-1"
            >
              Find Out More <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-[#F0F6FF] dark:bg-[#172336] p-6 rounded-lg shadow-sm 
          transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <img
            src="https://i.ibb.co/dsyQWG50/image.png"
            alt="Planning Job"
            className="w-28 h-28 mr-6 object-contain"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Plan Your Next Career Move
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm mb-3">
              Discover jobs aligned with your skills and interests — all in one place. Get expert tips on building a successful career path with our career planner.
            </p>
            <a
              href="#"
              className="text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline flex items-center gap-1"
            >
              Find Out More <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;