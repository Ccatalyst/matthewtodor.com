import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<>
			<div>
				<ul>
					<li>
						<Link activeClassName="active" isActive={() => window.location.pathname === "/About"} to="/About">
							About Me
						</Link>
					</li>
					<li>
						<Link activeClassName="active" isActive={() => window.location.pathname === "/Portfolio"} to="/Portfolio">
							Portfolio
						</Link>
					</li>
					<li>
						<Link activeClassName="active" isActive={() => window.location.pathname === "/Contact"} to="/Contact">
							Contact Me
						</Link>
					</li>
					<li>
						<Link activeClassName="active" isActive={() => window.location.pathname === "/Resume"} to="/Resume">
							Resume
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Nav;
