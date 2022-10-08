import React from "react";
import { Link } from "react-router-dom";
import { Typography, IconButton, Stack, Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, LinkedIn, MailOutline, PhoneAndroid, Twitter } from "@mui/icons-material/";
const Nav = () => {
	return (
		<Grid container maxWidth="xl">
			<Grid item sm={12} sx={{ m: "auto" }}>
				<Link to="/" underline="none">
					<Typography variant="h2" component="h1" align="center">
						Matthew Todor
					</Typography>
				</Link>
			</Grid>
			<Grid item xs={12}>
				<ButtonGroup>
					<Button to="/portfolio">Portfolio</Button>
					<Button to="/algorithms">Algorithms</Button>
				</ButtonGroup>
			</Grid>
			<Stack direction="row" sx={{ m: "auto" }}>
				<Link to="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
					<IconButton name="Email" aria-label="email">
						<MailOutline />
					</IconButton>
				</Link>
				<Link to="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
					<IconButton name="Github" aria-label="github">
						<GitHub />
					</IconButton>
				</Link>

				<Link to="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
					<IconButton name="LinkedIn" aria-label="linkedin">
						<LinkedIn />
					</IconButton>
				</Link>
				<Link to="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
					<IconButton name="Twitter" aria-label="twitter">
						<Twitter />
					</IconButton>
				</Link>
				<Link to="tel:303-489-5742">
					<IconButton name="Phone" aria-label="phone">
						<PhoneAndroid />
					</IconButton>
				</Link>
			</Stack>
		</Grid>
	);
};

export default Nav;
