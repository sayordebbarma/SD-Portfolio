import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import certificateData from './CertificateData';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const CertificateLists = () => {
  const limitedCertificateData = certificateData.slice(0, 4);

  return (
    <div className='mt-2'>
      {limitedCertificateData.map((certificate) => (
        <Link
          to='/certificate'
          className='flex justify-between items-center hover:cursor-pointer'
          key={certificate.id}
        >
          <div className='flex flex-row items-center gap-2'>
            <span className='text-sm'>
              <FontAwesomeIcon icon={faMedal} />
            </span>
            <span className='text-md transition-transform hover:translate-x-2'>
              {certificate.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CertificateLists;
