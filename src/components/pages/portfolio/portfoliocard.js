import React from "react";
import { Card, CardMedia, CardContent, Typography, IconButton, Button, CardActionArea } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";
const PortfolioCard = ({ props }) => {
	const deploy = props.deploy === "";

	return (
		<Grid item xs={12} sm={6} md={4} lg={3} sx={{ p: 2 }}>
			<Card>
				<CardActionArea>
					<CardMedia component="img" alt={props.project.name} height="140" image={props.project.img} />
					<CardContent>
						<Typography variant="h5">{props.project.name}</Typography>
						<Typography variant="body1" paragraph>
							{props.project.body}
						</Typography>
					</CardContent>
				</CardActionArea>
				{deploy ? (
					""
				) : (
					<Button href={props.project.deploy} target="_blank" rel="noreferrer">
						Demo
					</Button>
				)}
				<IconButton href={props.project.github} target="_blank" rel="noreferrer">
					<GitHub color="primary" />
				</IconButton>
			</Card>
		</Grid>
	);
};

PortfolioCard.propTypes = {
	props: PropTypes.object,
	project: PropTypes.object,
	id: PropTypes.number,
	name: PropTypes.string,
	body: PropTypes.string,
	img: PropTypes.string,
	deploy: PropTypes.string,
	github: PropTypes.string,
};

export default PortfolioCard;
