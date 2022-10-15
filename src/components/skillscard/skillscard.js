import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Container, Typography } from "@mui/material";
import resume from "../../assets/resume/MatthewTodorResume.pdf";

const SkillsTable = () => {
	return (
		<>
			<Grid container>
				<Grid container xs={12} sx={{ mt: 2 }}>
					{/* Add the same link animation to this that you have on the nav bar */}

					<Button
						size="large"
						variant="contained"
						href={resume}
						target="_blank"
						rel="noreferrer"
						color="primary"
						sx={{ m: "auto", borderRadius: `${2}px` }}
					>
						<Typography variant="body1" component="p" color="#121212">
							Download Resume
						</Typography>
					</Button>
				</Grid>
				<Grid container xs={12} sm={6} sx={{ justifyContent: "center", p: 1 }}>
					<Grid item>
						<Typography variant="h5" gutterBottom>
							Experience
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h6" color="secondary" py={0.5} px={1} align="center " sx={{ backgroundColor: "#0E959466" }}>
							Full Stack Web Development Teacher's Assistant
						</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>

				<h4>Extracurricular Activities</h4>

				<h4>Certificates</h4>
				<h4>Achievements</h4>

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
			</Grid>
		</>
	);
};
export default SkillsTable;
