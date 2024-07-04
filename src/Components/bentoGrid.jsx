import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import data from './data';
import SkillsMarquee from './SkillsMarquee';
import HireDetails from './HireDetails';
import ExperienceDetails from './ExperienceDetails';
import ProjectDetails from './ProjectLists';

// Utility function to generate a random gradient
const generateRandomGradient = () => {
  const colors1 = ['#07117E', '#350DA8'];
  const colors2 = ['#0024FF', '#72E3FF'];
  const color1 = colors1[Math.floor(Math.random() * colors1.length)];
  const color2 = colors2[Math.floor(Math.random() * colors1.length)];
  return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
};

const bentoGrid = () => {
  return (
    <div className='h-full md:h-screen grid md:grid-cols-4 auto-rows-0 gap-4 p-10'>
      {' '}
      {/* auto-row-[200px] */}
      {data.map((item, i) => (
        <div
          key={i}
          className={`bg-white bg-opacity-15 overflow-hidden text-white shadow-5xl rounded-xl p-4 
        border border-opacity-30 backdrop-filter backdrop-blur-3xl
          ${
            i === 0 || i === 4
              ? 'md:col-span-2 flex flex-col items-center justify-center'
              : ''
          }
          ${i === 2 ? 'md:row-span-1' : ''}
          ${i === 3 || i == 5 ? 'md:row-span-2' : ''}
        `}
        >
          {renderContent(item)}
        </div>
      ))}
    </div>
  );
};
const renderContent = (item) => {
  const boxStyle =
    'w-full bg-white bg-opacity-10 hover:bg-opacity-20 overflow-hidden text-white shadow-5xl rounded-xl px-3 py-2 border-1 border-opacity-30 backdrop-filter backdrop-blur-3xl';

  switch (item.type) {
    case 'AboutMe':
      return (
        <Link className='m-8 z-10' to={item.to}>
          <h2 className='font-bold text-xl'>{item.title}</h2>
          <p>{item.text}</p>
        </Link>
      );
    case 'Connection':
      return (
        <div>
          <h2 className='font-bold text-xl'>{item.title}</h2>
          <ul className='mt-4 grid grid-cols-2 gap-6 '>
            <li>
              <Link
                className={` ${boxStyle} space-x-2`}
                to='https://github.com/sayordebbarma'
                target='/black'
              >
                {item.github}
                <span>Github</span>
              </Link>
            </li>
            <li>
              <Link
                className={` ${boxStyle} space-x-2`}
                to='https://linkedin.com/in/sayordebbarma'
                target='/black'
              >
                {item.linkedin}
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link className={` ${boxStyle} space-x-2`} to='' target='/black'>
                {item.gmail}
                <span>Gmail</span>
              </Link>
            </li>
            <li>
              <Link
                className={` ${boxStyle} space-x-2`}
                to='https://www.instagram.com/ig_sayordb'
                target='/black'
              >
                {item.insta}
                <span>Instagram</span>
              </Link>
            </li>
            <li className='col-span-2'>
              <Link
                className={` ${boxStyle} space-x-2`}
                to='https://www.buymeacoffee.com/sayor'
                target='/black'
              >
                {item.coffee}
                <span>Buy me a coffee</span>
              </Link>
            </li>
          </ul>
        </div>
      );
    case 'Certificate':
      return (
        <div>
          <h2 className='font-bold text-xl'>{item.title}</h2>
        </div>
      );
    case 'Projects':
      return (
        <div className='relative h-full'>
          <Link
            to={item.to}
            className='absolute bottom-0 left-0 transform -rotate-90 origin-bottom-left m-8'
          >
            <h2 className='font-bold text-xs md:text-3xl'>{item.title}</h2>
          </Link>
          <ProjectDetails />
        </div>
      );

    case 'Experience':
      return (
        <div>
          <h2 className='font-bold text-xl'>{item.title}</h2>
          <ExperienceDetails />
        </div>
      );
    case 'Hero':
      return (
        // <Tilt>
        <div className='relative flex justify-center items-center'>
          <h1 className='font-extrabold text-6xl relative'>{item.title}</h1>
          {/* <img
              src={item.image}
              alt={item.title}
              className='w-40 h-auto absolute'
            /> */}
        </div>
        // </Tilt>
      );
    case 'HireMe':
      return (
        <div className='z-10'>
          <h2 className='font-bold text-xl z-10'>{item.title}</h2>
          <HireDetails />
        </div>
      );
    case 'Skills':
      return (
        <div className='z-10'>
          <h2 className='font-bold text-xl z-10'>{item.title}</h2>
          <SkillsMarquee />
        </div>
      );

    default:
      return null;
  }
};

export default bentoGrid;
