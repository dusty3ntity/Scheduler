import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "react-calendar/dist/Calendar.css";

import "./styles/styles.scss";

import { history } from "./config/history";
import App from "./components/app/App";

ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
