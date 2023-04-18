import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Nav from "../components/nav/nav";
import Home from "../components/pages/home/home";
import Portfolio from "../components/pages/portfolio/portfolio";
import Algorithms from "../components/pages/algorithms/algorithms";
import Resume from "../components/pages/resume/resume";
import Contact from "../components/pages/contact/contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Nav />,
				children: [
					{
						path: "/",
						element: <Home />,
					},
					{
						path: "portfolio",
						element: <Portfolio />,
					},
					{
						path: "algorithms",
						element: <Algorithms />,
					},
					{
						path: "resume",
						element: <Resume />,
					},
					{
						path: "contact",
						element: <Contact />,
					},
				],
			},
		],
	},
]);

export default router;
