import React from "react";
import { Typography, Link } from "@mui/material";
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
			<Grid xs={12} mb={2}>
				<Typography variant="h4" component="h2" fontFamily="Raleway" fontWeight={200} color="primary" align="center" gutterBottom>
					Additional projects can be found{" "}
					<Link href="https://github.com/matthewtodor?tab=repositories" target="_blank" rel="noreferrer">
						here
					</Link>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Portfolio;
