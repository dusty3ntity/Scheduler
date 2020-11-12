import React, { useRef, useEffect } from "react";

import { Day } from "../../../models/events";
import TimesColumn from "./TimesColumn";
import WeekDay from "./WeekDay";
import WeekDayHeader from "./WeekDayHeader";
import moment from "moment";
import { HOUR_CELL_HIGHT } from "../../../constants/calendar";

var $ = require("jquery/src/core");

export interface WeekViewProps {
	days: Day[];
}

const WeekView: React.FC<WeekViewProps> = ({ days }) => {
	const weekViewElement = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (weekViewElement.current) {
			weekViewElement.current.scrollTop = HOUR_CELL_HIGHT * 7;
		}
	}, []);
	return (
		<div className="calendar-view week-view" ref={weekViewElement}>
			<div className="view-header">
				<div className="times-col-header">
					<span>GMT+02</span>
				</div>

				{days.map((day) => (
					<WeekDayHeader
						key={day.date.toString()}
						day={day}
						isCurrentDay={moment().format("DD-MM-YYYY") === moment(day.date).format("DD-MM-YYYY")}
					/>
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
