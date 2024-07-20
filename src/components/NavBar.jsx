import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import "./NavBar.css";

const Navbar = ({ onNavClick }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className={menuOpen ? "active" : ""}>
			<div className="menu-icon" onClick={handleMenuToggle}>
				<HamburgerMenu
					isOpen={menuOpen}
					menuClicked={handleMenuToggle}
					width={18}
					height={15}
					strokeWidth={2}
					rotate={0}
					color="black"
					borderRadius={0}
					animationDuration={0.5}
				/>
			</div>
			<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
				<li>
					<Link to="/" onClick={handleMenuToggle}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" onClick={handleMenuToggle}>
						About
					</Link>
				</li>
				<li>
					<Link to="/experience" onClick={handleMenuToggle}>
						Experience
					</Link>
				</li>
				<li>
					<Link to="/contact" onClick={handleMenuToggle}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
