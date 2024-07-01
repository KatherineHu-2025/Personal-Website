// ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import experiences from './ExperienceData';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = experiences.find(proj => proj.id === parseInt(id, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectDetailContainer}>
      <img src={project.image} alt={project.title} className={styles.projectDetailImage} />
      <h1 className={styles.heading}>{project.title}</h1>
      <p className={styles.paragraph}>{project.description}</p>
      <h3 className={styles.subHeading}>Details</h3>
      <p className={styles.paragraph}>{project.details}</p>
      <a href="/experience" className={styles.link}>Back to Projects</a>
    </div>
  );
};

export default ProjectDetail;
