import React from "react";

import { Day } from "../../../app/models/time";
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
					<WeekDayHeader key={day.index} day={day} />
				))}
			</div>

			<div className="view-content">
				<TimesColumn />

				{days.map((day) => (
					<WeekDay key={day.index} day={day} />
				))}
			</div>
		</div>
	);
};

export default WeekView;
