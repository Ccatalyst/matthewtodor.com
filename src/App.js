import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Nav from "./components/nav";
import Grid from "@mui//material/Grid";

function App() {
	return (
		<Grid
			sx={{
				bgcolor: "text.disabled",
			}}
		>
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Portfolio" element={<Portfolio />} />
				</Routes>
			</Router>
		</Grid>
	);
}

export default App;
