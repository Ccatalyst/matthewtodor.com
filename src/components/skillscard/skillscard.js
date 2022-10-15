import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Typography } from "@mui/material";
import resume from "../../assets/resume/MatthewTodorResume.pdf";
import "./skillscard.scss";

const SkillsTable = () => {
	return (
		<>
			<Grid container>
				<Grid container xs={12} mt={2}>
					{/* Add the same link animation to this that you have on the nav bar */}

					<Button
						size="large"
						variant="outlined"
						href={resume}
						target="_blank"
						rel="noreferrer"
						sx={{ m: "auto", borderRadius: `${1}px` }}
						className="resumedlbutton"
					>
						<Typography variant="body1" component="p">
							Download Resume
						</Typography>
					</Button>
				</Grid>
				{/* EXPERIENCE */}
				<Grid container xs={12} sm={6} p={1} justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="h5" gutterBottom color="primary" align="center">
							Experience
						</Typography>
					</Grid>
					<Grid container sm={6} borderLeft="2px solid" borderColor="primary.main" pl={1} position="relative" className="resumeitem">
						<Grid item sm={6} m="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" gutterBottom sx={{ backgroundColor: "#0E959466" }}>
								Full Stack Web Development Teacher's Assistant
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" component="article" px={1}>
								Assisted in teaching students of various development skill levels web development concepts and languages, including HTML, CSS and
								Javascript. Built upon the foundational languages to teach both front-end and back-end development, all while fully remote.
							</Typography>

							<ul>
								<Typography variant="body1">
									<li>Lesson Planning and Grading</li>
								</Typography>
								<ul>
									<Typography variant="body2" fontSize={15}>
										<li>
											Worked with instructor on reviewing lesson plans for the day, going over goals and potential stumbling blocks, discussing
											solutions and simplified explanations for complex subjects
										</li>
									</Typography>
									<Typography variant="body2" fontSize={15}>
										<li>
											Worked with fellow Teacher’s Assistants and Instructor to analyze students’ projects and grade based on functionality,
											appearance, and best practices.
										</li>
									</Typography>
								</ul>
							</ul>

							<ul>
								<Typography variant="body1">
									<li>Code Review</li>
								</Typography>
								<ul>
									<Typography variant="body2" fontSize={15}>
										<li>
											Analyzed code from students to assist in finding the source of bugs, working through the operation of the functions verbally to
											find the source of the problem
										</li>
									</Typography>
									<Typography variant="body2" fontSize={15}>
										<li>
											Pair programed to help students understand various concepts of web development, walking through simple and complex methods of
											Javascript.
										</li>
									</Typography>
								</ul>
							</ul>
						</Grid>
					</Grid>
				</Grid>
				{/* EXTRACURRICULAR ACTIVITIES */}
				<Grid container xs={12} sm={6} p={1} justifyContent="center" height="auto">
					<Grid item xs={12}>
						Experience
					</Grid>
					<Grid container sm={6} borderLeft="2px solid" borderColor="primary.main" pl={1} position="relative" className="resumeitem">
						<Grid item sm={6} m="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" gutterBottom sx={{ backgroundColor: "#0E959466" }}>
								Golf
							</Typography>
						</Grid>
						<Grid container sm={6}>
							<Typography variant="body1" component="article" px={1}>
								Consistent focus on personal improvement, with a focus on repetition and routine. A frequent review of recent performance increases
								learning speed and personal performance.
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid container sx={12} sm={6} justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="h5" gutterBottom color="primary" align="center">
							Skillset
						</Typography>
					</Grid>
				</Grid>
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
