import { Typography, Card, CardContent, CardActionArea, Modal, Box, Divider } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { React, useState } from "react";
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
						<Typography align="center" mt={1} mx={0.5} maxHeight={200} overflow="auto" className="explanation">
							{explanation}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Modal open={open} onClose={handleClose} aria-labelledby={name} aria-describedby={name}>
				<Box style={modalStyle}>
					{/* If the block of code is larger than the size of the screen, there isn't any way to click/tap out of it. It "bricks" the experience on phones. Currently an issue with latest algo added 11/23 */}
					<CodeBlock text={code} language={language} wrapLines theme={monokaiSublime} />
				</Box>
			</Modal>
		</>
	);
};

export default AlgoCard;
