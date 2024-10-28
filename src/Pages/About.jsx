// import React from 'react';
// import image from '../assets/laptop.jpg'; // Update with the correct path to your image
// import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
// import { SiTailwindcss, SiTypescript, SiRedux, SiExpress, SiMongodb, SiNextdotjs, SiFirebase } from 'react-icons/si';

// const AboutSection = () => {

//   const skills = [
//     { name: 'HTML', icon: <FaHtml5 /> },
//     { name: 'CSS', icon: <FaCss3Alt /> },
//     { name: 'Tailwind', icon: <SiTailwindcss /> },
//     { name: 'Bootstrap', icon: <FaBootstrap /> },
//     { name: 'JavaScript', icon: <FaJsSquare /> },
//     { name: 'TypeScript', icon: <SiTypescript /> },
//     { name: 'React', icon: <FaReact /> },
//     { name: 'Redux', icon: <SiRedux /> },
//     { name: 'Node.js', icon: <FaNodeJs /> },
//     { name: 'Express', icon: <SiExpress /> },
//     { name: 'MongoDB', icon: <SiMongodb /> },
//     { name: 'Next.js', icon: <SiNextdotjs /> },
//     { name: 'Git', icon: <FaGitAlt /> },
//     { name: 'Firebase', icon: <SiFirebase /> },
//   ];


//   return (
//     <>

//       <div className="min-h-screen flex flex-col items-center bg-[#031540] text-white py-16 ">
//         <div className="flex flex-col lg:flex-row items-between justify-between pt-[10px] gap-32 lg:gap-16">
//           <div className="max-w-xl text-center lg:text-left mr-[90px] space-y-4 ">
//             <h1 className="text-4xl md:text-5xl lg:text-[42px]  font-bold text-center mb-9">
//               Know Who <span className="text-[#00abf0]">I'M</span>
//             </h1>
//             <p className="text-lg md:text-xl lg:text-2xl">
//               Hi Everyone, I am <span className="text-[#00abf0] font-semibold">Abdul Basit</span> from{' '}
//               <span className="text-[#00abf0] font-semibold">Karachi, Pakistan.</span>
//             </p>
//             <p className="text-md md:text-lg lg:text-xl">
//               I recently completed my Intermediate degree from Jinnah Govt. College. I have also finished my Frontend Development Journey at SMIT, where I learned to build Modern Web
//               Applications using Next.js, React.js, and JavaScript, along with a strong foundation in HTML, CSS, and JavaScript.
//             </p>
//             <p className="text-lg md:text-xl lg:text-xl mt-6"> I'm actively looking for an internship to further enhance my skills.</p>
//             <p className="text-lg md:text-xl lg:text-xl mt-6"> Currently, I’m studying React Native to expand my skills into mobile app development.</p>
//             <p className="text-lg md:text-xl lg:text-xl mt-6">After completing React Native, I plan to dive into backend development to become a full-stack developer.</p>

//           </div>
//           <div className="w-full max-w-sm lg:max-w-md pt-[63px] flex justify-center">
//             <img src={image} alt="Programmer Illustration" className="w-[26rem] h-[26rem] object-cover rounded-full" />
//           </div>

//         </div>
//       </div>

//       <div>
//         <div className="min-h-screen flex flex-col items-center justify-center bg-[#252c41] text-white">
//           <h2 className="text-4xl font-bold mb-8 text-center">
//             Professional <span className="text-[#00abf0]">Skillset</span>
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32  rounded-lg shadow-lg border border-[#00abf0] hover:scale-105 transition-transform"
//               >
//                 <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div >

//     </>
//   )
// }

// export default AboutSection














import React from 'react';
import image from '../assets/laptop.jpg'; // Update with the correct path to your image
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiRedux, SiExpress, SiMongodb, SiNextdotjs, SiFirebase } from 'react-icons/si';

const AboutSection = () => {

  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Firebase', icon: <SiFirebase /> },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-[#031540] text-white py-16 ">
        <div className="flex flex-col lg:flex-row items-between justify-between pt-[10px] gap-32 lg:gap-16">
          <div className="max-w-xl text-center lg:text-left mr-[90px] space-y-4 ">
            <h1 className="text-4xl md:text-5xl lg:text-[42px] font-bold text-center mb-9">
              Know Who <span className="text-[#00abf0]">I'M</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Hi Everyone, I am <span className="text-[#00abf0] font-semibold">Abdul Basit</span> from{' '}
              <span className="text-[#00abf0] font-semibold">Karachi, Pakistan.</span>
            </p>
            <p className="text-md md:text-lg lg:text-xl">
              I recently completed my Intermediate degree from Jinnah Govt. College. I have also finished my Frontend Development Journey at SMIT, where I learned to build Modern Web
              Applications using Next.js, React.js, and JavaScript, along with a strong foundation in HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg md:text-xl lg:text-xl mt-6"> I'm actively looking for an internship to further enhance my skills.</p>
            <p className="text-lg md:text-xl lg:text-xl mt-6"> Currently, I’m studying React Native to expand my skills into mobile app development.</p>
            <p className="text-lg md:text-xl lg:text-xl mt-6">After completing React Native, I plan to dive into backend development to become a full-stack developer.</p>
          </div>
          <div className="w-full max-w-sm lg:max-w-md pt-[63px] flex justify-center">
            <img src={image} alt="Programmer Illustration" className="w-[26rem] h-[26rem] object-cover rounded-full" />
          </div>
        </div>
      </div>

      <div className="min-h-screen w-[100%]  flex flex-col items-center justify-center pt-[108px] bg-[#252c41] text-white">
        <h2 className="text-5xl font-bold mb-8 text-center">
          Professional <span className="text-[#00abf0]">Skillset</span>
        </h2>


        <div className="flex flex-wrap justify-center gap-6 w-[80%] px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-44 h-44 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg shadow-lg border border-[#00abf0] hover:scale-105 transition-transform text-4xl"
            >
              {skill.icon}
            </div>
          ))}
        </div>



        {/* <div className="grid w-[80%] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-44 h-44 sm:w-28 sm:h-28 md:w-32 md:h-32  rounded-lg shadow-lg border border-[#00abf0] hover:scale-105 transition-transform text-4xl"
            >
              {skill.icon}
            </div>
          ))}
        </div> */}


      </div>
    </>
  );
};

export default AboutSection;





















{/* <ul className="text-md md:text-lg lg:text-xl space-y-2">
            <li>🍳 Cooking</li>
            <li>📚 Teaching</li>
            <li>🌍 Travelling</li>
          </ul> */}