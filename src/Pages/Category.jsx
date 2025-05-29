import React from "react";
import { FaLaptopCode, FaBullhorn, FaPenNib, FaBriefcase, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const categories = [
  {
    icon: <FaLaptopCode className="text-2xl text-primary" />,
    title: "Development",
    jobs: 120,
  },
  {
    icon: <FaBullhorn className="text-2xl text-secondary" />,
    title: "Marketing",
    jobs: 85,
  },
  {
    icon: <FaPenNib className="text-2xl text-accent" />,
    title: "Writing",
    jobs: 60,
  },
  {
    icon: <FaBriefcase className="text-2xl text-primary" />,
    title: "Management",
    jobs: 95,
  },
  {
    icon: <FaMobileAlt className="text-2xl text-secondary" />,
    title: "Mobile App",
    jobs: 45,
  },
  {
    icon: <FaPaintBrush className="text-2xl text-accent" />,
    title: "Design",
    jobs: 70,
  },
];

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content dark:text-white">
          Browse by Category
        </h1>
        <p className="mt-3 text-base text-base-content dark:text-gray-300">
          Find the job that’s perfect for you. 800+ new jobs everyday.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-base-100 flex dark:bg-gray-800 rounded-xl px-6 py-4 gap-3 text-center shadow hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="mb-2">{cat.icon}</div>
            <div>
                <h2 className="font-semibold text-base-content dark:text-white">{cat.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{cat.jobs}+ Jobs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;