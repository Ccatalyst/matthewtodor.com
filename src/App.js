import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Nav from "./components/nav";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/Portfolio" element={<Portfolio />} />
				{/* <Route exact path="/Algorithms" element={<Algorithms />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
