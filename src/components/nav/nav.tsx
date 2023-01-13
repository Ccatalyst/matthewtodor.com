import React from "react";
import { Link, Typography, Box, SpeedDial, SpeedDialAction, useMediaQuery, useTheme, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Home, Fingerprint, Description, ContactPage, Construction, Functions } from "@mui/icons-material/";
import { Link as RouterLink } from "react-router-dom";
import Banner from "../banner";
import "./nav.scss";

const Nav = (): JSX.Element => {
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
					<Construction />
				</Link>
			),
			name: "Portfolio",
		},
		{
			icon: (
				<Link component={RouterLink} to="/algorithms" sx={{ mt: 1 }}>
					<Functions />
				</Link>
			),
			name: "Algorithms",
		},
		{
			icon: (
				<Link component={RouterLink} to="/resume" sx={{ mt: 1 }}>
					<Description />
				</Link>
			),
			name: "Resume",
		},
		{
			icon: (
				<Link component={RouterLink} to="/contact" sx={{ mt: 1 }}>
					<ContactPage />
				</Link>
			),
			name: "Contact",
		},
	];

	const [navBar, updateNavbar] = React.useState(false);

	function scrollHandler() {
		if (window.scrollY >= 10) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);
	// checking if the screen width is below the small breakpoint
	const theme = useTheme();
	return (
		<>
			{useMediaQuery(theme.breakpoints.down("sm")) ? (
				<>
					<Banner />
					<Box>
						<SpeedDial
							FabProps={{
								sx: {
									bgcolor: "primary.main",
									"&:hover": {
										bgcolor: "primary.main",
									},
									color: "background.paper",
								},
							}}
							ariaLabel="Navigation"
							sx={{ position: "fixed", bottom: 16, right: 16 }}
							icon={<Fingerprint />}
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
					className={navBar ? "sticky" : "navbar"}
				>
					<Grid xs={12} sm={7} md={5} lg={4} xl={4}>
						<Typography
							variant="h2"
							component="h1"
							fontFamily="Raleway"
							fontWeight={200}
							sx={{
								textAlign: "center",
								[theme.breakpoints.up("md")]: { textAlign: "right" },
								[theme.breakpoints.up("lg")]: { textAlign: "center" },
							}}
						>
							<Link component={RouterLink} to="/" underline="none" className="homeLink">
								Matthew&nbsp;Todor
							</Link>
						</Typography>
					</Grid>
					{/* this container holds the links */}
					<Grid container xs={12} md={7} lg={8} xl={8} sx={{ m: "auto", my: { sm: 2, md: 0 }, alignContent: "center", mx: {} }} className="mdNav">
						{/* empty div, used to push links to the right. bad way to do it, fix later */}
						<Grid xs={0} lg={4} xl={7}></Grid>
						{/* link to portfolio */}
						<Grid xs={12} sm={3} lg={2} xl={1} sx={{ mx: { xl: "auto" } }}>
							<Typography
								variant="h6"
								component="p"
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
						<Grid xs={12} sm={3} lg={2} xl={1} sx={{ minWidth: { xl: 113.3 }, mx: { xl: "auto" } }}>
							<Typography
								variant="h6"
								component="p"
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
						<Grid xs={12} sm={3} lg={2} xl={1} sx={{ mx: { xl: "auto" } }}>
							<Typography
								variant="h6"
								component="p"
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
						<Grid xs={12} sm={3} lg={2} xl={1} sx={{ mx: { xl: "auto" } }}>
							<Typography
								variant="h6"
								component="p"
								sx={{
									textAlign: "center",
								}}
							>
								<Link component={RouterLink} to="/contact" underline="none" sx={{ m: "auto" }}>
									Contact
								</Link>
							</Typography>
						</Grid>
					</Grid>
					<Grid xs={11} md={12}>
						<Divider sx={{ borderWidth: 1, borderColor: "primary.main" }} />
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Nav;
