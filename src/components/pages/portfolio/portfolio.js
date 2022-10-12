import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import projects from "./projects.json";
import PortfolioCard from "./portfoliocard";
const Portfolio = () => {
	return (
		<Grid container>
			<Grid item xs={12} sx={{ mt: 1 }}>
				<Typography variant="h3" component="h2" align="center" color="primary">
					Projects
				</Typography>
			</Grid>
			{projects.map((project) => {
				return <PortfolioCard key={project.id} props={{ project }} />;
			})}
		</Grid>
	);
};

export default Portfolio;
