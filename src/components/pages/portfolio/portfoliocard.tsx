import React from "react";
import { Card, CardMedia, CardContent, Typography, IconButton, Button } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

type CardProps = {
	name: string;
	body: string;
	img: string;
	deploy: string;
	github: string;
};

const PortfolioCard = (cardProps: CardProps): JSX.Element => {
	return (
		<Grid xs={12} sm={6} md={4} lg={3} sx={{ p: 2 }}>
			<Card elevation={3}>
				<CardMedia component="img" alt="" height="140" image={cardProps.img} />
				<CardContent>
					<Typography variant="h5" component="h2">
						{cardProps.name}
					</Typography>
					<Typography variant="body1" paragraph>
						{cardProps.body}
					</Typography>
				</CardContent>

				{!cardProps.deploy ? (
					""
				) : (
					<Button href={cardProps.deploy} target="_blank" rel="noreferrer">
						Demo
					</Button>
				)}
				<IconButton href={cardProps.github} target="_blank" rel="noreferrer" aria-label="Github">
					<GitHub color="primary" />
				</IconButton>
			</Card>
		</Grid>
	);
};

export default PortfolioCard;
