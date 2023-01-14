import React from "react";
import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Home from "./components/pages/home/home";
import Portfolio from "./components/pages/portfolio/portfolio";
import Algorithms from "./components/pages/algorithms/algorithms";
import Resume from "./components/pages/resume/resume";
import Nav from "./components/nav/nav";
import Contact from "./components/pages/contact/contact";
import Footer from "./components/footer/footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto-mono";
import "@fontsource/raleway";

import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "./App.css";
const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#0E9594",
		},
		secondary: {
			main: "#F1FEC6",
		},
		error: {
			main: "#ED6A5A",
		},
		warning: {
			main: "#EAF27C",
		},
		info: {
			main: "#3ABEFF",
		},
		success: {
			main: "#37FF8B",
		},
	},
});

function App() {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				{/* this is here to keep the footer at the bottom of the page */}
				<div className="container">
					<Nav />
					<Particles
						id="tsparticles"
						options={{
							background: {
								color: {
									value: "#121212",
								},
							},
							fpsLimit: 120,
							interactivity: {
								events: {
									onClick: {
										enable: false,
										mode: "push",
									},
									onHover: {
										enable: false,
										mode: "repulse",
									},
									resize: true,
								},
								modes: {
									push: {
										quantity: 4,
									},
									repulse: {
										distance: 200,
										duration: 0.4,
									},
								},
							},
							particles: {
								color: {
									value: "#0E9594",
								},
								links: {
									color: "#0E959420",
									distance: 150,
									enable: true,
									opacity: 0.5,
									width: 1,
								},
								collisions: {
									enable: true,
								},
								move: {
									direction: "none",
									enable: true,
									outModes: {
										default: "bounce",
									},
									random: false,
									speed: 1,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										value_area: 800,
									},
									value: 45,
								},
								opacity: {
									value: 0.5,
								},
								shape: {
									type: "circle",
								},
								size: {
									random: true,
									value: 5,
								},
							},
							detectRetina: true,
						}}
						init={particlesInit}
					/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/algorithms" element={<Algorithms />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/*" element={<Home />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
