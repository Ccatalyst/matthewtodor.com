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
	nameBoolean: boolean;
	emailBoolean: boolean;
	reasonBoolean: boolean;
	detailsBoolean: boolean;
}

// TODO: When a field is deselected and is blank, an error is presented to the user using the error prop of the textfield component. If the required fields are not filled, the email button is disabled.
// FIX: the error prop is checked on mounting, so the value needs to be false on page load, but checked if a required input loses focus and is still empty. I think the onBlur can work, but it needs more looking into because of the typescript validation that's running. Right now the check is happening in the handleChange function, which is too much, and is looking for the opposite of the error prop on the component.

const Contact = (): JSX.Element => {
	const [formData, setFormData] = React.useState<Document>({
		name: "",
		email: "",
		company: "",
		reason: "",
		details: "",
		nameBoolean: false,
		emailBoolean: false,
		reasonBoolean: false,
		detailsBoolean: false,
	});
	const [buttonState, setButtonState] = React.useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = (event.target as HTMLInputElement).value;
		const name = (event.target as HTMLInputElement).id;
		const errorBoolean = name + "Boolean";
		const errorValue = value === "";

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
			[errorBoolean]: errorValue,
		}));
		if (formData.nameBoolean === true && formData.emailBoolean === true && formData.reasonBoolean === true && formData.detailsBoolean === true) {
			setButtonState(false);
		}
		console.log(formData.nameBoolean, formData.emailBoolean, formData.reasonBoolean, formData.detailsBoolean, buttonState);
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
				nameBoolean: false,
				emailBoolean: false,
				reasonBoolean: false,
				detailsBoolean: false,
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
								helperText={formData.nameBoolean ? "This field is required" : ""}
								variant="standard"
								onChange={handleChange}
								fullWidth
								color="primary"
								InputLabelProps={{ shrink: !!formData.name }}
								value={formData.name}
								error={formData.nameBoolean}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={5} mx="auto">
							<TextField
								required
								id="email"
								label="Email"
								helperText={formData.emailBoolean ? "This field is required" : ""}
								variant="standard"
								onChange={handleChange}
								fullWidth
								InputLabelProps={{ shrink: !!formData.email }}
								value={formData.email}
								error={formData.emailBoolean}
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
								helperText={formData.reasonBoolean ? "This field is required" : ""}
								onChange={handleChange}
								variant="standard"
								fullWidth
								InputLabelProps={{ shrink: !!formData.reason }}
								value={formData.reason}
								error={formData.reasonBoolean}
							></TextField>
						</Grid>
						<Grid mt={3} xs={11} md={10} mx={{ xs: "auto" }}>
							<TextField
								required
								id="details"
								label="Details"
								helperText={formData.detailsBoolean ? "This field is required" : ""}
								variant="standard"
								onChange={handleChange}
								fullWidth
								multiline
								rows={3}
								InputLabelProps={{ shrink: !!formData.details }}
								value={formData.details}
								error={formData.detailsBoolean}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={10} height={15} mx={{ xs: "auto" }}></Grid>
						<Grid container xs={12} my={2} justifyContent="center">
							<Button
								type="submit"
								size="large"
								variant="outlined"
								disabled={buttonState}
								sx={{ borderRadius: `${1}px`, px: 6, py: 1, backgroundColor: "#00000090" }}
							>
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
