import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import "./aboutme.css";
import Typewriter from "typewriter-effect";

const AboutMe = () => {
	return (
		<Grid container>
			<Grid xs={12}>
				<Typography variant="h3" component="h2" align="center" color="white" fontFamily="Raleway">
					I am...
				</Typography>
			</Grid>
			<Grid xs={12}>
				<Box sx={{ width: 95 / 100, m: "auto" }}>
					<Typography variant="h4" component="h3" sx={{ m: 1, p: 1, color: "primary.main" }} align="center" fontFamily="Raleway">
						<Typewriter
							options={{
								strings: ["A Programmer", "A Teacher", "Full Stack"],
								autoStart: true,
								loop: true,
								delay: 75,
								// @ts-expect-error
								pauseFor: 3600,
							}}
						/>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default AboutMe;
