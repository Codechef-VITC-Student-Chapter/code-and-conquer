import React from 'react';

import FAQBox from '../components/FAQBox';

import '../styles/faq.css';

const FAQs = () => {
  return (
    <div
      className="faq-bg-img flex flex-col items-center">
      <div id="faqs" className="text-white text-7xl h-full flex flex-col items-center justify-center">
        <span className="font-monoton text-[40px] md:text-[75px] font-normal md:leading-[140px] leading-[100px] text-center">
          FAQs
        </span>
        <FAQBox question={"In mi nulla, fringilla vestibulum?"} answer={"In mi nulla, fringilla vestibulum?"}></FAQBox>
        <FAQBox question={"In mi nulla, fringilla vestibulum?"} answer={"In mi nulla, fringilla vestibulum?"}></FAQBox>
        <FAQBox question={"In mi nulla, fringilla vestibulum?"} answer={"In mi nulla, fringilla vestibulum?"}></FAQBox>
        <FAQBox question={"In mi nulla, fringilla vestibulum?"} answer={"In mi nulla, fringilla vestibulum?"}></FAQBox>
      </div>
    </div>
  );
};

export default FAQs;
