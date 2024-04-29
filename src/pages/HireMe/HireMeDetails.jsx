import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const HireMeDetails = () => {
  const ContactInfo = ({ icon, text }) => {
    return (
      <div className='flex items-center text-white'>
        <FontAwesomeIcon
          icon={icon}
          className='mr-3'
          style={{ marginTop: '-14px' }}
        />
        <p className='text-white mb-4'>{text}</p>
      </div>
    );
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({ name, email, message, service });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    setService('');
  };

  const inputStyle ='w-full px-3 py-2 rounded-md bg-white bg-opacity-5 text-white border focus:outline-none'

  return (
    <div className='h-screen flex justify-center'>
      <div className='m-4 w-full bg-white bg-opacity-10 text-white shadow-5xl rounded-xl p-4 border border-opacity-30 backdrop-filter backdrop-blur-sm'>
        <h1 className='text-3xl font-bold  text-center mb-4'>HIRE ME</h1>
        <div className='mt-2 text-gray-600 flex flex-row justify-evenly'>
          <ContactInfo
            icon={faLocationDot}
            text={<>Agartala, Tripura - 799002</>}
          />
          <ContactInfo
            icon={faPhone}
            text={<>+91 9366422598 {/* <br /> +91 9402696843 */}</>}
          />
          <ContactInfo
            icon={faEnvelope}
            text={<span>sayorofficial@gmail.com</span>}
          />
        </div>
        <div>
          <form
            className='max-w-2xl mx-auto p-4 text-white shadow-lg rounded-lg'
            onSubmit={handleSubmit}
          >
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-semibold mb-2'
              >
                Name:
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={inputStyle}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-semibold mb-2'
              >
                Email:
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputStyle}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='service'
                className='block text-sm font-semibold mb-2'
              >
                Service:
              </label>
              <select
                id='service'
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className={inputStyle}
              >
                <option value='' disabled>Select Service</option>
                <option value='Web Development'>Web Development</option>
                <option value='App Development'>App Development</option>
                <option value='UI/UX Design'>UI/UX Design</option>
              </select>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-sm font-semibold mb-2'
              >
                Message:
              </label>
              <textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className={inputStyle}
              />
            </div>
            <button
              type='submit'
              className='w-full px-3 py-2 rounded-md bg-white bg-opacity-20 text-white border hover:bg-opacity-30'
            //   className='w-full px-3 py-2 rounded-md bg-white bg-opacity-20 text-white border focus:outline-none'
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireMeDetails;
