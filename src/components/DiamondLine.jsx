import React from 'react';

const DiamondLine = () => {
  const positions = [160, 460, 760, 1060, 1360];

  return (
    <>
      {/* Line */}
      <div className="absolute left-40 top-1/2 -translate-y-1/2 h-1 bg-white w-[1200px]"></div>

      {/* Diamonds */}
      {positions.map((left, index) => (
        <div
          key={index}
          style={{ left: `${left}px` }}
          className="absolute h-3 w-3 top-1/2 -translate-y-1/2 rotate-45 bg-cyan-300"
        ></div>
      ))}
    </>
  );
};

export default DiamondLine;
