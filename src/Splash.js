import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import ShirtStacks from "./content/shirtStacks.jpg";
import "./style/style.scss";

export default function Splash() {
	return (
		<Box className="splash-page" style={{ backgroundImage: { ShirtStacks } }}>
			<Grid container>
				<Grid item xs={12} md={8}>
					<img
						style={{
							maxHeight: "70vh",
							maxWidth: "70vw",
							marginTop: "12px",
							marginBottom: "0"
						}}
						src={ShirtStacks}
					></img>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box className="translucent">
						<Typography
							style={{ color: "white" }}
							className="league"
							variant="h2"
						>
							T-Shirts done right
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
