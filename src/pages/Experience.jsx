import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Experience.css';
import experiences from '../components/ExperienceData'; 
import Navbar from '../components/NavBar';
import Banner from '../components/ConstructionBanner';
import websiteIcon from '../assets/iconpic.jpg'; // Ensure the correct path to your icon
import ExperienceBlock from '../components/ExperienceBlock';

const Experience = () => {
  const [filter, setFilter] = useState('Project'); // Default filter is set to 'Project'
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/projects/${id}`); // Updated to match the link
  };

  const filteredExperiences = experiences.filter(exp => exp.category === filter);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container">
        <div className="sidebar">
          <img src={websiteIcon} alt="Website Icon" />
          <ul>
            <li 
              className={filter === 'Project' ? 'active' : 'inactive'} 
              onClick={() => setFilter('Project')}
            >
              Project
            </li>
            <li 
              className={filter === 'Internship' ? 'active' : 'inactive'} 
              onClick={() => setFilter('Internship')}
            >
              Internship
            </li>
            <li 
              className={filter === 'Experience' ? 'active' : 'inactive'} 
              onClick={() => setFilter('Experience')}
            >
              Experience
            </li>
          </ul>
        </div>
        <div className="content">
          {filteredExperiences.map(exp => (
            <ExperienceBlock key={exp.id} project={exp} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
