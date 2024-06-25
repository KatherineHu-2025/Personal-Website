import React from 'react';
import './ExperienceBlock.css';

const ExperienceBlock = ({ project, handleClick }) => {
  return (
    <div className="experience-container" onClick={() => handleClick(project.id)}>
      <div className="experience-image-container">
        <img src={project.image} alt={project.title} className="experience-image" />
      </div>
      <div className="experience-info">
        <a href={`/projects/${project.id}`} className="experience-title">{project.title}</a>
        <p>{project.role}</p>
        <p>{project.duration}</p>
      </div>
    </div>
  );
};

export default ExperienceBlock;
