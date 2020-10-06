import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = ({ ...props }) => {
	useEffect(() => {
		document.title = "Not found - Scheduler";
	}, []);

	return (
		<div id="not-found-page" {...props}>
			<div className="error-code">404</div>

			<div className="content">
				<div className="title">Nothing here...</div>

				<Link to="/" className="btn">
					Go to homepage
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
