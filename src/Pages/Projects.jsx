import React, { useState, useEffect } from "react";
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
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const projectData = [

  {
    id: 1,
    category: "NextJS",
    title: "Meme Generator",
    description: "A Meme Generator App built with Next JS and TypeScript, allowing users to create custom memes with text overlays for fun and easy sharing.",
    image: Meme,
    githubUrl: "https://github.com/basit1215/Meme-Generator",
    hostedUrl: "https://meme-generator-seven-umber.vercel.app/",
    techStack: ["NEXT JS", "TYPESCRIPT", "TAILWIND CSS"]
  },
  {
    id: 2,
    category: "ReactJS",
    title: "Blogging App",
    description: "This Blogging app, built with React.js and Firebase, allows users to create, manage, and share their blog posts seamlessly, featuring a responsive design for optimal user engagement.",
    image: Blog,
    githubUrl: "https://github.com/basit1215/Blogging-App",
    hostedUrl: "https://blogging-app-omega-livid.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "FIREBASE"]
  },
  {
    id: 3,
    category: "NextJS",
    title: "Ecommerce Website",
    description: "The E-commerce App is a powerful platform built with Next JS, displaying products seamlessly using API integration.",
    image: Ecommerce,
    githubUrl: "https://github.com/basit1215/Ecommerce-Next-JS",
    hostedUrl: "https://ecommerce-next-js-plum.vercel.app/",
    techStack: ["NEXT JS", "TYPESCRIPT", "TAILWIND CSS"]
  },
  {
    id: 4,
    category: "JavaScript",
    title: "Post App",
    description: "A Post App developed with HTML, CSS, and JavaScript, enabling users to create and view their own posts.",
    image: PostApp,
    githubUrl: "https://github.com/basit1215/Post-App",
    hostedUrl: "https://basit1215.github.io/Post-App/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    id: 5,
    category: "HTML & CSS",
    title: "Real State Multi Website",
    description: "A Real Estate Multi-Page Website showcasing a visually appealing home page UI, built using HTML, CSS, and Bootstrap. The design features a modern, responsive layout for property displays.",
    image: RealState,
    githubUrl: "https://github.com/basit1215/Real-State-Multi-Website",
    hostedUrl: "https://basit1215.github.io/Real-State-Multi-Website/",
    techStack: ["HTML", "CSS", "BOOTSTRAP"]
  },
  {
    id: 6,
    category: "ReactJS",
    title: "Institute Admission Portal",
    description: "An admission portal built with React and Firebase, enabling users to apply for admissions and efficiently manage their application status.",
    image: Admission,
    githubUrl: "https://github.com/basit1215/React-Admission-Portal",
    hostedUrl: "https://react-admission-portal.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "FIREBASE"]
  },
  {
    id: 7,
    category: "JavaScript",
    title: "Password Generator",
    description: "A random Password Generator developed with HTML, CSS, and JavaScript that allows users to create secure, unique passwords effortlessly.",
    image: Password,
    githubUrl: "https://github.com/basit1215/Password-Generator",
    hostedUrl: "https://basit1215.github.io/Password-Generator/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    id: 8,
    category: "ReactJS",
    title: "Quiz App",
    description: "Engage in real-time quizzes with this sleek, responsive app built using React, HTML5, CSS3, and TailwindCSS for a smooth, interactive experience and modern design.",
    image: Quiz,
    githubUrl: "https://github.com/basit1215/React-Quiz_App",
    hostedUrl: "https://react-quiz-app-two-theta.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "TAILWIND CSS"]
  },
  {
    id: 9,
    category: "ReactJS",
    title: "Weather App",
    description: "This responsive weather app provides real-time global weather updates, featuring key data like temperature and wind speed, built using JavaScript and API integration.",
    image: Weather,
    githubUrl: "https://github.com/basit1215/React-Weather-App",
    hostedUrl: "https://react-weather-app-8tuo.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "TAILWIND CSS"]
  },
  {
    id: 10,
    category: "ReactJS",
    title: "Todo App",
    description: "A Todo app built with React and Firebase, enabling users to create, edit, and delete tasks while saving data securely in the cloud.",
    image: Todo,
    githubUrl: "https://github.com/basit1215/Todo-App-React-Firebase",
    hostedUrl: "https://todo-app-react-firebase-orpin.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "FIREBASE"]
  },
  {
    id: 11,
    category: "HTML & CSS",
    title: "Chess Board",
    description: "A stylish chess board designed with HTML and CSS, showcasing a traditional grid layout for an authentic chess experience.",
    image: Chess,
    githubUrl: "https://github.com/basit1215/chess-board",
    hostedUrl: "https://basit1215.github.io/chess-board/",
    techStack: ["HTML", "CSS"]
  },
  {
    id: 12,
    category: "JavaScript",
    title: "SMIT ChatBot",
    description: " I have created SMIT ChatBot... In this ChatBot you can talk to SMIT Management to get admission in I.T course in SMIT.",
    image: ChatBot,
    githubUrl: "https://github.com/basit1215/SMIT-ChatBot",
    hostedUrl: "https://basit1215.github.io/SMIT-ChatBot/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    id: 13,
    category: "JavaScript",
    title: "Text Editor App",
    description: "A user friendly text editor app built with HTML, CSS, and JavaScript, offering essential features for creating and editing documents with a clean interface.",
    image: TextEditor,
    githubUrl: "https://github.com/basit1215/Text-Editor-App",
    hostedUrl: "https://basit1215.github.io/Text-Editor-App/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    id: 14,
    category: "ReactJS",
    title: "Durood Sharif Counter",
    description: "A Durood Sharif counter built with React and JavaScript, allowing users to track and display the number of times they recite Durood Sharif easily.",
    image: Counter,
    githubUrl: "https://github.com/basit1215/React-Counter-App",
    hostedUrl: "https://react-counter-app-self.vercel.app/",
    techStack: ["REACT JS", "JAVASCRIPT", "CSS"]
  },
  {
    id: 15,
    category: "HTML & CSS",
    title: "Start Website",
    description: "A sleek, single-page website built for showcasing startup services with a modern design, using HTML, CSS, and Bootstrap for responsiveness and style.",
    image: Start,
    githubUrl: "https://github.com/basit1215/start-website",
    hostedUrl: "https://basit1215.github.io/start-website/",
    techStack: ["HTML", "CSS", "BOOTSTRAP"]
  },
  {
    id: 16,
    category: "JavaScript",
    title: "Age Calculator",
    description: "An age calculator built using HTML, CSS, and JavaScript, designed to help users effortlessly compute their age based on their date of birth.",
    image: AgeCalculatr,
    githubUrl: "https://github.com/basit1215/Age-Calculator",
    hostedUrl: "https://basit1215.github.io/Age-Calculator/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    id: 17,
    category: "HTML & CSS",
    title: "Tere Website",
    description: "A single-page website for Tere, a ride-sharing app, showcasing features like eco-friendly rides, cashless payments, and flexible hours.",
    image: Tere,
    githubUrl: "https://github.com/basit1215/Tere-Website",
    hostedUrl: "https://basit1215.github.io/Tere-Website/",
    techStack: ["HTML", "CSS", "BOOTSTRAP"]
  },
  {
    id: 18,
    category: "JavaScript",
    title: "Stop Watch",
    description: "A Stopwatch created using HTML, CSS, and JavaScript, offering a simple and intuitive way for users to measure and track time accurately.",
    image: StopWatch,
    githubUrl: "https://github.com/basit1215/Stop-Watch",
    hostedUrl: "https://basit1215.github.io/Stop-Watch/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    id: 19,
    category: "JavaScript",
    title: "Simple Calculator",
    description: "A simple Calculator created using HTML, CSS, and JavaScript for easy and quick arithmetic calculations.",
    image: Calculatr,
    githubUrl: "https://github.com/basit1215/Simple-calculator",
    hostedUrl: "https://basit1215.github.io/Simple-calculator/",
    techStack: ["HTML", "CSS", "JAVASCRIPT"]
  }

];


function ProjectGallery() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
      offset: 120,
      anchorPlacement: 'top-bottom'
    });
  }, []);


  return (
    <>
      <div className="min-h-[80vh] w-full justify-center">
        <div className=" bg-[#031540] md:pt-[7rem] pb-20 projectsDiv md:pb-[5rem] pt-8  px-4">

          <h1 className="text-5xl text-[#00abf0]  font-bold text-center mb-9" data-aos="zoom-in" data-aos-delay="200">
            Projects
          </h1>

          <div className="flex justify-center space-x-4 mb-12">
            {["All", "HTML & CSS", "JavaScript", "ReactJS", "NextJS"].map((category, index) => (
              <button
                key={category}
                className={`py-2 rounded-[15%] md:px-[15px] allBtns lg:px-[15px] font-semibold ${selectedCategory === category ? "bg-gray-800 text-white" : "bg-gray-700 text-white"
                  }`}
                onClick={() => setSelectedCategory(category)}
                data-aos="fade-left"
                data-aos-delay={`${index * 200 + 300}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid-cols-1 pb-[30px] justify-center flex flex-wrap items-center gap-[35px] sm:grid-cols-2 lg:mx-5 allCards md:mx-[15px] lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div className="transform transition duration-300 hover:scale-105">
                <CustomCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  hostedUrl={project.hostedUrl}
                  techStack={project.techStack}
                />
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </>
  );
}

export default ProjectGallery;