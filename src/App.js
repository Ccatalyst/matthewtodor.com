import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutme/aboutme";
import Contact from "./components/contactme/contactme";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";
import Nav from "./components/nav";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<AboutMe />} />
					<Route exact path="/About" element={<AboutMe />} />
					<Route exact path="/Contact" element={<Contact />} />
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
