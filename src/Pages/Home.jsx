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

  const roles = ['Frontend  Developer...', 'Web Designer...'];
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
    <div className="min-h-[80vh] bg-[#031540] w-full justify-center">
      <div className="flex  justify-center md:flex-row  gap-12 md:gap-16 py-[60px]  ml-[5rem] ">

        <div className="w-[420px]  text-white text-center md:text-left py-10 md:w-[50%] md:mr-12">
          <h4 className="text-[26px] mb-1 tracking-tight font-medium">
            Hi There <span className="wave" role="img" aria-labelledby="wave"> 👋🏻</span>
          </h4>
          <h1 className="mb-4">
            <span className='text-[42px] font-semibold'>I'm </span>
            <span className='text-[#00abf0] text-[56px] font-bold'> Abdul Basit</span>
          </h1>
          <div className='h-12 '>
            <h3 className=" md:text-2xl lg:text-3xl tracking-[2px] text-[#00abf0] font-mono">
              <div className="relative">
                <span className="text-[35px] inline-block whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing pr-10">
                  {displayedText}
                </span>
              </div>
            </h3>
          </div>

          {/* Buttons Section */}
          <div className="mt-4 flex gap-5">

            <a
              href="#"
              className="inline-block px-6 py-2 hover:px-[25px] hover:py-[9px] bg-blue-500 text-[#0e1b38] font-bold text-base rounded-full border-2 border-transparent duration-300 ease-in-out transition hover:shadow-none transform hover:bg-blue-500 shadow-[#00abf0] shadow-[0_0_13px_var(--main-color)]"
            >
              Resume
            </a>

            <a
              href="#"
              className="inline-block px-6 mx-2 py-2 text-[#00abf0] font-bold text-base rounded-full border-2 border-blue-500 duration-300 ease-in-out transition-all hover:bg-blue-500 hover:text-[#0e1b38] shadow-none hover:shadow-[#00abf0] hover:shadow-[0_0_13px_var(--main-color)]"
            >
              Hire
            </a>

          </div>
        </div>

        <div className="w-[150%] md:w-[50%] h-80 overflow-hidden transition-all duration-300 hover:scale-105 md:ml-[11rem]">
          <img
            src={basit}
            alt="basit"
            className="h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );




  // return (
  //   <div className="min-h-[80vh] bg-[#031540] w-full">
  //     <div className="flex flex-col justify-around md:flex-row items-center gap-12 md:gap-16 py-[103px] max-w-5xl mx-auto">

  //       <div className="w-[420px] mx-10 text-white text-center md:text-left  md:w-[50%] md:mr-12">
  //         <h4 className="text-[26px] mb-1 tracking-tight font-medium">
  //           Hi There <span className="wave" role="img" aria-labelledby="wave"> 👋🏻</span>
  //         </h4>
  //         <h1 className="mb-4">
  //           <span className='text-[38px] font-semibold'>I'm </span> 
  //           <span className='text-[#00abf0] text-[40px] font-bold'> Abdul Basit</span>
  //         </h1>
  //         <div className='h-12 w-[188px]'>
  //           <h3 className="text-[22px] md:text-2xl lg:text-3xl text-[#00abf0] font-mono">
  //             <div className="relative">
  //               <span className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing pr-10">
  //                 {displayedText}
  //               </span>
  //             </div>
  //           </h3>
  //         </div>

  //         <div className="mt-4">
  //           <a
  //             href="#"
  //             className="inline-block px-6 py-2 hover:px-[25px] hover:py-[9px] bg-blue-500 text-[#0e1b38] font-bold text-base rounded-full border-2 border-transparent duration-300 ease-in-out transition hover:shadow-none transform hover:bg-blue-600 shadow-[#00abf0] shadow-[0_0_13px_var(--main-color)]"
  //           >
  //             Resume
  //           </a>
  //         </div>
  //       </div>

  //       <div className="w-[80%] md:w-[50%] h-80   overflow-hidden transition-all duration-300 hover:scale-105 md:ml-[13rem]">
  //         <img
  //           src={basit}
  //           alt="basit"
  //           className=" h-full  rounded-lg"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );


};

export default Home;
