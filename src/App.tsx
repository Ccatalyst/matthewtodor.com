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
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				{/* this is here to keep the footer at the bottom of the page */}
				<div className="container">
					<Nav />
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
