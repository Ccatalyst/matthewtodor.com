import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import resume from "../../assets/resume/MatthewTodorResume.pdf";

const SkillsTable = () => {
	return (
		<Paper elevation={2}>
			<Typography variant="h4" component="h2" align="center" color="primary.main">
				Proficiencies
			</Typography>

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

			<Button size="large" variant="outlined" href={resume} target="_blank" rel="noreferrer" sx={{ m: "auto" }}>
				<Typography variant="body1" component="p">
					Download Resume
				</Typography>
			</Button>
		</Paper>
	);
};
export default SkillsTable;
