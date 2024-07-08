import React from 'react'
import certificateData from '../../Components/CertificateData'

const CertificateDetails = () => {
  return (
    <div className='h-screen flex justify-center'>
      <div className='m-4 text-center bg-white bg-opacity-10 text-white shadow-5xl rounded-xl p-4 border border-opacity-30 backdrop-filter backdrop-blur-sm overflow-y-auto'>
        <h1 className='text-3xl font-bold mb-4'>CERTIFICATES</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {certificateData.map((certificate) => (
            <div
              key={certificate.id}
              className='relative w-[28rem] h-64 p-4 text-white  focus:outline-none shadow-lg transition-transform transform rounded-xl overflow-hidden'
            >
              <div
                className='absolute inset-0 bg-contain bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${certificate.image})` }}
              />
              {/* <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-55 transition duration-300'>
                <a className='text-lg md:text-2xl font-bold text-center'
                href={certificate.certificateLink} >
                  {certificate.title.toUpperCase()}
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateDetails
