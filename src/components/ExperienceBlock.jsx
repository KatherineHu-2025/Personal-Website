import React, { useState } from "react";
import "./ExperienceBlock.css";
import ProjectDetail from "./ProjectDetail";

const ExperienceBlock = ({ experience }) => {
	const [selectedProject, setSelectedProject] = useState(null);

	const handleBlockClick = () => {
		setSelectedProject(experience);
	};

	const handleCloseDetail = () => {
		setSelectedProject(null);
	};

	return (
		<div>
			<div className="experience-block" onClick={handleBlockClick}>
				<div className="experience-image-container">
					<img
						src={experience.image}
						alt={experience.title}
						className="experience-image"
					/>
				</div>
				<div className="experience-content">
					<h2 className="experience-title">{experience.title}</h2>
					<p className="experience-description">{experience.description}</p>
					<div className="tags">
						{experience.technologies.map((tech, idx) => (
							<span key={idx} className="tag">
								{tech}
							</span>
						))}
					</div>
				</div>
				<div className="overlay">
					<h2 className="experience-title">{experience.title}</h2>
					<p className="experience-description">{experience.description}</p>
					<div className="tags">
						{experience.technologies.map((tech, idx) => (
							<span key={idx} className="tag">
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
			{selectedProject && (
				<ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
			)}
		</div>
	);
};

export default ExperienceBlock;
