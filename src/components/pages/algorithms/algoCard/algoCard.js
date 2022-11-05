import { Typography, Card, CardContent, CardActionArea, Modal, Box, Divider } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2/Grid2";
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

const AlgoCard = ({ name, difficulty, code, language, explanation }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Card sx={{ backgroundColor: "#12121299", m: 2 }}>
				<CardActionArea onClick={handleOpen}>
					<CardContent>
						<Typography variant="h6" align="left" gutterBottom fontFamily="Raleway">
							{difficulty} Kyu
						</Typography>
						<Typography variant="h6" align="center">
							{name}
						</Typography>
						<Divider sx={{ borderWidth: 1, borderColor: "primary.main" }} />
						<Typography align="center" mt={1} maxHeight={200} overflow="auto">
							{explanation}
						</Typography>
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
