import { Typography, Card, CardContent, CardActionArea, Modal, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { React, useState } from "react";
import { CodeBlock, monokaiSublime } from "react-code-blocks";

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid ",
	boxShadow: 24,
	p: 4,
};

const AlgoCard = ({ name, difficulty, code, language, explaination }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Card>
				<CardActionArea onClick={handleOpen}>
					<CardContent>
						<Typography align="center" gutterBottom>
							Kata: {difficulty}
						</Typography>
						<Typography align="center" gutterBottom>
							{name}
						</Typography>
						<Typography align="center">{explaination}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Modal open={open} onClose={handleClose} aria-labelledby={name} aria-describedby={name}>
				<Box style={modalStyle}>
					<CodeBlock text={code} language={language} wrapLines theme={monokaiSublime} />
				</Box>
			</Modal>
		</>
	);
};

export default AlgoCard;
