import React from "react";
import Marquee from "react-fast-marquee";
import "./Banner.css"; // Import the CSS file

const Banner = () => {
	return (
		<div className="banner-container">
			<Marquee gradient={false} speed={50}>
				This website is under construction. More details to be added. It will be
				prettier!
			</Marquee>
		</div>
	);
};

export default Banner;
