// Experience.jsx
import React, { useState, useEffect, useRef } from "react";
import experiences from "../components/ExperienceData";
import ExperienceBlock from "../components/ExperienceBlock";
import "./Experience.css";
import Banner from "../components/ConstructionBanner";

const Experience = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [title, setTitle] = useState("What have I done so far?");
	const [transitioning, setTransitioning] = useState(false);
	const [sliderStyle, setSliderStyle] = useState({});
	const navRef = useRef(null);

	useEffect(() => {
		if (selectedCategory === "All") {
			setTitle("What have I done so far?");
		} else {
			setTitle(selectedCategory);
		}
	}, [selectedCategory]);

	const handleCategoryChange = (category, index) => {
		setTransitioning(true);
		setTimeout(() => {
			setSelectedCategory(category);
			setTransitioning(false);
		}, 300); // Duration of the transition
		// Update slider position
		if (navRef.current) {
			const navButtons = navRef.current.querySelectorAll("button");
			const currentButton = navButtons[index];
			setSliderStyle({
				width: currentButton.offsetWidth,
				left: currentButton.offsetLeft,
			});
		}
	};

	const filteredExperiences =
		selectedCategory === "All"
			? experiences
			: experiences.filter((exp) => exp.category === selectedCategory);

	useEffect(() => {
		// Set initial slider position
		if (navRef.current) {
			const navButtons = navRef.current.querySelectorAll("button");
			const currentButton = navButtons[0]; // Default to 'All' button
			setSliderStyle({
				width: currentButton.offsetWidth,
				left: currentButton.offsetLeft,
			});
		}
	}, [navRef]);

	return (
		<div>
			<div className="experience-page">
				<div className="title-nav-container">
					<h1
						className={`experience-title ${
							transitioning ? "transitioning" : ""
						}`}
					>
						{title}
					</h1>
					<div className="category-nav" ref={navRef}>
						<button
							onClick={() => handleCategoryChange("All", 0)}
							className={selectedCategory === "All" ? "active" : ""}
						>
							All
						</button>
						<button
							onClick={() => handleCategoryChange("Project", 1)}
							className={selectedCategory === "Project" ? "active" : ""}
						>
							Projects
						</button>
						<button
							onClick={() => handleCategoryChange("Internship", 2)}
							className={selectedCategory === "Internship" ? "active" : ""}
						>
							Internships
						</button>
						<button
							onClick={() => handleCategoryChange("Experience", 3)}
							className={selectedCategory === "Experience" ? "active" : ""}
						>
							Experience
						</button>
						<div className="slider" style={sliderStyle}></div>
					</div>
				</div>
				<div className="experience-grid">
					{filteredExperiences.map((experience) => (
						<ExperienceBlock key={experience.id} experience={experience} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
