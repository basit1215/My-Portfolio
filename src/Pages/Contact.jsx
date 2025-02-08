// import React, { useState, useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Contact.css';
// import MyAccountsLink from "../components/MyAccountsLink";


// function Contact() {

//   const [btn, setBtn] = useState('Send Message');
//   const [names, setNames] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const sendDataToDB = () => {
//     setBtn(<div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full h-5 w-5"></div>);

//     if (names.trim() === '' || email.trim() === '' || message.trim() === '') {
//       setBtn('Send Message');
//       setError('Please fill the form correctly!');
//       setTimeout(() => {
//         setError('');
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         setBtn('Send Message');
//         setError('Message sent successfully!');
//         setTimeout(() => {
//           setError('');
//         }, 2000);
//         setNames('');
//         setEmail('');
//         setMessage('');
//       }, 1000);
//     }

//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: 'ease-in-out',
//       once: false,
//       offset: 120,
//       anchorPlacement: 'top-bottom'
//     });
//   }, []);


//   return (
//     <>

//       <section className="flex  contact py-[50px] justify-center bg-[#252c41] items-center py-10">
//         <div className="w-full max-w-[45rem]  bg-[#031540] mt-[82px]  shadow-[#00abf0] shadow-[0_0_22px_var(--main-color)] rounded-lg p-6"
//           data-aos="fade-up" data-aos-delay="200">

//           <h1 className="text-3xl mb-8 text-[#00abf0] text-center font-bold"
//             data-aos="fade-down" data-aos-delay="400">GET IN TOUCH
//           </h1>

//           <p className="text-center text-gray-300 mt-2"
//             data-aos="fade-up" data-aos-delay="600">
//             I would like to know the final requirements of your project. Please get in touch with me and share details about your project.
//           </p>

//           <div className="mt-5">

//             <input
//               placeholder="Name"
//               className='w-full h-12 border hover:border-2 border-black rounded-xl pl-5 mt-2 placeholder-[#3b3b3b] focus:bg-[#868686] bg-[#a0a0a0] focus:border-[#00abf0] focus:outline-none'
//               onChange={(e) => setNames(e.target.value)}
//               value={names}
//               data-aos="fade-right"
//               data-aos-delay="800"
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               className='w-full h-12 border hover:border-2 border-black rounded-xl placeholder-[#3b3b3b] pl-5 mt-2 focus:bg-[#868686] bg-[#a0a0a0] focus:border-[#00abf0] focus:outline-none'
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               data-aos="fade-left"
//               data-aos-delay="1000"
//             />

//             <textarea
//               placeholder="Leave a comment here"
//               className='w-full h-32 border hover:border-2 border-black rounded-xl pl-5 pt-2 mt-2 placeholder-[#3b3b3b] focus:bg-[#868686] bg-[#a0a0a0] focus:border-[#00abf0] focus:outline-none'
//               onChange={(e) => setMessage(e.target.value)}
//               value={message}
//               data-aos="fade-up"
//               data-aos-delay="1200"
//             />

//             <div className="text-center mt-5">
//               <button onClick={sendDataToDB} className="inline-block px-6 py-2 bg-blue-500 text-[#0e1b38] font-bold text-base rounded-[5%] border border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]"  >
//                 {btn}
//               </button>

//               {error && <p className="mt-5 text-red-500" >
//                 {error}
//               </p>}
//             </div>

//           </div>
//         </div>
//       </section>

//       <section className="bg-[#031540] py-8">
//         <MyAccountsLink />
//       </section>

//     </>
//   );
// }

// export default Contact;


























import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import MyAccountsLink from "../components/MyAccountsLink";
import { db } from "../firebaseConfig.js"; // Firebase config import karo
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Contact() {

  const [btn, setBtn] = useState('Send Message');
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendDataToDB = async () => {
    setBtn(<div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full h-5 w-5"></div>);

    if (names.trim() === '' || email.trim() === '' || message.trim() === '') {
      setBtn('Send Message');
      setError('Please fill the form correctly!');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      try {
        await addDoc(collection(db, "contactMessages"), {
          name: names,
          email: email,
          message: message,
          timestamp: serverTimestamp()
        });
        setBtn('Send Message');
        setError('Message sent successfully!');
        setTimeout(() => {
          setError('');
        }, 2000);
        setNames('');
        setEmail('');
        setMessage('');
      } catch (error) {
        setBtn('Send Message');
        setError('Error sending message! Try again.');
        setTimeout(() => {
          setError('');
        }, 2000);
      }
    }
  };

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
      <section className="flex contact py-[50px] justify-center bg-[#252c41] items-center py-10">
        <div className="w-full max-w-[45rem] bg-[#031540] mt-[82px] shadow-[#00abf0] shadow-[0_0_22px_var(--main-color)] rounded-lg p-6"
          data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-3xl mb-8 text-[#00abf0] text-center font-bold"
            data-aos="fade-down" data-aos-delay="400">GET IN TOUCH
          </h1>
          <p className="text-center text-gray-300 mt-2"
            data-aos="fade-up" data-aos-delay="600">
            I would like to know the final requirements of your project. Please get in touch with me and share details about your project.
          </p>
          <div className="mt-5">
            <input
              placeholder="Name"
              className='w-full h-12 border hover:border-2 border-black rounded-xl pl-5 mt-2 placeholder-[#3b3b3b] focus:bg-[#868686] bg-[#a0a0a0] focus:border-[#00abf0] focus:outline-none'
              onChange={(e) => setNames(e.target.value)}
              value={names}
              data-aos="fade-right"
              data-aos-delay="800"
            />
            <input
              type="email"
              placeholder="Email"
              className='w-full h-12 border hover:border-2 border-black rounded-xl placeholder-[#3b3b3b] pl-5 mt-2 focus:bg-[#868686] bg-[#a0a0a0] focus:border-[#00abf0] focus:outline-none'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              data-aos="fade-left"
              data-aos-delay="1000"
            />
            <textarea
              placeholder="Leave a comment here"
              className='w-full h-32 border hover:border-2 border-black rounded-xl pl-5 pt-2 mt-2 placeholder-[#3b3b3b] focus:bg-[#868686] bg-[#a0a0a0] focus:border-[#00abf0] focus:outline-none'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              data-aos="fade-up"
              data-aos-delay="1200"
            />
            <div className="text-center mt-5">
              <button onClick={sendDataToDB} className="inline-block px-6 py-2 bg-blue-500 text-[#0e1b38] font-bold text-base rounded-[5%] border border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]">
                {btn}
              </button>
              {error && <p className="mt-5 text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#031540] py-8">
        <MyAccountsLink />
      </section>
    </>
  );
}

export default Contact;
