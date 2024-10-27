// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar







import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#031540] to-black text-white py-5 px-[5rem]">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-2xl font-bold text-[#00abf0]">
          Abdul Basit.
        </div>

        <div className="flex space-x-9">
          <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaHome />
            <span>Home</span>
          </Link>

          <Link to="/about" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaUser />
            <span>About</span>
          </Link>

          <Link to="/projects" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>

          <Link to="/contact" className="flex items-center space-x-2 hover:text-[#00abf0]">
            <FaPhoneAlt />
            <span>Contact</span>
          </Link>

          <Link to='https://github.com/basit1215' target='blank' className="  text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl  flex items-center">
            <FaGithub />
          </Link>

        </div>


      </div>
    </nav>
  );
};

export default Navbar;
