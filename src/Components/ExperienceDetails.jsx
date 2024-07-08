import React from 'react';

const ExperienceDetails = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web Developer',
      company: 'Yhills',
      duration: 'Jan 2019 - Present',
    },
    {
      id: 2,
      title: 'MERN Stack Developer',
      company: 'ZEIC',
      duration: 'Feb 2024 - Apr 2024',
    },
  ];

  return (
    <div>
      {experiences.map((exp) => (
        <div key={exp.id} className="rounded-md my-4">
          <h3 className="text-lg font-semibold">{exp.title}</h3>
          <p className="text-sm text-gray-300">{exp.company} | {exp.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceDetails;

