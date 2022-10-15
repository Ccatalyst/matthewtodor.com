import { React, useState } from "react";
import { Link, Typography, Box, SpeedDial, SpeedDialAction, useMediaQuery, useTheme, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Home, Fingerprint, Description, ContactPage, Construction, Functions } from "@mui/icons-material/";
import { Link as RouterLink } from "react-router-dom";
import Banner from "../banner";
import "./nav.scss";

const Nav = () => {
	// Handling mobile SpeedDial navigation open/close settings
	const [open, setOpen] = useState(false);
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
				<Link component={RouterLink} to="/#" sx={{ mt: 1 }}>
					<ContactPage />
				</Link>
			),
			name: "Contact",
		},
	];

	const [navBar, updateNavbar] = useState(false);

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
					<Grid item xs={12} sm={7} md={5} lg={4} xl={3}>
						<Typography
							variant="h2"
							component="h1"
							fontFamily="Raleway"
							fontWeight={100}
							sx={{
								textAlign: "center",
								[theme.breakpoints.up("md")]: { textAlign: "right" },
								[theme.breakpoints.up("lg")]: { textAlign: "center" },
							}}
						>
							<Link component={RouterLink} to="/" underline="none" className="homeLink">
								<Typography variant="h2" component="span" fontFamily="Raleway" fontWeight={300}>
									M
								</Typography>
								atthew &nbsp;
								<Typography variant="h2" component="span" fontFamily="Raleway" fontWeight={300}>
									T
								</Typography>
								odor
							</Link>
						</Typography>
					</Grid>
					{/* this container holds the links */}
					<Grid container xs={12} md={7} lg={8} xl={9} sx={{ m: "auto", my: { sm: 2, md: 0 }, alignContent: "center", mx: {} }} className="mdNav">
						{/* empty div, used to push links to the right. bad way to do it, fix later */}
						<Grid item xs={0} lg={4} xl={7}></Grid>
						{/* link to portfolio */}
						<Grid item xs={12} sm={3} lg={2} xl={1}>
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
						<Grid item xs={12} sm={3} lg={2} xl={1}>
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
						<Grid item xs={12} sm={3} lg={2} xl={1}>
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
						<Grid item xs={12} sm={3} lg={2} xl={1}>
							<Typography
								variant="h6"
								component="p"
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
					<Grid item xs={11} md={12}>
						<Divider sx={{ borderWidth: 1, borderColor: "primary.main" }} />
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Nav;
