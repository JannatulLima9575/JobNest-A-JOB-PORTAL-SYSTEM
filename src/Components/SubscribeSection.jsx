import React from "react";
import img2 from "../assets/sub2.png";

import img4 from "../assets/sub4.png";

const SubscribeSection = () => {
  return (
    <section className="relative bg-[#264fcc] rounded-2xl my-14 mx-4 md:mx-auto max-w-6xl text-white overflow-hidden py-20">
      {/* Floating images */}
      <img src={img2} alt="side" className="w-32 h-auto object-cover rounded-xl absolute top-1/2 -translate-y-1/2 left-6 hidden sm:block" />
      <img src={img4} alt="side" className="w-32 h-auto object-cover rounded-xl absolute top-10 right-6 hidden sm:block" />

      {/* Center content */}
      <div className="text-center px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          New Things Will Always <br /> Update Regularly
        </h2>

        <form className="bg-white p-2 md:p-3 rounded-lg max-w-2xl mx-auto flex items-center shadow-md">
          <span className="px-3 text-gray-400 text-xl">📧</span>
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 outline-none px-2 py-2 text-gray-700"
          />
          <button
            type="submit"
            className="bg-[#3264ff] hover:bg-[#264fcc] text-white font-medium px-6 py-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;