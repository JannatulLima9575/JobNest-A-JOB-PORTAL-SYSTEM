import React from "react";

const JobApplicationRow = ({ application, index }) => {
  const { company, title, company_logo, category } = application;

  return (
    <tr className="hover:bg-base-200 transition">
      <th>
        <span className="text-base font-semibold">{index + 1}</span>
      </th>

      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="rounded-xl w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={company_logo}
                alt={`${company} Logo`}
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-base text-neutral">{company}</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </td>

      <td>
        <span className={`badge badge-sm ${
          category === "Remote"
            ? "badge-success"
            : category === "On-site"
            ? "badge-warning"
            : "badge-info"
        }`}>
          {category}
        </span>
      </td>

      <td>
        <span className="text-sm text-primary font-medium">Pending</span>
      </td>

      <td>
        <button className="btn btn-sm btn-outline btn-error hover:text-white">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default JobApplicationRow;