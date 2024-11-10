import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#252c41] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-[#00abf0]">404</h1>
        <p className="text-2xl mb-6">Oops! The page you are looking for cannot be found.</p>
        <a 
          href="/" 
          className="inline-block mt-5 px-6 py-2 bg-blue-500 text-[#0e1b38] font-bold text-base rounded-[5%] border border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;