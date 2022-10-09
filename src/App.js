import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import PropTypes from "prop-types";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Algorithms from "./components/pages/algorithms";
import Nav from "./components/nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const golfTheme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#3e5641",
		},
		secondary: {
			main: "#00a7e1",
		},
		success: {
			main: "#43974b",
		},
		info: {
			main: "#436597",
		},
		warning: {
			main: "#F45D01",
		},
		error: {
			main: "#85161e",
		},
		background: {
			default: "#c6ae82",
			paper: "#d7c7a8",
		},
	},
});
function Router(props) {
	const { children } = props;
	if (typeof window === "undefined") {
		return <StaticRouter location="/">{children}</StaticRouter>;
	}
	return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
	children: PropTypes.node,
};
function App() {
	return (
		<ThemeProvider theme={golfTheme}>
			<CssBaseline />
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Portfolio" element={<Portfolio />} />
					<Route exact path="/Algorithms" element={<Algorithms />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
