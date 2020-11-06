import React from "react";
import moment from "moment";

import { Day } from "../../../models/events";

export interface WeekDayHeaderProps {
	day: Day;
}

const WeekDayHeader: React.FC<WeekDayHeaderProps> = ({ day }) => {
	const date = moment(day.date);

	return (
		<div className="week-day-header">
			<span className="day-name">{date.format("ddd")}</span>
			<span className="day-date">{date.date()}</span>
		</div>
	);
};

export default WeekDayHeader;
