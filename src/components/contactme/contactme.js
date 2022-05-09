import React, { useState } from "react";
import validator from "validator";
import "./contactme.css";

function Contact() {
	// Here we set two state variables for firstName and lastName using `useState`
	const [emailError, setEmailError] = useState("");
	const validateEmail = (e) => {
		var email = e.target.value;

		if (validator.isEmail(email)) {
			setEmailError("Thank you for entering a valid email");
		} else {
			setEmailError("Please enter a valid email!");
		}
	};
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = e.target;

		// Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
		if (name === "name") {
			return setName(value);
		}
		if (name === "email") {
			return setEmail(value);
		}
		if (name === "message") {
			return setMessage(value);
		}
	};

	const handleFormSubmit = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();

		// Alert the user their first and last name, clear the inputs
		alert(`Thank you ${name}! Your message has been sent!`);
		setName("");
		setEmail("");
		setMessage("");
	};
	return (
		<>
			<div>
				<h2>Contact Me</h2>

				<form className="form">
					<label for="name">Name</label>
					<br />
					<input value={name} name="name" onChange={handleInputChange} type="text" placeholder="Matthew Todor" />
					<br />
					<label for="email">Email</label>
					<br />
					<input value={email} name="email" onChange={handleInputChange} type="text" placeholder="todor.matthew.john@gmail.com" />
					<br />
					<label for="message">Message</label>
					<br />
					<textarea
						value={message}
						name="message"
						onChange={(handleInputChange, validateEmail)}
						type="text"
						rows={5}
						cols={25}
						placeholder="Can't wait to hear from you!"
					/>
					<br />
					<button type="button" onClick={handleFormSubmit}>
						Submit
					</button>
				</form>
			</div>
		</>
	);
}

export default Contact;
