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
				<Grid container xs={12} sm={6} p={1} px={{ xs: 3 }} justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={4}>
							Experience
						</Typography>
					</Grid>
					<Grid container sm={6} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} position="relative" className="resumeitem">
						<Grid item sm={8} mx="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								Full Stack Web Development Teacher's Assistant
							</Typography>
						</Grid>
						<Grid item sm={12} m="auto">
							<Typography variant="caption" paragraph gutterBottom align="center" mt={2} fontStyle="oblique">
								July 2022-present
							</Typography>
						</Grid>

						<Grid item component="article">
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
									<Typography variant="body2" component="li" fontSize={15}>
										Worked with instructor on reviewing lesson plans for the day, going over goals and potential stumbling blocks, discussing
										solutions and simplified explanations for complex subjects
									</Typography>
									<Typography variant="body2" component="li" fontSize={15}>
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
									<Typography variant="body2" component="li" fontSize={15}>
										Analyzed code from students to assist in finding the source of bugs, working through the operation of the functions verbally to
										find the source of the problem
									</Typography>
									<Typography variant="body2" component="li" fontSize={15}>
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
					<Grid
						container
						sm={6}
						borderLeft="2px solid"
						borderColor="primary.main"
						pl={2}
						m={{ sm: 1 }}
						mt={-2}
						position="relative"
						className="resumeitem"
					>
						<Grid item sm={8} m="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								Golf
							</Typography>
						</Grid>
						<Grid item component="article">
							<ul>
								<Typography variant="body1" component="li" fontSize={15} px={1} sx={{ listStyle: "none" }} gutterBottom>
									Consistent focus on personal improvement, with a focus on repetition and routine.
								</Typography>
								<Typography variant="body1" component="li" fontSize={15} px={1} sx={{ listStyle: "none" }} gutterBottom>
									A frequent review of recent performance increases learning speed and personal performance.
								</Typography>
							</ul>
						</Grid>
					</Grid>
					<Grid container sm={6} borderLeft="2px solid" borderColor="primary.main" pl={1} mt={-2} position="relative" className="resumeitem">
						<Grid item sm={8} m="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} sx={{ backgroundColor: "#0E959466" }}>
								World of Warcraft
							</Typography>
						</Grid>
						<Grid item component="article">
							<ul>
								<Typography variant="body1" component="li" fontSize={15} gutterBottom px={1} sx={{ listStyle: "none" }}>
									Weekly scheduled collaboration with between 19-24 other people, coordinating movement and actions in a precise manner to accomplish
									our goals.
								</Typography>
								<Typography variant="body1" component="li" fontSize={15} gutterBottom px={1} sx={{ listStyle: "none" }}>
									Quick corrections when mistakes are made to lower the time spent on any single challenge
								</Typography>
								<Typography variant="body1" component="li" fontSize={15} gutterBottom px={1} sx={{ listStyle: "none" }}>
									Requires communication across a variety of mediums to keep up to date on the status of various goals and what contributors can do to
									help accomplish the next endeavor
								</Typography>
							</ul>
						</Grid>
					</Grid>
				</Grid>

				<Grid container xs={12} sm={6} p={1} px={{ xs: 3 }} justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={4}>
							Skillset
						</Typography>
					</Grid>
					<Grid container sm={6} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} ml={1} position="relative" className="resumeitem">
						<Grid item sm={8} mx="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} minWidth={110} sx={{ backgroundColor: "#0E959466" }}>
								Languages
							</Typography>
						</Grid>
						<Grid item sm={6} component="article" mx="auto">
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								HTML
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								CSS
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Javascript
							</Typography>
						</Grid>
					</Grid>
					<Grid container sm={6} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} ml={1} position="relative" className="resumeitem">
						<Grid item sm={8} mx="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} minWidth={110} sx={{ backgroundColor: "#0E959466" }}>
								Tools
							</Typography>
						</Grid>
						<Grid item sm={6} component="article" mx="auto">
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Nodejs
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Express
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								SQL
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								MongoDB
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								React
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Handlebars
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								GraphQL
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Google
							</Typography>
						</Grid>
					</Grid>

					<Grid container sm={6} borderLeft="2px solid" borderColor="primary.main" pl={2} mt={-2} ml={1} position="relative" className="resumeitem">
						<Grid item sm={8} m="auto">
							<Typography variant="h6" py={0.5} px={1} align="center" my={{ xs: 2, sm: 0 }} minWidth={130} sx={{ backgroundColor: "#0E959466" }}>
								Applications
							</Typography>
						</Grid>
						<Grid item sm={6} component="article" mx="auto">
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Github
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Mongo Compass
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Insomnia
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Apollo Sandbox
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								MySQL
							</Typography>
							<Typography variant="subtitle1" sx={{ fontFamily: "Roboto Mono" }}>
								Heroku
							</Typography>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom color="primary" align="center" py={4}>
							Certificates
						</Typography>
					</Grid>
					<Grid
						container
						sm={6}
						borderLeft="2px solid"
						borderColor="primary.main"
						pl={2}
						mt={-2}
						ml={1}
						position="relative"
						className="resumeitem"
					></Grid>
				</Grid>
				<Grid container xs={12} my={2}>
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
			</Grid>
		</>
	);
};
export default SkillsTable;
