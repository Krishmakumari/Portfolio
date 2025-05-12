import React from 'react';

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology (B.Tech)",
      institution: "Lovely Professional University",
      year: "2022 - Present",
      description: "Pursuing B.Tech in Computer Science and Engineering, focusing on full-stack development and software engineering."
    },
    {
      title: "12th Standard (Higher Secondary)",
      institution: "SKLSSS School",
      year: "2022",
      description: "Completed 12th grade with a strong foundation in Mathematics and Computer Science."
    },
    {
      title: "10th Standard (Secondary)",
      institution: "FSM Silver Creek School",
      year: "2020",
      description: "Achieved excellent results, building a foundation in science and logical reasoning."
    }
  ];

  return (
    <section className='c-space my-20'>
      <h3 className='head-text'>Education</h3>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8'>
        {educationData.map((edu, index) => (
          <div key={index} className='grid-container hover:shadow-lg transition-all duration-300'>
            <h4 className='grid-headtext'>{edu.title}</h4>
            <p className='text-white-500'>{edu.institution}</p>
            <p className='text-white-600'>{edu.year}</p>
            <p className='grid-subtext'>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
