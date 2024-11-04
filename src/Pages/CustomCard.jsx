// import React from "react";

// function CustomCard({ title, description }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
//       <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <button className="mt-auto bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
//         View Details
//       </button>
//     </div>
//   );
// }

// export default CustomCard;











// import React from "react";

// function CustomCard({ title, description }) {
//   return (
//     <div className="bg-gradient-to-br from-teal-400 to-blue-500 shadow-xl rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
//       {/* Neon Border Effect */}
//       <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 opacity-30 blur-lg rounded-lg"></div>


//       <button className="mt-auto bg-white text-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-teal-100 transition-all transform hover:scale-105 z-10 relative shadow-lg">
//         View Details
//       </button>
//     </div>
//   );
// }

// export default CustomCard;









// import React from "react";

// function CustomCard({ title, description, image }) {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Image Section */}
//       <div className="relative">
//       <img src={image} alt={title} />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6">
//       <h2 className="text-2xl font-bold mb-3 text-white z-10 relative">{title}</h2>
//       <p className="text-white mb-4 z-10 relative">{description}</p>

//         {/* Buttons Section */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             NextJS 13
//           </span>
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             TailwindCSS
//           </span>
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             TypeScript
//           </span>
//         </div>

//         {/* Footer Section */}
//         <div className="mt-6 flex justify-between items-center">
//           <button className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-700">
//             GitHub Repo
//           </button>
//           <button className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-green-600">
//             Hosted Link
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomCard;












//   <img src={image} alt={title} />
//       <h2 className="text-2xl font-bold mb-3 text-white z-10 relative">{title}</h2>
//       <p className="text-white mb-4 z-10 relative">{description}</p>



























// import React from "react";

// function CustomCard({ title, description, image, githubUrl, hostedUrl }) {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
//       {/* Image Section */}
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//         <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">{title}</h2>
//       </div>

//       {/* Content Section */}
//       <div className="p-6 bg-gray-100">
//         <p className="text-gray-700 mb-4">{description}</p>

//         {/* Tech Stack Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             NextJS 13
//           </span>
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             TailwindCSS
//           </span>
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             TypeScript
//           </span>
//         </div>

//         {/* Footer Section with Buttons */}
//         <div className="mt-6 flex justify-between items-center">
//           <a
//             href={githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-700 transition"
//           >
//             GitHub Repo
//           </a>
//           <a
//             href={hostedUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 transition"
//           >
//             Hosted Link
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomCard;



















//final



// import React from "react";

// function CustomCard({ title, description, image, githubUrl, hostedUrl }) {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
//       {/* Image Section */}
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//         <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">{title}</h2>
//       </div>

//       {/* Content Section */}
//       <div className="p-6 bg-gray-100">
//         <p className="text-gray-700 mb-4">{description}</p>

//         {/* Tech Stack Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             NextJS 13
//           </span>
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             TailwindCSS
//           </span>
//           <span className="bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
//             TypeScript
//           </span>
//         </div>

//         {/* Footer Section with Buttons */}
//         <div className="mt-6 flex justify-between items-center">
//           <a
//             href={githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-700 transition"
//           >
//             GitHub Repo
//           </a>
//           <a
//             href={hostedUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 transition"
//           >
//             Hosted Link
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomCard;























import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

function CustomCard({ title, description, image, githubUrl, hostedUrl, techStack }) {
  return (
    <div className="max-w-sm mx-auto  bg-white rounded-2xl border-2 border-sky-300 overflow-hidden shadow-white hover:shadow-[0_0_22px_var(--main-color)] hover:shadow-white shadow-[0_0_14px_var(--main-color)] transform transition duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <h2 className="absolute bottom-2 left-20 text-2xl text-center font-bold text-white z-10">{title}</h2>
      </div>

      {/* Content Section */}
      <div className="  bg-[#bcecff]">
        <p className="text-[#070e1f] px-6 pt-5  font-medium text-center  mb-8 h-[96px]">{description}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 px-6 justify-center mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-[#79caeb] text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Section with Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a85af] w-[50%]  border-r flex border-black justify-center items-center gap-5 text-white px-4 py-2 rounded-bl-2xl font-bold   hover:bg-opacity-90 transition"
          >
            GitHub Repo <FaGithub/>
          </Link>
          <Link
            href={hostedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a85af] text-white flex border-l border-black justify-center gap-5 items-center  w-[50%] px-4 py-2 rounded-ee-2xl font-bold hover:bg-opacity-90  transition"
          >
            Hosted Link <FiExternalLink/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;









