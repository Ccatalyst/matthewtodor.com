import React from "react";
import { Link, Typography, IconButton, Stack, Button, Box, SpeedDial, SpeedDialAction, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, LinkedIn, MailOutline, PhoneAndroid, Twitter, Home } from "@mui/icons-material/";
// eslint-disable-next-line
import { Link as RouterLink, MemoryRouter } from "react-router-dom";

import GolfBall from "./elements/golfball";
const Nav = () => {
	// Handling mobile SpeedDial navigation open/close settings
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const icons = [
		{
			icon: (
				<Link component={RouterLink} to="/" sx={{ mt: 1 }}>
					<Home />
				</Link>
			),
			name: "Home",
		},
		{
			icon: (
				<Link component={RouterLink} to="/portfolio" sx={{ mt: 1 }}>
					<LinkedIn />
				</Link>
			),
			name: "Portfolio",
		},
		{
			icon: (
				<Link component={RouterLink} to="/algorithms" sx={{ mt: 1 }}>
					<GitHub />
				</Link>
			),
			name: "Algorithms",
		},
	];
	// checking if the screen width is below the small breakpoint
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<>
			{mobile ? (
				<Box>
					<SpeedDial
						size="small"
						FabProps={{
							sx: {
								bgcolor: "#FFFFFF",
								"&:hover": {
									bgcolor: "#FFFFFF",
								},
							},
						}}
						ariaLabel="Navigation"
						sx={{ position: "fixed", bottom: 16, right: 16 }}
						icon={<GolfBall />}
						onOpen={handleOpen}
						onClose={handleClose}
						open={open}
					>
						{icons.map((icons) => (
							<SpeedDialAction key={icons.name} icon={icons.icon} tooltipTitle={icons.name} tooltipOpen onClick={handleClose} />
						))}
					</SpeedDial>
				</Box>
			) : (
				<Grid
					container
					maxWidth="xl"
					sx={{
						m: "auto",
						justifyContent: "center",
					}}
				>
					<Grid xs={12}>
						<Link component={RouterLink} to="/" underline="none">
							<Typography variant="h2" component="h1" align="center">
								Matthew Todor
							</Typography>
						</Link>
					</Grid>
					<Grid container xs={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
						<Link component={RouterLink} to="/portfolio" underline="none">
							<Button variant="contained">Portfolio</Button>
						</Link>
					</Grid>
					<Grid container xs={12} sx={{ justifyContent: "center" }}>
						<Link component={RouterLink} to="/algorithms" underline="none">
							<Button variant="contained" sx={{ width: 1 / 1 }}>
								Algorithms
							</Button>
						</Link>
					</Grid>

					<Stack direction="row" sx={{ m: "auto" }}>
						<Link to="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
							<IconButton name="Email" aria-label="email">
								<MailOutline />
							</IconButton>
						</Link>
						<Link component={RouterLink} to="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
							<IconButton name="Github" aria-label="github">
								<GitHub />
							</IconButton>
						</Link>

						<Link component={RouterLink} to="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
							<IconButton name="LinkedIn" aria-label="linkedin">
								<LinkedIn />
							</IconButton>
						</Link>
						<Link component={RouterLink} to="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
							<IconButton name="Twitter" aria-label="twitter">
								<Twitter />
							</IconButton>
						</Link>
						<Link component={RouterLink} to="tel:303-489-5742">
							<IconButton name="Phone" aria-label="phone">
								<PhoneAndroid />
							</IconButton>
						</Link>
					</Stack>
				</Grid>
			)}
		</>
	);
};

export default Nav;
