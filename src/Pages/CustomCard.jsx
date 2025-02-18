import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './CustomCard.css';


function CustomCard({ title, description, image, githubUrl, hostedUrl, techStack }) {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (
    <div
      data-aos="fade-up"
      className="max-w-sm mx-auto h-auto bg-white rounded-2xl border-2 border-sky-300 overflow-hidden shadow-white hover:shadow-[0_0_22px_var(--main-color)] hover:shadow-white shadow-[0_0_14px_var(--main-color)] transform transition duration-300 hover:scale-105"
    >

      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-85"></div>

        <h2
          style={{ textShadow: '5px 4px 5px rgba(0,171,240,0.91)' }}
          className="absolute bottom-2 left-[1rem] text-2xl font-bold text-white z-10"
        >
          {title}
        </h2>
      </div>

      <div className="bg-[#bcecff]">
        <p className="text-[#070e1f] px-6 pt-5 font-medium text-center mb-[3.75rem] h-[96px]">{description}</p>

        <div className="flex flex-wrap gap-2 px-6 justify-center mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-[#79caeb] text-gray-800 px-3 py-1 rounded-[22%] lg:px-[0.5rem] text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Link
            to={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a85af] github w-[50%] border-r flex border-black justify-center items-center gap-5 text-white px-4 py-2 rounded-bl-2xl font-bold hover:bg-opacity-90 transition"
          >
            GitHub Repo <FaGithub />
          </Link>

          <Link
            to={hostedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a85af] text-white flex border-l border-black justify-center gap-5 items-center w-[50%] px-4 py-2 rounded-ee-2xl font-bold hover:bg-opacity-90 transition"
          >
            Live Demo <FiExternalLink />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default CustomCard;