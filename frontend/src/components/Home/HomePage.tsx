import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage: React.FC = ({ ...props }) => {
	useEffect(() => {
		document.title = "Scheduler";
	}, []);

	return (
		<div id="home-page" className="page" {...props}>
			<h1>Home</h1>

			<Link to="/calendar" className="btn">
				Go to calendar
			</Link>
		</div>
	);
};
