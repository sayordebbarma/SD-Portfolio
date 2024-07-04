import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const HireMeDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    // EmailJS template parameters
    const templateParams = {
      name,
      email,
      message,
      service,
    };

    try {
      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, userID);

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      setService('');

      // Show success dialog
      setIsDialogOpen(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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

  const inputStyle =
    'w-full px-3 py-2 rounded-md bg-white bg-opacity-5 text-white border focus:outline-none';

  return (
    <div className='h-screen flex justify-center'>
      <div className='m-4 w-full bg-white bg-opacity-10 text-white shadow-5xl rounded-xl p-4 border border-opacity-30 backdrop-filter backdrop-blur-sm overflow-y-auto'>
        <h1 className='text-3xl font-bold  text-center mb-4'>HIRE ME</h1>
        <div className='mt-2 text-gray-600 flex flex-col md:flex-row justify-evenly'>
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
                <option value='' disabled>
                  Select Service
                </option>
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
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <h2 className="text-xl font-bold mb-4">Email Sent Successfully!</h2>
            <p>Your message has been sent. We will get back to you shortly.</p>
            <button
              onClick={closeDialog}
              className='w-full px-3 py-2 rounded-md bg-slate-300 bg-opacity-20 text-black border hover:bg-opacity-40 mt-4'
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireMeDetails;
