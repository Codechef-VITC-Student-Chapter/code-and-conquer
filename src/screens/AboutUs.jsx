import React from 'react';

const AboutUs = () => {
  return (
    <div
      className="flex flex-col items-center justify-center reverse-wrapper-bg min-h-[100vh] z-1"
      id="about-us"
    >
      <div className="w-full flex justify-center">
        <span className="font-monoton text-[40px] md:text-[75px] font-normal md:leading-[140px] leading-[100px] text-white uppercase">
          About &nbsp;&nbsp;&nbsp;&nbsp; us
        </span>
      </div>
      <div className="font-montserrat text-m w-[75vw] text-left text-white mt-14">
        Get ready to elevate your skills with "Code & Conquer"—a thrilling
        two-day workshop where web development meets cybersecurity! On day one,
        dive into essential skills like Git, backend, and frontend development.
        Day two focuses on web security, teaching you to identify and prevent
        common vulnerabilities, all leading to an exciting Capture the Flag
        (CTF) challenge. With hands-on learning, expert guidance, networking
        opportunities, and a certification to boost your credentials, this event
        is your gateway to innovating and securing the digital landscape. Don’t
        miss out on this action-packed experience!
      </div>
      <div className="flex flex-col md:flex-row items-center w-[75vw] text-white mt-14">
        {' '}
        {/* Flex container */}
        <img
          width={180}
          height={180}
          src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png"
          alt="codechefVITC_logo"
          className="mb-4 md:mb-0 md:mr-4"
        />
        <p className="font-montserrat text-m md:ml-4">
          The CodeChef VITC Student Chapter at VIT Chennai is a dynamic
          community dedicated to enhancing coding and problem-solving skills. We
          host coding contests, hackathons, and workshops on algorithms, data
          structures, web development, AI, and ML. Our mission is to foster
          continuous learning, collaboration, and excellence in programming.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center w-[75vw] text-white mt-14">
        {' '}
        {/* Flex container */}
        <p className="font-montserrat text-m md:mr-4">
          CYSCOM, previously OWASP VIT, is AICTE-recognized under the SPICES
          scheme, dedicated to promoting cybersecurity awareness. It aims to
          create a safer digital world by educating the public on preventing
          cyber threats through various events and initiatives.
        </p>
        <img
          width={180}
          height={180}
          src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1724520785/image-removebg-preview_3_tfczm9.png"
          alt="cyscom_logo"
          className="mt-4 md:mt-0 md:ml-4"
        />
      </div>
    </div>
  );
};

export default AboutUs;
