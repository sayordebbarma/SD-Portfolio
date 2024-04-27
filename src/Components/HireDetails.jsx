import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const HireDetails = () => {
    const jobTitles = [
        { title: 'Website Developer' },
        { title: 'App Developer' },
        { title: 'UI/UX Designer' },
      ];
    
      return (
        <div>
          {jobTitles.map((job, index) => (
            <Link key={index} to="/hire-me" className='border-b-2 border-gray-300 py-2 flex justify-between items-center hover:cursor-pointer'>
              <span className='text-md transition-transform hover:translate-x-2'>{job.title}</span>
              <span className='text-xl transform rotate-45'>
                <FontAwesomeIcon icon={faArrowUp} />
              </span>
            </Link>
          ))}
        </div>
      );
    };

export default HireDetails;