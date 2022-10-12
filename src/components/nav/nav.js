import React from "react";
import { Link, Typography, Box, SpeedDial, SpeedDialAction, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, LinkedIn, Home, Fingerprint } from "@mui/icons-material/";
// eslint-disable-next-line
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import Banner from "../banner";

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
		{
			icon: (
				<Link component={RouterLink} to="/resume" sx={{ mt: 1 }}>
					<GitHub />
				</Link>
			),
			name: "Resume",
		},
		{
			icon: (
				<Link component={RouterLink} to="/#" sx={{ mt: 1 }}>
					<GitHub />
				</Link>
			),
			name: "Contact",
		},
	];
	// checking if the screen width is below the small breakpoint
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<>
			{mobile ? (
				<>
					<Banner />
					<Box>
						<SpeedDial
							size="small"
							FabProps={{
								sx: {
									bgcolor: "background.paper",
									"&:hover": {
										bgcolor: "background.paper",
									},
								},
							}}
							ariaLabel="Navigation"
							sx={{ position: "fixed", bottom: 16, right: 16 }}
							icon={<Fingerprint color="primary" />}
							onOpen={handleOpen}
							onClose={handleClose}
							open={open}
						>
							{icons.map((icons) => (
								<SpeedDialAction key={icons.name} icon={icons.icon} tooltipTitle={icons.name} tooltipOpen onClick={handleClose} />
							))}
						</SpeedDial>
					</Box>
				</>
			) : (
				<Grid
					container
					sx={{
						m: "auto",
						justifyContent: "center",
					}}
				>
					<Grid item xs={12} sm={7} md={5} lg={4} xl={3}>
						<Typography
							variant="h2"
							component="h1"
							sx={{
								textAlign: "center",
								[theme.breakpoints.up("md")]: { textAlign: "right" },
								[theme.breakpoints.up("lg")]: { textAlign: "center" },
							}}
						>
							<Link component={RouterLink} to="/" underline="none">
								Matthew Todor
							</Link>
						</Typography>
					</Grid>
					{/* this container holds the links */}
					<Grid container xs={12} md={7} lg={8} xl={9} sx={{ m: "auto", my: { sm: 2, md: 0 }, alignContent: "center" }}>
						{/* empty div, used to push links to the right. bad way to do it, fix later */}
						<Grid item xs={0} lg={4} xl={7}></Grid>
						{/* link to portfolio */}
						<Grid item xs={12} sm={3} lg={2} xl={1}>
							<Typography
								variant="h6"
								sx={{
									textAlign: "center",
								}}
							>
								<Link component={RouterLink} to="/portfolio" underline="none" sx={{ m: "auto" }}>
									Portfolio
								</Link>
							</Typography>
						</Grid>
						{/* link to algos page */}
						<Grid item xs={12} sm={3} lg={2} xl={1}>
							<Typography
								variant="h6"
								sx={{
									textAlign: "center",
								}}
							>
								<Link component={RouterLink} to="/algorithms" underline="none" sx={{ m: "auto" }}>
									Algorithms
								</Link>
							</Typography>
						</Grid>
						{/* link to resume */}
						<Grid item xs={12} sm={3} lg={2} xl={1}>
							<Typography
								variant="h6"
								sx={{
									textAlign: "center",
								}}
							>
								<Link component={RouterLink} to="/resume" underline="none" sx={{ m: "auto" }}>
									Resume
								</Link>
							</Typography>
						</Grid>
						{/* link to contact form */}
						<Grid item xs={12} sm={3} lg={2} xl={1}>
							<Typography
								variant="h6"
								sx={{
									textAlign: "center",
								}}
							>
								{/* TODO: Fix this link when contact me form is finished */}
								<Link component={RouterLink} to="#" underline="none" sx={{ m: "auto" }}>
									Contact
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Nav;
