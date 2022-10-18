import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Typography, Slider, styled } from "@mui/material";
import resume from "../../assets/resume/MatthewTodorResume.pdf";
import "./skillscard.scss";

const SkillSlider = styled(Slider)(({ theme }) => ({
	color: "primary.main",
	height: 2,
	padding: "15px 0",
	pointerEvents: "none",
	"& .MuiSlider-thumb": {
		height: 13,
		width: 13,
		backgroundColor: "primary.main",
		boxShadow: boxShadow,
		"&:focus, &:hover, &.Mui-active": {
			boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				boxShadow: boxShadow,
			},
		},
	},
	"& .MuiSlider-valueLabel": {
		fontSize: 12,
		fontWeight: "normal",
		top: -6,
		backgroundColor: "unset",
		color: theme.palette.text.primary,
		"&:before": {
			display: "none",
		},
		"& *": {
			background: "transparent",
			color: theme.palette.mode === "dark" ? "#fff" : "#000",
		},
	},
	"& .MuiSlider-track": {
		border: "1px solid",
	},
	"& .MuiSlider-rail": {
		opacity: 0.5,
		backgroundColor: "#bfbfbf",
	},
	"& .MuiSlider-mark": {
		backgroundColor: "#bfbfbf",
		height: 10,
		width: 2,
		"&.MuiSlider-markActive": {
			opacity: 1,
			backgroundColor: "currentColor",
		},
	},
}));
const boxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
// Values for Skill Slider
const marks = new Array(10).fill(null).map((value, index) => ({ value: index }));
const SkillsTable = () => {
	return (
		<>
			<Grid container>
				<Grid container xs={12} mt={6}>
					<Button
						size="large"
						variant="outlined"
						href={resume}
						target="_blank"
						rel="noreferrer"
						sx={{ m: "auto", borderRadius: `${1}px`, backgroundColor: "#00000090" }}
						className="resumedlbutton"
					>
						<Typography variant="body1" component="p">
							Download Resume
						</Typography>
					</Button>
				</Grid>
				{/* EXPERIENCE */}
				<Grid container xs={12} md={6} p={1} px={{ xs: 3 }} justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={4}>
							Experience
						</Typography>
					</Grid>
					<Grid container md={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid item sm={10} mx="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								Full Stack Web Development Teacher's Assistant
							</Typography>
						</Grid>
						<Grid item sm={12} m="auto">
							<Typography variant="caption" paragraph gutterBottom align="center" mt={2} fontStyle="oblique">
								July 2022-present
							</Typography>
						</Grid>

						<Grid item md={9} component="article" mx="auto">
							<ul>
								<Typography variant="body1" component="li" px={1} sx={{ listStyle: "none" }}>
									Assisted in teaching students of various development skill levels web development concepts and languages, including HTML, CSS and
									Javascript.
								</Typography>
								<Typography variant="body1" component="li" px={1} sx={{ listStyle: "none" }}>
									Built upon the foundational languages to teach both front-end and back-end development, all while fully remote.
								</Typography>
							</ul>

							<ul>
								<Typography variant="body1" component="li" sx={{ listStyle: "none" }}>
									Lesson Planning and Grading
								</Typography>
								<ul>
									<Typography variant="body2" component="li" fontSize={16}>
										Worked with instructor on reviewing lesson plans for the day, going over goals and potential stumbling blocks, discussing
										solutions and simplified explanations for complex subjects
									</Typography>
									<Typography variant="body2" component="li" fontSize={16}>
										Worked with fellow Teacher’s Assistants and Instructor to analyze students’ projects and grade based on functionality, appearance,
										and best practices.
									</Typography>
								</ul>
							</ul>

							<ul>
								<Typography variant="body1" component="li" sx={{ listStyle: "none" }}>
									Code Review
								</Typography>
								<ul>
									<Typography variant="body2" component="li" fontSize={16}>
										Analyzed code from students to assist in finding the source of bugs, working through the operation of the functions verbally to
										find the source of the problem
									</Typography>
									<Typography variant="body2" component="li" fontSize={16}>
										Pair programed to help students understand various concepts of web development, walking through simple and complex methods of
										Javascript.
									</Typography>
								</ul>
							</ul>
						</Grid>
					</Grid>
					{/* EXTRACURRICULAR ACTIVITIES */}
					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={4}>
							Extracurricular Activities
						</Typography>
					</Grid>
					<Grid container md={12} borderLeft="2px solid" borderColor="primary.main" pl={1} mt={-2} position="relative" className="resumeitem">
						<Grid item sm={10} m="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								Golf
							</Typography>
						</Grid>
						<Grid container component="article">
							<Grid item md={9} mx="auto">
								<Typography variant="body1" fontSize={16} px={1} sx={{ listStyle: "none" }} gutterBottom>
									Consistent focus on personal improvement, both physically and mentally, with a focus on repetition and routine.
								</Typography>
							</Grid>
							<Grid item md={9} mx="auto">
								<Typography variant="body1" fontSize={16} px={1} sx={{ listStyle: "none" }} gutterBottom>
									Frequently reviewing recordings and notes from recent performances, increasing learning speed and personal performance.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid container md={12} borderLeft="2px solid" borderColor="primary.main" pl={1} mt={-2} position="relative" className="resumeitem">
						<Grid item sm={10} m="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								World of Warcraft
							</Typography>
						</Grid>
						<Grid container component="article">
							<Grid item md={9} mx="auto">
								<Typography variant="body1" fontSize={16} gutterBottom px={1} sx={{ listStyle: "none" }}>
									Weekly scheduled collaboration with between 19-24 other people, coordinating movement and actions in a precise manner to accomplish
									our goals.
								</Typography>
							</Grid>
							<Grid item md={9} mx="auto">
								<Typography variant="body1" fontSize={16} gutterBottom px={1} sx={{ listStyle: "none" }}>
									Quick corrections when mistakes are made to lower the time spent on any single challenge
								</Typography>
							</Grid>
							<Grid item md={9} mx="auto">
								<Typography variant="body1" fontSize={16} gutterBottom px={1} sx={{ listStyle: "none" }}>
									Requires communication across a variety of mediums to keep up to date on the status of various goals and what contributors can do to
									help accomplish the next endeavor
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* SKILLSET */}
				<Grid container xs={12} md={6} p={1} px={{ xs: 3 }} justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={4}>
							Skillset
						</Typography>
					</Grid>
					<Grid container xs={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid item xs={10} mx="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 1 }} minWidth={110} sx={{ backgroundColor: "#0E959466" }}>
								Languages
							</Typography>
						</Grid>
						<Grid container xs={9} component="article" mx="auto">
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" gutterBottom sx={{ fontFamily: "Roboto Mono" }}>
									Javascript
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={8} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" gutterBottom sx={{ fontFamily: "Roboto Mono" }}>
									HTML
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" gutterBottom sx={{ fontFamily: "Roboto Mono" }}>
									CSS
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={5} marks={marks} max={10} sx={{ mb: { xl: 3 } }} />
							</Grid>
						</Grid>
					</Grid>
					<Grid container sm={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid item xs={10} mx="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 1 }} minWidth={110} sx={{ backgroundColor: "#0E959466" }}>
								Tools
							</Typography>
						</Grid>
						<Grid container xs={9} component="article" mx="auto">
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Google
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={10} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									React
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={9} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									GraphQL
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									MongoDB
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Nodejs
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={6} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Express
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={5} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Handlebars
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={5} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									SQL
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={3} marks={marks} max={10} sx={{ mb: { xl: 3 } }} />
							</Grid>
						</Grid>
					</Grid>

					<Grid container sm={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid item xs={10} m="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 1 }} minWidth={130} sx={{ backgroundColor: "#0E959466" }}>
								Applications
							</Typography>
						</Grid>
						<Grid container xs={9} component="article" mx="auto">
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Github
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={9} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Apollo Sandbox
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={8} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Insomnia
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={8} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Heroku
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Mongo Compass
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid item xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									MySQL
								</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={5} marks={marks} max={10} />
							</Grid>
						</Grid>
					</Grid>
					{/* CERTIFICATES */}
					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={4}>
							Certificates
						</Typography>
					</Grid>
					<Grid container sm={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid item sm={10} mx="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} minWidth={110} sx={{ backgroundColor: "#0E959466" }}>
								Denver University
							</Typography>
						</Grid>
						<Grid item xs={12} mx="auto">
							<Typography variant="caption" paragraph gutterBottom align="center" fontStyle="oblique">
								May 2022
							</Typography>
						</Grid>
						<Grid item md={9} mx="auto">
							<Typography variant="body1" gutterBottom px={1}>
								Worked with peers and instructors to organize and implement code in an Agile environment, focusing on learning the MERN (MongoDB,
								Express, React, Nodejs) stack as well as source control (Github) and code review.
							</Typography>
							<Typography variant="body1" px={1}>
								Selected to present capstone project to network of industry professionals associated with Denver University.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid container xs={12} my={2}>
					<Button
						size="large"
						variant="outlined"
						href={resume}
						target="_blank"
						rel="noreferrer"
						sx={{ m: "auto", borderRadius: `${1}px`, backgroundColor: "#00000090" }}
						className="resumedlbutton"
					>
						<Typography variant="body1" component="p">
							Download Resume
						</Typography>
					</Button>
				</Grid>
			</Grid>
		</>
	);
};
export default SkillsTable;
