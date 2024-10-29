// import React, { useState } from "react";
// import "./Projects.css";

// const NeumorphicSwitch = () => {
//   const [isCelsius, setIsCelsius] = useState(true);

//   const toggleSwitch = () => {
//     setIsCelsius(!isCelsius);
//   };

//   return (
//     <div className="switch-container">
//       <div className="switch" onClick={toggleSwitch}>
//         <div className={`switch-button ${isCelsius ? "active" : ""}`}>
//           <span>°C</span>
//         </div>
//         <div className={`switch-button ${!isCelsius ? "active" : ""}`}>
//           <span>°F</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NeumorphicSwitch;
























// import React, { useState } from "react";
// import "./Projects.css";

// const FanToggleSwitch = () => {
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div className="toggle-container" onClick={toggleSwitch}>
//       <div className={`toggle-switch ${isOn ? "on" : "off"}`}>
//         <div className="switch-label">{isOn ? "On" : "Off"}</div>
//         <div className="toggle-knob"></div>
//       </div>
//     </div>
//   );
// };

// export default FanToggleSwitch;




















// import React, { useState } from "react";
// import "./Projects.css";

// const ToggleButton = () => {
//   const [isOn, setIsOn] = useState(false);

//   const handleClick = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <button
//       className={`normal-button ${isOn ? "toggled" : ""}`}
//       onClick={handleClick}
//     >
//       {isOn ? "On" : "Off"}
//     </button>
//   );
// };

// export default ToggleButton;























// import React from "react";

// function CustomCard() {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           src="https://via.placeholder.com/600x400"
//           alt="Card Image"
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6">
//         <h2 className="text-2xl font-bold text-gray-900">
//           Become Certified Web 3.0 and Metaverse Developer
//         </h2>
//         <p className="text-gray-600 mt-2">Panaverse Website</p>
//         <p className="text-gray-500 mt-4 text-sm">
//           A site for Panaverse Education
//         </p>

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















// import React, { useState } from "react";
// import CustomCard from "./CustomCard";

// const projectData = [
//   { id: 1, category: "HTML", title: "HTML Project", description: "HTML project description" },
//   { id: 2, category: "CSS", title: "CSS Project", description: "CSS project description" },
//   { id: 3, category: "JavaScript", title: "JavaScript Project", description: "JavaScript project description" },
//   { id: 4, category: "React", title: "React Project", description: "React project description" },
//   { id: 5, category: "NextJS", title: "NextJS Project", description: "NextJS project description" },
//   { id: 6, category: "React Native", title: "React Native Project", description: "React Native project description" },
//   // aur bhi projects yahan add kar sakte hain
// ];

// function ProjectGallery() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Filtered projects based on selected category
//   const filteredProjects = selectedCategory === "All"
//     ? projectData
//     : projectData.filter(project => project.category === selectedCategory);

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>

//       {/* Filter Buttons */}
//       <div className="flex justify-center space-x-4 mb-8">
//         {["All", "HTML", "CSS", "JavaScript", "React", "NextJS", "React Native"].map(category => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-full text-white font-semibold ${
//               selectedCategory === category ? "bg-teal-500" : "bg-teal-300"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map(project => (
//           <CustomCard
//             key={project.id}
//             title={project.title}
//             description={project.description}
//             // aur bhi project details props mein bhej sakte hain
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectGallery;























// import React, { useState } from "react";
// import CustomCard from "./CustomCard";
// import Salt from '../assets/salt.png'
// import textEditor from '../assets/textEditor.png'



// const projectData = [
//   {
//     id: 1,
//     category: "HTML & CSS",
//     title: "HTML & CSS Project",
//     description: "Salt'n Pepper Website",
//     image: {Salt},
//     githubLink: "https://github.com/basit1215/Salt-n-pepper-Website",
//     hostedLink: "https://basit1215.github.io/Salt-n-pepper-Website/"
//   },
//   {
//     id: 2,
//     category: "JavaScript",
//     title: "JavaScript Project",
//     description: "Text Editor App",
//     image: {textEditor},
//     githubLink: "https://github.com/basit1215/Text-Editor-App",
//     hostedLink: "https://basit1215.github.io/Text-Editor-App/"
//   },
//   // Additional projects can be added here
// ];

// function ProjectGallery() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projectData
//       : projectData.filter((project) => project.category === selectedCategory);

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>

//       {/* Filter Buttons */}
//       <div className="flex justify-center space-x-4 mb-8">
//         {["All", "HTML & CSS", "JavaScript", "React", "NextJS", "React Native"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-full text-white font-semibold ${
//               selectedCategory === category ? "bg-teal-500" : "bg-teal-300"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map((project) => (
//           <CustomCard
//             key={project.id}
//             title={project.title}
//             description={project.description}
//             image={project.image}
//             githubLink={project.githubLink}
//             hostedLink={project.hostedLink}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectGallery;



















// final






// import React, { useState } from "react";
// import CustomCard from "./CustomCard";
// import Salt from '../assets/salt.png'
// import textEditor from '../assets/textEditor.png'

// const projectData = [
//   {
//     id: 1,
//     category: "HTML & CSS",
//     title: "HTML & CSS Project",
//     description: "Salt'n Pepper Website",
//     image: Salt, // Updated
//     githubLink: "https://github.com/basit1215/Salt-n-pepper-Website",
//     hostedLink: "https://basit1215.github.io/Salt-n-pepper-Website/"
//   },
//   {
//     id: 2,
//     category: "JavaScript",
//     title: "JavaScript Project",
//     description: "Text Editor App",
//     image: textEditor, // Updated
//     githubLink: "https://github.com/basit1215/Text-Editor-App",
//     hostedLink: "https://basit1215.github.io/Text-Editor-App/"
//   },
//   // Additional projects can be added here
// ];

// function ProjectGallery() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projectData
//       : projectData.filter((project) => project.category === selectedCategory);

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>

//       {/* Filter Buttons */}
//       <div className="flex justify-center space-x-4 mb-8">
//         {["All", "HTML & CSS", "JavaScript", "React", "NextJS", "React Native"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-full text-white font-semibold ${
//               selectedCategory === category ? "bg-teal-500" : "bg-teal-300"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map((project) => (
//           <CustomCard
//             key={project.id}
//             title={project.title}
//             description={project.description}
//             image={project.image} // No change needed here
//             githubUrl={project.githubLink} // Updated prop name
//             hostedUrl={project.hostedLink} // Updated prop name
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectGallery;



























import React, { useState } from "react";
import CustomCard from "./CustomCard";
import Salt from '../assets/salt.png';
import textEditor from '../assets/textEditor.png';

const projectData = [
  {
    id: 1,
    category: "HTML & CSS",
    title: "Salt'n Pepper Website",
    description: "Create Salt'n Pepper Website. Experience the essence of gracious dining with outstanding service and an extraordinary fusion of classic and contemporary cuisine. ",
    image: Salt,
    githubLink: "https://github.com/basit1215/Salt-n-pepper-Website",
    hostedLink: "https://basit1215.github.io/Salt-n-pepper-Website/",
    techStack: ["HTML", "CSS"] // Added tech stack
  },
  {
    id: 2,
    category: "JavaScript",
    title: "Text Editor App",
    description: "I have create Text Editor App by using HTML, CSS, JAVASCRIPT.",
    image: textEditor,
    githubLink: "https://github.com/basit1215/Text-Editor-App",
    hostedLink: "https://basit1215.github.io/Text-Editor-App/",
    techStack: ["HTML", "CSS", "Javascript"] // Added tech stack
  },
  // Additional projects can be added here
];

function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <>
    <div className="w-full justify-center">
      <div className=" bg-[#031540] pt-8 pb-14 px-4">
        <h1 className="text-5xl text-[#00abf0] font-bold text-center  mb-9">Projects</h1>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {["All", "HTML & CSS", "JavaScript", "React", "NextJS", "React Native"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full  font-semibold ${selectedCategory === category ? "bg-gray-800 text-white" : "bg-gray-700 text-white"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <CustomCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              githubUrl={project.githubLink}
              hostedUrl={project.hostedLink}
              techStack={project.techStack} // Pass tech stack as props
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default ProjectGallery;
