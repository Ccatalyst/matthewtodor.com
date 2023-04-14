import React from "react";
import { Stack, IconButton, Tooltip, TooltipProps, tooltipClasses, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, LinkedIn, MailOutline, PhoneAndroid, Twitter } from "@mui/icons-material/";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
	({ theme }) => ({
		[`& .${tooltipClasses.arrow}`]: {
			color: theme.palette.background.default,
		},
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: theme.palette.background.default,
			color: theme.palette.primary.main,
		},
	})
);

const Footer = (): JSX.Element => {
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
					<IconButton aria-label="email" href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
						<MailOutline color="primary" />
					</IconButton>
				</StyledTooltip>
				<StyledTooltip title="Github" arrow>
					<IconButton aria-label="github" href="https://github.com/matthewtodor" target="_blank" rel="noreferrer">
						<GitHub color="primary" />
					</IconButton>
				</StyledTooltip>
				<StyledTooltip title="LinkedIn" arrow>
					<IconButton aria-label="linkedin" href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
						<LinkedIn color="primary" />
					</IconButton>
				</StyledTooltip>
				<StyledTooltip title="Twitter" arrow>
					<IconButton aria-label="twitter" href="https://twitter.com/matthewtodortt" target="_blank" rel="noreferrer">
						<Twitter color="primary" />
					</IconButton>
				</StyledTooltip>
				<StyledTooltip title="Phone" arrow>
					<IconButton aria-label="phone" href="tel:303-489-5742">
						<PhoneAndroid color="primary" />
					</IconButton>
				</StyledTooltip>
			</Stack>
		</Grid>
	);
};

export default Footer;
