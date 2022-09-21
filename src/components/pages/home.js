import React from "react";
import resume from "../../assets/resume/MatthewTodorResume.pdf";
import picture from "../../assets/pictures/profilepicture.jpg";

class Home extends React.Component {
	render() {
		return (
			<>
				<h2>About Me</h2>
				<div className="aboutMe">
					<img src={picture} alt="headshot of Matthew" />
					<p id="aboutMeContent">
						I am a web developer, recently graduated from Denver University's Full Stack Web Development Bootcamp! I'm experienced in HTML and CSS, as
						well as Javascript, JQuery, Node, Express, SQL, MongoDB, GraphQL, and ReactJS. I'm currently learning Typescript and AngularJS, with plans
						to learn C# and dive into React Native.
						<br />I have two dogs (Willow and Koa) and a cat (Juniper) with my wife (Kelsea). We enjoy going on walks, spending time together reading
						under the blankets on rainy days, and complaining about our days with each other.
					</p>
				</div>
				<div>
					<h2>Resume and Proficiencies</h2>
				</div>
				<div className="resumeLink">
					<a href={resume} target="_blank" rel="noreferrer">
						Download Resume
					</a>
				</div>
				<div className="skills">
					<div className="skillList">
						<ul>
							<h3>Languages</h3>
							<li>Javascript</li>
							<li>HTML</li>
							<li>CSS</li>
						</ul>
					</div>
					<div className="skillList">
						<ul>
							<h3>Tools</h3>
							<li>Node</li>
							<li>Express</li>
							<li>SQL</li>
							<li>MongoDB</li>
							<li>React</li>
							<li>Handlebars</li>
							<li>GraphQL</li>
							<li>Google</li>
						</ul>
					</div>
					<div className="skillList">
						<ul>
							<h3>Applications</h3>
							<li>Github</li>
							<li>Mongo Compass</li>
							<li>Insomnia</li>
							<li>Apollo Sandbox</li>
							<li>MySQL</li>
							<li>Heroku</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
