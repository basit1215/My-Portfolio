import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt, FaGithub } from 'react-icons/fa';


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

          <Link to='https://github.com/basit1215' target='blank' className="text-2xl text-white hover:text-[#00abf0] px-2 py-2 hover:rounded-3xl flex items-center">
            <FaGithub />
          </Link>
        </div>

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