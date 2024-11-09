import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! The page you are looking for cannot be found.</p>
        <a 
          href="/" 
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;