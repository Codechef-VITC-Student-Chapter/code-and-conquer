import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/homepage.css';
import AlertDialog from '../components/AlertDialog';

function HomePage() {
  const targetDate = new Date('2024-09-09T00:00:00');
  const currentTime = new Date();
  const timeDifference = targetDate - currentTime;

  const [timer, setTimer] = useState(timeDifference);
  const [isModalOpen, setModalOpen] = useState(false);

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
    <div className="flex flex-col items-center justify-center wrapper-bg">
      <div
        id="home"
        className="flex flex-col items-center justify-center h-screen p-4 md:p-8 lg:p-16 text-white"
      >
        <div className="flex flex-wrap align-middle justify-center text-center mb-8">
          <span className="text-5xl md:text-8xl lg:text-8xl xl:text-9xl font-extrabold text-code-shadow">
            CODE
          </span>
          <span className="text-5xl md:text-8xl lg:text-8xl xl:text-9xl font-extrabold text-amp-shadow">
            &nbsp;&amp;&nbsp;
          </span>
          <span className="text-5xl md:text-8xl lg:text-8xl xl:text-9xl font-extrabold text-conquer-shadow">
            CONQUER!
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
          <div className="bg-gradient-to-tr from-[#240422] to-purple-950 w-full h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 gap-4 p-4 rounded-xl border-white border-2 flex flex-col items-center justify-center">
            <div className="text-xl sm:text-2xl lg:text-3xl">{days}</div>
            <div className="text-xs sm:text-sm lg:text-base">Days</div>
          </div>
          <div className="bg-gradient-to-tr from-[#240422] to-purple-950 w-full h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 gap-4 p-4 rounded-xl border-white border-2 flex flex-col items-center justify-center">
            <div className="text-xl sm:text-2xl lg:text-3xl">{hours}</div>
            <div className="text-xs sm:text-sm lg:text-base">Hours</div>
          </div>
          <div className="bg-gradient-to-tr from-[#240422] to-purple-950 w-full h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 gap-4 p-4 rounded-xl border-white border-2 flex flex-col items-center justify-center">
            <div className="text-xl sm:text-2xl lg:text-3xl">{minutes}</div>
            <div className="text-xs sm:text-sm lg:text-base">Minutes</div>
          </div>
          <div className="bg-gradient-to-tr from-[#240422] to-purple-950 w-full h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 gap-4 p-4 rounded-xl border-white border-2 flex flex-col items-center justify-center">
            <div className="text-xl sm:text-2xl lg:text-3xl">{seconds}</div>
            <div className="text-xs sm:text-sm lg:text-base">Seconds</div>
          </div>
          <div className='text-xl font-semibold text-center col-span-4'>
              To the first event!
          </div>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white text-md px-5 py-3 rounded mt-10 text-3xl"
        >
          Register
        </button>

        {isModalOpen && <AlertDialog setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
}

export default HomePage;
