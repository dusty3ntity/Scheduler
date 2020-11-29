import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useEventsContext } from "../../contexts/EventsContext";
import { useLocaleContext } from "../../contexts/LocaleContext";
import { Locale } from "../../models/locales";
import { LeftArrowIcon } from "../Common/Icons/LeftArrowIcon";
import { MenuIcon } from "../Common/Icons/MenuIcon";
import { RightArrowIcon } from "../Common/Icons/RightArrowIcon";
import { Button } from "../Common/Inputs/Button";
import { LoadingIndicator } from "../Common/loading/LoadingIndicator";

import "./top-panel.scss";

interface TopPanelProps {
	onToday: () => void;
	onPrev: () => void;
	onNext: () => void;
	dateInterval: string;
	onViewSwitch: () => void;
	isWeekView: boolean;
	onSidebarCollapse: () => void;
}

export const TopPanel: React.FC<TopPanelProps> = ({
	onToday,
	onPrev,
	onNext,
	dateInterval,
	onSidebarCollapse,
	onViewSwitch,
	isWeekView,
}) => {
	const { loading } = useEventsContext();
	const { locale } = useLocaleContext();
	const { t, i18n } = useTranslation();

	const changeLocale = (locale: Locale) => {
		i18n.changeLanguage(locale);
	};

	return (
		<div className="top-panel">
			<Button className="menu-btn" icon={<MenuIcon />} onClick={onSidebarCollapse} />

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

			<Button
				className="switch-view-btn"
				text={isWeekView ? t("top_panel_three_days_view_button") : t("top_panel_week_view_button")}
				onClick={onViewSwitch}
			/>

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
