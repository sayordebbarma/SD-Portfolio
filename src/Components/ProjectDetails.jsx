import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faBolt,
  faBullseye,
  faFire,
  faGhost,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

const ProjectDetails = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description:
        'Built a fully functional e-commerce website using React and Node.js.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description:
        'Developed a cross-platform mobile app using React Native for iOS and Android platforms.',
      technologies: ['React Native', 'Firebase', 'Redux'],
    },
    {
      id: 3,
      title: 'Web Design Project',
      description:
        'Designed a modern and responsive website for a client using HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 4,
      title: 'E-commerce Website',
      description:
        'Built a fully functional e-commerce website using React and Node.js.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description:
        'Developed a cross-platform mobile app using React Native for iOS and Android platforms.',
      technologies: ['React Native', 'Firebase', 'Redux'],
    },
    {
      id: 6,
      title: 'Web Design',
      description:
        'Designed a modern and responsive website for a client using HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <div className='ml-10'>
      {projects.map((project) => (
        <Link
          to='/projects'
          className='border-b-2 border-gray-300 py-2 flex justify-between hover:cursor-pointer'
        >
          <div className='flex flex-row items-center gap-2'>
            <span className='text-md'>
              <FontAwesomeIcon icon={faCircleDot} />
            </span>
            <span
              key={project.id}
              className='py-4 text-md transition-transform hover:translate-x-2'
            >
              {project.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectDetails;
