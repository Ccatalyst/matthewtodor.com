import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";
import Nav from "./components/nav";
import Footer from "./components/footer/footer";


function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Portfolio" element={<Portfolio />} />
					<Route exact path="/Resume" element={<Resume />} />
				</Routes>
				<br />
				<br />
				<br />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
