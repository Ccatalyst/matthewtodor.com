import React from "react";
import resume from "../../assets/resume/MatthewTodorResume.pdf";
import AboutMe from "../aboutme";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import GolfBall from "../elements/golfball";
const Home = () => {
	return (
		<Grid container>
			<Grid itm xs={12} md={8}>
				<AboutMe />
			</Grid>

			<div>
				<h2>Resume and Proficiencies</h2>
			</div>
			<div className="resumeLink">
				<a href={resume} target="_blank" rel="noreferrer">
					Download Resume
				</a>
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
		</Grid>
	);
};

export default Home;
