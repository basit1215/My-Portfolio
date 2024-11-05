import React, { useState, useEffect } from 'react';
import basit from '../assets/profile-pic (37).png';
import avator from '../assets/boy4-removebg-preview.png';
import './Home.css';
// import MyAccountsLink from '../components/MyAccountsLink';
import { Link } from 'react-router-dom';

const Home = () => {
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
      <div className="min-h-[80vh]  lg:gap-[120px]    gap-[170px] bg-[#031540] w-full flex flex-col items-center py-10 md:flex-row   md:justify-center md:py-20">
        <div className="w-[60%] md:w-1/2 lg:w-[33%] flex justify-center mb-8 md:mb-0">
          <img src={basit} alt="basit" className="w-[90%] h-[90%] rounded-lg" />
        </div>

        <div className="text-white  md:text-left px-4 md:px-0 md:w-1/2 lg:w-[40%] w-[33%]">
          <h4 className="text-3xl   mb-1">Hi There 👋🏻</h4>
          <h1 className="text-5xl  mt-4 mb-2 font-bold">
            I'm <span className="text-[#00abf0]">Abdul Basit</span>
          </h1>
          <div className="h-12">
            <h3 className="text-[24px]   text-[#00abf0] font-mono">
              <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-400 pr-2">{displayedText}</span>
            </h3>
          </div>

          <div className="mt-4 flex justify-center md:justify-start gap-4">
            <Link
              to="#"
              className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
            >
              Resume
            </Link>
            <Link
              to="#"
              className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition"
            >
              Hire
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#252c41] text-white py-10 px-4 md:px-20">
        <div className="md:w-1/2 lg:w-3/5 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Let me <span className="text-[#00abf0]">Introduce</span> Myself</h1>
          <p className="text-lg leading-relaxed">
            My journey into programming began with Curiosity, and over time, it has transformed into a Passion! 😊<br /><br />
            I’ve gained a solid understanding of various Languages and Technologies, especially in <span className="text-[#00abf0]">JavaScript</span>, <span className="text-[#00abf0]">React JS</span>, and <span className="text-[#00abf0]">Next JS</span>.<br /><br />
            I’m particularly interested in developing <span className="text-[#00abf0]">Innovative Web Technologies</span> and <span className="text-[#00abf0]">Products</span>, with a growing fascination for fields like <span className="text-[#00abf0]">Deep Learning</span> and <span className="text-[#00abf0]">Natural Language Processing</span>.<br /><br />
            When I get the chance, I love using <span className="text-[#00abf0]">Modern JavaScript Libraries</span> and <span className="text-[#00abf0]">frameworks</span>, such as <span className="text-[#00abf0]">React JS</span>, to create Dynamic and cutting-edge Applications.
          </p>
        </div>

        <div className="md:w-1/2 lg:w-2/5 flex justify-center">
          <img src={avator} className="w-64 h-64 md:w-96 md:h-96" alt="avator" />
        </div>
      </div>

      {/* <div className="bg-[#031540] py-8">
        <MyAccountsLink />
      </div> */}
    </>
  );
};

export default Home