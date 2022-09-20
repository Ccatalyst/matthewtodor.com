import React from "react";
import { Link } from "react-router-dom";

const homeLink = <Link to="/">Matthew Todor</Link>;

function Nav() {
	return (
		<>
			{homeLink}

			<Link activeclassname="active" to="/Portfolio">
				Portfolio
			</Link>
			{/* This will link to the Algorithms section when it is built*/}
			{/* <Link></Link> */}

			<a href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer"></a>
			<a href="https://github.com/Ccatalyst" target="_blank" rel="noreferrer"></a>
			<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer"></a>
			<a href="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer"></a>
			<a href="tel:303-489-5742"></a>
		</>
	);
}

export default Nav;
