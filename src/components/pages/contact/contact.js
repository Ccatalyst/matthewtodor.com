import React from "react";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const reasons = [
	{
		value: "Regarding an open position",
		label: "Regarding an open position",
	},
	{
		value: "Regarding collaborating on a project",
		label: "Regarding collaborating on a project",
	},
	{
		value: "Curious about a current project",
		label: "Curious about a current project",
	},
	{
		value: "Other",
		label: "Other (specify in details)",
	},
];

const Contact = () => {
	const [reason, setReason] = React.useState("");
	const handleChange = (event) => {
		setReason(event.target.value);
	};
	return (
		<Grid container maxWidth="lg" mx="auto" backgroundColor="#12121290">
			<Grid item xs={12} mt={3}>
				<Typography variant="h4" fontFamily="Raleway" fontWeight={200} color="primary" align="center" sx={{ textDecoration: "underline" }}>
					Contact Me
				</Typography>
			</Grid>
			<Grid item mt={3} xs={11} md={5} mx="auto">
				<TextField required id="name" label="Name" helperText="Required" variant="standard" fullWidth color="primary" />
			</Grid>
			<Grid item mt={3} xs={11} md={5} mx="auto">
				<TextField required id="email" label="Email" helperText="Required" variant="standard" fullWidth />
			</Grid>
			<Grid item mt={3} xs={11} md={5} mx="auto">
				<TextField id="company" label="Company" helperText="" variant="standard" fullWidth />
			</Grid>
			<Grid item mt={3} xs={11} md={5} mx="auto">
				<TextField required select id="reason" label="Reason" helperText="Why are you reaching out?" value={reason} variant="standard" fullWidth>
					{reasons.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</Grid>
			<Grid item mt={3} xs={11} md={10} mx={{ xs: "auto" }}>
				<TextField required id="details" label="Details" helperText="Required" variant="standard" fullWidth multiline rows={3} />
			</Grid>

			<Grid container xs={12} my={2} justifyContent="center">
				<Button type="submit" size="large" variant="outlined" sx={{ borderRadius: `${1}px`, px: 6, py: 1, backgroundColor: "#00000090" }}>
					Send
				</Button>
			</Grid>
		</Grid>
	);
};

export default Contact;
