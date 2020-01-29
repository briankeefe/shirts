import React, { useState, useEffect } from "react";
import {
	Box,
	TextField,
	Grid,
	Card,
	CardContent,
	Typography,
	Button
} from "@material-ui/core";
import "./style/style.scss";

function Quote() {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [desc, setDesc] = useState("");

	const changeFirstName = e => {
		setFirstName(e.target.value);
	};

	const changeEmail = e => {
		setEmail(e.target.value);
	};

	const changePhone = e => {
		setPhone(e.target.value);
	};

	const changeDesc = e => {
		setDesc(e.target.value);
	};

	const logSubmission = () => {
		console.log({
			name: firstName,
			email: email,
			number: phone,
			description: desc
		});
	};

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
								<form autoComplete="off">
									<TextField
										className="quote-field"
										variant="outlined"
										label="First Name"
										fullWidth
										value={firstName}
										onChange={changeFirstName}
									/>
									<TextField
										value={email}
										onChange={changeEmail}
										fullWidth
										variant="outlined"
										label="Email"
									/>
									<TextField
										value={phone}
										onChange={changePhone}
										fullWidth
										variant="outlined"
										label="Phone"
									/>
									<TextField
										value={desc}
										onChange={changeDesc}
										id="detail-field"
										variant="outlined"
										multiline
										rows="3"
										fullWidth
										label="What are you looking for"
									/>
									<Button
										onClick={logSubmission}
										style={{ marginTop: "8px" }}
										fullWidth
										variant="contained"
										color="primary"
									>
										Submit
									</Button>
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
