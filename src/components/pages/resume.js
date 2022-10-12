import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import SkillsTable from "../skillscard/skillscard";

const Resume = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<SkillsTable />
			</Grid>
		</Grid>
	);
};

export default Resume;
