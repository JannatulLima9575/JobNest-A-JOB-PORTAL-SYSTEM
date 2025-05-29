import React from "react";

const Status = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="stats stats-vertical lg:stats-horizontal w-full bg-base-100 text-base-content">
        {/* Stat 1 */}
        <div className="stat text-center">
          <div className="stat-value text-info text-4xl font-bold">25K+</div>
          <div className="stat-title text-xl font-semibold mt-2">Completed Cases</div>
          <div className="text-sm mt-2 text-gray-500 dark:text-gray-300">
            We always provide people a complete solution focused on business needs.
          </div>
        </div>

        {/* Stat 2 */}
        <div className="stat text-center">
          <div className="stat-value text-info text-4xl font-bold">17+</div>
          <div className="stat-title text-xl font-semibold mt-2">Our Offices</div>
          <div className="text-sm mt-2 text-gray-500 dark:text-gray-300">
            We always provide people a complete solution focused on business needs.
          </div>
        </div>

        {/* Stat 3 */}
        <div className="stat text-center">
          <div className="stat-value text-info text-4xl font-bold">86+</div>
          <div className="stat-title text-xl font-semibold mt-2">Skilled People</div>
          <div className="text-sm mt-2 text-gray-500 dark:text-gray-300">
            We always provide people a complete solution focused on business needs.
          </div>
        </div>

        {/* Stat 4 */}
        <div className="stat text-center">
          <div className="stat-value text-info text-4xl font-bold">28+</div>
          <div className="stat-title text-xl font-semibold mt-2">Happy Clients</div>
          <div className="text-sm mt-2 text-gray-500 dark:text-gray-300">
            We always provide people a complete solution focused on business needs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;