import React from "react";
import { FaUsersCog, FaBullhorn, FaPiggyBank, FaUserShield, FaStore, FaFileAlt } from "react-icons/fa";

const jobCategories = [
  { icon: <FaUsersCog />, title: "Management" },
  { icon: <FaBullhorn />, title: "Marketing & Sale" },
  { icon: <FaPiggyBank />, title: "Finance" },
  { icon: <FaUserShield />, title: "Human Resource" },
  { icon: <FaStore />, title: "Retail & Products" },
  { icon: <FaFileAlt />, title: "Content Writer" },
];

const HotJobs = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Jobs of the day</h2>
        <p className="text-gray-500 mb-8 text-base md:text-lg">
          Search and connect with the right candidates faster.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {jobCategories.map((job, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all duration-200 ${
                index === 0 ? "bg-blue-50 border-2" : ""
              }`}
            >
              <span className="text-blue-500 text-lg">{job.icon}</span>
              <span className="font-medium">{job.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotJobs;