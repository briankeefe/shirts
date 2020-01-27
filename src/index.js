import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Shirts from "./ShirtsPage";

const routing = (
	<Router>
		<CssBaseline />
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/shirts" component={Shirts} />
			<Route path="/cart" component={Shirts} />
		</Switch>
	</Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
