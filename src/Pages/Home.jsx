// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home









import React from 'react';
import basit from '../assets/profile-pic (23).png'

const Home = () => {
  return (
    <div className="min-h-[80vh] bg-[#031540] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16 p-8 max-w-5xl mx-auto">
        
        {/* Left Section */}
        <div className="text-white text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Your Name Here
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hi, I'm Muhammad Abdullah. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 ease-in-out shadow-xl">
            Let's get started
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-green-500 shadow-lg transition-all duration-300 hover:scale-105">
          <img
            src={basit}
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
