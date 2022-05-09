import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin, BsMailbox, BsPhone, BsTwitter } from "react-icons/bs";
function Footer() {
	return (
		<>
			<div className="footer">
				<a href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
					<BsMailbox />
				</a>
				<a href="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
					<BsGithub />
				</a>
				<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
					<BsLinkedin />
				</a>
				<a href="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
					<BsTwitter />
				</a>
				<a>
					<BsPhone /> 303-489-5742
				</a>
			</div>
		</>
	);
}

export default Footer;
