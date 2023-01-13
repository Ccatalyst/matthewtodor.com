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

const PortfolioCard: React.FC<CardProps> = ({ name, body, img, deploy, github }) => {
	const deployCheck: boolean = deploy === "";
	return (
		<Grid xs={12} sm={6} md={4} lg={3} sx={{ p: 2 }}>
			<Card>
				<CardMedia component="img" alt={name} height="140" image={img} />
				<CardContent>
					<Typography variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body1" paragraph>
						{body}
					</Typography>
				</CardContent>

				{deployCheck ? (
					""
				) : (
					<Button href={deploy} target="_blank" rel="noreferrer">
						Demo
					</Button>
				)}
				<IconButton href={github} target="_blank" rel="noreferrer" aria-label="Github">
					<GitHub color="primary" />
				</IconButton>
			</Card>
		</Grid>
	);
};

export default PortfolioCard;
