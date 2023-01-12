import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import Fingerprint from "../../../../assets/pictures/Fingerprint.png";
import "./fingerprint.css";
import Typewriter from "typewriter-effect";
const FingerPrintMark = () => {
	return (
		<Grid container>
			<Grid item m="auto" xs={12}>
				<Typography variant="h4" component="h3" align="center" gutterBottom fontFamily="Raleway" sx={{ minHeight: 41 }}>
					<Typewriter
						options={{
							strings: ["", "Hoping to leave my"],
							autoStart: true, //This is awful. Typewriter package doesn't have a way to delay the start without feeding it an empty string and delaying after that. But you can't stop the deletion on autoStart if you have multiple strings. So the delaySpeed is set to change the deletion speed to an astronomically slow rate.//
							deleteSpeed: 20000000000,
							delay: 75,
							pauseFor: 1600,
							cursor: "",
						}}
					/>
				</Typography>
			</Grid>
			<Grid container xs={12} sm={9} lg={5} m="auto" mb={2} id="fingerprintBox">
				<img src={`${Fingerprint}`} id="fingerprint" alt="fingerprint" />
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4" align="center" fontFamily="Raleway" sx={{ minHeight: 41 }}>
					<Typewriter
						options={{ strings: ["", "On the industry"], autoStart: true, deleteSpeed: 20000000000, delay: 75, pauseFor: 3600, cursor: "" }}
					/>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default FingerPrintMark;
