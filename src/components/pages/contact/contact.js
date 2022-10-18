import React from "react";
import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Contact = () => {
	return (
		<Grid container maxWidth="xl" mx="auto" backgroundColor="#12121290">
			<Grid item xs={12} mt={3}>
				<Typography variant="h4" fontFamily="Raleway" fontWeight={200} color="primary" align="center" sx={{ textDecoration: "underline" }}>
					Contact Me
				</Typography>
			</Grid>
			<Grid item mt={3} xs={11} md={6} mx="auto">
				<TextField id="name" label="Name" helperText="Required" variant="filled" fullWidth color="primary" />
			</Grid>
			<Grid item mt={3}>
				<TextField required id="email" label="Email" helperText="Required" variant="filled" fullWidth />
			</Grid>
			<Grid item mt={3}>
				<TextField id="company" label="Company" />
			</Grid>
			<Grid item mt={3}>
				<TextField id="details" label="Details" />
			</Grid>
		</Grid>
	);
};

export default Contact;
