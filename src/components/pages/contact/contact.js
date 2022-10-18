import React from "react";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Contact = () => {
	return (
		<Grid container maxWidth="xl" mx="auto">
			<Grid item mt={3}>
				<TextField required id="name" label="Name" />
			</Grid>
			<Grid item mt={3}>
				<TextField required id="email" label="Email" />
			</Grid>
			<Grid item mt={3}>
				<TextField id="company" label="Company" />
			</Grid>
		</Grid>
	);
};

export default Contact;
