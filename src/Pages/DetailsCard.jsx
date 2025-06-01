import React from "react";
import { FiMapPin } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { FaClock, FaLock } from "react-icons/fa";
import { Link } from "react-router";

const DetailsCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    location,
    jobType,
    salaryRange,
    description,
    company,
    postedTime,
    requirements,
    tags, // assume: tags = ["ASP .Net", "Figma"]
  } = job;

  return (
    <div className="rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition duration-200 bg-blue-50 hover:bg-white h-full flex flex-col justify-between">
      {/* Top: Company Info */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={company_logo}
            alt={company}
            className="w-14 h-14 rounded-md object-contain"
          />
          <div>
            <h3 className="text-sm font-semibold text-blue-900">{company}</h3>
            <p className="flex items-center text-gray-400 text-xs gap-1 mt-1">
              <FiMapPin className="text-blue-400" /> {location}
            </p>
          </div>
        </div>
        <BsLightningCharge className="text-green-400 text-xl mt-1" />
      </div>

      {/* Title & Info */}
      <div className="mt-4">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <FaLock /> {jobType}
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> {postedTime || "Few minutes ago"}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-3 line-clamp-2">
          {description || "No description available."}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Requirement  */}
      <div className="flex flex-wrap gap-2 mt-2">
        {requirements?.map((item, index) => (
          <button
            key={index}
            className="px-3 py-1 text-xs bg-gray-100 text-gray-600 border border-gray-300 rounded-md"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-base font-bold text-blue-500">
          ${salaryRange.min}
          <span className="text-gray-500 font-normal text-base">/Hour</span>
        </p>
        <Link to={`/jobs/${_id}`}>
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium px-4 py-2 rounded-md transition">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsCard;
