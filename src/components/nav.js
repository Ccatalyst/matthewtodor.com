import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<>
			<div className="navigation">
				<Link to="/">
					<h1>Matthew Todor</h1>
				</Link>
				<div>
					<ul>
						<li>
							<Link activeclassname="active" to="/Portfolio">
								Portfolio
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
