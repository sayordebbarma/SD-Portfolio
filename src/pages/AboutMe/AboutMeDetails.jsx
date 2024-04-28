import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faDatabase,
  faMobileAndroidAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faGit,
  faSwift,
  faAws,
} from '@fortawesome/free-brands-svg-icons';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: faHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-500' },
      { name: 'JavaScript (ES6+)', icon: faJs, color: 'text-yellow-500' },
      { name: 'React.js', icon: faReact, color: 'text-blue-300' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: faNodeJs, color: 'text-green-500' },
      { name: 'Python', icon: faPython, color: 'text-green-500' },
      { name: 'MySQL', icon: faDatabase, color: 'text-blue-500' },
      { name: 'MongoDB', icon: faDatabase, color: 'text-green-500' },
    ],
  },
  {
    category: 'Others',
    skills: [
      { name: 'Git & Version Control', icon: faGit, color: 'text-white' },
      { name: 'Swift', icon: faSwift, color: 'text-orange-500' },
      { name: 'AWS', icon: faAws, color: 'text-yellow-500' },
    ],
  },
  // Add more categories and skills as needed
];

const AboutMeDetails = () => {
  return (
    <div className='h-screen flex justify-center'>
      <div className='m-4 text-center bg-white bg-opacity-10 text-white shadow-5xl rounded-xl p-4 border border-opacity-30 backdrop-filter backdrop-blur-sm'>
        <h1 className='text-3xl font-bold mb-4'>ABOUT ME</h1>
        <h2 className='text-5xl font-bold mb-4'>Myself Sayor Debbarma</h2>
        <p className='mb-4 text-lg'>
          A passionate web developer specializing in React.js and JavaScript. I
          enjoy creating interactive and user-friendly web applications that
          solve real-world problems.
        </p>
        <p className='mb-4 text-lg'>
          In my free time, I love learning new technologies, exploring nature,
          and playing musical instruments.
        </p>
        <div>
          <h2 className='text-2xl font-bold mb-2'>Skills</h2>
          <div className='grid grid-cols-3 gap-2'>
            {skillsData.map((categoryData) => (
              <div key={categoryData.category}>
                <h3 className='text-lg font-semibold mb-1'>
                  {categoryData.category}
                </h3>
                {categoryData.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className='bg-white bg-opacity-20 rounded-lg p-2 mb-2 transition duration-300 ease-in-out transform  hover:bg-opacity-40'
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className={`${skill.color} mr-2`}
                    />{' '}
                    {skill.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-2'>Connect with Me</h2>
          <div className='flex space-x-4 justify-center'>
            <a
              href='mailto:your.email@example.com'
              className=' hover:text-gray-300'
            >
              <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
              Email
            </a>
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <FontAwesomeIcon icon={faGithub} className='mr-2' />
              GitHub
            </a>
            <a
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <FontAwesomeIcon icon={faLinkedin} className='mr-2' />
              LinkedIn
            </a>
            {/* Add more social media or contact links as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDetails;
