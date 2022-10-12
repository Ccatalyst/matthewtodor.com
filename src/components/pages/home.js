import React from "react";
import AboutMe from "../aboutme";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Home = () => {
	return (
		<Grid container>
			<Grid item xs={11} md={11} sx={{ m: "auto", mt: { xs: 2, sm: 18, md: 10 } }}>
				<AboutMe />
			</Grid>
		</Grid>
	);
};

export default Home;
