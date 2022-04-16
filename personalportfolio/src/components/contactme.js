import React, { useState } from "react";

function Contact() {
	// Here we set two state variables for firstName and lastName using `useState`

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = e.target;

		// Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
		return name === "firstName" ? setFirstName(value) : setLastName(value);
	};

	const handleFormSubmit = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();

		// Alert the user their first and last name, clear the inputs
		alert(`Hello ${firstName} ${lastName}`);
		setFirstName("");
		setLastName("");
	};
	return (
		<>
			<div>
				<h2>Contact Me</h2>
			</div>
		</>
	);
}

export default Contact;
