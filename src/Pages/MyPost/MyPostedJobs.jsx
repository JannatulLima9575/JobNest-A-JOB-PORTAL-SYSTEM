import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import { jobsCreatedByPromise } from "../../api/jobsApi";
import JobLists from "./Joblists";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>My Posted Jobs: </h2>
      <Suspense>
        <JobLists
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
