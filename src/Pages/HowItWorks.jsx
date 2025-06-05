import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Create an Account",
    desc: "Sign up as a job seeker or employer to access the full platform features and manage your dashboard.",
  },
  {
    id: 2,
    title: "Browse or Post Jobs",
    desc: "Employers can post detailed job listings, while seekers can explore and filter jobs by category and skill.",
  },
  {
    id: 3,
    title: "Connect & Apply",
    desc: "Job seekers can apply directly, and employers can review applications and connect with top candidates.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto py-18 px-4 md:px-8 bg-base-100 text-base-content">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-neutral-content">
          How HireSpark Works
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Follow these simple steps to connect with the right talent or your next opportunity.
        </p>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-12 relative">
        {/* Dashed line for desktop view */}
        <div className="hidden md:block max-w-4xl mx-auto absolute top-12 left-0 right-0 border-dashed border-t-2 border-indigo-200 z-0"></div>

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="z-10 flex flex-col items-center text-center space-y-3 max-w-xs mx-auto"
          >
            <div className="bg-indigo-100 dark:bg-indigo-300 text-indigo-500 text-2xl lg:text-5xl w-24 h-24 rounded-full flex items-center justify-center font-bold shadow">
              {step.id}
            </div>
            <h3 className="text-2xl font-bold pt-2 text-neutral dark:text-neutral-content">
              {step.title}
            </h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="btn btn-primary px-6 rounded-md">
          Explore Jobs
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;