import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
	return (
		<>
			<div className="navigation">
				<h1>Matthew Todor</h1>
				<div>
					<ul>
						<li>
							<Link activeclassname="active" to="/About">
								About Me
							</Link>
						</li>
						<li>
							<Link activeclassname="active" to="/Portfolio">
								Portfolio
							</Link>
						</li>
						<li>
							<Link activeclassname="active" to="/Contact">
								Contact Me
							</Link>
						</li>
						<li>
							<Link activeclassname="active" to="/Resume">
								Resume
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Nav;
