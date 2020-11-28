import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../Common/Inputs/Button";
import { LeftArrowIcon } from "../Common/Icons/LeftArrowIcon";
import { RightArrowIcon } from "../Common/Icons/RightArrowIcon";
import { useEventsContext } from "../../contexts/EventsContext";
import { LoadingIndicator } from "../Common/LoadingIndicator";
import { useTranslation } from "react-i18next";

import "./top-panel.scss";

interface TopPanelProps {
	onToday: () => void;
	onPrev: () => void;
	onNext: () => void;
	dateInterval: string;
}

export const TopPanel: React.FC<TopPanelProps> = ({ onToday, onPrev, onNext, dateInterval }) => {
	const { loading } = useEventsContext();

	const { t, i18n } = useTranslation();
	function handleClick(lang: string) {
		i18n.changeLanguage(lang);
	}

	return (
		<div className="top-panel">
			<div className="logo-container">
				<Link to="/" className="text">
					{t("Scheduler")}
				</Link>
				{loading && <LoadingIndicator />}
			</div>

			<div className="btn-group">
				<Button className="today-btn" text={t("Today")} onClick={onToday} />

				<div className="arrow-buttons">
					<Button className="arrow-btn left-arrow" icon={<LeftArrowIcon />} onClick={onPrev} />
					<Button className="arrow-btn right-arrow" icon={<RightArrowIcon />} onClick={onNext} />
				</div>
			</div>

			<div className="date-interval">{dateInterval}</div>
			<div className="first-language-btn">
				<button
					type="button"
					onClick={() => handleClick("en")}
					className="btn btn-primary m-4 language-button"
				>
					En
				</button>
			</div>
			<div className="second-language-btn">
				<button
					type="button"
					onClick={() => handleClick("ua")}
					className="btn btn-primary m-4 language-button"
				>
					Ua
				</button>
			</div>
		</div>
	);
};
