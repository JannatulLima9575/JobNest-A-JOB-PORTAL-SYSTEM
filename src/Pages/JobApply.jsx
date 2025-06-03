import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import Lottie from "lottie-react";
import animation1 from "../assets/lottiefiles/form1.json";
import animation2 from "../assets/lottiefiles/form2.json";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log("Form Data:", {
      linkedIn,
      github,
      resume,
    });
  };

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-base-200 text-base-content px-4 py-10 overflow-hidden">

      {/* 🎨 Top-right Animation */}
      <div className="absolute top-3 right-5 w-40 md:w-60 lg:w-64 opacity-70 z-0">
        <Lottie animationData={animation1} loop={true} />
      </div>

      {/* 🎨 Bottom-left Animation */}
      <div className="absolute bottom-0 left-3 w-32 md:w-52 lg:w-64 opacity-60 z-0">
        <Lottie animationData={animation2} loop={true} />
      </div>

      {/* ✅ Centered Form */}
      <div className="relative z-10 w-full max-w-xl bg-base-100 rounded-box p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Apply for this job:{" "}
          <Link to={`/jobs/${jobId}`} className="link link-primary">
            See Job Details
          </Link>
        </h3>

        <form onSubmit={handleApplyFormSubmit} className="space-y-4">
          <div>
            <label className="label font-semibold">LinkedIn Link</label>
            <input
              type="url"
              name="linkedIn"
              className="input input-bordered w-full"
              placeholder="https://linkedin.com/in/username"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">GitHub Link</label>
            <input
              type="url"
              name="github"
              className="input input-bordered w-full"
              placeholder="https://github.com/username"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Resume Link</label>
            <input
              type="url"
              name="resume"
              className="input input-bordered w-full"
              placeholder="Drive/Dropbox/Website Resume Link"
              required
            />
          </div>

          <div className="pt-4 text-center">
            <input type="submit" className="btn btn-primary w-full" value="Apply Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;