import React, { useState, useEffect, useRef } from "react";
import experiences from "../components/ExperienceData";
import ExperienceBlock from "../components/ExperienceBlock";
import "./Experience.css";
import Banner from "../components/ConstructionBanner";
import Navbar from "../components/NavBar";

const Experience = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [title, setTitle] = useState("What have I done so far?");
	const [sliderStyle, setSliderStyle] = useState({});
	const navRef = useRef(null);

	useEffect(() => {
		if (selectedCategory === "All") {
			setTitle("What have I done so far?");
		} else if (selectedCategory === "Project") {
			setTitle("💡");
		} else if (selectedCategory === "Internship") {
			setTitle("👩‍💻");
		} else if (selectedCategory === "Experience") {
			setTitle("🏫");
		}
	}, [selectedCategory]);

	const handleCategoryChange = (category, index) => {
		setSelectedCategory(category);
		if (navRef.current) {
			const navButtons = navRef.current.querySelectorAll("button");
			const currentButton = navButtons[index];
			if (currentButton) {
				setSliderStyle({
					width: currentButton.offsetWidth,
					left: currentButton.offsetLeft,
				});
			}
		}
	};

	useEffect(() => {
		if (navRef.current) {
			const navButtons = navRef.current.querySelectorAll("button");
			const currentButton = navButtons[0]; // Default to 'All' button
			if (currentButton) {
				setSliderStyle({
					width: currentButton.offsetWidth,
					left: currentButton.offsetLeft,
				});
			}
		}
	}, [navRef]);

	const filteredExperiences =
		selectedCategory === "All"
			? experiences
			: experiences.filter((exp) => exp.category === selectedCategory);

	return (
		<div>
			<Navbar />
			<Banner />
			<div className="experience-page">
				<div className="title-nav-container">
					<h1 className="experience-title">{title}</h1>
					<div className="category-nav-desktop" ref={navRef}>
						<button
							onClick={() => handleCategoryChange("All", 0)}
							className={selectedCategory === "All" ? "active" : ""}
							aria-pressed={selectedCategory === "All"}
						>
							All
						</button>
						<button
							onClick={() => handleCategoryChange("Project", 1)}
							className={selectedCategory === "Project" ? "active" : ""}
							aria-pressed={selectedCategory === "Project"}
						>
							Projects
						</button>
						<button
							onClick={() => handleCategoryChange("Internship", 2)}
							className={selectedCategory === "Internship" ? "active" : ""}
							aria-pressed={selectedCategory === "Internship"}
						>
							Internships
						</button>
						<button
							onClick={() => handleCategoryChange("Experience", 3)}
							className={selectedCategory === "Experience" ? "active" : ""}
							aria-pressed={selectedCategory === "Experience"}
						>
							Experience
						</button>
						<div className="slider" style={sliderStyle}></div>
					</div>
					<div className="category-nav-mobile">
						<select
							value={selectedCategory}
							onChange={(e) => handleCategoryChange(e.target.value)}
						>
							<option value="All">All</option>
							<option value="Project">Projects</option>
							<option value="Internship">Internships</option>
							<option value="Experience">Experience</option>
						</select>
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
