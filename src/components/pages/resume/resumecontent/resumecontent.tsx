import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Typography, Slider, styled } from "@mui/material";
import resume from "../../../../assets/resume/MatthewTodorResume.pdf";
import "./resumecontent.scss";

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
const ResumeContent = (): JSX.Element => {
	return (
		<>
			<Grid container sx={{ backgroundColor: "#12121290" }}>
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
					<Grid xs={12}>
						<Typography variant="h4" component="h2" gutterBottom color="primary" align="center" py={3}>
							Experience
						</Typography>
					</Grid>
					<Grid container md={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid sm={10} mx="auto">
							<Typography variant="h6" component="h3" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								Full Stack Web Development Teacher's Assistant
							</Typography>
						</Grid>
						<Grid sm={12} m="auto">
							<Typography variant="caption" paragraph gutterBottom align="center" mt={2} fontStyle="oblique">
								July 2022-present
							</Typography>
						</Grid>

						<Grid md={9} component="article" mx="auto">
							<ul>
								<Typography variant="body1" component="li" px={1} sx={{ listStyle: "none" }}>
									Act as the students’ informational and procedural resource on web development concepts/languages, including HTML, CSS, & Javascript.
								</Typography>
								<Typography variant="body1" component="li" px={1} sx={{ listStyle: "none" }}>
									Foster and help effectively establish a conducive and interactive learning environment for students in a fully remote educational
									setting.{" "}
								</Typography>
							</ul>

							<ul>
								<Typography variant="body1" component="li" sx={{ listStyle: "none" }}>
									Lesson Planning and Grading
								</Typography>
								<li className="invisList">
									<ul>
										<Typography variant="body2" component="li" fontSize={16}>
											Drive lesson plan review and assessment of daily learning objectives while anticipating and resolving potential learning
											obstacles/issues
										</Typography>
										<Typography variant="body2" component="li" fontSize={16}>
											Foster and help effectively establish a conducive and interactive learning environment for students in a fully remote
											educational setting.
										</Typography>
									</ul>
								</li>
							</ul>

							<ul>
								<Typography variant="body1" component="li" sx={{ listStyle: "none" }}>
									Code Review
								</Typography>
								<li className="invisList">
									<ul>
										<Typography variant="body2" component="li" fontSize={16}>
											Render support and valuable insights on developing and discussing solutions and simplifying complex subjects and concepts.
										</Typography>
										<Typography variant="body2" component="li" fontSize={16}>
											Navigate and assist students and provide constructive feedback in building and reviewing codes and discovering and handling bug
											sources.
										</Typography>
									</ul>
								</li>
							</ul>
						</Grid>
					</Grid>
					{/* EXTRACURRICULAR ACTIVITIES */}
					<Grid xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={3}>
							Testimonials
						</Typography>
					</Grid>
					<Grid container md={12} borderLeft="2px solid" borderColor="primary.main" pl={1} mt={-2} position="relative" className="resumeitem">
						<Grid sm={10} m="auto">
							<Typography variant="h6" component="h3" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								Darin Palombo
							</Typography>
						</Grid>
						<Grid container component="article">
							<Grid md={9} mx="auto">
								<Typography variant="body1" fontSize={16} pb={2} px={1} sx={{ listStyle: "none" }}>
									"From the very beginning of the Bootcamp I had serious doubts as to how I could possibly overcome the challenge that laid in front
									of me. Even though I chose to take the course, once it started I had no confidence that I was "smart enough" to get through it. This
									is where Matt came in and lifted me and many of my classmates from the dark places our minds can go when stuck in a mental dead-end.
									Firstly, he did this by providing fundamental explanations and examples on the concepts and materials we were going over any given
									day. Secondly, aside from providing first class technical help he was a huge motivator for the entire class. His soft skills are top
									tier, Matthew's attitude, personality and humor is what every company needs to cultivate an amazing team environment!"
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid container md={12} borderLeft="2px solid" borderColor="primary.main" pl={1} mt={-2} position="relative" className="resumeitem">
						<Grid sm={10} m="auto">
							<Typography variant="h6" component="h3" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								Maximilian Gibes
							</Typography>
						</Grid>
						<Grid container component="article">
							<Grid md={9} mx="auto">
								<Typography variant="body1" fontSize={16} pb={2} px={1} sx={{ listStyle: "none" }}>
									"First starting this boot camp, I wasn’t really sure what to expect. My first homework assignment I got recked. As you all know
									lmao. Matt, helped me out and put central grading in their place. Throughout the course of the boot camp, Matt continuously showed
									support to me and many other students. I can’t think of a time where Matt was like, “...figure it out yourself”. Although he
									probably spent to much time on us haha. Like a caring parent, he was there for all his children. When you first joined the discord I
									was like ... our privacy is a little exposed because we have a TA in here. I’m really happy you were as involved as you were. I’m
									happy to have had you around with us in the discord. Towards the end you became more of a friend than someone to be intimated by.
									How you helped me on my first assignment you also helped me on my last. Thanks for everything Matt. Best TA NA, EU, KR, RU, bottom
									and top half of the hemisphere."
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* SKILLSET */}
				<Grid container xs={12} md={6} p={1} px={{ xs: 3 }} justifyContent="center">
					<Grid xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={3}>
							Skillset
						</Typography>
					</Grid>
					<Grid container xs={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid xs={10} mx="auto">
							<Typography
								variant="h6"
								component="h3"
								py={0.5}
								px={1}
								align="center"
								my={{ xs: 2, sm: 1 }}
								minWidth={110}
								sx={{ backgroundColor: "#0E959466" }}
							>
								Languages
							</Typography>
						</Grid>
						<Grid container xs={9} component="article" mx="auto">
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" gutterBottom sx={{ fontFamily: "Roboto Mono" }}>
									Javascript
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="Javascript skill" defaultValue={8} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" gutterBottom sx={{ fontFamily: "Roboto Mono" }}>
									Typescript
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="Typescript skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" gutterBottom sx={{ fontFamily: "Roboto Mono" }}>
									HTML
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" gutterBottom sx={{ fontFamily: "Roboto Mono" }}>
									CSS
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={5} marks={marks} max={10} sx={{ mb: { xl: 3 } }} />
							</Grid>
						</Grid>
					</Grid>
					<Grid container sm={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid xs={10} mx="auto">
							<Typography
								variant="h6"
								component="h3"
								py={0.5}
								px={1}
								align="center"
								my={{ xs: 2, sm: 1 }}
								minWidth={110}
								sx={{ backgroundColor: "#0E959466" }}
							>
								Tools
							</Typography>
						</Grid>
						<Grid container xs={9} component="article" mx="auto">
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									React
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={9} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									GraphQL
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									MongoDB/Mongoose
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Nodejs
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={6} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Express
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={5} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Handlebars
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={5} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									SQL/mySQL
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={3} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Google-fu
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={10} marks={marks} max={10} sx={{ mb: { xl: 3 } }} />
							</Grid>
						</Grid>
					</Grid>

					<Grid container sm={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid xs={10} m="auto">
							<Typography
								variant="h6"
								component="h3"
								py={0.5}
								px={1}
								align="center"
								my={{ xs: 2, sm: 1 }}
								minWidth={130}
								sx={{ backgroundColor: "#0E959466" }}
							>
								Applications
							</Typography>
						</Grid>
						<Grid container xs={9} component="article" mx="auto">
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Github
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={9} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Apollo Sandbox
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={8} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Insomnia
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={8} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Heroku
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									Mongo Compass
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={7} marks={marks} max={10} />
							</Grid>
							<Grid xs={12} lg={3}>
								<Typography variant="subtitle1" component="u" sx={{ fontFamily: "Roboto Mono" }}>
									MySQL Workbench
								</Typography>
							</Grid>
							<Grid xs={12} lg={8}>
								<SkillSlider aria-label="HTML skill" defaultValue={5} marks={marks} max={10} />
							</Grid>
						</Grid>
					</Grid>
					{/* CERTIFICATES */}
					<Grid xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={3}>
							Certificates
						</Typography>
					</Grid>
					<Grid container sm={12} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid sm={10} mx="auto">
							<Typography
								variant="h6"
								component="h3"
								py={0.5}
								px={1}
								align="center"
								my={{ xs: 2, sm: 0 }}
								minWidth={110}
								sx={{ backgroundColor: "#0E959466" }}
							>
								Denver University
							</Typography>
						</Grid>
						<Grid xs={12} mx="auto">
							<Typography variant="caption" paragraph gutterBottom align="center" mt={2} fontStyle="oblique">
								Full Stack Web Development Certificate
							</Typography>
							<Typography variant="caption" paragraph gutterBottom align="center" fontStyle="oblique">
								May 2022
							</Typography>
						</Grid>
						<Grid md={9} mx="auto">
							<Typography variant="body1" gutterBottom px={1}>
								Gained hands-on experience and technical understanding of the MERN (MongoDb, Express.js, React, Node.js) stack, Bootstrap, & Redux.
							</Typography>
							<Typography variant="body1" px={1}>
								Generated new code for three agile projects, encompassing code review, Git-based source control and Heroku-based deployment.
							</Typography>
							<Typography variant="body1" px={1}>
								Further developed and leveraged competitive proficiencies and technical knowledge of front-end design and back-end development.
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
export default ResumeContent;
