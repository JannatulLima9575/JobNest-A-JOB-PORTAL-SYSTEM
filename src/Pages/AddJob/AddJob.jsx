import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const AddJob = () => {
  // for user info
  const { user } = useAuth();

  // for submit button
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    // process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;
    // console.log(requirementsDirty, requirementsClean);

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";

    console.log(newJob);

    // save job to the database
    axios.post("https://job-nest-server-nu.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "This new Job has been saved and published!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-base-content">
        Add a New Job
      </h2>

      <form onSubmit={handleAddJob} className="space-y-6">
        {/* Basic Info */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            Basic Info
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="label">Job Title</label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="title"
                placeholder="Job title"
              />
            </div>
            <div>
              <label className="label">Company</label>
              <input
                type="text"
                name="company"
                className="input input-bordered w-full"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full"
                placeholder="Company location"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <label className="label">Company Logo URL</label>
              <input
                type="text"
                name="company_logo"
                className="input input-bordered w-full"
                placeholder="Company logo URL"
              />
            </div>
          </div>
        </fieldset>

        {/* Job Type */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            Job Type
          </legend>
          <div className="flex flex-wrap gap-3 mt-4">
            {["On-Site", "Remote", "Hybrid"].map((type) => (
              <label key={type} className="cursor-pointer">
                <input
                  type="radio"
                  name="jobType"
                  value={type}
                  className="radio mr-2"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Category */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            Job Category
          </legend>
          <select
            name="category"
            className="select select-bordered w-full mt-4"
          >
            <option disabled selected>
              Select a Job Category
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Deadline */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            Application Deadline
          </legend>
          <input
            type="date"
            name="deadline"
            className="input input-bordered w-full mt-4"
          />
        </fieldset>

        {/* Salary */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            Salary Range
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="minSalary"
                className="input input-bordered w-full"
                placeholder="Min salary"
              />
            </div>
            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="maxSalary"
                className="input input-bordered w-full"
                placeholder="Max salary"
              />
            </div>
            <div>
              <label className="label">Currency</label>
              <select name="currency" className="select select-bordered w-full">
                <option disabled selected>
                  Select currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Description */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            Job Description
          </legend>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Job description..."
          ></textarea>
        </fieldset>

        {/* Requirements */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            Requirements
          </legend>
          <textarea
            name="requirements"
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Requirements (comma separated)"
          ></textarea>
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            Responsibilities
          </legend>
          <textarea
            name="responsibilities"
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Responsibilities (comma separated)"
          ></textarea>
        </fieldset>

        {/* HR Info */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
          <legend className="text-lg font-semibold text-base-content">
            HR Contact
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label">HR Name</label>
              <input
                type="text"
                name="hr_name"
                className="input input-bordered w-full"
                placeholder="HR name"
              />
            </div>
            <div>
              <label className="label">HR Email</label>
              <input
                type="email"
                name="hr_email"
                defaultValue={user.email}
                className="input input-bordered w-full"
                placeholder="HR email"
              />
            </div>
          </div>

          <div className="mt-6">
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Add Job"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
