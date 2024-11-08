// import React, { useState, useEffect } from 'react';
// import basit from '../assets/profile-pic (37).png';
// import avator from '../assets/boy4-removebg-preview.png';
// import './Home.css';
// // import MyAccountsLink from '../components/MyAccountsLink';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const roles = ['Frontend Developer...', 'Web Designer...'];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(100);

//   useEffect(() => {
//     const currentRole = roles[currentRoleIndex];
//     let typingTimeout;

//     if (isDeleting) {
//       typingTimeout = setTimeout(() => {
//         setDisplayedText((prevText) => prevText.slice(0, -1));
//         setTypingSpeed(50);
//       }, typingSpeed);
//     } else {
//       typingTimeout = setTimeout(() => {
//         setDisplayedText((prevText) => currentRole.slice(0, prevText.length + 1));
//         setTypingSpeed(100);
//       }, typingSpeed);
//     }

//     if (!isDeleting && displayedText === currentRole) {
//       setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && displayedText === '') {
//       setIsDeleting(false);
//       setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }

//     return () => clearTimeout(typingTimeout);
//   }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

//   return (
//     <>
//       <div className="min-h-[80vh]  lg:gap-[120px]    gap-[170px] bg-[#031540] w-full flex flex-col items-center py-10 md:flex-row   md:justify-center md:py-20">
//         <div className="w-[60%] md:w-1/2 lg:w-[33%] flex justify-center mb-8 md:mb-0">
//           <img src={basit} alt="basit" className="w-[90%] h-[90%] rounded-lg" />
//         </div>

//         <div className="text-white  md:text-left px-4 md:px-0 md:w-1/2 lg:w-[40%] w-[33%]">
//           <h4 className="text-3xl   mb-1">Hi There 👋🏻</h4>
//           <h1 className="text-5xl  mt-4 mb-2 font-bold">
//             I'm <span className="text-[#00abf0]">Abdul Basit</span>
//           </h1>
//           <div className="h-12">
//             <h3 className="text-[24px]   text-[#00abf0] font-mono">
//               <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-400 pr-2">{displayedText}</span>
//             </h3>
//           </div>

//           <div className="mt-4 flex justify-center md:justify-start gap-4">
//             <Link
//               to="#"
//               className="resume inline-block px-6 py-2 bg-blue-500 text-[#0e1b38] font-bold text-base rounded-[10%] border-2 border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]"
//             >
//               Resume
//             </Link>
//             <Link
//               to="#"
//               className="inline-block px-6 py-2 text-[#00abf0] font-bold text-base rounded-[10%]  border-2 border-blue-500 duration-300 ease-in-out transition-all hover:bg-blue-500 hover:text-[#0e1b38] shadow-none hover:shadow-[#00abf0] hover:shadow-[0_0_13px_var(--main-color)]"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-between bg-[#252c41] text-white py-10 px-4 md:px-20">
//         <div className="md:w-1/2 lg:w-3/5 mb-8 md:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold mb-8">Let me <span className="text-[#00abf0]">Introduce</span> Myself</h1>
//           <p className="text-lg leading-relaxed">
//             My journey into programming began with Curiosity, and over time, it has transformed into a Passion! 😊<br /><br />
//             I’ve gained a solid understanding of various Languages and Technologies, especially in <span className="text-[#00abf0]">JavaScript</span>, <span className="text-[#00abf0]">React JS</span>, and <span className="text-[#00abf0]">Next JS</span>.<br /><br />
//             I’m particularly interested in developing <span className="text-[#00abf0]">Innovative Web Technologies</span> and <span className="text-[#00abf0]">Products</span>, with a growing fascination for fields like <span className="text-[#00abf0]">Deep Learning</span> and <span className="text-[#00abf0]">Natural Language Processing</span>.<br /><br />
//             When I get the chance, I love using <span className="text-[#00abf0]">Modern JavaScript Libraries</span> and <span className="text-[#00abf0]">frameworks</span>, such as <span className="text-[#00abf0]">React JS</span>, to create Dynamic and cutting-edge Applications.
//           </p>
//         </div>

//         <div className="md:w-1/2 lg:w-2/5 flex justify-center">
//           <img src={avator} className="w-64 h-64 md:w-96 md:h-96" alt="avator" />
//         </div>
//       </div>

//       {/* <div className="bg-[#031540] py-8">
//         <MyAccountsLink />
//       </div> */}
//     </>
//   );
// };

// export default Home












// import React, { useState, useEffect } from 'react';
// import basit from '../assets/profile-pic (37).png';
// import avator from '../assets/boy4-removebg-preview.png';
// import './Home.css';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const roles = ['Frontend Developer...', 'Web Designer...'];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(100);

//   useEffect(() => {
//     const currentRole = roles[currentRoleIndex];
//     let typingTimeout;

//     if (isDeleting) {
//       typingTimeout = setTimeout(() => {
//         setDisplayedText((prevText) => prevText.slice(0, -1));
//         setTypingSpeed(50);
//       }, typingSpeed);
//     } else {
//       typingTimeout = setTimeout(() => {
//         setDisplayedText((prevText) => currentRole.slice(0, prevText.length + 1));
//         setTypingSpeed(100);
//       }, typingSpeed);
//     }

//     if (!isDeleting && displayedText === currentRole) {
//       setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && displayedText === '') {
//       setIsDeleting(false);
//       setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }

//     return () => clearTimeout(typingTimeout);
//   }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

//   return (
//     <>
//       <div className="min-h-[80vh] home  lg:gap-[120px]    gap-[170px] bg-[#031540] w-full flex flex-col items-center py-10 md:flex-row   md:justify-center md:pt-[9rem] md:pb-[5rem]">
//         <div className="w-[60%] img  md:w-1/2 lg:w-[33%]  flex justify-center mb-8 md:mb-0">
//           <img src={basit} alt="basit" className="w-[90%]  h-[90%] rounded-lg" />
//         </div>

//         <div className="text-white home1  md:text-left px-4 md:px-0 md:w-1/2 lg:w-[40%] w-[33%]">
//           <h4 className="text-3xl   mb-1">Hi There 👋🏻</h4>
//           <h1 className="text-5xl  mt-4 mb-2 font-bold">
//             I'm <span className="text-[#00abf0]">Abdul Basit</span>
//           </h1>
//           <div className="h-12">
//             <h3 className="text-[24px] homeAnimate  text-[#00abf0] font-mono">
//               <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-400 pr-2">{displayedText}</span>
//             </h3>
//           </div>


//           <div className="mt-4 flex homeBtn  md:justify-start gap-4">
//             <Link
//               to="#"
//               className="resume inline-block px-6 py-2 bg-blue-500 text-[#0e1b38] font-bold text-base rounded-[10%] border-2 border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]"
//             >
//               Resume
//             </Link>
//             <Link
//               to="#"
//               className="inline-block px-6 py-2 text-[#00abf0] font-bold text-base rounded-[10%]  border-2 border-blue-500 duration-300 ease-in-out transition-all hover:bg-blue-500 hover:text-[#0e1b38] shadow-none hover:shadow-[#00abf0] hover:shadow-[0_0_13px_var(--main-color)]"
//             >
//               Contact Me
//             </Link>
//           </div>

//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-between bg-[#252c41] text-white py-10 px-4 md:px-20 md:py-[40px] md:gap-[0px]">
//         <div className="md:w-1/2 introSelfDiv lg:w-3/5 lg:pl-[32px] mb-8 md:mb-0 letMe">
//           <h1 className="text-4xl introSelfHead md:text-5xl font-bold mb-8">Let me <span className="text-[#00abf0]">Introduce</span> Myself</h1>
//           <p className="text-lg introSelf leading-relaxed">
//             My journey into programming began with Curiosity, and over time, it has transformed into a Passion! 😊<br /><br />
//             I’ve gained a solid understanding of various Languages and Technologies, especially in <span className="text-[#00abf0]">JavaScript</span>, <span className="text-[#00abf0]">React JS</span>, and <span className="text-[#00abf0]">Next JS</span>.<br /><br />
//             I’m particularly interested in developing <span className="text-[#00abf0]">Innovative Web Technologies</span> and <span className="text-[#00abf0]">Products</span>, with a growing fascination for fields like <span className="text-[#00abf0]">Deep Learning</span> and <span className="text-[#00abf0]">Natural Language Processing</span>.<br /><br />
//             When I get the chance, I love using <span className="text-[#00abf0]">Modern JavaScript Libraries</span> and <span className="text-[#00abf0]">frameworks</span>, such as <span className="text-[#00abf0]">React JS</span>, to create Dynamic and cutting-edge Applications.
//           </p>
//         </div>

//         <div className=" lg:w-2/5 flex  larkaDiv justify-center">
//           <img src={avator} className="larka w-[22rem] h-[20rem] " alt="avator" />
//         </div>
//       </div>

//     </>
//   );
// };

// export default Home



{/* <div className="bg-[#031540] py-8">
        <MyAccountsLink />
      </div> */}
















// import React, { useState, useEffect } from 'react';
// import basit from '../assets/profile-pic (37).png';
// import avator from '../assets/boy4-removebg-preview.png';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import MyAccountsLink from '../components/MyAccountsLink';

// const Home = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: 'ease-in-out',
//       once: false, // Make it false to replay animation on scroll
//       offset: 120, // Adjust offset as per your design
//       anchorPlacement: 'top-bottom' // Trigger animation when the top of the element is in view
//     });
//   }, []);

//   const roles = ['Frontend Developer...', 'Web Designer...'];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(100);

//   useEffect(() => {
//     const currentRole = roles[currentRoleIndex];
//     let typingTimeout;

//     if (isDeleting) {
//       typingTimeout = setTimeout(() => {
//         setDisplayedText((prevText) => prevText.slice(0, -1));
//         setTypingSpeed(50);
//       }, typingSpeed);
//     } else {
//       typingTimeout = setTimeout(() => {
//         setDisplayedText((prevText) => currentRole.slice(0, prevText.length + 1));
//         setTypingSpeed(100);
//       }, typingSpeed);
//     }

//     if (!isDeleting && displayedText === currentRole) {
//       setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && displayedText === '') {
//       setIsDeleting(false);
//       setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }

//     return () => clearTimeout(typingTimeout);
//   }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

//   return (
//     <>
//       <div className="min-h-[80vh] home lg:gap-[120px] gap-[170px] bg-[#031540] w-full flex flex-col items-center py-10 md:flex-row md:justify-center md:pt-[9rem] md:pb-[5rem]">
//         <div
//           data-aos="fade-right"
//           data-aos-delay="200" // Delay added for staggered effect
//           className="w-[60%] img md:w-1/2 lg:w-[33%] flex justify-center mb-8 md:mb-0"
//         >
//           <img src={basit} alt="basit" className="w-[90%] h-[90%] rounded-lg" />
//         </div>

//         <div
//           data-aos="fade-up" // Changed to fade-up for variety
//           data-aos-delay="400"
//           className="text-white home1 md:text-left px-4 md:px-0 md:w-1/2 lg:w-[40%] w-[33%]"
//         >
//           <h4 className="text-3xl mb-1">Hi There 👋🏻</h4>
//           <h1 className="text-5xl mt-4 mb-2 font-bold">
//             I'm <span className="text-[#00abf0]">Abdul Basit</span>
//           </h1>
//           <div className="h-12">
//             <h3 className="text-[24px] homeAnimate text-[#00abf0] font-mono">
//               <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-400 pr-2">{displayedText}</span>
//             </h3>
//           </div>

//           <div className="mt-4 flex homeBtn md:justify-start gap-4">
//             <Link
//               to="#"
//               data-aos="zoom-in" // Zoom-in effect on button
//               data-aos-delay="500"
//               className="resume inline-block px-6 py-2 bg-blue-500 text-[#0e1b38] font-bold text-base rounded-[10%] border-2 border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]"
//             >
//               Resume
//             </Link>
//             <Link
//               to="#"
//               data-aos="zoom-in"
//               data-aos-delay="600"
//               className="inline-block px-6 py-2 text-[#00abf0] font-bold text-base rounded-[10%] border-2 border-blue-500 duration-300 ease-in-out transition-all hover:bg-blue-500 hover:text-[#0e1b38] shadow-none hover:shadow-[#00abf0] hover:shadow-[0_0_13px_var(--main-color)]"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div

//         className="flex flex-col md:flex-row items-center justify-between bg-[#252c41] text-white py-10 px-4 md:px-20 md:py-[40px] md:gap-[0px]"
//       >
//         <div
//           data-aos="fade-up"
//           data-aos-delay="300"
//           className="md:w-1/2 introSelfDiv lg:w-3/5 lg:pl-[32px] mb-8 md:mb-0 letMe">
//           <h1 className="text-4xl introSelfHead md:text-5xl font-bold mb-8">
//             Let me <span className="text-[#00abf0]">Introduce</span> Myself
//           </h1>
//           <p className="text-lg introSelf leading-relaxed">
//             My journey into programming began with Curiosity, and over time, it has transformed into a Passion! 😊<br /><br />
//             I’ve gained a solid understanding of various Languages and Technologies, especially in <span className="text-[#00abf0]">JavaScript</span>, <span className="text-[#00abf0]">React JS</span>, and <span className="text-[#00abf0]">Next JS</span>.<br /><br />
//             I’m particularly interested in developing <span className="text-[#00abf0]">Innovative Web Technologies</span> and <span className="text-[#00abf0]">Products</span>, with a growing fascination for fields like <span className="text-[#00abf0]">Deep Learning</span> and <span className="text-[#00abf0]">Natural Language Processing</span>.<br /><br />
//             When I get the chance, I love using <span className="text-[#00abf0]">Modern JavaScript Libraries</span> and <span className="text-[#00abf0]">frameworks</span>, such as <span className="text-[#00abf0]">React JS</span>, to create Dynamic and cutting-edge Applications.
//           </p>
//         </div>

//         <div data-aos="flip-left" data-aos-delay="400" className="lg:w-2/5 flex larkaDiv justify-center">
//           <img src={avator} className="larka w-[22rem] h-[20rem]" alt="avator" />
//         </div>
//       </div>

//       <div className="bg-[#031540] py-8">
//         <MyAccountsLink/>
//       </div>
//     </>
//   );
// };

// export default Home;
















// import React, { useState, useEffect } from 'react';
// import basit from '../assets/profile-pic (37).png';
// import avator from '../assets/boy4-removebg-preview.png';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import MyAccountsLink from '../components/MyAccountsLink';

// const Home = () => {

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: 'ease-in-out',
//       once: false, // Make it false to replay animation on scroll
//       offset: 120, // Adjust offset as per your design
//       anchorPlacement: 'top-bottom' // Trigger animation when the top of the element is in view
//     });
//   }, []);

// const roles = ['Frontend Developer...', 'Web Designer...'];
// const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
// const [displayedText, setDisplayedText] = useState('');
// const [isDeleting, setIsDeleting] = useState(false);
// const [typingSpeed, setTypingSpeed] = useState(100);

// useEffect(() => {
//   const currentRole = roles[currentRoleIndex];
//   let typingTimeout;

//   if (isDeleting) {
//     typingTimeout = setTimeout(() => {
//       setDisplayedText((prevText) => prevText.slice(0, -1));
//       setTypingSpeed(50);
//     }, typingSpeed);
//   } else {
//     typingTimeout = setTimeout(() => {
//       setDisplayedText((prevText) => currentRole.slice(0, prevText.length + 1));
//       setTypingSpeed(100);
//     }, typingSpeed);
//   }

//   if (!isDeleting && displayedText === currentRole) {
//     setTimeout(() => setIsDeleting(true), 1000);
//   } else if (isDeleting && displayedText === '') {
//     setIsDeleting(false);
//     setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//   }

//   return () => clearTimeout(typingTimeout);
// }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

// return (
//   <>
//     <div className="min-h-[80vh] home  lg:gap-[120px]    gap-[170px] bg-[#031540] w-full flex flex-col items-center py-10 md:flex-row   md:justify-center md:pt-[9rem] md:pb-[5rem]">
//       <div
//         data-aos="fade-right"
//         data-aos-delay="200"
//         className="w-[60%] img  md:w-1/2 lg:w-[33%]  flex justify-center mb-8 md:mb-0"
//       >
//         <img src={basit} alt="basit" className="w-[90%] h-[90%] rounded-lg" />
//       </div>

//       <div
//         data-aos="fade-up"
//         data-aos-delay="400"
//         className="text-white home1  md:text-left px-4 md:px-0 md:w-1/2 lg:w-[40%] w-[33%]"
//       >
//         <h4 className="text-3xl mb-1">Hi There 👋🏻</h4>
//         <h1 className="text-5xl mt-4 mb-2 font-bold">
//           I'm <span className="text-[#00abf0]">Abdul Basit</span>
//         </h1>
//         <div className="h-12">
//           <h3 className="text-[24px] homeAnimate text-[#00abf0] font-mono">
//             <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-400 pr-2">{displayedText}</span>
//           </h3>
//         </div>

//         <div className="mt-4 flex homeBtn md:justify-start gap-4">
//           <Link
//             to="#"
//             data-aos="zoom-in"
//             data-aos-delay="500"
//             className="resume inline-block px-6 py-2 bg-blue-500 text-[#0e1b38] font-bold text-base rounded-[10%] border-2 border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]"
//           >
//             Resume
//           </Link>
//           <Link
//             to="#"
//             data-aos="zoom-in"
//             data-aos-delay="600"
//             className="inline-block px-6 py-2 text-[#00abf0] font-bold text-base rounded-[10%] border-2 border-blue-500 duration-300 ease-in-out transition-all hover:bg-blue-500 hover:text-[#0e1b38] shadow-none hover:shadow-[#00abf0] hover:shadow-[0_0_13px_var(--main-color)]"
//           >
//             Contact Me
//           </Link>
//         </div>
//       </div>
//     </div>

//     <div className="flex flex-col md:flex-row items-center justify-between bg-[#252c41] text-white py-10 px-4 md:px-20 md:py-[40px] md:gap-[0px]">
//       <div
//         data-aos="fade-up"
//         data-aos-delay="300"
//         className="md:w-1/2 introSelfDiv lg:w-3/5 lg:pl-[32px] mb-8 md:mb-0 letMe">
//         <h1 className="text-4xl introSelfHead md:text-5xl font-bold mb-8">
//           Let me <span className="text-[#00abf0]">Introduce</span> Myself
//         </h1>
//         <p className="text-lg introSelf leading-relaxed">
//           My journey into programming began with Curiosity, and over time, it has transformed into a Passion! 😊<br /><br />
//           I’ve gained a solid understanding of various Languages and Technologies, especially in <span className="text-[#00abf0]">JavaScript</span>, <span className="text-[#00abf0]">React JS</span>, and <span className="text-[#00abf0]">Next JS</span>.<br /><br />
//           I’m particularly interested in developing <span className="text-[#00abf0]">Innovative Web Technologies</span> and <span className="text-[#00abf0]">Products</span>, with a growing fascination for fields like <span className="text-[#00abf0]">Deep Learning</span> and <span className="text-[#00abf0]">Natural Language Processing</span>.<br /><br />
//           When I get the chance, I love using <span className="text-[#00abf0]">Modern JavaScript Libraries</span> and <span className="text-[#00abf0]">frameworks</span>, such as <span className="text-[#00abf0]">React JS</span>, to create Dynamic and cutting-edge Applications.
//         </p>
//       </div>

//       <div data-aos="flip-left" data-aos-delay="400" className="lg:w-2/5 flex larkaDiv justify-center">
//         <img src={avator} className="larka w-[22rem] h-[20rem]" alt="avator" />
//       </div>
//     </div>

//     <div className="bg-[#031540] py-8">
//       <MyAccountsLink />
//     </div>
//   </>
// );
// };

// export default Home;
























import React, { useState, useEffect } from 'react';
import basit from '../assets/profile-pic (37).png';
import avator from '../assets/boy4-removebg-preview.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyAccountsLink from '../components/MyAccountsLink';
import './Home.css'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
      offset: 120,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  const roles = ['Frontend Developer...', 'Web Designer...'];
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
    <>
   {/* py-10  */}
      <div className="min-h-[80vh] home lg:gap-[120px] gap-10 justify-center md:gap-20 bg-[#031540] w-full flex flex-col items-center md:flex-row md:pt-[9rem] md:pb-[5rem]">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-[70%] sm:w-[50%] md:w-[60%] lg:w-[33%] flex justify-center mb-8 md:mb-0"
        >
          <img src={basit} alt="basit" className="w-[85%] h-[85%] rounded-lg" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-white px-4 md:px-0 w-full sm:w-2/3 md:w-[44%] lg:w-[40%] flex flex-col  md:items-start  md:text-left"
        >
          <h4 className="text-xl homeIntro sm:text-2xl md:text-3xl mb-1">Hi There 👋🏻</h4>
          <h1 className="text-3xl homeIntro sm:text-4xl md:text-5xl mt-4 mb-2 font-bold">
            I'm <span className="text-[#00abf0]">Abdul Basit</span>
          </h1>
          <div className="h-12 homeIntro">
            <h3 className="text-lg homeIntro sm:text-xl md:text-2xl text-[#00abf0] font-mono">
              <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-400 pr-2">{displayedText}</span>
            </h3>
          </div>

          <div className="mt-4 flex homeLinksDiv  flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="#"
              data-aos="zoom-in"
              data-aos-delay="500"
              className="inline-block px-6 py-2 homeLinks bg-blue-500 text-[#0e1b38] font-bold text-[1rem] sm:text-base rounded-[10%] border-2 border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]"
            >
              Resume
            </Link>
            <Link
              to="#"
              data-aos="zoom-in"
              data-aos-delay="600"
              className="inline-block px-6 py-2 homeLinks text-[#00abf0] font-bold text-sm sm:text-base rounded-[10%] border-2 border-blue-500 duration-300 ease-in-out transition-all hover:bg-blue-500 hover:text-[#0e1b38] shadow-none hover:shadow-[#00abf0] hover:shadow-[0_0_13px_var(--main-color)]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#252c41] text-white py-8 px-4  md:px-20 gap-8 md:gap-0  ">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="w-full  md:w-1/2 lg:w-3/5 lg:pl-[32px] Letme  md:pl-[25px] sm:px-[1rem]"
        >
          <h1 className="text-3xl sm:text-4xl md:text-center text-center mySelf md:text-5xl font-bold mb-6">
            Let me <span className="text-[#00abf0]">Introduce</span> Myself
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            My journey into programming began with Curiosity, and over time, it has transformed into a Passion! 😊<br /><br />
            I’ve gained a solid understanding of various Languages and Technologies, especially in <span className="text-[#00abf0]">JavaScript</span>, <span className="text-[#00abf0]">React JS</span>, and <span className="text-[#00abf0]">Next JS</span>.<br /><br />
            I’m particularly interested in developing <span className="text-[#00abf0]">Innovative Web Technologies</span> and <span className="text-[#00abf0]">Products</span>, with a growing fascination for fields like <span className="text-[#00abf0]">Deep Learning</span> and <span className="text-[#00abf0]">Natural Language Processing</span>.<br /><br />
            When I get the chance, I love using <span className="text-[#00abf0]">Modern JavaScript Libraries</span> and <span className="text-[#00abf0]">frameworks</span>, such as <span className="text-[#00abf0]">React JS</span>, to create Dynamic and cutting-edge Applications.
          </p>
        </div>

        <div data-aos="flip-left" data-aos-delay="400" className="w-[70%] sm:w-2/5  flex justify-center">
          <img src={avator} className="w-52 sm:w-48 md:w-[19rem] lg:w-[20rem]" alt="avator" />
        </div>
      </div>

      <div className="bg-[#031540] py-8">
        <MyAccountsLink />
      </div>
    </>
  );
};

export default Home;
