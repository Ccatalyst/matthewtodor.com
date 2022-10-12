import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import picture from "../assets/pictures/profilepicture.jpg";
import "./aboutme.css";
const AboutMe = () => {
	return (
		<Paper elevation={2} sx={{ pb: 1 }}>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h4" component="h2" align="center" color="primary" sx={{}}>
						About Me
					</Typography>
				</Grid>
				<Grid item xs={12} md={2} sx={{ pl: 2 }}>
					<Box
						sx={{
							display: "flex",
							m: "auto",
							border: `${2}px solid`,
							borderColor: "primary.main",
							borderRadius: "50%",
							maxWidth: `${450}px`,
						}}
					>
						<img src={picture} alt="Matthew" className="profilepic" />
					</Box>
				</Grid>
				<Grid item xs={12} lg={10}>
					<Paper elevation={4} sx={{ width: 95 / 100, m: "auto" }}>
						<Typography variant="subtitle1" sx={{ m: 1, p: 1 }}>
							I am a web developer, recently graduated from Denver University's Full Stack Web Development Bootcamp! I'm experienced in HTML and CSS,
							as well as Javascript, JQuery, Node, Express, SQL, MongoDB, GraphQL, and ReactJS. I'm currently learning Typescript and AngularJS, with
							plans to learn C# and dive into React Native.
							<br />I have two dogs (Willow and Koa) and a cat (Juniper) with my wife (Kelsea). We enjoy going on walks, spending time together
							reading under the blankets on rainy days, and complaining about our days with each other.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default AboutMe;
