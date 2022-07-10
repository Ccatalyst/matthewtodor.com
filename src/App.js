import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Nav from "./components/nav";
import Grid from "@mui//material/Grid";

function App() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	export function ToggleColorMode() {
		const [mode, setMode] = React.useState("light");
		const colorMode = React.useMemo(
			() => ({
				toggleColorMode: () => {
					setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
				},
			}),
			[]
		);

		const theme = React.useMemo(
			() =>
				createTheme({
					palette: {
						mode,
					},
				}),
			[mode]
		);
	}
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
