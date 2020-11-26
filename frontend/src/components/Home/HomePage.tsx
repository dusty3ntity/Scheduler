import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./home-page.scss";

export const HomePage: React.FC = () => {
	useEffect(() => {
		document.title = "Scheduler";
	}, []);

	return (
		<div id="home-page" className="page">
			<h1>Home</h1>

			<Link to="/calendar" className="btn">
				Go to calendar
			</Link>
		</div>
	);
};
