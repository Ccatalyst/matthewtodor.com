import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Nav from "./components/nav";
import Grid from "@mui//material/Grid";

function App() {
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Grid
					sx={{
						bgcolor: "background.paper",
					}}
				>
					<Router>
						<br />
						<Nav />
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/Portfolio" element={<Portfolio />} />
							{/* <Route exact path="/Algorithms" element={<Algorithms />} /> */}
						</Routes>
					</Router>
				</Grid>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
