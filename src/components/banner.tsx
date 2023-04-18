import { Typography } from "@mui/material";
import React from "react";

const Banner = (): JSX.Element => {
	return (
		<Typography variant="h3" component="h1" align="center" fontFamily="Raleway" fontWeight={300} color="primary" sx={{ mt: 1 }}>
			Matthew Todor
		</Typography>
	);
};

export default Banner;
