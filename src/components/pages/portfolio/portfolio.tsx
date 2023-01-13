import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import projects from "./projects.json";
import PortfolioCard from "./portfoliocard";
const Portfolio = (): JSX.Element => {
	return (
		<Grid container>
			{projects.map((project, index) => {
				return (
					<PortfolioCard key={index} name={project.name} body={project.body} img={project.img} deploy={project.deploy} github={project.github} />
				);
			})}
		</Grid>
	);
};

export default Portfolio;
