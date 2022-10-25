import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import ResumeContent from "./resumecontent/resumecontent";

const Resume = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<ResumeContent />
			</Grid>
		</Grid>
	);
};

export default Resume;
