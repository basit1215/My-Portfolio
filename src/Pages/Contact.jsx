import React, { useState } from "react";
import './Contact.css'

function Contact() {
  const [btn, setBtn] = useState('Send Message');
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendDataToDB = () => {
    setBtn(<div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full h-5 w-5"></div>);

    if (names.trim() === '' || email.trim() === '' || message.trim() === '') {
      setBtn('Send Message');
      setError('Please fill the form correctly!');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      setTimeout(() => {
        setBtn('Send Message');
        setError('Message sent successfully!');
        setTimeout(() => {
          setError('');
        }, 2000);
        setNames('');
        setEmail('');
        setMessage('');
      }, 1000);
    }
  };

  return (
    <section className="flex justify-center bg-[#031540] items-center py-10">
      <div className="w-full max-w-[45rem] bg-[#252c41]   shadow-[#00abf0] shadow-[0_0_22px_var(--main-color)] rounded-lg p-6">
        <h1 className="text-3xl mb-8 text-[#00abf0] text-center font-bold">GET IN TOUCH</h1>
        <p className="text-center text-gray-300 mt-2">
          I would like to know the final requirements of your project. Please get in touch with me and share details about your project.
        </p>
        <div className="mt-5">
          <input
            placeholder="Name"
            className='w-full h-12 border hover:border-2 border-black  rounded-xl pl-5 mt-2 focus:bg-[#c5c5c5]  bg-[#ececec] focus:border-[#00abf0] focus:outline-none'
            onChange={(e) => setNames(e.target.value)}
            value={names}
          />
          <input
            type="email"
            placeholder="Email"
            className='w-full h-12 border hover:border-2 border-black  rounded-xl pl-5 mt-2 focus:bg-[#c5c5c5]  bg-[#ececec] focus:border-[#00abf0] focus:outline-none'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        
          <textarea
            placeholder="Message"
            className='w-full h-32 border hover:border-2 border-black  rounded-xl pl-5 pt-2 mt-2 focus:bg-[#c5c5c5]  bg-[#ececec] focus:border-[#00abf0] focus:outline-none'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <div className="text-center mt-5">
            <button onClick={sendDataToDB} className="inline-block px-6 py-2 bg-blue-500 text-[#0e1b38] font-bold text-base rounded-full border-2 border-transparent duration-300 ease-in-out transition transform hover:bg-blue-500 hover:shadow-none shadow-[0_0_13px_var(--main-color)] shadow-[#00abf0]" >
              {btn}
            </button>
            {error && <p className="mt-5 text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact