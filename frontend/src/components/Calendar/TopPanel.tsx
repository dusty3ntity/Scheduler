import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../Common/Inputs/Button";
import { LeftArrowIcon } from "../Common/Icons/LeftArrowIcon";
import { RightArrowIcon } from "../Common/Icons/RightArrowIcon";
import { useEventsContext } from "../../contexts/EventsContext";
import { LoadingIndicator } from "../Common/LoadingIndicator";
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

	return (
		<div className="top-panel">
			<Button className="buttonCollapsed" icon={<CollapseIcon/>} onClick={onSidebarCollapse} />
			<div className="logo-container">
				<Link to="/" className="text">
					Scheduler
				</Link>
				{loading && <LoadingIndicator />}
			</div>

			<div className="btn-group">
				<Button className="today-btn" text="Today" onClick={onToday} />

				<div className="arrow-buttons">
					<Button className="arrow-btn left-arrow" icon={<LeftArrowIcon />} onClick={onPrev} />
					<Button className="arrow-btn right-arrow" icon={<RightArrowIcon />} onClick={onNext} />
				</div>
			</div>

			<div className="date-interval">{dateInterval}</div>
		</div>
	);
};
