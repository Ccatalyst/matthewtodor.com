import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutMe from "./components/aboutme";
import Contact from "./components/contactme";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Nav from "./components/nav";

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={AboutMe} />
					<Route exact path="/About" component={AboutMe} />
					<Route exact path="/Contact" component={Contact} />
					<Route exact path="/Portfolio" component={Portfolio} />
					<Route exact path="/Resume" component={Resume} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
