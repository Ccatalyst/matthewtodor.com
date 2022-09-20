import * as React from "react";
import { createTheme, ThemeProvider, styled, ThemeOptions } from "@mui/material";

let theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#439775",
		},
		secondary: {
			main: "#ea6ba1",
		},
		success: {
			main: "#43974b",
		},
		info: {
			main: "#436597",
		},
		warning: {
			main: "#F45D01",
		},
		error: {
			main: "#d02232",
		},
	},
});

export default theme;
