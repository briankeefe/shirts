import React from "react";
import { Box, Typography } from "@material-ui/core";
import Bars from "./layout/Navigation";
import "./style/style.scss";

function Cart() {
	return (
		<Box>
			<Bars />
			<Box className="page-box">
				<Typography variant="h4">Cart Page</Typography>
			</Box>
			<Box className="page-box">
				<Typography variant="h4">Cart Page</Typography>
			</Box>
			<Box className="page-box">
				<Typography variant="h4">Cart Page</Typography>
			</Box>
		</Box>
	);
}

export default Cart;
