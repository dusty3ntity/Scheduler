import React from "react";

import { Button } from "../Common/Inputs/Button";
import { LeftArrowIcon } from "../Common/Icons/LeftArrowIcon";
import { RightArrowIcon } from "../Common/Icons/RightArrowIcon";

interface TopPanelProps {
	onToday: () => void;
	onPrev: () => void;
	onNext: () => void;
	dateInterval: string;
}

export const TopPanel: React.FC<TopPanelProps> = ({ onToday, onPrev, onNext, dateInterval }) => (
	<div className="top-panel">
		<div className="logo-container">
			<span className="text">Scheduler</span>
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