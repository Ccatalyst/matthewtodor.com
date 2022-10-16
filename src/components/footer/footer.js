import React from "react";
import { Stack, IconButton, Tooltip, tooltipClasses, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, LinkedIn, MailOutline, PhoneAndroid, Twitter } from "@mui/icons-material/";

const StyledTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: theme.palette.background.default,
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.primary.main,
	},
}));

const Footer = () => {
	return (
		<Grid
			container
			sx={{ width: { xs: `calc(100% - ${74}px)`, sm: 1 / 1 }, backgroundColor: "#121212e6" }}
			component="footer"
			position="absolute"
			bottom={`${16}px`}
			my={`${7}px`}
			px={0.5}
		>
			<Stack direction="row" spacing="auto" sx={{ m: "auto", width: 1 / 1, border: `${1}px solid #0E9594` }}>
				<StyledTooltip title="Email" arrow>
					<a href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
						<IconButton fontSize="large" name="Email" aria-label="email">
							<MailOutline color="primary" />
						</IconButton>
					</a>
				</StyledTooltip>
				<StyledTooltip title="Github" arrow>
					<a href="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
						<IconButton name="Github" aria-label="github">
							<GitHub color="primary" />
						</IconButton>
					</a>
				</StyledTooltip>
				<StyledTooltip title="LinkedIn" arrow>
					<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
						<IconButton name="LinkedIn" aria-label="linkedin">
							<LinkedIn color="primary" />
						</IconButton>
					</a>
				</StyledTooltip>
				<StyledTooltip title="Twitter" arrow>
					<a href="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
						<IconButton name="Twitter" aria-label="twitter">
							<Twitter color="primary" />
						</IconButton>
					</a>
				</StyledTooltip>
				<StyledTooltip title="Phone" arrow>
					<a href="tel:303-489-5742">
						<IconButton name="Phone" aria-label="phone">
							<PhoneAndroid color="primary" />
						</IconButton>
					</a>
				</StyledTooltip>
			</Stack>
		</Grid>
	);
};

export default Footer;
