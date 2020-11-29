import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "../Common/Inputs/Button";
import { LeftArrowIcon } from "../Common/Icons/LeftArrowIcon";
import { RightArrowIcon } from "../Common/Icons/RightArrowIcon";
import { useEventsContext } from "../../contexts/EventsContext";
import { LoadingIndicator } from "../Common/loading/LoadingIndicator";
import { Locale } from "../../models/locales";
import { useLocaleContext } from "../../contexts/LocaleContext";
import { CollapseIcon } from "../Common/Icons/CollapseIcon";

import "./top-panel.scss";

interface TopPanelProps {
	onToday: () => void;
	onPrev: () => void;
	onNext: () => void;
	dateInterval: string;
	onSidebarCollapse: () => void;
}

export const TopPanel: React.FC<TopPanelProps> = ({ onToday, onPrev, onNext, dateInterval, onSidebarCollapse }) => {
	const { loading } = useEventsContext();
	const { locale } = useLocaleContext();
	const { t, i18n } = useTranslation();

	const changeLocale = (locale: Locale) => {
		i18n.changeLanguage(locale);
	};

	return (
		<div className="top-panel">
			<Button className="buttonCollapsed" icon={<CollapseIcon/>} onClick={onSidebarCollapse} />
			<div className="logo-container">
				<Link to="/" className="text">
					{t("app_title")}
				</Link>
				{loading && <LoadingIndicator />}
			</div>

			<div className="navigation-buttons">
				<Button className="today-btn" text={t("top_panel_today_button")} onClick={onToday} />

				<div className="arrow-buttons">
					<Button className="arrow-btn left-arrow" icon={<LeftArrowIcon />} onClick={onPrev} />
					<Button className="arrow-btn right-arrow" icon={<RightArrowIcon />} onClick={onNext} />
				</div>
			</div>

			<div className="date-interval">{dateInterval}</div>

			<div className="locale-buttons">
				<Button
					className="locale-btn en"
					text="EN"
					onClick={() => changeLocale(Locale.EN)}
					active={locale === Locale.EN}
				/>
				<Button
					className="locale-btn ua"
					text="UA"
					onClick={() => changeLocale(Locale.UA)}
					active={locale === Locale.UA}
				/>
			</div>
		</div>
	);
};
