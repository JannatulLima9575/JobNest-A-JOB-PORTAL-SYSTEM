import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FaLaptopCode,
  FaBullhorn,
  FaPenNib,
  FaBriefcase,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { icon: <FaLaptopCode className="text-3xl text-primary" />, title: "Development", jobs: 120 },
  { icon: <FaBullhorn className="text-3xl text-secondary" />, title: "Marketing", jobs: 85 },
  { icon: <FaPenNib className="text-3xl text-accent" />, title: "Writing", jobs: 60 },
  { icon: <FaBriefcase className="text-3xl text-primary" />, title: "Management", jobs: 95 },
  { icon: <FaMobileAlt className="text-3xl text-secondary" />, title: "Mobile App", jobs: 45 },
  { icon: <FaPaintBrush className="text-3xl text-accent" />, title: "Design", jobs: 70 },
];

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content dark:text-white">
          Browse by Category
        </h1>
        <p className="mt-3 text-xl pb-3 text-base-content dark:text-gray-300">
          Find the job that’s perfect for you. 800+ new jobs everyday.
        </p>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="hidden md:block">
        {/* Previous Button */}
        <div className="swiper-button-prev absolute top-1/2 left-0 -translate-y-[-56px] z-10">
        </div>

        {/* Next Button */}
        <div className="swiper-button-next absolute top-1/2 right-0 -translate-y-[-60px] z-10">
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        spaceBetween={24}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
          1280: { slidesPerView: 5.5 },
        }}
        className="pb-8"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="bg-base-100 dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-none px-4 py-3 shadow hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="mb-4 flex justify-center">{cat.icon}</div>
              <h2 className="font-semibold text-base-content dark:text-white">
                {cat.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cat.jobs}+ Jobs
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;