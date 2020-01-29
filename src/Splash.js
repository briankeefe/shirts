import React from "react";
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	ButtonGroup,
	Button
} from "@material-ui/core";
import ShirtStacks from "./content/shirtStacks.jpg";
import "./style/style.scss";
import { Link } from "react-router-dom";

export default function Splash() {
	return (
		<Box className="splash-page" style={{ backgroundImage: { ShirtStacks } }}>
			<Grid container spacing={1}>
				<Grid item xs={12} md={6}>
					<Card>
						<Box className="no-grow">
							<img src={ShirtStacks} id="shirt-stacks"></img>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card>
						<CardContent>
							<Box className="translucent">
								<Typography
									style={{ color: "white" }}
									className="league"
									variant="h2"
								>
									T-Shirts done right
								</Typography>
							</Box>
							<Grid container justify="center" direction="column">
								<Typography align="center" variant="h4">
									Learn how you can join Ink Ahead!
								</Typography>
								<Link className="link" to="/shirts">
									<Button
										style={{ margin: "auto" }}
										variant="contained"
										color="primary"
										className="link"
									>
										Quote
									</Button>
								</Link>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}
