import React from 'react';
import TimelineCard from '../components/TimelineCard';
import DiamondLine from '../components/DiamondLine';

// Sample events data
const events = [
  {
    title: 'HTML & CSS Bootcamp',
    description: 'Frontend Web development bootcamp on HTML & CSS.',
    date: 'Sep 4, 2024',
    orange: true,
  },
  {
    title: 'Javascript Bootcamp',
    description: 'Frontend Web development bootcamp on Javascript.',
    date: 'Sep 5, 2024',
    orange: true,
  },
  {
    title: 'Intrusion - A special Episode',
    description: 'exploring the world of CTFs and web app vulnerabilities.',
    date: 'Sep 7, 2024',
    orange: false,
  },
  {
    title: 'Backend and Databases Bootcamp',
    description:
      'Building backends, integrating frontends and working with databases.',
    date: 'Sep 8, 2024',
    orange: true,
  },
  {
    title: 'Web Exploitment Essentials',
    description: 'Exploring web app vulnerabilities.',
    date: 'Sep 9, 2024',
    orange: false,
  },
];

const Timeline = () => {
  return (
    <div
      className="flex flex-col items-center justify-center timeline-bg"
      id="timeline"
    >
      <div className="max-w-full min-h-screen flex flex-col justify-evenly">
        <span className="font-monoton text-[40px] md:text-[75px] font-normal md:leading-[140px] leading-[100px] text-center uppercase text-white">
          Timeline
        </span>
        <div className="relative w-full custom-scroll overflow-x-auto">
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
