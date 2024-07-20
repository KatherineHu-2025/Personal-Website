import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Navbar from "../components/NavBar";

const Contact = () => {
	const [formData, setFormData] = useState({
		from_name: "",
		from_email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Initialize EmailJS
		emailjs.init("KNFMX7Ag9TaJWE82i");

		emailjs.sendForm("service_ml8eh6f", "template_hemblps", e.target).then(
			(result) => {
				alert("Message sent successfully!");
				setFormData({
					from_name: "",
					from_email: "",
					message: "",
				});
			},
			(error) => {
				alert("Failed to send the message, please try again.");
			}
		);
	};

	return (
		<div className="contact-page">
			<Navbar />
			<section className="contact">
				<h1>Contact Me!</h1>
				<p>
					If you have any questions or just want to get in touch, feel free to
					contact me using the form below. I look forward to hearing from you!
				</p>

				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="from_name">Name:</label>
						<input
							type="text"
							name="from_name"
							id="from_name"
							value={formData.from_name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="from_email">Email:</label>
						<input
							type="email"
							name="from_email"
							id="from_email"
							value={formData.from_email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message:</label>
						<textarea
							name="message"
							id="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</section>
		</div>
	);
};

export default Contact;
