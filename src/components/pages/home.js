import React from "react";
import AboutMe from "../aboutme";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SkillsTable from "../skillscard/skillscard";

const Home = () => {
	return (
		<Grid container>
			<Grid item xs={11} md={11} sx={{ m: "auto", mt: 2 }}>
				<AboutMe />
			</Grid>

			<Grid item xs={11} sx={{ m: "auto", mt: 2 }}>
				<SkillsTable />
			</Grid>
		</Grid>
	);
};

export default Home;
