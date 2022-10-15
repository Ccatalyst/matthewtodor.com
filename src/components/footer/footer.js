import React from "react";
import { Stack, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, LinkedIn, MailOutline, PhoneAndroid, Twitter } from "@mui/icons-material/";

const Footer = () => {
	return (
		<Grid container sx={{ bottom: 0, width: { xs: 8 / 10, sm: 1 / 1 }, backgroundColor: "#121212e6" }}>
			<Grid item xs={11} sx={{ m: "auto" }}>
				<Stack direction="row" spacing="auto" sx={{ m: "auto", width: 1 / 1, border: `${1}px solid #0E9594` }}>
					<a href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
						<IconButton fontSize="large" name="Email" aria-label="email">
							<MailOutline color="primary" />
						</IconButton>
					</a>
					<a href="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
						<IconButton name="Github" aria-label="github">
							<GitHub color="primary" />
						</IconButton>
					</a>

					<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
						<IconButton name="LinkedIn" aria-label="linkedin">
							<LinkedIn color="primary" />
						</IconButton>
					</a>
					<a href="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
						<IconButton name="Twitter" aria-label="twitter">
							<Twitter color="primary" />
						</IconButton>
					</a>
					<a href="tel:303-489-5742">
						<IconButton name="Phone" aria-label="phone">
							<PhoneAndroid color="primary" />
						</IconButton>
					</a>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Footer;
