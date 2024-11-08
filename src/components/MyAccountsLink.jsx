// import React from 'react'
// import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaVoicemail } from 'react-icons/fa'
// import { FaX, FaXTwitter } from 'react-icons/fa6'
// import { MdOutlineMailOutline } from 'react-icons/md'
// import { Link } from 'react-router-dom'

// const MyAccountsLink = () => {
//   return (
//     <>
//       <div className='bg-[#031540] pt-12 py-20'>
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-white tracking-[1px]">FIND ME ON</h1>
//           <p className="text-[0.93rem] text-gray-300 mt-2">
//             Feel free to <span className="text-[#00abf0] font-semibold">Connect</span> with me
//           </p>
//         </div>

//         <div className="flex justify-center space-x-8">

//           <Link
//             to="https://github.com/harisahmedjs"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#00abf0] px-2 py-2 hover:rounded-3xl   rounded-3xl  shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:text-black hover:shadow-black  text-2xl"
//           >
//             <FaGithub />
//           </Link>


//           <Link
//             to="https://www.linkedin.com/in/haris-ahmed-3b5643279/"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#00abf0]  px-2 py-2 rounded-3xl  shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent hover:text-blue-700  bg-white   hover:shadow-blue-700 text-2xl"
//           >
//             <FaLinkedin />
//           </Link>


//           <Link
//             to="https://www.instagram.com/?hl=en"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#00abf0]  px-2 py-2 hover:rounded-3xl    rounded-3xl  shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:shadow-red-500 hover:text-red-500 text-2xl"
//           >
//             <FaInstagram />
//           </Link>

//           <Link
//             to="https://www.instagram.com/?hl=en"
//             target="_blank"
//             className="text-[#00abf0]  px-2 py-2 hover:rounded-3xl    rounded-3xl  shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:shadow-blue-700 hover:text-blue-700 text-2xl"
//           >
//             <FaFacebook />
//           </Link>

//           <Link
//             to="https://www.instagram.com/?hl=en"
//             target="_blank"
//             className="text-[#00abf0]  px-2 py-2 hover:rounded-3xl    rounded-3xl  shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:shadow-red-400 hover:text-red-400 text-2xl"
//           >
//             <MdOutlineMailOutline />
//           </Link>

//           <Link
//             to="https://www.instagram.com/?hl=en"
//             target="_blank"
//             className="text-[#00abf0]  px-2 py-2 hover:rounded-3xl    rounded-3xl  shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:shadow-black hover:text-black text-2xl"
//           >
//             <FaXTwitter />
//           </Link>


//         </div>
//       </div>
//     </>
//   )
// }

// export default MyAccountsLink




















import React, { useEffect } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MyAccountsLink.css'

const MyAccountsLink = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS animations on scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='bg-[#031540] pt-12 py-20'>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-[1px]">FIND ME ON</h1>
          <p className="text-[0.93rem] text-gray-300 mt-2">
            Feel free to <span className="text-[#00abf0] font-semibold">Connect</span> with me
          </p>
        </div>

        <div className="flex justify-center allLinksDivs space-x-8">
          <Link
            to="https://github.com/harisahmedjs"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            className="text-[#00abf0] px-2 py-2 hover:rounded-3xl rounded-3xl shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:text-black hover:shadow-black text-2xl hover:scale-110 hover:-translate-y-1"
          >
            <FaGithub />
          </Link>

          <Link
            to="https://www.linkedin.com/in/haris-ahmed-3b5643279/"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#00abf0] px-2 py-2 rounded-3xl shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent hover:text-blue-700 bg-white hover:shadow-blue-700 text-2xl hover:scale-110 hover:-translate-y-1"
          >
            <FaLinkedin />
          </Link>

          <Link
            to="https://www.instagram.com/?hl=en"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#00abf0] px-2 py-2 hover:rounded-3xl rounded-3xl shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:shadow-red-500 hover:text-red-500 text-2xl hover:scale-110 hover:-translate-y-1"
          >
            <FaInstagram />
          </Link>

          <Link
            to="https://www.instagram.com/?hl=en"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-[#00abf0] px-2 py-2 hover:rounded-3xl rounded-3xl shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:shadow-blue-700 hover:text-blue-700 text-2xl hover:scale-110 hover:-translate-y-1"
          >
            <FaFacebook />
          </Link>

          <Link
            to="https://www.instagram.com/?hl=en"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-[#00abf0] px-2 py-2 hover:rounded-3xl rounded-3xl shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:shadow-red-400 hover:text-red-400 text-2xl hover:scale-110 hover:-translate-y-1"
          >
            <MdOutlineMailOutline />
          </Link>

          <Link
            to="https://www.instagram.com/?hl=en"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-[#00abf0] px-2 py-2 hover:rounded-3xl rounded-3xl shadow-[0_0_25px_var(--main-color)] shadow-[#00abf0] duration-300 ease-in-out transition transform border-transparent bg-white hover:shadow-black hover:text-black text-2xl hover:scale-110 hover:-translate-y-1"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyAccountsLink;
