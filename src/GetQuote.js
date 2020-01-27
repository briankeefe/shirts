import React from "react";
import {
	Box,
	TextField,
	Grid,
	Card,
	CardContent,
	Typography
} from "@material-ui/core";
import "./style/style.scss";

function Quote() {
	return (
		<Box>
			<Grid spacing={3} container justify="center" align="center">
				<Grid item xs={12} md={8}>
					<Card>
						<CardContent>
							<Typography className="center-text" variant="h4">
								Custom Apparel Made Simple
							</Typography>
							<Typography className="center-text" variant="subtitle1">
								You are about to be working with the best team ever.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card>
						<CardContent>
							<Box display="flex" flexDirection="column">
								<Typography className="center-text" variant="h5">
									Get a Quote Today!
								</Typography>
								<TextField variant="outlined" label="First Name" />
								<TextField variant="outlined" label="Email" />
								<TextField variant="outlined" label="Phone" />
								<TextField
									id="detail-field"
									variant="outlined"
									multiline
									rows="3"
									label="What are you looking for"
								/>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Quote;
