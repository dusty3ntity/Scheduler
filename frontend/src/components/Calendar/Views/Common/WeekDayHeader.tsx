import React from "react";
import moment from "moment";

import { DayI } from "../../../../models/events";
import { combineClassNames } from "../../../../utils/components/classNames";

import "./week-day-header.scss";

export interface WeekDayHeaderProps {
	day: DayI;
	isToday: boolean;
}

export const WeekDayHeader: React.FC<WeekDayHeaderProps> = ({ day, isToday }) => {
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
