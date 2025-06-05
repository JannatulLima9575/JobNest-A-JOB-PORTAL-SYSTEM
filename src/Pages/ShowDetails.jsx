import React from "react";
import { Link, useLoaderData } from "react-router";
import { IoTimeOutline } from "react-icons/io5";

const ShowDetails = () => {
  const {
    _id,
    title,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    salary,
    postedTime,
    requirements,
    tags,
  } = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* 🔹 Banner Section - Carousel */}
      <div className="carousel w-full rounded-2xl overflow-hidden shadow">
        {[
          "https://i.ibb.co/4DxnB27/cara1-copy.webp",
          "https://i.ibb.co/TxvVG5FV/cara2.png",
          "https://i.ibb.co/kskz5NBs/cara3.webp",
          "https://i.ibb.co/Z1840KS2/cara4.jpg",
        ].map((img, i) => (
          <div
            id={`slide${i + 1}`}
            key={i}
            className="carousel-item relative w-full"
          >
            <img src={img} className="w-full h-[200px] md:h-[400px] object-cover" />
            <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
              <a href={`#slide${i === 0 ? 4 : i}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${(i + 1) % 4 + 1}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Job Summary Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral dark:text-neutral-content">
            {title}
          </h2>
          <p className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
            <IoTimeOutline className="text-lg" /> {postedTime}
          </p>
        </div>
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowDetails;