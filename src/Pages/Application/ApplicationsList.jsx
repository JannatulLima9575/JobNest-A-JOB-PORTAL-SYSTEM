import React, { useEffect, useState } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationsList = ({ myApplicationsPromise }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    myApplicationsPromise
      .then((data) => {
        setApplications(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch applications", error);
        setLoading(false);
      });
  }, [myApplicationsPromise]);

  if (loading) return <p>Loading applications...</p>;

  return (
    <div>
      <h3 className="text-3xl">Jobs Applied so far: {applications.length}</h3>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;
