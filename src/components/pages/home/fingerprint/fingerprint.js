import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import Fingerprint from "../../../../assets/pictures/Fingerprint.png";
import "./fingerprint.css";
import { TypeAnimation } from "react-type-animation";

const FingerPrintMark = () => {
	return (
		<Grid container>
			<Grid item m="auto" xs={12}>
				<Typography variant="h4" component="h3" align="center" gutterBottom fontFamily="Raleway" sx={{ minHeight: 41 }}>
					<TypeAnimation sequence={[" ", 2000, "Hoping to leave my"]} wrapper="div" repeat={0} cursor={false} />
				</Typography>
			</Grid>
			<Grid container xs={12} sm={9} lg={5} m="auto" mb={2} id="fingerprintBox">
				<img src={`${Fingerprint}`} id="fingerprint" alt="fingerprint" />
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4" align="center" fontFamily="Raleway" sx={{ minHeight: 41 }}>
					<TypeAnimation sequence={[3500, "on the industry."]} wrapper="div" repeat={0} cursor={false} />
				</Typography>
			</Grid>
		</Grid>
	);
};

export default FingerPrintMark;
