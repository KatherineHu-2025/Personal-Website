import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
import profileImage from "../assets/iconpic.jpg"; // Replace with the correct path to your image

const About = () => {
    const [showHeading, setShowHeading] = useState(false);
    const [showParagraph1, setShowParagraph1] = useState(false);
    const [showParagraph2, setShowParagraph2] = useState(false);
	const [isWaving, setIsWaving] = useState(false);

    const handleClick = () => {
        if (!showHeading) {
            setShowHeading(true);
        } else if (!showParagraph1) {
            setShowParagraph1(true);
        } else if (!showParagraph2) {
            setShowParagraph2(true);
        }else {
            setIsWaving(true);
            setTimeout(() => setIsWaving(false), 2000); // Stop waving after 2 seconds
        }
    };

    return (
        <div className="about-container">
            <img
                src={profileImage}
                alt="Profile"
                className={`about-image ${!showHeading ? "vibrate" : ""}`}
                onClick={handleClick}
            />
            {showHeading && (
                <div className="about-text">
                    <h1 className="heading fade-in">
					<span className={`wave-emoji ${isWaving ? "waving" : ""}`}>👋</span> Hi, I'm Yang (Katherine) Hu.
                    </h1>
                </div>
            )}
            {showParagraph1 && (
                <p className="fade-in">I'm currently a student studying Computer Science at Davidson College.</p>
            )}
            {showParagraph2 && (
                <p className="fade-in">
                    I enjoy working in various fields and creating 
                    <Link to="/experience" className="highlight-link"> interesting tools</Link>. 
                    I believe that code, like any other language, helps to convey messages.
                </p>
            )}
        </div>
    );
};

export default About;
