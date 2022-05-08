import React, { useState } from "react";

function Contact() {
	// Here we set two state variables for firstName and lastName using `useState`

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
					<input value={name} name="name" onChange={handleInputChange} type="text" placeholder="Name" />
					<br />
					<input value={email} name="email" onChange={handleInputChange} type="text" placeholder="Email" />
					<br />
					<input value={message} name="message" onChange={handleInputChange} type="text" placeholder="Message" />
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
