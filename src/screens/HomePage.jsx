import React from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import NavBar from '../components/NavBar';
import AboutUs from './AboutUs';
import Timeline from './Timeline';

function HomePage() {
  return (
    <div id="home" className="flex h-[100vh] flex-col items-center p-32 justify-center">
      <BackgroundWrapper />
      <div className='text-7xl text-white '>Hello!</div>
    </div>
  );
}

export default HomePage;
