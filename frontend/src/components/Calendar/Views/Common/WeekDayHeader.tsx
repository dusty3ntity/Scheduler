import React from "react";
import moment from "moment";

import { DayI } from "../../../../models/events";
import { combineClassNames } from "../../../../utils/components/classNames";

import "./week-day-header.scss";
import {useTranslation} from "react-i18next";

export interface WeekDayHeaderProps {
	day: DayI;
	isToday: boolean;
}

export const WeekDayHeader: React.FC<WeekDayHeaderProps> = ({ day, isToday }) => {
	const date = moment(day.date);

	const { t} = useTranslation();

	return (
		<div className={combineClassNames("week-day-header", { "current-day": isToday })}>
			<div className="date-container">
				<span className="day-name">{t(date.format("ddd"))}</span>
				<div className="day-date">{date.date()}</div>
			</div>
		</div>
	);
};
