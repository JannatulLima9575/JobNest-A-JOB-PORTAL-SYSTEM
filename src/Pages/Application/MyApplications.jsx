import React, { Suspense } from "react";
import ApplicationsStat from "./ApplicationsStat";
import ApplicationsList from "./ApplicationsList";
import useAuth from "../../Hooks/useAuth";
import { myApplicationsPromise } from "./../../api/applicationsApi";

const MyApplications = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto min-h-[100vh]">
      <ApplicationsStat />
      <Suspense fallback={<p>Loading your applications...</p>}>
        <ApplicationsList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
