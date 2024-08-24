import React from 'react';

const AlertDialog = ({ setModalOpen }) => {
  return (
    <div className="fixed z-50 top-0 flex h-screen w-screen justify-center items-center backdrop-blur-md">
      <div className="p-16 md:w-3/4 popup-bg rounded-md flex flex-col justify-top gap-4 m-auto h-3/4 md:h-fit overflow-y-auto">
        <div className="flex justify-end">
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-red-500 rounded-md border-2 border-white text-white font-bold text-2xl"
          >
            &#10005; {/* Unicode for the X symbol */}
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a href="https://forms.gle/HHig34yTg3JXe8iWA">
            <button className="px-4 py-2 rounded-lg border-2 border-dashed border-white shadow-lg w-60 h-48 bg-gradient-to-tr from-[#240422] from-65% to-orange-700 text-white">
              <h3 className="text-lg font-bold m-2 text-center">
                HTML & CSS - Sept 4th - Wednesday {'->'}
              </h3>
            </button>
          </a>
          <a href="https://forms.gle/YxvdNjFZRpkbiVjB9">
            <button className="px-4 py-2 rounded-lg border-2 border-dashed border-white shadow-lg w-60 h-48 bg-gradient-to-tr from-[#240422] from-65% to-orange-700 text-white">
              <h3 className="text-lg font-bold m-2 text-center">
                Javascript - Sept 5th - Thursday {'->'}
              </h3>
            </button>
          </a>
          <a>
            <button
              disabled
              className="px-4 py-2 rounded-lg border-2 border-dashed border-white shadow-lg w-60 h-48 bg-gradient-to-tr from-[#240422] from-65% to-blue-900 text-white"
            >
              <h3 className="text-lg font-bold m-2 text-center">
                Intrusion Special Episode - Sept 7th - Saturday
              </h3>
              <p className="text-sm text-center mb-3">Coming Soon....</p>
            </button>
          </a>
          <a>
            <button
              disabled
              className="px-4 py-2 rounded-lg border-2 border-dashed border-white shadow-lg w-60 h-48 bg-gradient-to-tr from-orange-700 via-40% via-[#240422] to-blue-900 text-white"
            >
              <h3 className="text-lg font-bold m-2 text-center">
                Code N' Conquer - Sept 8 & 9 - Sunday & Monday
              </h3>
              <p className="text-sm text-center mb-3">Coming Soon....</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
