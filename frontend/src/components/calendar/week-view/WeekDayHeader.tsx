import React from "react";

import { Day } from "../../../app/models/time";

export interface WeekDayHeaderProps {
	day: Day;
}

const WeekDayHeader: React.FC<WeekDayHeaderProps> = ({ day }) => {
	return (
		<div className="week-day-header">
			<span className="day-name">{day.name}</span>
			<span className="day-date">{day.index}</span>
		</div>
	);
};

export default WeekDayHeader;
