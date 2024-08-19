import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
          src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png"
          alt="cyscomVITC_logo"
        />
      </div>
      <div>
        <ul className="flex gap-8">
          {['Home', 'About Us', 'Timeline', 'Sponsors', 'FAQs'].map(
            (section) => (
              <Link
                key={section}
                to={section.toLowerCase().replace(' ', '-')}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="font-semibold hover:underline duration-300 cursor-pointer"
              >
                {section}
              </Link>
            )
          )}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-red-500 text-white font-bold text-md px-4 py-2 rounded">
          Download Brochure
        </button>
        <button className="bg-blue-500 text-white font-bold text-md px-4 py-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
