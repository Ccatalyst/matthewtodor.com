import React, { useState } from "react";
import "./portfolio.css";

function Portfolio() {
	// Here we set two state variables for firstName and lastName using `useState`

	return (
		<>
			<div>
				<h2>Projects</h2>
			</div>
			<div className="projects">
				<div className="card">
					<a href="https://github.com/samanthajrexroat/DiscCover" target="_blank">
						<h2 className="card-title">DiscCover</h2>
						<img src="https://i.imgur.com/8VeGoPp.png" alt="" />
						<p className="card-desc">
							A basic website that uses the Shazam API and Youtube API to find similar artists to the searched song or artist. Built using JQuery.
						</p>
					</a>
				</div>
				<div className="card">
					<a href="https://github.com/Ccatalyst/Find-Your-Next-Pet" target="_blank">
						<h2 className="card-title">Find Your Next Pet</h2>
						<img src="https://i.imgur.com/u3cLMG8.png" alt="" />
						<p className="card-desc">
							A site built using HandlbarsJs. It searches for cats or dogs up for adoption via an API run by Purina Pet Foods
						</p>
					</a>
				</div>
				<div className="card">
					<a href="https://github.com/Ccatalyst/Social-Network-API" target="_blank">
						<h2 className="card-title">Social Network API</h2>
						<img src="https://i.imgur.com/BxowT6s.png" alt="" />
						<p className="card-desc">
							A backend project using MongoDB and Mongoose. An API that has users who can post "thoughts", and have other users respond to the
							thoughts with responses. Allows for users to add friends as well.
						</p>
					</a>
				</div>
				<div className="card">
					<a href="https://github.com/Ccatalyst/Rejex-Tutorial" target="_blank">
						<h2 className="card-title">Regex URL Tutorial</h2>
						<img src="https://i.imgur.com/8fo2w7U.png" alt="" />
						<p className="card-desc">
							A tutorial covering regular expressions for URLs. Outlines an expression that allows for the inclusion/exclusion of portions of a url,
							such as "http".
						</p>
					</a>
				</div>
				<div className="card">
					<a href="https://github.com/samanthajrexroat/Friender" target="_blank">
						<h2 className="card-title">Friender</h2>
						<img src="https://i.imgur.com/yeIUxGo.png" alt="" />
						<p className="card-desc">
							A social networking site built using React, MongoDB and GraphQL. Allows for the creation of a user account, and the ability to add
							hobbies, and find friends based on those hobbies.
						</p>
					</a>
				</div>
				<div className="card">
					<a href="https://github.com/Ccatalyst/Employee-Tracker" target="_blank">
						<h2 className="card-title">Employee Tracker</h2>
						<img src="https://i.imgur.com/V8FiMhj.png" alt="" />
						<p className="card-desc">
							A backend application based on nodejs and SQL that allows for manipulation of employees' job information within a company.
						</p>
					</a>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
