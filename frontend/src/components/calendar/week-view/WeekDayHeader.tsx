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
			<div className="date-container">
				<span className="day-name">{date.format("ddd")}</span>
				<div className="day-date">{date.date()}</div>
			</div>
		</div>
	);
};

export default WeekDayHeader;
