import React from "react";

import { Day } from "../../../models/events";
import TimesColumn from "./TimesColumn";
import WeekDay from "./WeekDay";
import WeekDayHeader from "./WeekDayHeader";

export interface WeekViewProps {
	days: Day[];
}

const WeekView: React.FC<WeekViewProps> = ({ days }) => {
	return (
		<div className="calendar-view week-view">
			<div className="view-header">
				<div className="times-col-header">
					<span>GMT+02</span>
				</div>

				{days.map((day) => (
					<WeekDayHeader key={day.date.toString()} day={day} />
				))}
			</div>

			<div className="view-content">
				<TimesColumn />

				{days.map((day) => (
					<WeekDay key={day.date.toString()} day={day} />
				))}
			</div>
		</div>
	);
};

export default WeekView;
