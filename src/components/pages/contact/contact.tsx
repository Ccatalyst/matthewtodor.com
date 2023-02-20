import React from "react";
import { Button, TextField, Typography, FormControl } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import emailjs from "@emailjs/browser";

interface Document {
	name: string;
	email: string;
	company?: string;
	reason: string;
	details: string;
}

interface DocumentErrors {
	name: string;
	email: string;
	company: string;
	reason: string;
	details: string;
}

type RequiredFields = "name" | "email" | "reason" | "details";

// FIX: because the isButtonDisabled function is only checking to see if the formErrors state isn't empty, it's enabling even if the email input doesn't have a valid email address.
const Contact = (): JSX.Element => {
	const [formData, setFormData] = React.useState<Document>({
		name: "",
		email: "",
		company: "",
		reason: "",
		details: "",
	});

	const [formErrors, setFormErrors] = React.useState<DocumentErrors>({
		name: "",
		email: "",
		company: "",
		reason: "",
		details: "",
	});

	const requiredFields: RequiredFields[] = ["name", "email", "reason", "details"];

	const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
		const name = event.target.id as keyof Document;
		if (name === "company") {
			return;
		}
		if (requiredFields.includes(name)) {
			if (formData[name] === "") {
				setFormErrors({ ...formErrors, [name]: "This field is required!" });
			} else {
				if (name === "email" && !formData[name].match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
					setFormErrors({ ...formErrors, [name]: "This is not a valid email address" });
				} else {
					setFormErrors({ ...formErrors, [name]: "" });
				}
			}
		}
	};
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
	const isButtonDisabled = requiredFields.some((fieldName) => {
		return formData[fieldName].trim() === "";
	});
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
								helperText={formErrors.name}
								variant="standard"
								onChange={handleChange}
								onBlur={handleBlur}
								fullWidth
								color="primary"
								InputLabelProps={{ shrink: !!formData.name }}
								value={formData.name}
								error={!!formErrors.name}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={5} mx="auto">
							<TextField
								required
								id="email"
								label="Email"
								helperText={formErrors.email}
								type="email"
								variant="standard"
								onChange={handleChange}
								onBlur={handleBlur}
								fullWidth
								InputLabelProps={{ shrink: !!formData.email }}
								value={formData.email}
								error={!!formErrors.email}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={5} mx="auto">
							<TextField
								id="company"
								label="Company"
								helperText=""
								variant="standard"
								onChange={handleChange}
								onBlur={handleBlur}
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
								helperText={formErrors.reason}
								onChange={handleChange}
								onBlur={handleBlur}
								variant="standard"
								fullWidth
								InputLabelProps={{ shrink: !!formData.reason }}
								value={formData.reason}
								error={!!formErrors.reason}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={10} mx={{ xs: "auto" }}>
							<TextField
								required
								id="details"
								label="Details"
								helperText={formErrors.details}
								variant="standard"
								onChange={handleChange}
								onBlur={handleBlur}
								fullWidth
								multiline
								rows={3}
								InputLabelProps={{ shrink: !!formData.details }}
								value={formData.details}
								error={!!formErrors.details}
							/>
						</Grid>
						<Grid mt={3} xs={11} md={10} height={15} mx={{ xs: "auto" }}></Grid>
						<Grid container xs={12} my={2} justifyContent="center">
							<Button
								type="submit"
								size="large"
								variant="outlined"
								disabled={isButtonDisabled}
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
