import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import AlgoCard from "./algoCard/algoCard";
import algorithmData from "./algorithmData";
const Algorithms = (): JSX.Element => {
	algorithmData.sort((a, b) => a.difficulty - b.difficulty);
	return (
		<Grid container>
			<Grid xs={12} m="auto" my={2}>
				<Typography variant="h4" component="h2" align="center" color="primary" fontFamily="Raleway">
					Ordered in descending difficulty
				</Typography>
			</Grid>
			{algorithmData.map((data, i) => (
				<Grid key={i} component="div" xs={11} sm={6} md={4} lg={3} xl={2} maxWidth="xl" m={{ xs: "auto", sm: 0 }}>
					<AlgoCard
						code={data.code}
						language={data.language}
						name={data.name}
						difficulty={data.difficulty}
						explanation={data.explanation}
						source={data.source}
						url={data.url}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default Algorithms;
