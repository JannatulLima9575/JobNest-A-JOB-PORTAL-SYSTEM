import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ShowDetails = () => {
    const {_id,
    title,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    salary,
    postedTime,
    requirements,
    tags,} = useLoaderData();
    return (
        <div>
            <h2>{title}</h2>
            <p>company {company}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default ShowDetails;