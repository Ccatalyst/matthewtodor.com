import React, { useState } from "react";
import "./footer.css";
import { BsGithub, BsLinkedin, BsMailbox, BsPhone } from "react-icons/bs";
function Footer() {
	return (
		<>
			<div className="footer">
				<a href="mailto:todor.matthew.john@gmail.com" target="_blank">
					<BsMailbox />
				</a>
				<a href="https://github.com/Ccatalyst" target="_blank">
					<BsGithub />
				</a>
				<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank">
					<BsLinkedin />
				</a>
				<a>
					<BsPhone /> 303-489-5742
				</a>
			</div>
		</>
	);
}

export default Footer;
