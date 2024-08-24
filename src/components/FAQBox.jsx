import React, { useState } from 'react';
import '../styles/faq.css';
import arrow from '../assets/faq/arrow.png';
const FAQBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[80vw] mb-5">
      <div
        onClick={toggleDropdown}
        className="faq-box-bg cursor-pointer w-full h-[9vh] py-4 px-6 text-left pl-[3rem] text-white rounded-t-md focus:outline-none font-montserrat font-semibold text-sm sm:text-l md:text-xl flex justify-between items-center"
      >
        {question}
        <button
          onClick={toggleDropdown}
          className="ml-4 text-xl focus:outline-none"
        >
          <img
            src={arrow}
            alt="Arrow"
            className={`w-[40px] h-[40px] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="faq-box-bg top-full left-0 w-full bg-opacity-50 rounded-b-md pl-[1.5rem] mb-5">
          <div className="w-[80%] mx-auto border-t-2 border-black"></div>
          <p className="text-white font-montserrat text-sm sm:text-l md:text-xl px-6 py-2">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQBox;
