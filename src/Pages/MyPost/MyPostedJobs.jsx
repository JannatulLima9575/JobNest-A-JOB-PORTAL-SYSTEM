import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import { jobsCreatedByPromise } from "../../api/jobsApi";
import JobLists from "./Joblists";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        My Posted Jobs
      </h2>

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;