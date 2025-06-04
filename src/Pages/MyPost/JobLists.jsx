import React, { use } from "react";
import { Link } from "react-router";

const JobLists = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 min-h-[45vh]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-start">
        Jobs Created by You: <span className="text-primary">{jobs.length}</span>
      </h2>

      <div className="overflow-x-auto shadow-md rounded-lg border border-base-300 bg-base-100">
        <table className="table table-zebra w-full text-sm md:text-base">
          {/* Table Head */}
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View Applications</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td className="font-medium">{job.title}</td>
                <td>{job.deadline}</td>
                <td>
                  <span className="badge badge-info badge-outline"><Link to={`/applications/${job._id}`}>View</Link></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobLists;