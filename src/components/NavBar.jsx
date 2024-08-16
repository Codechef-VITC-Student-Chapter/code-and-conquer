import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='flex z-50 fixed navbar-bg p-2 px-8 rounded-full max-h-[20vh] min-w-[70vw] top-5  text-white border-white border-4 items-center justify-between'>
        <div className='flex gap-2'>
            <img width={60} height={80} src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png" alt='codechefVITC_logo'/>
            <img width={60} height={80} src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png" alt='cyscomVITC_logo'/>
        </div>
        <div >
            <ul className='flex gap-8'>
                <Link to="home" spy={true} smooth={true} offset={-150} duration={500} className='font-semibold hover:underline duration-300 hover:duration-300 cursor-pointer'>Home</Link>
                <Link to="about-us" spy={true} smooth={true} offset={-150} duration={500} className='font-semibold hover:underline duration-300 hover:duration-300 cursor-pointer'>About Us</Link>
                <Link to="timeline" spy={true} smooth={true} offset={-150} duration={500} className='font-semibold hover:underline duration-300 hover:duration-300 cursor-pointer'>Timeline</Link>
                <Link to="sponsors" spy={true} smooth={true} offset={-150} duration={500} className='font-semibold hover:underline duration-300 hover:duration-300 cursor-pointer'>Sponsors</Link>
                <Link to="faqs" spy={true} smooth={true} offset={-150} duration={500} className='font-semibold hover:underline duration-300 hover:duration-300 cursor-pointer'>FAQs</Link>
                <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} className='font-semibold hover:underline duration-300 hover:duration-300 cursor-pointer'>Contact</Link>
            </ul>
        </div>
        <div className='flex items-center gap-4'>
            <button className='bg-red-500 text-white font-bold text-md px-4 py-2 rounded '>Download Brochure</button>
            <button className='bg-blue-500 text-white font-bold text-md px-4 py-2 rounded '>Login</button>
        </div>
    </div>
  )
}

export default NavBar