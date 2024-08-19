import React from 'react';

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center sponsors-bg">
      <div id="sponsors" className="text-6xl text-white h-[100vh] mb-10">
        <div className="flex flex-row justify-center space-x-3">
          <span className="font-monoton text-[40px] md:text-[75px] font-normal  md:leading-[140px] leading-[100px] text-center uppercase">
            OUR &nbsp;&nbsp;&nbsp;&nbsp; Sponsors
          </span>
        </div>

        <div className="flex flex-col items-center justify-center mb-10  ">
          <div className="font-montserrat text-[28px] font-extrabold text-center capitalize mb-4">
            title sponsor
          </div>

          <img
            src="src\assets\sponsors\main-sponsor.png"
            alt="Sponsor"
            className="w-[180px] h-[180px] "
          />
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="font-montserrat text-[28px] font-extrabold text-center capitalize">
            Co sponsor
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <img
            src="src/assets/sponsors/co-sponsor.png"
            alt="Sponsor"
            className="w-32 h-32"
          />
          <img
            src="src/assets/sponsors/co-sponsor.png"
            alt="Sponsor"
            className="w-32 h-32"
          />

          <img
            src="src/assets/sponsors/co-sponsor.png"
            alt="Sponsor"
            className="w-32 h-32"
          />
          <img
            src="src/assets/sponsors/co-sponsor.png"
            alt="Sponsor"
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
