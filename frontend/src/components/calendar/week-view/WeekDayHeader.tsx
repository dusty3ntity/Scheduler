import React from "react";
import moment from "moment";

import { Day } from "../../../models/events";
import { combineClassNames } from "../../../utils/classNames";

export interface WeekDayHeaderProps {
	day: Day;
	isToday: boolean;
}

const WeekDayHeader: React.FC<WeekDayHeaderProps> = ({ day, isToday }) => {
	const date = moment(day.date);

	return (
		<div className={combineClassNames("week-day-header", { "current-day": isToday })}>
			<span className="day-name">{date.format("ddd")}</span>
			<span className="day-date">{date.date()}</span>
		</div>
	);
};

export default WeekDayHeader;
