import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import projects from "./projects.json";
import PortfolioCard from "./portfoliocard";
const Portfolio = () => {
	return (
		<Grid container>
			{projects.map((project, index) => {
				return <PortfolioCard key={index} props={{ project }} />;
			})}
		</Grid>
	);
};

export default Portfolio;
