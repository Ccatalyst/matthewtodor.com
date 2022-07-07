import React from "react";
import { Link } from "react-router-dom";
import { Email, GitHub, LinkedIn, Twitter, PhoneAndroid } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
function Nav() {
	return (
		<>
			<Box
				sx={{
					maxWidth: "md",
					bgcolor: "background.paper",
					m: "auto",
					border: 1,
					borderRadius: 1,
					width: 1,
				}}
			>
				<Box
					sx={{
						color: "primary.main",
					}}
				>
					<Link to="/">
						<Typography variant="h2" component="h1">
							Matthew Todor
						</Typography>
					</Link>
				</Box>
				<div>
					<Link activeclassname="active" to="/Portfolio">
						Portfolio
					</Link>
					{/* This will link to the Algorithms section when it is built*/}
					{/* <Link></Link> */}
				</div>

				<a href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
					<Email />
				</a>
				<a href="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
					<GitHub />
				</a>
				<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
					<LinkedIn />
				</a>
				<a href="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
					<Twitter />
				</a>
				<a href="tel:303-489-5742">
					<PhoneAndroid />
				</a>
			</Box>
		</>
	);
}

export default Nav;
