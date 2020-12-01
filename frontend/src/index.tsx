import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./translator";
import { App } from "./components/App/App";
import { LoadingScreen } from "./components/Common/Loading/LoadingScreen";

import "./styles/styles.scss";

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<LoadingScreen />}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
