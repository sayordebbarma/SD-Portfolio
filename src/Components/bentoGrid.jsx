import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import SkillsMarquee from './SkillsMarquee';

const bentoGrid = () => {
    //const boxStyle = 'bg-white bg-opacity-10 overflow-hidden text-white shadow-5xl rounded-xl p-4 border border-opacity-30 backdrop-filter backdrop-blur-sm'
    const colors = [
      '',
      '',
      '',
      '',
      'flex flex-col items-center justify-center',
      '',
      ''];

    return (
    <div className='grid md:grid-cols-4 auto-rows-[200px] gap-4 p-10'>
      {data.map((item, i) => (
        <div key={i} className={`bg-white bg-opacity-20 overflow-hidden text-white shadow-5xl rounded-xl p-4 
        border border-opacity-30 backdrop-filter backdrop-blur-sm  ${colors[i]} 
          ${i === 0 || i === 4 ? 'md:col-span-2' : ''}
          ${i === 2 ? 'md:row-span-3' : ''}
          ${i === 3 ? 'md:row-span-2' : ''}
        `}>
          {renderContent(item)}
            {/* <Link to={item.to}>
                <h2 className='font-bold'>{item.title}</h2>
            </Link> */}
        </div>
      ))}
    </div>
  );
};
const renderContent = (item) => {
  const boxStyle = 'bg-white bg-opacity-10 hover:bg-opacity-20 overflow-hidden text-white shadow-5xl rounded-xl px-3 py-2 border-1 border-opacity-30 backdrop-filter backdrop-blur-3xl'

    switch (item.type) {
        case 'AboutMe':
            return (
                <Link className='m-8' to={item.to}>
                    <h2 className='font-bold text-xl'>{item.title}</h2>
                    <p>{item.text}</p>
                </Link>
            );
        case 'Connection':
            return (
                <div>
                    <h2 className='font-bold text-xl'>{item.title}</h2>
                    <ul className='mt-4 grid grid-cols-2 gap-6'>
                      <li>
                          <Link className={` ${boxStyle}`} to="/github" target='/black'>{item.github}</Link>
                      </li>
                      <li>
                          <Link className={` ${boxStyle}`} to="https://www.linkedin.com/" target='/black'>{item.linkedin}</Link>
                      </li>
                      <li>
                          <Link className={` ${boxStyle}`} target='/black'>{item.gmail}</Link>
                      </li>
                      <li>
                          <Link className={` ${boxStyle}`} to="/insta" target='/black'>{item.insta}</Link>
                      </li>
                    </ul>
                </div>
            );
        case 'Projects':
            return (
                <Link to={item.to}>
                    <h2 className='font-bold'>{item.title}</h2>
                </Link>
            );
        case 'Experience':
            return (
                <Link to={item.to}>
                    <h2 className='font-bold'>{item.title}</h2>
                </Link>
            );
        case 'Hero':
            return (
                <Link to={item.to} className="relative flex justify-center items-center">
                    <h1 className='font-extrabold text-6xl relative'>{item.title}</h1>
                    <img src={item.image} alt={item.title} className='w-40 h-auto absolute' /> 
                    {/* className='w-60 h-auto absolute' */}
                </Link>
            );
        case 'HireMe':
            return (
                <Link to={item.to}>
                    <h2 className='font-bold'>{item.title}</h2>
                </Link>
            );
        case 'Skills':
            return (
                <div>
                    <h2 className='font-bold text-xl'>{item.title}</h2>
                    <SkillsMarquee />
                </div>
            );
        
        default:
            return null;
    }
};

export default bentoGrid

{/* <div key={i} className='bg-neutral-100 border-2 rounded-xl p-2'> */}