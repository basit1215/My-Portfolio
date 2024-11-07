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

//         <div className={`flex  lg:flex ${isOpen ? 'absolute top-[22%] justify-center items-center left-0 w-full bg-[#031540] flex-col z-50 px-4' : 'hidden lg:flex'}`}>
//           <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0] py-2">
//             <FaHome />
//             <span>Home</span>
//           </Link>

//           <Link to="/about" className="flex items-center     gap-[10px]  hover:text-[#00abf0] py-2">
//             <FaUser />
//             <span>About</span>
//           </Link>

//           <Link to="/projects" className="flex items-center gap-[10px]  hover:text-[#00abf0] py-2">
//             <FaProjectDiagram />
//             <span>Projects</span>
//           </Link>

//           <Link to="/contact" className="flex items-center gap-[10px]  hover:text-[#00abf0] py-2">
//             <FaPhoneAlt />
//             <span>Contact</span>
//           </Link>

//           {/* <Link to='https://github.com/basit1215' target='blank' className="text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
//             <FaGithub />
//           </Link> */}
//         </div>

//         {isOpen && (
//           <div
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//             className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col space-y-2 px-4 pb-3 z-50">
//             <Link to="/" className="text-white hover:text-gray-200 transition duration-300">
//               <FaHome />
//               <span>Home</span>
//             </Link>
//             <Link to="/about" className="text-white hover:text-gray-200 transition duration-300">
//               <FaUser />
//               <span>About</span>
//             </Link>

//             <Link
//               to="/projects"
//               style={{
//                 flexWrap: "wrap",
//                 flexDirection: "row",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}

//               className="text-white hover:text-gray-200 transition duration-300">
//               <FaProjectDiagram />
//               <span>Projects</span>
//             </Link>

//             <Link
//               to="/contact"
//               style={{
//                 flexWrap: "wrap",
//                 flexDirection: "row",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               className="text-white hover:text-gray-200 transition duration-300">
//               <FaPhoneAlt />
//               <span>Contact</span>
//             </Link>
//           </div>
//         )}

//         {/*For Mobile*/}
//         {isOpen && (

//           <div
//             style={{
//               textAlign: "center",
//               justifyContent: "center",
//               alignItems: "center",
//               gap: "11px",
//             }}
//             className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col space-y-2 px-4 pb-3 pt-3 z-50">
//             <Link
//               to="/"
//               style={{
//                 flexWrap: "wrap",
//                 flexDirection: "row",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               className="text-white hover:text-gray-200 transition duration-300">
//               <FaHome />
//               <span>Home</span>
//             </Link>
//             <Link
//               style={{
//                 flexWrap: "wrap",
//                 flexDirection: "row",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               to="/about"
//               className="text-white hover:text-gray-200 transition duration-300">
//               <FaUser />
//               <span>About</span>
//             </Link>

//             <Link
//               style={{
//                 flexWrap: "wrap",
//                 flexDirection: "row",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               to="/projects"
//               className="text-white hover:text-gray-200 transition duration-300">
//               <FaProjectDiagram />
//               <span>Projects</span>
//             </Link> 
//             <Link
//               style={{
//                 flexWrap: "wrap",
//                 flexDirection: "row",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               to="/contact"
//               className="text-white hover:text-gray-200 transition duration-300">
//               <FaUser />
//               <span>Contact</span>
//             </Link>

//               </div>

//         )}

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
































// import React, { useState } from 'react';
// import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt, FaBars, FaTimes,FaGithub, } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-[#031540] text-white py-5 px-4 md:px-20">
//       <div className="flex justify-between items-center">
//         <div className="text-2xl font-bold text-[#00abf0]">Abdul Basit.</div>

//         <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
//           {isOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
//         </button>

//         <div className={`lg:flex space-x-8 ${isOpen ? 'absolute top-[22%] left-0 w-full bg-[#031540] flex flex-col items-center z-50 px-4' : 'hidden lg:flex'}`}>
//           <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0] py-2">
//             <FaHome />
//             <span>Home</span>
//           </Link>

//           <Link to="/about" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
//             <FaUser />
//             <span>About</span>
//           </Link>

//           <Link to="/projects" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
//             <FaProjectDiagram />
//             <span>Projects</span>
//           </Link>

//           <Link to="/contact" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
//             <FaPhoneAlt />
//             <span>Contact</span>
//           </Link>

//           <Link to='https://github.com/basit1215' target='blank' className="text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
//             <FaGithub />
//           </Link>
//         </div>

//         {isOpen && (
//           <div className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col items-center space-y-4 py-3 z-50">
//             <Link to="/" className="text-white flex items-center space-x-2 hover:text-gray-200">
//               <FaHome />
//               <span>Home</span>
//             </Link>
//             <Link to="/about" className="text-white flex items-center space-x-2 hover:text-gray-200">
//               <FaUser />
//               <span>About</span>
//             </Link>
//             <Link to="/projects" className="text-white flex items-center space-x-2 hover:text-gray-200">
//               <FaProjectDiagram />
//               <span>Projects</span>
//             </Link>
//             <Link to="/contact" className="text-white flex items-center space-x-2 hover:text-gray-200">
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



















// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt, FaBars, FaTimes, FaGithub } from 'react-icons/fa';



// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   // className="fixed top-0 left-0 w-full bg-[#031540] text-white p-4 z-50 shadow-custom"
//   return (
//     <div className={`fixed top-0 left-0 right-0 p-4 shadow-md z-50 transition duration-300 ${isScrolled ? "bg-opacity-80 backdrop-blur-md text-white" : "bg-[#031540] text-white"
//       }`} >
//       <div className="flex justify-between items-center">
//         <div className="flex items-center pl-3 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8 2xl:pl-10">
//           <h1 className="text-xl font-bold tracking-wider text-[#00abf0]">
//             Abdul Basit.
//           </h1>
//         </div>

//         <div className="hidden md:flex gap-6 pr-3 sm:pr-5 md:pr-6 lg:pr-7 xl:pr-8 2xl:pr-10">
//           <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0] py-2">
//             <FaHome />
//             <span>Home</span>
//           </Link>

//           <Link to="/about" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
//             <FaUser />
//             <span>About</span>
//           </Link>

//           <Link to="/projects" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
//             <FaProjectDiagram />
//             <span>Projects</span>
//           </Link>

//           <Link to="/contact" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
//             <FaPhoneAlt />
//             <span>Contact</span>
//           </Link>

//           <Link to='https://github.com/basit1215' target='blank' className="text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
//             <FaGithub />
//           </Link>
//         </div>

//         <button
//           className="lg:hidden  text-white p-1 rounded-md    pr-3 "
//           onClick={toggleMenu}
//         >
//           {isOpen ? (
//             <svg
//               aria-hidden="true"
//               height="24"
//               viewBox="0 0 24 24"
//               width="24"
//               className="text-white"
//             >
//               <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           ) : (
//             <svg
//               aria-hidden="true"
//               height="24"
//               viewBox="0 0 24 24"
//               width="24"
//               className="text-white"
//             >
//               <path d="M4 6h16M4 12h16m-16 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="lg:hidden mt-4 "
//           style={{
//             justifyContent: 'center',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Link
//             href="/"
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '8px',
//               alignItems: 'center',
//               paddingBottom: '11px',
//             }}
//             className="block  text-center transition-colors duration-300 hover:text-orange-100  text-lg font-semibold"
//           >

//             <FaHome />
//             <span>Home</span>

//           </Link>

//           <Link
//             href="/about"
//             className="block text-center transition-colors duration-300 hover:text-orange-100  text-lg font-semibold"
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '8px',
//               alignItems: 'center',
//               paddingBottom: '11px',
//             }}
//           >

//             <FaUser />
//             <span>About</span>

//           </Link>

//           <Link
//             href="/projects"
//             className="block text-center transition-colors duration-300 hover:text-orange-100  text-lg font-semibold"
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '8px',
//               alignItems: 'center',
//               paddingBottom: '11px',
//             }}
//           >

//             <FaProjectDiagram />
//             <span>Projects</span>

//           </Link>

//           <Link
//             href="/contact"
//             className="block text-center transition-colors duration-300 hover:text-orange-100  text-lg font-semibold"
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '8px',
//               alignItems: 'center',
//               paddingBottom: '11px',
//             }}
//           >

//             <FaPhoneAlt />
//             <span>Contact</span>

//           </Link>
//         </div>
//       )}
//     </div>

//   )
// }

// export default Navbar












import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 p-4 shadow-md z-50 transition duration-300 ${isScrolled ? "bg-opacity-80 backdrop-blur-lg text-white" : "bg-[#031540] text-white"}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-3 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8 2xl:pl-10">
          <h1 className="text-2xl font-bold tracking-wider text-[#2cabdd]">
          &lt;Abdul Basit /&gt;
          </h1>
        </div>

        {/* Hide navigation links on screens smaller than 768px */}
        {/* <div className="hidden lg:flex gap-6 pr-3 sm:pr-5 md:pr-6 lg:pr-7 xl:pr-8 2xl:pr-10">
          <Link to="/" className="flex items-center space-x-2 hover:text-[#00abf0] py-2">
            <FaHome />
            <span>Home</span>
          </Link>

          <Link to="/about" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
            <FaUser />
            <span>About</span>
          </Link>

          <Link to="/projects" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>

          <Link to="/contact" className="flex items-center gap-2 hover:text-[#00abf0] py-2">
            <FaPhoneAlt />
            <span>Contact</span>
          </Link> */}


        <div className="hidden lg:flex gap-6 pr-3 sm:pr-5 md:pr-6 lg:pr-7 xl:pr-8 2xl:pr-10">
          <Link to="/" className="flex items-center space-x-2 flex-col hover:text-[#00abf0] py-2 group">
            <div className='flex  justify-center items-center gap-2'>
              <FaHome />
              <span>Home</span>
            </div>
            <span className="block w-0 h-[2px] bg-[#00abf0] group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link to="/about" className="flex items-center space-x-2 flex-col hover:text-[#00abf0] py-2 group">
            <div className='flex  justify-center items-center gap-2'>
              <FaUser />
              <span>About</span>
            </div>
            <span className="block w-0 h-[2px] bg-[#00abf0] group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link to="/projects" className="flex items-center space-x-2 flex-col hover:text-[#00abf0] py-2 group">
            <div className='flex  justify-center items-center gap-2'>
              <FaProjectDiagram />
              <span>Projects</span>
            </div>
            <span className="block w-0 h-[2px] bg-[#00abf0] group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link to="/contact" className="flex items-center space-x-2 flex-col hover:text-[#00abf0] py-2 group">
            <div className='flex  justify-center items-center gap-2'>
              <FaPhoneAlt />
              <span>Contact</span>
            </div>
            <span className="block w-0 h-[2px] bg-[#00abf0] group-hover:w-full transition-all duration-300"></span>
          </Link>





          {/* <div className="hidden md:flex space-x-8 relative">
            <Link
              to='/'
              className="nav-link flex items-center space-x-2 group"
            >
              <div className="flex items-center">
                <AiOutlineHome className="mb-1" />
                <span className="ml-1 text-sm md:text-base">Home</span>
                <span className="underline"></span>
              </div>
            </Link>
            <Link
              to='/about'
              className="nav-link flex items-center space-x-2 group"
            >
              <div className="flex items-center">
                <AiOutlineUser className="mb-1" />
                <span className="ml-1 text-sm md:text-base">About</span>
                <span className="underline"></span>
              </div>
            </Link>
            <Link
              to='/projects'
              className="nav-link flex items-center space-x-2 group"
            >
              <div className="flex items-center">
                <AiOutlineFundProjectionScreen className="mb-1" />
                <span className="ml-2 text-sm md:text-base">Projects</span>
                <span className="underline"></span>
              </div>
            </Link>
            <Link
              to='/contact'
              className="nav-link flex items-center space-x-2 group"
            >
              <div className="flex items-center">
                <AiOutlineMail className="mb-1" />
                <span className="ml-1 text-sm md:text-base">Contact</span>
                <span className="underline"></span>
              </div>
            </Link>
          </div> */}



          {/* <div className="hidden md:flex space-x-8 relative">
  <Link
    to="/"
    className="nav-link flex items-center space-x-2 group"
  >
    <div className="flex items-center">
      <AiOutlineHome className="mb-1" />
      <span className="ml-1 text-sm md:text-base">Home</span>
    
      <span className="block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
    </div>
  </Link>
  
  <Link
    to="/about"
    className="nav-link flex items-center space-x-2 group"
  >
    <div className="flex items-center">
      <AiOutlineUser className="mb-1" />
      <span className="ml-1 text-sm md:text-base">About</span>
      <span className="block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
    </div>
  </Link>
  
  <Link
    to="/projects"
    className="nav-link flex items-center space-x-2 group"
  >
    <div className="flex items-center">
      <AiOutlineFundProjectionScreen className="mb-1" />
      <span className="ml-2 text-sm md:text-base">Projects</span>
      <span className="block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
    </div>
  </Link>
  
  <Link
    to="/contact"
    className="nav-link flex items-center space-x-2 group"
  >
    <div className="flex items-center">
      <AiOutlineMail className="mb-1" />
      <span className="ml-1 text-sm md:text-base">Contact</span>
      <span className="block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
    </div>
  </Link>
</div> */}





          <Link to='https://github.com/basit1215' target='blank' className="text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
            <FaGithub />
          </Link>
        </div>

        {/* Toggle button visible on screens 768px and smaller */}
        <button className="lg:hidden text-white p-1 rounded-md pr-3 flex  items-center   gap-2" onClick={toggleMenu}>

          <Link to='https://github.com/basit1215' target='blank' className="text-xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
            <FaGithub />
          </Link>

          {isOpen ? (
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" className="text-white">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" className="text-white">
              <path d="M4 6h16M4 12h16m-16 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center justify-center">
          <Link to="/" className="flex items-center justify-center gap-2 text-center text-lg font-semibold transition-colors duration-300 hover:text-[#00abf0] py-2">
            <FaHome />
            <span>Home</span>
          </Link>

          <Link to="/about" className="flex items-center gap-2 justify-center  text-center text-lg font-semibold transition-colors duration-300 hover:text-[#00abf0] py-2">
            <FaUser />
            <span>About</span>
          </Link>

          <Link to="/projects" className="flex items-center gap-2 justify-center  text-center text-lg font-semibold transition-colors duration-300 hover:text-[#00abf0] py-2">
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>

          <Link to="/contact" className="flex items-center gap-2 justify-center  text-center text-lg font-semibold transition-colors duration-300 hover:text-[#00abf0] py-2">
            <FaPhoneAlt />
            <span>Contact</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
