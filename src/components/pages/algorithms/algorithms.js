import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import AlgoCard from "./algoCard/algoCard";
import algorithmData from "./algorithmData";
const Algorithms = () => {
	return (
		<Grid container>
			<Grid item xs={12} m="auto">
				<Typography variant="h2" align="center" color="primary" fontFamily="Raleway">
					Algorithms
				</Typography>
			</Grid>
			{algorithmData.map((data, i) => (
				<Grid key={i} item xs={11} sm={6} md={4} lg={3} xl={2} m="auto" backgroundColor="background.paper" maxWidth="xl">
					<AlgoCard code={data.code} language={data.language} name={data.name} difficulty={data.difficulty} explanation={data.explanation} />
				</Grid>
			))}
		</Grid>
	);
};

export default Algorithms;
