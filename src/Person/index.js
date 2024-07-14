import React from 'react';


import './index.css';

const Person= () => {
  return (
    <div className="portfolio-page">
      <div className="header">
        <h1>Esther Naserian</h1>
        <p>Software Engineer</p>
      </div>
      <div className="content">
        <div className="image-container">
          <img src="images/trecy.png" alt="Profile" />
        </div>
        <div className="personal-statement">
          <h2>Personal Statement</h2>
          <p>
            I am a passionate software engineer with a strong background in
            developing innovative and user-friendly applications. With a
            keen eye for detail and a problem-solving mindset, I strive to
            create solutions that not only meet the needs of my clients but
            also push the boundaries of what's possible.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Person;