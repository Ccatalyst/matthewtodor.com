import React from "react";
import { Button, TextField, Typography, FormControl } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import emailjs from "@emailjs/browser";

interface Document {
	name: string;
	email: string;
	company: string;
	reason: string;
	details: string;
}

const Contact = (): JSX.Element => {
	const [formData, setFormData] = React.useState<Document>({
		name: "",
		email: "",
		company: "",
		reason: "",
		details: "",
	});
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = (event.target as HTMLInputElement).value;
		const name = (event.target as HTMLInputElement).id;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const emailParams = { name: formData.name, email: formData.email, company: formData.company, reason: formData.reason, details: formData.details };

		try {
			await emailjs.send("portoflio_site", "contact_form", emailParams, "ypNyTND79NhxGgTWZ");
			setFormData({
				name: "",
				email: "",
				company: "",
				reason: "",
				details: "",
			});
		} catch (err) {
			console.error("Error:", err);
		}
	};

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
			<Grid container xs={12} mt={3}>
				<FormControl component="form" onSubmit={sendEmail} sx={{ width: 1 / 1 }}>
					<Grid container xs={12} mt={3}>
						<Grid mt={3} xs={11} md={5} mx="auto">
							<TextField
								required
								id="name"
								label="Name"
								helperText="Required"
								variant="standard"
								onChange={handleChange}
								fullWidth
								color="primary"
								InputLabelProps={{ shrink: !!formData.name }}
								value={formData.name}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={5} mx="auto">
							<TextField
								required
								id="email"
								label="Email"
								helperText="Required"
								variant="standard"
								onChange={handleChange}
								fullWidth
								InputLabelProps={{ shrink: !!formData.email }}
								value={formData.email}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={5} mx="auto">
							<TextField
								id="company"
								label="Company"
								helperText=""
								variant="standard"
								onChange={handleChange}
								fullWidth
								InputLabelProps={{ shrink: !!formData.company }}
								value={formData.company}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={5} mx="auto">
							<TextField
								required
								id="reason"
								label="Reason"
								helperText="Why are you reaching out?"
								onChange={handleChange}
								variant="standard"
								fullWidth
								InputLabelProps={{ shrink: !!formData.reason }}
								value={formData.reason}
							></TextField>
						</Grid>
						<Grid mt={3} xs={11} md={10} mx={{ xs: "auto" }}>
							<TextField
								required
								id="details"
								label="Details"
								helperText="Required"
								variant="standard"
								onChange={handleChange}
								fullWidth
								multiline
								rows={3}
								InputLabelProps={{ shrink: !!formData.details }}
								value={formData.details}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={10} height={15} mx={{ xs: "auto" }}></Grid>
						<Grid container xs={12} my={2} justifyContent="center">
							<Button type="submit" size="large" variant="outlined" sx={{ borderRadius: `${1}px`, px: 6, py: 1, backgroundColor: "#00000090" }}>
								Send
							</Button>
						</Grid>
					</Grid>
				</FormControl>
			</Grid>
		</Grid>
	);
};

export default Contact;
