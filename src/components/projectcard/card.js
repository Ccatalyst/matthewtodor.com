import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ProjectCard = (props) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="body1">{props.cardcontent}</Typography>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
