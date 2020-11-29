import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./home-page.scss";

export const HomePage: React.FC = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.title = "Scheduler";
	}, []);

	return (
		<div id="home-page" className="page">
			<h1 className="title">{t("home_page_title")}</h1>

			<img className="pic wave1" src="/images/wave1.png" />
			<img className="pic wave2" src="/images/wave2.png" />
			<img className="pic person-skate" src="/images/personSkate.png" />
			<img className="pic person-skate2" src="/images/personSkate2.png" />

			<Link to="/calendar" className="btn">
				{t("home_page_calendar_button")}
			</Link>
		</div>
	);
};
