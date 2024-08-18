import React from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import { useState, useEffect } from 'react';

function HomePage() {
  const [timer, setTimer] = useState((20 * 24 * 60 * 60 * 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1000); 
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const days = Math.floor(timer / (24 * 60 * 60 * 1000));
  const hours = Math.floor((timer % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((timer % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timer % (60 * 1000)) / 1000);

  return (
    <div id="home" className="flex gap-16 font-bold text-white h-[100vh] flex-col items-center p-32 justify-center">
      <BackgroundWrapper />
      <div className='text-9xl  font-extrabold '>CODE & CONQUER!</div>
      <div className='flex gap-4'>
        <div className='bg-blue-500 w-[10vw] gap-4 p-8 rounded-xl border-white border-2 flex flex-col items-center justify-center'>
          <div className='text-5xl'>
            {days} 
          </div>        
          <div className='text-3xl'>
            Days
          </div>
        </div>
        <div className='bg-blue-500 w-[10vw] gap-4 p-8 rounded-xl border-white border-2 flex flex-col items-center justify-center'>
          <div className='text-5xl'>
            {hours} 
          </div>        
          <div className='text-3xl'>
            Hours
          </div>
        </div>
        <div className='bg-blue-500 w-[10vw] gap-4 p-8 rounded-xl border-white border-2 flex flex-col items-center justify-center'>
          <div className='text-5xl'>
            {minutes} 
          </div>        
          <div className='text-3xl'>
            Minutes
          </div>
        </div>
        <div className='bg-blue-500 w-[10vw] gap-4 p-8 rounded-xl border-white border-2 flex flex-col items-center justify-center'>
          <div className='text-5xl'>
            {seconds} 
          </div>        
          <div className='text-3xl'>
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
