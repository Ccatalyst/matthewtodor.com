import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

const Algorithms = () => {
	return (
		<Grid container>
			<Grid item xs={12} m="auto">
				<Typography variant="h2" align="center" color="primary">
					Algorithms
				</Typography>
			</Grid>
			<Grid item xs={12} m="auto" backgroundColor="background.paper" maxWidth="xl">
				<Typography variant="subtitle1" paragraph align="center">
					This space is designed to be used for the algorithms I have solved through the full stack bootcamp I help teach and participated in, as well
					as the CodeWars algorithms I've done since.
				</Typography>
				<Typography variant="subtitle1" paragraph align="center">
					While at the moment it is empty, it will be quickly filled as I continue to work on this site.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Algorithms;
