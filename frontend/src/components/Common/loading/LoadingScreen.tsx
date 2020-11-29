import React from "react";

import { LoadingIndicator } from "./LoadingIndicator";

import "./loading-screen.scss";

export const LoadingScreen = () => (
	<div className="page loading-page">
		<LoadingIndicator />
	</div>
);
