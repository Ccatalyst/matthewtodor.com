import { Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const AlgoCard = ({ name, difficulty, code, language }) => {
	return (
		<Card>
			<CardContent>
				<Typography>Kata: {difficulty}</Typography>
				<Typography align="center">{name}</Typography>
				<CodeBlock text={code} language={language} wrapLines theme={dracula} />
			</CardContent>
		</Card>
	);
};

export default AlgoCard;
