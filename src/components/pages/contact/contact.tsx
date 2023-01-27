import React from "react";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

type Reasons = [
	{
		value: string;
		label: string;
	},
	{
		value: string;
		label: string;
	},
	{
		value: string;
		label: string;
	},
	{
		value: string;
		label: string;
	}
];

const reasons: Reasons = [
	// {
	// 	value: "Default",
	// 	label: "Select...",
	// },
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

type Document = {
	name: string;
	email: string;
	company: string;
	reason: string;
	details: string;
};

const Contact = (): JSX.Element => {
	const [formData, setFormData] = React.useState<Document>({
		name: "",
		email: "",
		company: "",
		reason: reasons[0].value,
		details: "",
	});
	const handleChange = (event: React.ChangeEvent) => {
		let value = (event.target as HTMLInputElement).value;
		const name = (event.target as HTMLInputElement).id;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	console.log(formData);
	return (
		<Grid container component="main" maxWidth="lg" mx="auto" sx={{ backgroundColor: "#12121290" }}>
			<Grid xs={12} mt={3}>
				<Typography
					variant="h4"
					component="h2"
					fontFamily="Raleway"
					fontWeight={200}
					color="primary"
					align="center"
					sx={{ textDecoration: "underline" }}
				>
					Contact Me
				</Typography>
			</Grid>
			<Grid mt={3} xs={11} md={5} mx="auto">
				<TextField required id="name" label="Name" helperText="Required" variant="standard" onChange={handleChange} fullWidth color="primary" />
			</Grid>
			<Grid mt={3} xs={11} md={5} mx="auto">
				<TextField required id="email" label="Email" helperText="Required" variant="standard" onChange={handleChange} fullWidth />
			</Grid>
			<Grid mt={3} xs={11} md={5} mx="auto">
				<TextField id="company" label="Company" helperText="" variant="standard" onChange={handleChange} fullWidth />
			</Grid>
			<Grid mt={3} xs={11} md={5} mx="auto">
				<TextField
					required
					select
					id="reason"
					label="Reason"
					helperText="Why are you reaching out?"
					onChange={handleChange}
					value={formData.reason}
					variant="standard"
					fullWidth
					SelectProps={{ native: false }}
				>
					{reasons.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</Grid>
			<Grid mt={3} xs={11} md={10} mx={{ xs: "auto" }}>
				<TextField
					required
					id="details"
					label="Details"
					helperText="Required"
					variant="standard"
					value={formData.details}
					onChange={handleChange}
					fullWidth
					multiline
					rows={3}
				/>
			</Grid>

			<Grid mt={3} xs={11} md={10} height={15} mx={{ xs: "auto" }}></Grid>

			<Grid container xs={12} my={2} justifyContent="center">
				<Button type="submit" size="large" variant="outlined" sx={{ borderRadius: `${1}px`, px: 6, py: 1, backgroundColor: "#00000090" }}>
					Send
				</Button>
			</Grid>
		</Grid>
	);
};

export default Contact;
