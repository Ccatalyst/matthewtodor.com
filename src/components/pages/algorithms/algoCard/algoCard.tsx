import { Typography, Card, CardContent, CardActionArea, Modal, Box, Divider } from "@mui/material";
import React from "react";

import { CodeBlock, monokaiSublime } from "react-code-blocks";
import "./algoCard.scss";

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid ",
	boxShadow: 24,
	mr: 3,
};
type AlgoCardProps = {
	name: string;
	difficulty: string;
	code: string;
	language: string;
	explanation: string;
};

const AlgoCard = (algoCardProps: AlgoCardProps): JSX.Element => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Card sx={{ backgroundColor: "#12121299", m: 2 }}>
				<CardActionArea onClick={handleOpen}>
					<CardContent>
						<Typography variant="h6" align="left" gutterBottom fontFamily="Raleway">
							{algoCardProps.difficulty} Kyu
						</Typography>
						<Typography variant="h6" align="center">
							{algoCardProps.name}
						</Typography>
						<Divider sx={{ borderWidth: 1, borderColor: "primary.main" }} />
						<Typography align="center" mt={1} mx={0.5} maxHeight={200} overflow="auto" className="explanation">
							{algoCardProps.explanation}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Modal open={open} onClose={handleClose} aria-labelledby={algoCardProps.name} aria-describedby={algoCardProps.name}>
				<Box sx={modalStyle}>
					<CodeBlock text={algoCardProps.code} language={algoCardProps.language} wrapLines theme={monokaiSublime} />
				</Box>
			</Modal>
		</>
	);
};

export default AlgoCard;
