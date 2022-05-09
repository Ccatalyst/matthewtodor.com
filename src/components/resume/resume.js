import React from "react";
import "./resume.css";
import resume from "./MatthewTodorResume.pdf";
function Resume() {
	// Here we set two state variables for firstName and lastName using `useState`

	return (
		<>
			<div>
				<h2>Resume and Proficiencies</h2>
			</div>
			<div className="resumeLink">
				<button>
					<a href={resume} target="_blank" rel="noreferrer">
						Download Resume
					</a>
				</button>
			</div>
			<div className="skills">
				<div className="skillList">
					<ul>
						<h3>Languages</h3>
						<li>Javascript</li>
						<li>HTML</li>
						<li>CSS</li>
					</ul>
				</div>
				<div className="skillList">
					<ul>
						<h3>Tools</h3>
						<li>Node</li>
						<li>Express</li>
						<li>SQL</li>
						<li>MongoDB</li>
						<li>React</li>
						<li>Handlebars</li>
						<li>GraphQL</li>
						<li>Google</li>
					</ul>
				</div>
				<div className="skillList">
					<ul>
						<h3>Applications</h3>
						<li>Github</li>
						<li>Mongo Compass</li>
						<li>Insomnia</li>
						<li>Apollo Sandbox</li>
						<li>MySQL</li>
						<li>Heroku</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Resume;
