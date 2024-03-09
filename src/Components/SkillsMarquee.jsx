import React from 'react'
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSquareJs, faReact, faPython, faJava, faSwift, faFigma, faNode, faBootstrap, faAws } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const SkillsMarquee = () => {
    const frontend = [
        <FontAwesomeIcon icon={faHtml5} />,
        <FontAwesomeIcon icon={faCss3Alt} />,
        <FontAwesomeIcon icon={faSquareJs} />,
        <FontAwesomeIcon icon={faReact} />,
        <FontAwesomeIcon icon={faBootstrap} />


    ]
    const backend = [
        <FontAwesomeIcon icon={faPython} />,
        <FontAwesomeIcon icon={faJava} />,
        <FontAwesomeIcon icon={faDatabase} />,
        <FontAwesomeIcon icon={faSwift} />,
        <FontAwesomeIcon icon={faFigma} />,
        <FontAwesomeIcon icon={faNode} />,
        <FontAwesomeIcon icon={faAws} />
    ]

    const iconStyle = 'bg-white bg-opacity-10 rounded-md px-4 py-2 mx-2'
  return (
    <div>
        <h5 className='text-sm mt-1'>Front-End</h5>
        <Marquee autoFill >
            {frontend.map((icon, i) => (
                <div className={` ${iconStyle}`}  key={i}>{icon}</div>
            ))}
        </Marquee>

        <h5 className='text-sm mt-1'>Back-End</h5>
        <Marquee autoFill direction='right'>
            {backend.map((icon, i) => (
                <div className={` ${iconStyle}`}  key={i}>{icon}</div>
            ))}
        </Marquee>
    </div>
  )
}

export default SkillsMarquee