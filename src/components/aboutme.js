import { Typography, Paper } from "@mui/material";
import React from "react";
import picture from "../assets/pictures/profilepicture.jpg";
const AboutMe = () => {
	return (
		<Paper elevation={2}>
			<Typography variant="h2" component="h2" align="center">
				About Me
			</Typography>
			<img src={picture} alt="Matthew" />
			<Typography variant="body2">
				I am a web developer, recently graduated from Denver University's Full Stack Web Development Bootcamp! I'm experienced in HTML and CSS, as
				well as Javascript, JQuery, Node, Express, SQL, MongoDB, GraphQL, and ReactJS. I'm currently learning Typescript and AngularJS, with plans to
				learn C# and dive into React Native.
				<br />I have two dogs (Willow and Koa) and a cat (Juniper) with my wife (Kelsea). We enjoy going on walks, spending time together reading
				under the blankets on rainy days, and complaining about our days with each other.
			</Typography>
		</Paper>
	);
};

export default AboutMe;
