import React from 'react';
import projectData from '../../Components/ProjectData';

// Utility function to generate a random gradient
const generateRandomGradient = () => {
  const colors1 = ['#07117E', '#E404FF'];
  const colors2 = ['#0024FF', '#72E3FF'];
  const color1 = colors1[Math.floor(Math.random() * colors1.length)];
  const color2 = colors2[Math.floor(Math.random() * colors1.length)];
  return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
};

const ProjectDetails = () => {
  return (
    <div className='h-screen flex justify-center'>
      <div className='m-4 text-center bg-white bg-opacity-10 text-white shadow-5xl rounded-xl p-4 border border-opacity-30 backdrop-filter backdrop-blur-sm overflow-y-auto'>
        <h1 className='text-3xl font-bold mb-4'>PROJECTS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4'> {/*  gap-6 */}
          {projectData.map((project) => (
            <div
              key={project.id}
              className='relative w-[28rem] h-64 p-4 text-white border focus:outline-none shadow-lg transition-transform transform '
              style={{ background: generateRandomGradient() }}
            > {/* hover:scale-105 rounded-lg*/}
              <div className='absolute inset-0 flex flex-row items-center justify-center transition duration-300 bg-black bg-opacity-75'> {/*rounded-lg*/}
              </div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <h2 className='text-lg md:text-2xl font-bold text-center'>
                  {project.title.toUpperCase()}
                </h2>
              </div>

              <a
                href={project.sourceCode}
                target='_blank'
                className='text-white hover:underline z-10 absolute bottom-4 left-4'
              >
                Source Code
              </a>
              <a
                href={project.liveWebsite}
                target='_blank'
                className='text-white hover:underline z-10 absolute bottom-4 right-4'
              >
                Live Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
