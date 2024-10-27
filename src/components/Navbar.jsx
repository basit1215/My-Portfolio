// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar







// import React from 'react';
// import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaPhoneAlt, FaGithub } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-[#031540] to-black text-white py-5 px-[5rem]">
//       <div className="container mx-auto flex justify-between items-center">

//         <div className="text-2xl font-bold text-[#00abf0]">
//           Abdul Basit.
//         </div>

//         <div className="flex space-x-9">
//           <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaHome />
//             <span>Home</span>
//           </Link>

//           <Link to="/about" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaUser />
//             <span>About</span>
//           </Link>

//           <Link to="/projects" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaProjectDiagram />
//             <span>Projects</span>
//           </Link>

//           <Link to="/contact" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaPhoneAlt />
//             <span>Contact</span>
//           </Link>

//           <Link to='https://github.com/basit1215' target='blank' className="  text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl  flex items-center">
//             <FaGithub />
//           </Link>

//         </div>


//       </div>
//     </nav>
//   );
// };

// export default Navbar;


















// import React, { useState } from 'react';
// import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);


//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-[#031540] text-white py-5 px-4 md:px-[5rem]">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold text-[#00abf0]">Abdul Basit.</div>



//         <div className={`flex space-x-9 lg:flex ${isOpen ? 'flex-col absolute top-full left-0 w-full bg-[#031540] lg:static lg:flex-row lg:bg-transparent lg:space-y-0 space-y-2 lg:space-x-9 px-4 lg:px-0' : 'hidden lg:flex'}`}>
//           <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaHome />
//             <span>Home</span>
//           </Link>

//           <Link to="/about" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaUser />
//             <span>About</span>
//           </Link>

//           <Link to="/projects" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaProjectDiagram />
//             <span>Projects</span>
//           </Link>

//           <Link to="/contact" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaPhoneAlt />
//             <span>Contact</span>
//           </Link>

//           <Link to='https://github.com/basit1215' target='blank' className="text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
//             <FaGithub />
//           </Link>
//         </div>

//         <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
//           {isOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
//         </button>
//         {
//           isOpen && (
//             <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col space-y-2 px-4 pb-3 z-50">
//               <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0]">
//                 <FaHome />
//                 <span>Home</span>
//               </Link>
//               <Link to="/about" className="flex items-center space-x-2 hover:text-[#00abf0]">
//                 <FaUser />
//                 <span>About</span>
//               </Link>

//               <Link to="/projects" className="flex items-center space-x-2 hover:text-[#00abf0]">
//                 <FaProjectDiagram />
//                 <span>Projects</span>
//               </Link>

//               <Link to="/contact" className="flex items-center space-x-2 hover:text-[#00abf0]">
//                 <FaPhoneAlt />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           )
//         }

//       </div>
//     </nav>
//   );
// };

// export default Navbar;






















// import React, { useState } from 'react';
// import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-[#031540] text-white py-5 px-4 md:px-[5rem]">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold text-[#00abf0]">Abdul Basit.</div>

//         <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
//           {isOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
//         </button>

//         <div className={`flex space-x-9 lg:flex ${isOpen ? 'flex-col absolute top-full left-0 w-full bg-[#031540] lg:static lg:flex-row lg:bg-transparent lg:space-y-0 space-y-2 lg:space-x-9 px-4 lg:px-0' : 'hidden lg:flex'}`}>
//           <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaHome />
//             <span>Home</span>
//           </Link>

//           <Link to="/about" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaUser />
//             <span>About</span>
//           </Link>

//           <Link to="/projects" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaProjectDiagram />
//             <span>Projects</span>
//           </Link>

//           <Link to="/contact" className="flex items-center space-x-2 hover:text-[#00abf0]">
//             <FaPhoneAlt />
//             <span>Contact</span>
//           </Link>

//           <Link to='https://github.com/basit1215' target='blank' className="text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
//             <FaGithub />
//           </Link>
//         </div>

//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col space-y-2 px-4 pb-3 z-50">
//             <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0]">
//               <FaHome />
//               <span>Home</span>
//             </Link>
//             <Link to="/about" className="flex items-center space-x-2 hover:text-[#00abf0]">
//               <FaUser />
//               <span>About</span>
//             </Link>

//             <Link to="/projects" className="flex items-center space-x-2 hover:text-[#00abf0]">
//               <FaProjectDiagram />
//               <span>Projects</span>
//             </Link>

//             <Link to="/contact" className="flex items-center space-x-2 hover:text-[#00abf0]">
//               <FaPhoneAlt />
//               <span>Contact</span>
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



































import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#031540] text-white py-5 px-4 md:px-[5rem]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#00abf0]">Abdul Basit.</div>

        <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
          {isOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
        </button>

        <div className={`flex space-x-9 lg:flex ${isOpen ? 'absolute top-full left-0 w-full bg-[#031540] flex-col z-50 px-4' : 'hidden lg:flex'}`}>
          <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0] py-2">
            <FaHome />
            <span>Home</span>
          </Link>

          <Link to="/about" className="flex items-center space-x-2 hover:text-[#00abf0] py-2">
            <FaUser />
            <span>About</span>
          </Link>

          <Link to="/projects" className="flex items-center space-x-2 hover:text-[#00abf0] py-2">
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>

          <Link to="/contact" className="flex items-center space-x-2 hover:text-[#00abf0] py-2">
            <FaPhoneAlt />
            <span>Contact</span>
          </Link>

          <Link to='https://github.com/basit1215' target='blank' className="text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
            <FaGithub />
          </Link>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col space-y-2 px-4 pb-3 z-50">
            <Link to="/" className="text-white hover:text-gray-200 transition duration-300">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200 transition duration-300">
              <FaUser />
              <span>About</span>
            </Link>

            <Link to="/projects" className="text-white hover:text-gray-200 transition duration-300">
              <FaProjectDiagram />
              <span>Projects</span>
            </Link>

            <Link to="/contact" className="text-white hover:text-gray-200 transition duration-300">
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
