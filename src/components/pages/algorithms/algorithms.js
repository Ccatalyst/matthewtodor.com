import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import AlgoCard from "./algoCard/algoCard";

const Algorithms = () => {
	return (
		<Grid container>
			<Grid item xs={12} m="auto">
				<Typography variant="h2" align="center" color="primary" fontFamily="Raleway">
					Algorithms
				</Typography>
			</Grid>
			<Grid item xs={2} m="auto" backgroundColor="background.paper" maxWidth="xl">
				<AlgoCard
					code="function multiply(a, b) {
						var z = a * b;
						return z;
					}"
					language="javascript"
					name="Multiply"
					difficulty="8"
				/>
			</Grid>
		</Grid>
	);
};

export default Algorithms;
