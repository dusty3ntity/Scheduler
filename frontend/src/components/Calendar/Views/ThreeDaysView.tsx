import React, { useRef, useEffect } from "react";
import moment from "moment";

import { DayI } from "../../../models/events";
import { TimesColumn } from "./Common/TimesColumn";
import { WeekDay } from "./Common/WeekDay";
import { WeekDayHeader } from "./Common/WeekDayHeader";
import { HOUR_CELL_HIGHT } from "../../../constants/calendar";
import { useTimeContext } from "../../../contexts/TimeContext";

import "./three-days-view.scss";

export interface ThreeDaysViewProps {
	days: DayI[];
	isCurrentWeek: boolean;
}

export const ThreeDaysView: React.FC<ThreeDaysViewProps> = ({ days, isCurrentWeek }) => {
	const { currentTime } = useTimeContext();
	const scrollableCalendar = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollableCalendar.current) {
			scrollableCalendar.current.scrollTop = HOUR_CELL_HIGHT * 7;
		}
	}, []);

	return (
		<div className="calendar-view three-days-view" ref={scrollableCalendar}>
			<div className="view-header">
				<div className="times-col-header" />

				{days.map((day) => (
					<WeekDayHeader
						key={day.date.toString()}
						day={day}
						isToday={moment(currentTime).startOf("day").isSame(day.date)}
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