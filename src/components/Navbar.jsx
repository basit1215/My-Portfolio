// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar







import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaPhoneAlt, FaStar, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-[#031540] to-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-400">
          Abdullah.
        </div>
        {/* Links */}
        <div className="flex space-x-6">
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaUser />
            <span>About</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaProjectDiagram />
            <span>Projects</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaFileAlt />
            <span>Experience</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaPhoneAlt />
            <span>Contact</span>
          </a>
        </div>
        {/* Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center space-x-2">
          <FaGithub />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
