// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar







import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaPhoneAlt, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-[#031540] to-black text-white py-5 px-[5rem]">
      <div className="container mx-auto flex justify-between items-center">
      
        <div className="text-2xl font-bold text-[#00abf0]">
          Abdul Basit.
        </div>
        
        <div className="flex space-x-9">
          <a href="#" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaUser />
            <span>About</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaProjectDiagram />
            <span>Projects</span>
          </a>

          {/* <a href="#" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaFileAlt />
            <span>Experience</span>
          </a> */}

          <a href="#" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaPhoneAlt />
            <span>Contact</span>
          </a>
          <a href='https://github.com/basit1215' target='blank' className="  text-2xl text-white hover:text-black px-2 py-2 hover:rounded-3xl hover:bg-[#00abf0] flex items-center">
          <FaGithub />
        </a>

        </div>
       
        {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center space-x-2">
          <FaGithub />
        </button> */}

      </div>
    </nav>
  );
};

export default Navbar;
