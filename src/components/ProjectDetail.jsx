import React from 'react';
import { useParams } from 'react-router-dom';
import experiences from './ExperienceData'; // Ensure the path is correct

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = experiences.find(p => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <h1>{project.title}</h1>
      <p><strong>Role:</strong> {project.role}</p>
      <p><strong>Duration:</strong> {project.duration}</p>
      <p><strong>Description:</strong> {project.detailsLink}</p>
      {project.githubLink && <p><a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a></p>}
    </div>
  );
};

export default ProjectDetail;
