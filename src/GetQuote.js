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
			<Grid
				spacing={3}
				container
				justify="center"
				alignItems="center"
				style={{ minHeight: "80vh" }}
			>
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
								<form>
									<TextField
										className="quote-field"
										variant="filled"
										label="First Name"
										fullWidth
									/>
									<TextField fullWidth variant="filled" label="Email" />
									<TextField fullWidth variant="filled" label="Phone" />
									<TextField
										id="detail-field"
										variant="filled"
										multiline
										rows="3"
										fullWidth
										label="What are you looking for"
									/>
								</form>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Quote;
