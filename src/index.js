import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Shirts from "./ShirtsPage";
import Cart from "./Cart";

const routing = (
	<Router>
		<CssBaseline />
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/shirts" component={Shirts} />
			<Route path="/cart" component={Cart} />
		</Switch>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
