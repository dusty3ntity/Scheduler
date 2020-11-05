import React from "react";
import moment from "moment";

import { Day } from "../../../app/models/events";
import { getDayEventStyles } from "../../../app/common/util/calendar";

export interface WeekDayProps {
	day: Day;
}

const WeekDay: React.FC<WeekDayProps> = ({ day }) => {
	return (
		<div className="week-day">
			{day.events.map((event) => (
				<div className="event" style={getDayEventStyles(event)} key={event.startDate.toString()}>
					<div>{event.title}</div>
					<div>{`${moment(event.startDate).format("hh mm")} - ${moment(event.endDate).format("hh mm")}`}</div>
				</div>
			))}
		</div>
	);
};

export default WeekDay;
