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
import RealState from '../assets/realState.png';
import Start from '../assets/start.png';
import Tere from '../assets/tere.png';
import Chess from '../assets/chess.jpeg';
import Calculatr from '../assets/calcu.png';
import TextEditor from '../assets/textEdit.png';
import AgeCalculatr from '../assets/ageCal.png';
import Password from '../assets/pass.png';
import StopWatch from '../assets/stopwatch.png';
import PostApp from '../assets/post.png';
import ChatBot from '../assets/chat.png';
import Counter from '../assets/counter.png';
import Todo from '../assets/todo.png';
import Admission from '../assets/admission.png';
import Weather from '../assets/weather.png';
import Quiz from '../assets/quiz.png';
import Blog from '../assets/blog.png';
import Meme from '../assets/meme.png';
import Ecommerce from '../assets/ecomm.png';













const projectData = [
  {
    id: 1,
    category: "HTML & CSS",
    title: "Real State Multi Website",
    description: "A Real Estate Multi-Page Website showcasing a visually appealing home page UI, built using HTML, CSS, and Bootstrap. The design features a modern, responsive layout for property displays.",
    image: RealState,
    githubLink: "https://github.com/basit1215/Real-State-Multi-Website",
    hostedLink: "https://basit1215.github.io/Real-State-Multi-Website/",
    techStack: ["HTML", "CSS", "BOOTSTRAP"]
  },
  {
    id: 2,
    category: "HTML & CSS",
    title: "Start Website",
    description: "A sleek, single-page website built for showcasing startup services with a modern design, using HTML, CSS, and Bootstrap for responsiveness and style.",
    image: Start,
    githubLink: "https://github.com/basit1215/start-website",
    hostedLink: "https://basit1215.github.io/start-website/",
    techStack: ["HTML", "CSS", "BOOTSTRAP"]
  },
  {
    id: 3,
    category: "HTML & CSS",
    title: "Tere Website",
    description: "A single-page website for Tere, a ride-sharing app, showcasing features like eco-friendly rides, cashless payments, and flexible hours.",
    image: Tere,
    githubLink: "https://github.com/basit1215/Tere-Website",
    hostedLink: "https://basit1215.github.io/Tere-Website/",
    techStack: ["HTML", "CSS", "BOOTSTRAP"] // Added tech stack
  },
  {
    id: 4,
    category: "HTML & CSS",
    title: "Chess Board",
    description: "A stylish chess board designed with HTML and CSS, showcasing a traditional grid layout for an authentic chess experience.",
    image: Chess,
    githubLink: "https://github.com/basit1215/chess-board",
    hostedLink: "https://basit1215.github.io/chess-board/",
    techStack: ["HTML", "CSS"] // Added tech stack
  },
  {
    id: 5,
    category: "JavaScript",
    title: "Simple Calculator",
    description: "A simple Calculator created using HTML, CSS, and JavaScript for easy and quick arithmetic calculations.",
    image: Calculatr,
    githubLink: "https://github.com/basit1215/Simple-calculator",
    hostedLink: "https://basit1215.github.io/Simple-calculator/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    id: 6,
    category: "JavaScript",
    title: "Text Editor App",
    description: "A user friendly text editor app built with HTML, CSS, and JavaScript, offering essential features for creating and editing documents with a clean interface.",
    image: TextEditor,
    githubLink: "https://github.com/basit1215/Text-Editor-App",
    hostedLink: "https://basit1215.github.io/Text-Editor-App/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"] // Added tech stack
  },
  {
    id: 7,
    category: "JavaScript",
    title: "Age Calculator",
    description: "An age calculator built using HTML, CSS, and JavaScript, designed to help users effortlessly compute their age based on their date of birth.",
    image: AgeCalculatr,
    githubLink: "https://github.com/basit1215/Age-Calculator",
    hostedLink: "https://basit1215.github.io/Age-Calculator/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"] // Added tech stack
  },
  {
    id: 8,
    category: "JavaScript",
    title: "Password Generator",
    description: "A random Password Generator developed with HTML, CSS, and JavaScript that allows users to create secure, unique passwords effortlessly.",
    image: Password,
    githubLink: "https://github.com/basit1215/Password-Generator",
    hostedLink: "https://basit1215.github.io/Password-Generator/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"] // Added tech stack
  },
  {
    id: 9,
    category: "JavaScript",
    title: "Stop Watch",
    description: "A Stopwatch created using HTML, CSS, and JavaScript, offering a simple and intuitive way for users to measure and track time accurately.",
    image: StopWatch,
    githubLink: "https://github.com/basit1215/Stop-Watch",
    hostedLink: "https://basit1215.github.io/Stop-Watch/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"] // Added tech stack
  },
  {
    id: 10,
    category: "JavaScript",
    title: "Post App",
    description: "A Post App developed with HTML, CSS, and JavaScript, enabling users to create and view their own posts.",
    image: PostApp,
    githubLink: "https://github.com/basit1215/Post-App",
    hostedLink: "https://basit1215.github.io/Post-App/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"] // Added tech stack
  },
  {
    id: 11,
    category: "JavaScript",
    title: "SMIT ChatBot",
    description: " I have created SMIT ChatBot... In this ChatBot you can talk to SMIT Management to get admission in I.T course in SMIT.",
    image: ChatBot,
    githubLink: "https://github.com/basit1215/SMIT-ChatBot",
    hostedLink: "https://basit1215.github.io/SMIT-ChatBot/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]// Added tech stack
  },
  {
    id: 12,
    category: "ReactJS",
    title: "Durood Sharif Counter",
    description: "A Durood Sharif counter built with React and JavaScript, allowing users to track and display the number of times they recite Durood Sharif easily.",
    image: Counter,
    githubLink: "https://github.com/basit1215/React-Counter-App",
    hostedLink: "https://react-counter-app-self.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "CSS"] // Added tech stack
  },
  {
    id: 13,
    category: "ReactJS",
    title: "Todo App",
    description: "A Todo app built with React and Firebase, enabling users to create, edit, and delete tasks while saving data securely in the cloud.",
    image: Todo,
    githubLink: "https://github.com/basit1215/Todo-App-React-Firebase",
    hostedLink: "https://todo-app-react-firebase-orpin.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "TAILWIND CSS", "FIREBASE"] // Added tech stack
  },
  {
    id: 14,
    category: "ReactJS",
    title: "Institute Admission Portal",
    description: "An admission portal built with React and Firebase, enabling users to apply for admissions and efficiently manage their application status.",
    image: Admission,
    githubLink: "https://github.com/basit1215/React-Admission-Portal",
    hostedLink: "https://react-admission-portal.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "TAILWIND CSS", "MATERIAL UI", "FIREBASE"] // Added tech stack
  },
  {
    id: 15,
    category: "ReactJS",
    title: "Weather App",
    description: "This responsive weather app provides real-time global weather updates, featuring key data like temperature and wind speed, built using JavaScript and API integration.",
    image: Weather,
    githubLink: "https://github.com/basit1215/React-Weather-App",
    hostedLink: "https://react-weather-app-8tuo.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "TAILWIND CSS"] // Added tech stack
  },
  {
    id: 16,
    category: "ReactJS",
    title: "Quiz App",
    description: "Engage in real-time quizzes with this sleek, responsive app built using React, HTML5, CSS3, and TailwindCSS for a smooth, interactive experience and modern design.",
    image: Quiz,
    githubLink: "https://github.com/basit1215/React-Quiz_App",
    hostedLink: "https://react-quiz-app-two-theta.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "TAILWIND CSS"] // Added tech stack
  },
  {
    id: 17,
    category: "ReactJS",
    title: "Blogging App",
    description: "This Blogging app, built with React.js and Firebase, allows users to create, manage, and share their blog posts seamlessly, featuring a responsive design for optimal user engagement.",
    image: Blog,
    githubLink: "https://github.com/basit1215/Blogging-App",
    hostedLink: "https://blogging-app-omega-livid.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "TAILWIND CSS", "FIREBASE"] // Added tech stack
  },
  {
    id: 18,
    category: "NextJS",
    title: "Meme Generator",
    description: "A Meme Generator App built with Next JS and TypeScript, allowing users to create custom memes with text overlays for fun and easy sharing.",
    image: Meme,
    githubLink: "https://github.com/basit1215/Meme-Generator",
    hostedLink: "https://meme-generator-seven-umber.vercel.app/",
    techStack: ["NEXT JS", "TYPESCRIPT", "TAILWIND CSS"] // Added tech stack
  },
  {
    id: 19,
    category: "NextJS",
    title: "Ecommerce Website",
    description: "The E-commerce App is a powerful platform built with Next JS, displaying products seamlessly using API integration.",
    image: Ecommerce,
    githubLink: "https://github.com/basit1215/Ecommerce-Next-JS",
    hostedLink: "https://ecommerce-next-js-plum.vercel.app/",
    techStack: ["NEXT JS", "TYPESCRIPT", "TAILWIND CSS"] // Added tech stack
  },
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
            {["All", "HTML & CSS", "JavaScript", "ReactJS", "NextJS", "React Native"].map((category) => (
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
