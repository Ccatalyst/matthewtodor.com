import React from "react";
import { Link } from "react-router-dom";
import Button from "./elements/button";

class Nav extends React.Component {
	render() {
		return (
			<>
				<Link to="/">Matthew Todor</Link>
				<li>
					<Link activeclassname="active" to="/Portfolio">
						Portfolio
					</Link>
				</li>
				{/* This will link to the Algorithms section when it is built*/}
				{/* <li> */}
				{/* <Link></Link> */}
				{/* </li> */}

				<a href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
					<Button name="Email" />
				</a>
				<a href="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
					<Button name="Github" />
				</a>
				<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
					<Button name="LinkedIn" />
				</a>
				<a href="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
					<Button name="Twitter" />
				</a>
				<a href="tel:303-489-5742">
					<Button name="Phone" />
				</a>
			</>
		);
	}
}

export default Nav;
