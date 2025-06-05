import React from "react";
import profileImg from "../assets/team/img-profile.png";

const CreateProfile = () => {
  return (
    <section className="bg-[#f1f4fd] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden">
          <img src={profileImg} alt="Create Profile" className="w-full h-auto object-cover" />
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-indigo-600 font-medium mb-2">Create Profile</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-snug">
            Create Your Personal Account Profile
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Work Profile is a personality assessment that measures an individual's work personality 
            through their workplace traits, social and emotional traits; as well as the values 
            and aspirations that drive them forward.
          </p>
          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-md">
            Create Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateProfile;