import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center reverse-wrapper-bg min-h-[100vh] z-1" id="about-us">
      <div className="w-full flex justify-center"> 
        <span className="font-monoton text-[40px] md:text-[75px] font-normal md:leading-[140px] leading-[100px] text-white uppercase">
          About &nbsp;&nbsp;&nbsp;&nbsp; us
        </span>
      </div>
      <div className="font-montserrat text-m w-[75vw] text-left text-white mt-14"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div className="flex flex-col md:flex-row items-center w-[75vw] text-white mt-14"> {/* Flex container */}
        <img
          width={180}
          height={180}
          src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png"
          alt="codechefVITC_logo"
          className="mb-4 md:mb-0 md:mr-4"
        />
        <p className="font-montserrat text-m md:ml-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center w-[75vw] text-white mt-14"> {/* Flex container */}
        <p className="font-montserrat text-m md:mr-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          width={180}
          height={180}
          src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png"
          alt="codechefVITC_logo"
          className="mt-4 md:mt-0 md:ml-4"
        />
      </div>
    </div>
  );
};

export default AboutUs;
