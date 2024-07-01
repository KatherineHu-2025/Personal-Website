// ExperienceBlock.jsx
import React from 'react';
import './ExperienceBlock.css';

const ExperienceBlock = ({ experience }) => {
  return (
    <div className="experience-block">
      <div className="experience-image-container">
        <img src={experience.image} alt={experience.title} className="experience-image" />
        <div className="overlay">
          <h2 className="experience-title">{experience.title}</h2>
          <p className="experience-description">{experience.description}</p>
          <div className="tags">
            {experience.technologies && experience.technologies.map((tech, index) => (
              <span key={index} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlock;
