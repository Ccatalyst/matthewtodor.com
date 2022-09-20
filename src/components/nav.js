import React from "react";
import { Link } from "react-router-dom";
import Button from "./elements/button";
const homeLink = <Link to="/">Matthew Todor</Link>;
class Nav extends React.Component {
	render() {
		return (
			<>
				{homeLink}

				<Link activeclassname="active" to="/Portfolio">
					Portfolio
				</Link>
				{/* This will link to the Algorithms section when it is built*/}
				{/* <Link></Link> */}
				<Button name="BUTTON"></Button>
				<a href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
					Email
				</a>
				<a href="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
					Github
				</a>
				<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
					LinkedIn
				</a>
				<a href="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
					Twitter
				</a>
				<a href="tel:303-489-5742">Phone</a>
			</>
		);
	}
}

export default Nav;
