import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = ({ ...props }) => {
	return (
		<div id="home-page" className="page" {...props}>
			<h1>Home</h1>
			
			<Link to="/calendar" className="btn">
				Go to calendar
			</Link>
		</div>
	);
};

export default HomePage;
