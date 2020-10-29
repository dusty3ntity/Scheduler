import React from "react";

import Button from "../common/inputs/Button";
import "../../app/styles/components/calendar/Top-panel.scss";
import LeftArrowIcon from "../common/icons/LeftArrowIcon";
import RightArrowIcon from "../common/icons/RightArrowIcon";

const TopPanel: React.FC = () => {
	return (
		<div className="wrapper">
			<div className="name-of-calendar">Calendar</div>
			<Button className="today-panel-button" text={"Today"} />
			<Button className="arrow-panel-button left-arrow" icon={<LeftArrowIcon />} />
			<Button className="arrow-panel-button right-arrow" icon={<RightArrowIcon />} />
			<div className="month-and-year">October 2020</div>
		</div>
	);
};

export default TopPanel;
