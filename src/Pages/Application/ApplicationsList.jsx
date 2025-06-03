import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationsList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h3 className="text-3xl">Jobs Applied so far: {applications.length}</h3>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {
                applications.map((application, index) => <JobApplicationRow
                    key={application._id}
                    index ={index}
                    application={application}
                ></JobApplicationRow>)
            }


          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;
