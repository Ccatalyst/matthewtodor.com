import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import "./aboutme.css";
import Typewriter from "typewriter-effect";

const AboutMe = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant="h3" component="h2" align="center" color="white" fontFamily="Raleway">
					I am...
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Box elevation={0} sx={{ width: 95 / 100, m: "auto" }}>
					<Typography variant="h4" component="h3" sx={{ m: 1, p: 1, color: "primary.main" }} align="center" fontFamily="Raleway">
						<Typewriter
							options={{ strings: ["A Programmer", "A Teacher", "Full Stack"], autoStart: true, delay: 75, pauseFor: 3600 }}
							// sequence={[1000, "A Programmer", 3000, "A Teacher", 3000, "Full Stack", 3000]}
							// wrapper="div"
							// cursor={true}
							// repeat={Infinity}
						/>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default AboutMe;
