import React from "react";
import AboutMe from "../aboutme/aboutme";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FingerPrintMark from "./fingerprint/fingerprint";

const Home = () => {
	return (
		<Grid container>
			<Grid xs={11} md={11} sx={{ m: "auto", mt: { xs: 2, sm: 6 } }}>
				<AboutMe />
			</Grid>
			<Grid xs={11} md={11} sx={{ m: "auto", mt: { xs: 2 }, mb: { xs: 2, sm: 6 } }}>
				<FingerPrintMark />
			</Grid>
		</Grid>
	);
};

export default Home;
