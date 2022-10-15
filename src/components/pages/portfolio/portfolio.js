import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import projects from "./projects.json";
import PortfolioCard from "./portfoliocard";
const Portfolio = () => {
	return (
		<Grid container>
			<Grid item xs={12} sx={{ mt: 1 }}>
				<Typography
					variant="h4"
					component="h2"
					align="left"
					color="primary"
					sx={{ backgroundColor: "#12121200", textDecoration: "underline", ml: 4 }}
				>
					Here is some of the work I've done
				</Typography>
			</Grid>
			{projects.map((project, index) => {
				return <PortfolioCard key={index} props={{ project }} />;
			})}
		</Grid>
	);
};

export default Portfolio;
