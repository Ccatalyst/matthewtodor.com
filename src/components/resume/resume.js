import React from "react";
import resume from "./MatthewTodorResume.pdf";
import { Button } from "@mui/material";
function Resume() {
	return (
		<>
			<div>
				<h2>Resume and Proficiencies</h2>
			</div>
			<div className="resumeLink">
				<Button>
					<a href={resume} target="_blank" rel="noreferrer">
						Download Resume
					</a>
				</Button>
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
