import Avatar from '../assets/avatar.png'
import Subject from '../assets/Subject.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const data = [
    { 
      type: 'AboutMe',
      title: "Hi, I'm Sayor Debbarma---",
      text: "A Web Developer, IOS App Developer, and A Designer.",
      to: "/AboutMe" 
    },
    { 
      type: 'Connection',
      title: "Connect with me",
      insta: <FontAwesomeIcon icon={faInstagram} />,
      github: <FontAwesomeIcon icon={faGithub} />,
      linkedin: <FontAwesomeIcon icon={faLinkedinIn} />,
      gmail: <FontAwesomeIcon icon={faEnvelope} />,
      to: "/Connection"
    },
    { 
      type: 'Projects',
      title: "Projects", 
      to: "/Projects"
    },
    { 
      type: 'Experience',
      title: "Experience", 
      to: "/Experience"
    }, 
    { 
      type: 'Hero',
      title: "SAYOR DEBBARMA",
      image: Subject,
      to: "/Hero"
    },
    { 
      type: 'HireMe',
      title: "Hire me", 
      to: "/HireMe"
    },
    { 
      type: 'Skills',
      title: "Skills", 
      to: "/Skills"
    }
  ];
  
  export default data;