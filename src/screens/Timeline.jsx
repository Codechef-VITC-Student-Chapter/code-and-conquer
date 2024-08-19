import React from 'react';
import TimelineCard from '../components/TimelineCard';
import DiamondLine from '../components/DiamondLine';

// Sample events data
const events = [
  {
    title: 'Event One',
    description:
      'This is a brief description of the first event that happened.',
    date: 'Sep 7, 2024',
    orange: true,
  },
  {
    title: 'Event Two',
    description:
      'This is a brief description of the second event that happened shortly after.',
    date: 'Sep 8, 2024',
    orange: true,
  },
  {
    title: 'Event Three',
    description:
      'This is a brief description of the third event that occurred on this day.',
    date: 'Sep 9, 2024',
    orange: false,
  },
  {
    title: 'Event Four',
    description:
      'This is a brief description of the fourth event, occurring on this day.',
    date: 'Sep 10, 2024',
    orange: true,
  },
  {
    title: 'Event Five',
    description:
      'This is a brief description of the fifth event which took place later on.',
    date: 'Sep 11, 2024',
    orange: false,
  },
];

const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-center timeline-bg">
      <div className="h-screen flex flex-col justify-evenly">
        <span className="font-monoton text-[40px] md:text-[75px] font-normal  md:leading-[140px] leading-[100px] text-center uppercase text-white">
          Timeline
        </span>
        <div className="relative w-screen overflow-x-auto">
          <div className="grid grid-cols-5 gap-4 p-6 w-[1500px]">
            {/* Top Row */}
            {events.map((event, index) => (
              <div key={index} className="flex justify-center col-span-1">
                {index % 2 == 0 ? (
                  <TimelineCard
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    orange={event.orange}
                  />
                ) : (
                  <> </>
                )}
              </div>
            ))}
            <DiamondLine />
            {/* Bottom Row */}
            {events.map((event, index) => (
              <div key={index} className="flex justify-center col-span-1">
                {index % 2 == 1 ? (
                  <TimelineCard
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    orange={event.orange}
                  />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
