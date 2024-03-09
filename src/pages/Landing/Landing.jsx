import React from 'react'
import BentoGrid from '../../Components/bentoGrid';

const Landing = () => {
  return (
    <div className='w-full h-full bg-black relative overflow-hidden'>
      <div className="h-80 w-80 bg-gradient-to-r from-sky-500 to-sky-700 rounded-full absolute 
      left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-160  blur-3xl	"></div>
      <div className="h-80 w-80 bg-gradient-to-r from-sky-500 to-sky-700 rounded-full absolute 
      top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90  blur-3xl	"></div>
      <div className="h-80 w-80 bg-gradient-to-r from-sky-500 to-sky-700 rounded-full absolute 
      top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-180  blur-3xl	"></div>
      <div className="h-80 w-80 bg-gradient-to-r from-sky-500 to-sky-700 rounded-full absolute 
      top-2/3 left-2/4 transform -translate-x-1/2 -translate-y-1/2 rotate-45  blur-3xl	"></div>
      <div className="h-80 w-80 bg-gradient-to-r from-sky-500 to-sky-700 rounded-full absolute 
      top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2 rotate-45  blur-3xl	"></div>
      <BentoGrid />
    </div>
  )
}

export default Landing