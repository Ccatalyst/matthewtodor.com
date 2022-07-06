import React, { useState } from "react";

function Home() {
	return (
		<>
			<h2>About Me</h2>
			<div className="aboutMe">
				<img src="https://i.imgur.com/ZVsB0rV.jpg" />
				<p id="aboutMeContent">
					I am a web developer, recently graduated from Denver University's Full Stack Web Development Bootcamp! I'm experienced in HTML and CSS, as
					well as Javascript, JQuery, Node, Express, SQL, MongoDB, GraphQL, and ReactJS. I'm currently learning Typescript and AngularJS, with plans
					to learn C# and dive into React Native.
					<br />I have two dogs (Willow and Koa) and a cat (Juniper) with my wife (Kelsea). We enjoy going on walks, spending time together reading
					under the blankets on rainy days, and complaining about our days with each other.
				</p>
			</div>
		</>
	);
}

export default Home;
