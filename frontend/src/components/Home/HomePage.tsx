import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { combineClassNames } from "../../utils/components/classNames";

import "./home-page.scss";

export const HomePage: React.FC = () => {
	useEffect(() => {
		document.title = "Scheduler";
	}, []);

	return (
		<div id="home-page" className="page">
			<img className={combineClassNames("pic", "wave1")} src="/images/wave1.png" />
			<img className={combineClassNames("pic", "wave2")} src="/images/wave2.png" />
			<img className={combineClassNames("pic", "person-skate")} src="/images/personSkate.png" />
			<img className={combineClassNames("pic", "person-skate2")} src="/images/personSkate2.png" />
			<h1 className="head">Home</h1>

			<Link to="/calendar" className={combineClassNames ("btn", "home")}>
				Go to calendar
			</Link>
		</div>
	);
};
