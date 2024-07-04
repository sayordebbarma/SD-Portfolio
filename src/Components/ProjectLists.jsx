import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import projectData from './ProjectData'; // Import the project data

const ProjectDetails = () => {
  return (
    <div className='ml-10'>
      {projectData.map((project) => (
        <Link
          to='/projects'
          className='border-b-2 border-gray-300 py-2 flex justify-between hover:cursor-pointer'
          key={project.id}
        >
          <div className='flex flex-row items-center gap-2'>
            <span className='text-md'>
              <FontAwesomeIcon icon={faCircleDot} />
            </span>
            <span className='py-4 text-md transition-transform hover:translate-x-2'>
              {project.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectDetails;
