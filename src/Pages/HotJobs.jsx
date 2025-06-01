import React, { useEffect, useState } from 'react';
import JobsCard from './JobsCard';
import DetailsCard from './DetailsCard';

const HotJobs = ({ jobsPromise }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise.then(data => setJobs(data));
  }, [jobsPromise]);

  return (
    <div className="bg-white">
      <JobsCard />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <DetailsCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotJobs;
