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
			<h1>{t("home_page_title")}</h1>

			<Link to="/calendar" className="btn">
				{t("home_page_calendar_button")}
			</Link>
		</div>
	);
};
