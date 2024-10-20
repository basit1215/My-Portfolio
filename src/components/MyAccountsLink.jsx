// import React from 'react'
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

// const MyAccountsLink = () => {
//   return (
//   <>
//           <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/harisahmedjs"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/haris-ahmed-3b5643279/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedin/>
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/?hl=en"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <FaInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>

//   </>
//   )
// }

// export default MyAccountsLink
















import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const MyAccountsLink = () => {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">FIND ME ON</h1>
        <p className="text-lg text-gray-300 mt-2">
          Feel free to <span className="text-purple-500">connect</span> with me
        </p>
      </div>

      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com/harisahmedjs"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 text-3xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/haris-ahmed-3b5643279/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 text-3xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 text-3xl"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  )
}

export default MyAccountsLink
