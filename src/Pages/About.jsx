import React from 'react';
import './About.css'; 
import image from '../assets/laptop.jpg';
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
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Firebase', icon: <SiFirebase /> },
  ];

  // { name: 'Node.js', icon: <FaNodeJs /> },
  // { name: 'Express', icon: <SiExpress /> },
  // { name: 'MongoDB', icon: <SiMongodb /> },

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-[#031540] text-white py-16 ">
        <div className="flex flex-col lg:flex-row items-between justify-between pt-[10px] gap-32 lg:gap-16">
          <div className="max-w-xl lg:text-left mr-[90px] space-y-4 ">
            <h1 className="text-4xl md:text-5xl lg:text-[42px] font-bold text-center mb-9">
              Know Who <span className="text-[#00abf0]">I'M</span>
            </h1>
            <p className="aboutLG md:text-xl lg:text-2xl">
              Hi Everyone, I am <span className="text-[#00abf0] font-semibold">Abdul Basit</span> from{' '}
              <span className="text-[#00abf0] font-semibold">Karachi, Pakistan.</span>
            </p>
            <p className="text-md md:text-lg lg:text-xl">
              I recently completed my Intermediate degree from Jinnah Govt. College. I have also finished my Frontend Development Journey at SMIT, where I learned to build Modern Web
              Applications using Next.js, React.js, and JavaScript, along with a strong foundation in HTML, CSS, and JavaScript.
            </p>
            <p className="aboutLG md:text-xl lg:text-xl mt-6"> I'm actively looking for an internship to further enhance my skills.</p>
            <p className="aboutLG md:text-xl lg:text-xl mt-6"> Currently, I’m studying React Native to expand my skills into mobile app development.</p>
            <p className="aboutLG md:text-xl lg:text-xl mt-6">After completing React Native, I plan to dive into backend development to become a full-stack developer.</p>
          </div>
          <div className="w-full max-w-sm lg:max-w-md pt-[63px] flex justify-center">
            <img src={image} alt="Programmer Illustration" className="w-[26rem] h-[26rem] object-cover rounded-full" />
          </div>
        </div>
      </div>

      <div className="min-h-screen w-[100%]  flex flex-col items-center justify-center pt-[108px] pb-[70px] bg-[#252c41] text-white">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Professional <span className="text-[#00abf0]">Skillset</span>
        </h2>


        <div className="flex flex-wrap justify-center gap-12 w-[80%] px-10">
          {skills.map((skill, index) => (
            <div  className='dabba hover:shadow-[0_0_10px_var(--main-color)] items-center px-18 justify-center w-72 h-64 sm:w-28 sm:h-28 md:w-[12rem] md:h-[9rem] rounded-lg shadow-lg border border-[#00abf0] hover:bg-[#031540] hover:border-none  hover:shadow-[#00abf0]   hover:text-[#00abf0] hover:scale-105 transition-transform'>
              <div
                key={index}
                className="flex  items-center py-[29px]  justify-center text-[85px]"
              >
                {skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutSection