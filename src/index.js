import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

// Theme is temporarily disabled while the style is being decided. For now, it will use the default MUI theme.

// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <ThemeProvider theme={theme}> */}
		<CssBaseline />
		<App />
		{/* </ThemeProvider> */}
	</React.StrictMode>
);
