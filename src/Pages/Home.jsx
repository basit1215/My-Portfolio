// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home









import React, { useState, useEffect } from 'react';
import basit from '../assets/profile-pic (31).png'
import './Home.css';

const Home = () => {

  const roles = ['Frontend  Developer', 'Web Designer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); 

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText.slice(0, -1)); 
        setTypingSpeed(50); 
      }, typingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => currentRole.slice(0, prevText.length + 1)); 
        setTypingSpeed(100); 
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);


  return (
    <div className="min-h-[80vh] bg-[#031540] w-full flex items-center gap-72 justify-center">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16 p-8 max-w-5xl mx-auto">
    
        {/* Text Section */}
        <div className="text-white text-center md:text-left mr-28 max-w-lg">
          <h4 className="text-lg mb-2">Hi There<span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h4>
          <h1 className="mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00abf0]">
            <span className='text-xl font-semibold'>I'm</span> <span className='text-[#00abf0] text-4xl font-bold'>Abdul Basit</span>
          </h1>
    
          <h3 className="text-xl md:text-2xl lg:text-3xl text-blue-600 font-semibold mb-4">
            <div className="relative">
              <span className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing pr-10">
                {displayedText}
              </span>
            </div>
          </h3>
    
          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-6 py-2 hover:px-[25px] hover:py-[9px] bg-blue-500 text-black font-semibold text-base rounded-full border-2 border-transparent duration-300 ease-in-out transition hover:shadow-none transform hover:bg-blue-600 shadow-[#00abf0] shadow-[0_0_15px_var(--main-color)]"
            >
              Resume
            </a>
          </div>
        </div>
    
        {/* Image Section */}
        <div className="w-80 h-80 rounded-full ml-24 overflow-hidden border-4 border-white shadow-lg transition-all duration-300 hover:scale-105 mt-8 md:mt-0">
          <img
            src={basit}
            alt="basit"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
  



  // return (
  //   <div className="min-h-[80vh] bg-[#031540] flex items-center justify-center">
  //     <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16 p-8 max-w-5xl mx-auto">
  
  //       {/* Text Section */}
  //       <div className="text-white text-center md:text-left max-w-lg">
  //         <h4 className="text-lg">Hi There<span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h4>
  //         <h1 className=" mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00abf0]">
  //           <span className='text-xl font-semibold'>I'm</span> <span className='text-[#00abf0] text-4xl font-bold'>Abdul Basit</span>
  //         </h1>
  
  //         <h3 className="text-xl md:text-2xl lg:text-3xl text-blue-600 font-semibold">
  //           <div className="relative">
  //             <span className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing pr-2">
  //               {displayedText}
  //             </span>
  //           </div>
  //         </h3>
  
  //         {/* Resume Button */}
  //         <div className="mt-6">
  //           <a
  //             href="#"
  //             className="inline-block px-6 py-2 hover:px-[25px]  hover:py-[9px] bg-blue-500 text-black font-semibold text-base rounded-full border-2 border-transparent  duration-300 ease-in-out transition  hover:shadow-none transform  hover:bg-blue-600  shadow-[#00abf0] shadow-[0_0_15px_var(--main-color)]"
  //           >
  //             Resume
  //           </a>
  //         </div>
  //       </div>
  
  //       {/* Image Section */}
  //       <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 hover:scale-105">
  //         <img
  //           src={basit}
  //           alt="basit"
  //           className="w-full h-full object-cover"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
  


  // return (
  //   <div className="min-h-[80vh] bg-[#031540] flex items-center justify-center">
  //     <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16 p-8 max-w-5xl mx-auto">

  //       <div className="text-white text-center md:text-left max-w-lg">
  //         <h4>Hi There<span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h4>
  //         <h1 className="text-5xl font-extrabold mb-4 tracking-wide bg-clip-text text-transparent bg-white text-white">
  //           I'm <span className='text-[#00abf0]'>Abdul Basit</span>
  //         </h1>


  //         <h3 className="text-xl md:text-2xl lg:text-3xl text-blue-600 font-semibold">
  //           <div className="relative">
  //             <span className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing pr-2">
  //               {displayedText}
  //             </span>
  //           </div>
  //         </h3>
  



  //         <div className="bg-[var(--main-color)]  shadow-[0_0_25px_var(--main-color)] p-4">
  //           <a
  //             href="#"
  //             className="inline-block px-6 my-4 py-2 shadow-[#00abf0] shadow-[0_0_25px_var(--main-color)] p-4 bg-blue-500 text-black font-semibold text-base rounded-full border-2 border-transparent transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600 hover:shadow-2xl"
  //           >
  //             Resume
  //           </a>
  //         </div>

  //       </div>

  //       <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 hover:scale-105">
  //         <img
  //           src={basit}
  //           alt="basit"
  //           className="w-full h-full object-cover"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
