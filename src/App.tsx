import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto-mono";
import "@fontsource/raleway";

import "./App.css";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
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
			{/* this is here to keep the footer at the bottom of the page */}
			<div className="container">
				<Nav />
				<Outlet />
			</div>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
