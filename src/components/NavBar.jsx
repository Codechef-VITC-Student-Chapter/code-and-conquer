import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import AlertDialog from './AlertDialog';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`flex z-50 fixed w-full navbar-bg p-2 px-8 rounded-full max-h-[20vh] min-w-[70vw] text-white border-white items-center justify-between transition-transform duration-300 backdrop-blur-sm ${
          isScrolled ? 'top-0 rounded-none border-b-2' : 'top-4 border-4'
        }`}
      >
        <div className="flex gap-2">
          <img
            width={60}
            height={80}
            src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png"
            alt="codechefVITC_logo"
          />
          <img
            width={60}
            height={80}
            src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1724520785/image-removebg-preview_3_tfczm9.png"
            alt="cyscomVITC_logo"
          />
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col absolute top-[calc(100%+16px)] left-0 w-full text-white p-4 md:relative md:flex md:flex-row md:gap-8 md:w-auto md:p-0`}
        >
          <ul className="flex flex-col gap-4 bg-gray-900 sm:bg-none bg-opacity-65 sm:bg-opacity-0 md:flex-row md:gap-8">
            {['Home', 'About Us', 'Timeline', 'Sponsors', 'FAQs'].map(
              (section) => (
                <Link
                  key={section}
                  to={section.toLowerCase().replace(' ', '-')}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="font-semibold hover:underline duration-300 cursor-pointer flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </Link>
              )
            )}
          </ul>
          <div className="flex flex-col gap-4 mt-4 md:mt-0 md:flex-row md:items-center">
            <a
              href="https://drive.google.com/file/d/1tzuxo7iRGA28IaR3gvf5O5aLJd7bHSNr/view?usp=sharing"
              className="bg-red-500 text-white font-bold text-md px-4 py-2 rounded"
            >
              Download Brochure
            </a>
            {/* <button
              onClick={() => setModalOpen(true)}
              className="bg-blue-500 text-white font-bold text-md px-4 py-2 rounded"
            >
              Register
            </button> */}
          </div>
        </div>{' '}
      </div>

      {isModalOpen && <AlertDialog setModalOpen={setModalOpen} />}
    </>
  );
};

export default NavBar;
