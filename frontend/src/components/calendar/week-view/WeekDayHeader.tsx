import React from "react";
import moment from "moment";

import { Day } from "../../../models/events";
import {combineClassNames} from "../../../utils/classNames";

export interface WeekDayHeaderProps {
	day: Day;
	isCurrentDay: boolean;
}

const WeekDayHeader: React.FC<WeekDayHeaderProps> = ({ day, isCurrentDay}) => {
	const date = moment(day.date);

	return (
		<div className={combineClassNames("week-day-header", {"current-day": isCurrentDay})}>
			<span className="day-name">{date.format("ddd")}</span>
			<span className="day-date">{date.date()}</span>
		</div>
	);
};

export default WeekDayHeader;
