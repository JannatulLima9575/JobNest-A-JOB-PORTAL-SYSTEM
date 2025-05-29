import React from "react";
import { motion } from "motion/react";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/banner1.png";
import team4 from "../assets/team/banner2.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-blue-50 dark:bg-gray-900 min-h-[70vh] transition-colors duration-500 text-base-content dark:text-gray-100">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-8 px-4 md:px-8 text-gray-800 dark:text-gray-100">
        {/* ✅ Image Section (Hidden on Small Devices) */}
        <div className="flex-1 hidden sm:flex justify-center items-center relative h-[360px]">
          {/* Top Left Large Image with Y motion */}
          <motion.img
            src={team1}
            animate={{ y: [100, 15, 100] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="w-75 h-53 object-cover rounded-t-4xl rounded-r-4xl border-b-8 border-l-8 border-blue-500 absolute top-0 left-4 z-10 shadow-md"
          />

          {/* Bottom Right Large Image with X motion */}
          <motion.img
            src={team2}
            animate={{ x: [100, 15, 100] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="w-75 h-48 object-cover rounded-t-4xl rounded-r-4xl border-b-8 border-l-8 border-blue-500 absolute bottom-0 right-6 z-10 shadow-md"
          />

          {/* Small Top Right Floating Image */}
          <motion.img
            src={team3}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="w-20 h-auto object-cover  absolute top-6 right-[35%] z-20"
          />

          {/* Small Bottom Left Floating Image */}
          <motion.img
            src={team4}
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="w-20 h-auto object-cover absolute bottom-4 left-[90px] z-20"
          />

          {/* Decorative Dots (with dark support) */}
          <div className="absolute top-1/2 right-[80px] w-16 h-16 bg-[radial-gradient(circle,_#d0d0d0_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#444_1px,_transparent_1px)] bg-[length:6px_6px] opacity-40"></div>
          <div className="absolute bottom-[80px] left-[50px] w-16 h-16 bg-[radial-gradient(circle,_#d0d0d0_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#444_1px,_transparent_1px)] bg-[length:6px_6px] opacity-30"></div>
        </div>

        {/* ✅ Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug"
          >
            The{" "}
            <motion.span
              animate={{
                color: ["#3c65f5", "#03438c", "#3c65c4"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Easiest Way
            </motion.span>{" "}
            to Get Your New Job
          </motion.h1>

          <p className="py-6 text-base text-gray-600 dark:text-gray-300">
            Discover your dream job with our platform. We connect you with top
            employers and help you find the perfect fit for your skills and
            career goals. Whether you're looking for a new opportunity or just
            exploring, we've got you covered. Join us today and take the first
            step towards your dream job!
          </p>

          <div className="flex md:justify-start justify-center md:gap-3 gap-1.5">
            <Link
              to="/"
              className="btn bg-[#3c65f5] text-white hover:bg-[#05264e] rounded-2xl"
            >
              Find Jobs
            </Link>
            <Link
              to="/"
              className="btn bg-[#3c65f5] text-white hover:bg-[#05264e] rounded-2xl"
            >
              Explore World
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;