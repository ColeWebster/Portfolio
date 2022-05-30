import React from "react";

export default function Contact() {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1jCQimcjPIqABnNZw71A7hM9b4V3t_PJa/view?usp=sharing"
    );
  };

  return (
    <section
      id="contact"
      className="relative text-gray-300 bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20"></div>
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Connect with Me:
        </h1>

        <p className="mb-8 leading-relaxed">
          Feel free to connect with me using the following methods:
        </p>

        <button
          onClick={handleResumeClick}
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outlin-none hove:bg-green-600 rounded text-lg"
        >
          Resume
        </button>

        <button
          className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        >
          LinkedIn
        </button>

        <br></br>
        
        <button 
          className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          Twitter
        </button>
        
        <button 
          className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outlin-none hove:bg-green-600 rounded text-lg">
          Email
        </button>
      </div>
    </section>
  );
}
