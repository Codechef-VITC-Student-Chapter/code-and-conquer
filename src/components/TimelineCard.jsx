import React from 'react';

function TimelineCard({ title, description, date, orange }) {
  return (
    <div
      className={`relative bg-gradient-to-tr ${
        orange
          ? `from-[#240422] from-65% to-orange-400`
          : `from-[#240422] from-65% to-blue-900`
      } text-white p-4 rounded-lg border-2 border-dashed border-white shadow-lg w-60 my-4 h-48`}
    >
      <h3 className="text-lg font-bold m-2 text-center">{title}</h3>
      <p className="text-sm text-center mb-3">{description}</p>
      <div className="text-xs mt-2">{date}</div>
    </div>
  );
}

export default TimelineCard;
