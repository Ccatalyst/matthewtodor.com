import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutme";
import Contact from "./components/contactme";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Nav from "./components/nav";
import Footer from "./components/footer";
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
				<Footer />
			</Router>
		</div>
	);
}

export default App;
