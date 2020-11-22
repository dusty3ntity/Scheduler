import React, { useRef, useEffect } from "react";
import moment from "moment";

import { Day } from "../../../models/events";
import { TimesColumn } from "./Common/TimesColumn";
import { WeekDay } from "./Common/WeekDay";
import { WeekDayHeader } from "./Common/WeekDayHeader";
import { HOUR_CELL_HIGHT } from "../../../constants/calendar";

export interface WeekViewProps {
	days: Day[];
	isCurrentWeek: boolean;
}

export const WeekView: React.FC<WeekViewProps> = ({ days, isCurrentWeek }) => {
	const scrollableCalendar = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollableCalendar.current) {
			scrollableCalendar.current.scrollTop = HOUR_CELL_HIGHT * 7;
		}
	}, []);

	return (
		<div className="calendar-view week-view" ref={scrollableCalendar}>
			<div className="view-header">
				<div className="times-col-header" />

				{days.map((day) => (
					<WeekDayHeader
						key={day.date.toString()}
						day={day}
						isToday={moment().format("DD-MM-YYYY") === moment(day.date).format("DD-MM-YYYY")}
					/>
				))}
			</div>

			<div className="view-content">
				<TimesColumn isHighlighterVisible={isCurrentWeek} />

				{days.map((day) => (
					<WeekDay key={day.date.toString()} day={day} />
				))}
			</div>
		</div>
	);
};