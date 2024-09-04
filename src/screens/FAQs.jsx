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
        <FAQBox question={"🚀 New to Web Development and Cybersecurity?  🚀"} answer={"Yes, you can absolutely take part in this event! 🌟 We’ve go a series of completely free online events preceding the main event to get you up to speed, check the time line above and got click on the big blue register button 😉"}></FAQBox>
        <FAQBox question={"Worried about overlapping with SIH? 😓 "} answer={"No need to worry! This event won't conflict with SIH; we have confirmed with SWC!  🎉"}></FAQBox>
        <FAQBox question={"Is this an overnight event? 🌙"} answer={"Yes, this event will be held overnight! 🕒"}></FAQBox>
        <FAQBox question={" Individual or Group? 👥"} answer={"You can register individually, but you’ll have the chance to form groups on the spot to participate in the CTFs! "}></FAQBox>
      </div>
    </div>
  );
};

export default FAQs;
