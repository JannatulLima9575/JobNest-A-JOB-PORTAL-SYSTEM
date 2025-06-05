import { Link, useLoaderData } from "react-router";

const ShowDetailsTwo = () => {
  const job = useLoaderData();

  if (!job) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src={job.company_logo}
            alt={job.company?.name}
            className="w-16 h-16 object-contain rounded-md"
          />
          <div>
            <h2 className="text-3xl font-bold">{job.title}</h2>
            <p className="text-gray-600">
              {job.company?.name} • {job.location}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700">{job.description}</p>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {job.requirements?.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Job Overview</h3>
        <ul className="space-y-3 text-gray-700 text-sm">
          <li className="flex justify-between">
            <span className="font-medium">Job Type:</span>
            <span>{job.jobType}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Category:</span>
            <span>{job.category}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Salary Range:</span>
            <span>
              {job.salaryRange?.currency} {job.salaryRange?.min} -{" "}
              {job.salaryRange?.max}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Salary Offer:</span>
            <span>
              {typeof job.salary === "object"
                ? `${job.salary.currency} ${job.salary.min} - ${job.salary.max}`
                : `$${job.salary}`}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Location:</span>
            <span>{job.location}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Posted:</span>
            <span>{job.postedTime}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Deadline:</span>
            <span>{job.applicationDeadline}</span>
          </li>
        </ul>

        {/* Apply Now Button */}
        <Link to={`/jobApply/${job._id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowDetailsTwo;
