import React from 'react';
import notFound from '../assets/404.png';
import { Link } from 'react-router';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4">
      <img
        src={notFound}
        alt="404 Not Found"
        className="w-full max-w-md mb-6"
      />
      <h2 className="text-2xl md:text-3xl font-bold text-base-content dark:text-white mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <button className="btn btn-secondary">Back to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;